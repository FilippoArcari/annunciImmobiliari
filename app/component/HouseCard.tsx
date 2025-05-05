
import React from 'react'
import {Immobile} from "../types";
import Image from 'next/image'
import BtnMore from "./BtnMore";


const HouseCard = (immoData:Immobile) => {

  return (
		<div className='card sm:card lg:card-side p-2 shadow-sm bg-base-200'>
			<figure className="rounded-lg ">
				<Image
					src={immoData.copertina}
					alt='alt'
					width={500}
					height={500}
					className="h-full w-auto rounded-lg object-contain"
					/>
					
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{immoData.titolo}</h2>
				<p>{immoData.descrizione}</p>
				<div className='card-actions justify-end'>
					<BtnMore id={immoData.id} />
				</div>
			</div>
		</div>
	);
}

export default HouseCard