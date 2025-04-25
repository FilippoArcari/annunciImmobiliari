import React from "react";
import { Anagrafiche } from "../types";

interface FooterProps {
	sellerData: Anagrafiche;
}

const Footer = ({sellerData}:FooterProps) => {
	return (
		<footer className='footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4'>
			<aside>
				<div className='flex  gap-0.5'>
					<span>{sellerData.nome}</span>
					<span>{sellerData.cognome}</span>
				</div>
				<span>Numero di telefono: {sellerData.numero_telefono}</span>
				<a href={`mailto:${sellerData.mail}`}>{sellerData.mail}</a>
			</aside>
		</footer>
	);
};

export default Footer;
