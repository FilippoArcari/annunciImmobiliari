import React from 'react'
import Image from 'next/image';

interface CarouselProps {
    images: string[];
}
const Carousel = ({images}:CarouselProps) => {
  return (
		<div className='carousel carousel-center bg-transparent rounded-box  space-x-4 p-4'>
			{images.map((image, index) => (
				<div className='carousel-item rounded-2xl' key={index}>
					<Image src={image} alt="carousel Image" width={300} height={200} 
                    className='w-xl h-auto rounded-2xl'
                    />
						
				</div>
			))}
		</div>
	);
};

export default Carousel