import React from "react";
import Image from "next/image";

interface CarouselProps {
	images: string[];
	videos: string[];
}
const Carousel = ({ images, videos }: CarouselProps) => {
	const className = "carousel-item w-full max-w-md flex-shrink-0";
	return (
		<div className='carousel carousel-center bg-transparent rounded-box  space-x-4 p-4'>
			{/* Video Before Image */}

			{videos
				? videos.map((srcVideo, index) => (
						<div className={className} key={index}>
							<video
								width='300'
								height='200'
								loop
								autoPlay
								preload='none'
								className="w-xl h-auto rounded-2xl object-cover ">
								<source src={srcVideo} type='video/mp4' />
								Ci dispiace, il suo broswer non supporta il video.
							</video>
						</div>
				  ))
				: null}

			{images
				? images.map((image, index) => (
						<div className={className} key={index}>
							<Image
								src={image}
								alt='carousel Image'
								width={300}
								height={200}
								className='w-xl h-auto rounded-2xl '
							/>
						</div>
				  ))
				: null}
		</div>
	);
};

export default Carousel;
