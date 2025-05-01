"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Immobile, Data } from "../../types";
import Carousel from "../../component/Carousel";
import CalendarView from "../../component/CalendarView";
import MapPointer from "../../component/MapPointer";

export default function Page(props: { params: Promise<{ id: string }> }) {
	const { id } = React.use(props.params);
	const [immoData, setImmoData] = useState<Immobile | null>(null);
	const [loading, setLoading] = useState(true); // Add loading state
	const [error, setError] = useState(false); // Use error state instead of immoExist

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true); // Start loading
			try {
				const baseUrl = window.location.origin;
				const response = await fetch(baseUrl + "/api");
				const data: Data = await response.json();
				const immobile = data.immobili.find(
					(immo: Immobile) => immo.id === parseInt(id)
				);

				if (!immobile) {
					console.log("Immobile non trovato");
					setError(true);
					setImmoData(null);
				} else {
					setError(false);
					setImmoData(immobile);
				}
			} catch (err) {
				console.error("Error fetching data:", err);
				setError(true);
			} finally {
				setLoading(false); // Stop loading regardless of result
			}
		};

		fetchData();
	}, [id]); // Add id as dependency

	// Show loading spinner while loading
	if (loading) {
		return (
			<div className='loading w-full text-center'>
				<div className='spinner'>Caricamento...</div>
			</div>
		);
	}

	// Show error message when property not found
	if (error || !immoData) {
		return (
			<div role='alert' className='alert alert-error'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6 shrink-0 stroke-current'
					fill='none'
					viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
				<span>Immobile non Trovato</span>
			</div>
		);
	}

	// Show property details when found
	return (
		<div className='p-6 w-full flex flex-col justify-center gap-2'>
			<h1 className='text-2xl font-bold'>{immoData.titolo}</h1>
			<h2>{immoData.descrizione}</h2>
			<Carousel images={immoData.immagini || []} videos={immoData.video} />
			<div className='flex gap-4 w-full justify-center'>
				<span>
					Superfice: <span>{immoData.superficie}</span>
				</span>
				<span>
					Locali: <span>{immoData.locali}</span>
				</span>
				<span>
					Bagni: <span>{immoData.bagni}</span>
				</span>
			</div>
			<div className='flex justify-center'>
				<span>Prezzo: </span> <strong>{immoData.affitto}</strong>
			</div>
			<CalendarView id={id} />
			<MapPointer
				lat={immoData.coordinates.lat}
				lon={immoData.coordinates.lng}
			/>
		</div>
	);
}
