'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import {useRouter} from "next/navigation";
import { Immobile,Data } from '../../types';
import Carousel from "../../component/Carousel";




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
		console.log(immoData);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		immoData ?(
		<div className='p-6'>
			<h1 className='text-2xl font-bold'>{immoData?.titolo}</h1>
			<h2>{immoData?.descrizione}</h2>
			<Carousel images={immoData?.immagini || []} />
			<div className='flex gap-4 w-full justify-center'>
				<span>
					Superficie: <span>{immoData?.superficie}</span>
				</span>
				<span>
					Locali: <span>{immoData?.locali}</span>
				</span>
				<span>
					Bagni: <span>{immoData?.bagni}</span>
				</span>
			</div>
			<div className="flex justify-center" > <span>Prezzo: </span> <strong>{immoData?.affitto}</strong></div>
			
		</div>):(<div className="loading w-full">Caricamento </div>)
	);
}

