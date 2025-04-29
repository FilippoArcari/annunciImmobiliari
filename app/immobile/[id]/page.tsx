'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import { Immobile,Data } from '../../types';
import Carousel from "../../component/Carousel";
import CalendarView from "../../component/CalendarView";
import MapPointer from "../../component/MapPointer";




export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = React.use(params);
	const [immoData, setImmoData] = useState<Immobile | null>(null);
	useEffect(() => {
		// Fetch data from the API or local storage
		const fetchData = async () => {
			const baseUrl = window.location.origin;
			const response = await fetch(baseUrl + "/api");
			const data: Data = await response.json();
			const immobile = data.immobili.find(
				(immo: Immobile) => immo.id === parseInt(id)
			);
			setImmoData(immobile || null);
		};

		fetchData();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		immoData ?(
		<div className='p-6 w-full flex flex-col justify-center gap-2 '>
			<h1 className='text-2xl font-bold'>{immoData?.titolo}</h1>
			<h2>{immoData?.descrizione}</h2>
			<Carousel images={immoData?.immagini || []} />
			<div className='flex gap-4 w-full justify-center'>
				<span>
					Superfice: <span>{immoData?.superficie}</span>
				</span>
				<span>
					Locali: <span>{immoData?.locali}</span>
				</span>
				<span>
					Bagni: <span>{immoData?.bagni}</span>
				</span>
			</div>
			<div className="flex justify-center" > <span>Prezzo: </span> <strong>{immoData?.affitto}</strong></div>
			<CalendarView id={id} />
			<MapPointer lat={immoData.coordinates.lat} lon={immoData.coordinates.lng} />
		</div>):(<div className="loading w-full">Caricamento </div>)
	);
}

