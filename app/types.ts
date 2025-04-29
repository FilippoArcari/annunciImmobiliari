export interface Anagrafiche {
	nome: string;
	cognome: string;
	mail: string;
	numero_telefono: string;
}

export interface Immobile {
	id: number;
	titolo: string;
	descrizione: string;
	copertina: string;
	affitto: string;
	superfici: string;
	rooms: string;e
	bathroom: string;
	immagini: string[];
	video: string[];
	coordinates: {
		lat: number;
		lng: number;
	};
}

export interface Data {
	anagrafiche: Anagrafiche;
	immobili: Immobile[];
}
