'use client'
import React from 'react'
import { useRouter } from "next/navigation";

interface BtnMoreProps {    
    id: number;
}
const BtnMore = ({id}:BtnMoreProps) => {
    const router = useRouter();
  return (
		<button
			className='btn btn-primary'
			onClick={() => {
				router.push(`/immobile/${id}`);
			}}>
			Vedi
		</button>
	);
}

export default BtnMore