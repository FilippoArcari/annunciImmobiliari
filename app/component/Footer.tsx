import React from "react";
import { Anagrafiche } from "../types";

interface FooterProps {
	sellerData: Anagrafiche;
}

const Footer = ({sellerData}:FooterProps) => {
	return (
		<footer className='footer sm:footer-horizontal footer-center text-base-content p-4'>
			<aside>
				<h1><strong>Contacts</strong></h1>
				<div className='flex gap-0.5 '>
					<span>{sellerData.nome}</span>
					<span>{sellerData.cognome}</span>
				</div>
				<a href={`mailto:${sellerData.mail}`}>{sellerData.mail}</a>
			</aside>
		</footer>
	);
};

export default Footer;
