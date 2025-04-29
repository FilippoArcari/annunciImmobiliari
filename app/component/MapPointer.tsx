import React from "react";

interface MapPointerProps {
	lat: number;
	lon: number;
}

const MapPointer = ({ lat, lon }: MapPointerProps) => {
	return (
		<iframe
			src={`https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed`}
			width='600'
			height='450'
			style={{ border: 0 }}
			allowFullScreen
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
			className="w"></iframe>

	);
};

export default MapPointer;
