export async function GET() {
    const data = {
			anagrafiche: {
				nome: "Daniel",
				cognome: "Casagranda",
				mail: "bighouseserviceit@gmail.com",
			},
			immobili: [
				{
					id: 0,
					titolo: "Appartamento N°1",
					descrizione: "Traumhaftes Ferienhaus mit atemberaubendem Gardasee-Blick  Perfekter Urlaub in Tignale!Genießen Sie einen unvergesslichen Aufenthalt in diesem charmanten 50 m² großen Apartment mit 4 Betten und 4 Räumen, nur 5 Gehminuten vom Zentrum Tignales entfernt. Das Highlight? Ein weiter Garten mit atemberaubendem Panoramablick über den gesamten Gardasee  ideal zum Entspannen und für romantische Abende unter dem italienischen Himmel.Für weitere Informationen zu Preisen und Verfügbarkeit kontaktieren Sie: bighouseserviceit@gmail.com",
					copertina: "/app_1_08.jpg",
					affitto: "60€/day",
					superficie: "50 mq",
					locali: "4",
					bagni: "1",
					immagini: [
						"/app_1_08.jpg",
						"/app_1_02.jpg",
						"/app_1_03.jpg",
						"/app_1_04.jpg",
						"/app_1_05.jpg",
						"/app_1_06.jpg",
						"/app_1_07.jpg",
						"/app_1_01.jpg",
					],
					video: ["/app_1_01.mp4","/app_1_02.mp4"],
					coordinates: {
						lat: 45.739052,
						lng: 10.713268,
					},
				},
				{
					id: 1,
					titolo: "Appartamento N°2",
					descrizione: "Traumhaftes Ferienhaus mit atemberaubendem Gardasee-Blick  Perfekter Urlaub in Tignale!Genießen Sie einen unvergesslichen Aufenthalt in diesem charmanten 50 m² großen Apartment mit 4 Betten und 4 Räumen, nur 5 Gehminuten vom Zentrum Tignales entfernt. Das Highlight? Ein weiter Garten mit atemberaubendem Panoramablick über den gesamten Gardasee  ideal zum Entspannen und für romantische Abende unter dem italienischen Himmel. Für weitere Informationen zu Preisen und Verfügbarkeit kontaktieren Sie: bighouseserviceit@gmail.com",
					copertina: "/app_2_06.jpg",
					affitto: "60€",
					superficie: "50 mq",
					locali: "4",
					bagni: "1",
					immagini: [
						"/app_2_06.jpg",
						"/app_2_02.jpg",
						"/app_2_03.jpg",
						"/app_2_05.jpg",
					],
					video: ["/app_2_01.mp4"],
					coordinates: {
						lat:45.739052,
						lng: 10.713268,
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