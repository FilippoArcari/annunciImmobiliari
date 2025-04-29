export async function GET() {
    const data = {
			anagrafiche: {
				nome: "Mario",
				cognome: "Rossi",
				mail: "prova@25aprile.com",
				numero_telefono: "123 456 789",
			},
			immobili: [
				{
					id: 0,
					titolo: "Appartamento a Pinè",
					descrizione: "Appartamento luminoso e spazioso in centro città.",
					copertina: "/app_1_03.jpg",
					affitto: "700€",
					superficie: "80",
					locali: "3",
					bagni: "1",
					immagini: [
						"/app_1_01.jpg",
						"/app_1_02.jpg",
						"/app_1_03.jpg",
						"/app_1_04.jpg",
						"/app_1_05.jpg",
						"/app_1_06.jpg",
						"/app_1_07.jpg",
						"/app_1_08.jpg",
					],
					video: ["/video_1.mp4"],
					coordinates: {
						lat: 45.739054,
						lng: 10.713260,
					},
				},
				{
					id: 1,
					titolo: "Appartamento in fuori",
					descrizione: "Descrizione dell'appartamento in fuori",
					copertina: "/app_2_02.jpg",
					affitto: "500€",
					superficie: "20",
					locali: "3",
					bagni: "2",
					immagini: [
						"/app_2_01.jpg",
						"/app_2_02.jpg",
						"/app_2_03.jpg",
						"/app_2_04.jpg",
						"/app_2_05.jpg",
						"/app_2_06.jpg",
					],
					video: [],
					coordinates: {
						lat: 45.123456,
						lng: 10.123456,
					},
				},
							],
		};
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
        },
    });
}