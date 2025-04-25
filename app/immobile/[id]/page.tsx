'use client'
import React from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = React.use(params);

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold'>Dettagli immobile</h1>
			<p>ID immobile: {id}</p>
		</div>
	);
}

