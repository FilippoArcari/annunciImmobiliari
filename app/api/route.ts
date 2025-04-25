export async function GET() {
    const  data = {"anagrafiche" : {"nome" : "Mario", "cognome" : "Rossi", "mail" : "prova@25aprile.com", "numero_telefono" : "123 456 789"},
     "immobili" : [
    {
        "id" : 0,
        "titolo" : "Appartamento in centro",
        "descrizione" : "Appartamento luminoso e spazioso in centro città.",
        "copertina" : "https://picsum.photos/300/200",
        "affitto" : "700€",
        "superficie" : "80",
        "locali" : "3",
        "bagni" : "1",
        "immagini" : [
            "https://picsum.photos/300/200",
            "https://picsum.photos/300/200"
        ]
    },
    {
            "id" : 1,
			"titolo": "Appartamento in fuori",
			"descrizione": "Descrizione dell'appartamento in fuori",
			"copertina": "https://picsum.photos/300/200",
			"affitto": "500€",
			"superficie": "20",
			"locali": "3",
			"bagni": "2",
			"immagini": [
				"https://picsum.photos/300/200",
				"https://picsum.photos/300/200",
				"https://picsum.photos/300/200",
				"https://picsum.photos/300/200"
			]
	},{
        "id" : 2,
		"titolo": "Appartamento Bondone",
		"descrizione": "Descrizione dell'appartamento in Bondone",
		"copertina": "https://picsum.photos/300/200",
		"affitto": "100000€",
		"superficie": "20",
		"locali": "3",
		"bagni": "2",
		"immagini": [
			"https://picsum.photos/300/200",
			"https://picsum.photos/300/200",
			"https://picsum.photos/300/200",
			"https://picsum.photos/300/200"
		]
	}
 ]
}
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
        },
    });
}