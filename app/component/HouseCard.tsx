
import React from 'react'
import {Immobile} from "../types";
import Image from 'next/image'
import BtnMore from "./BtnMore";


const HouseCard = (immoData:Immobile) => {

  return (
		<div className='card sm:card lg:card-side bg-base-100 shadow-sm '>
			<figure className="rounded-lg ">
				<Image
					src={immoData.copertina}
					alt='alt'
					width={100}
					height={100}
					layout='responsive'
					style={{ width: "auto", height: "100%" }}
					className='rounded-lg'
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