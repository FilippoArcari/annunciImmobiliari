interface CalendarEvent {
	description?: string;
	// Add other relevant fields if needed
}

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	// Await params
	const { id } = await params;

	// Validate that 'id' exists
	if (!id) {
		return new Response(JSON.stringify({ error: "ID parameter is missing" }), {
			status: 400,
		});
	}

	const calendarId = process.env.CALENDAR_ID!;
	const apiKey = process.env.GOOGLE_CALENDAR_API_KEY!;
	const eventId = id;

	const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
	const res = await fetch(url);
	const data = await res.json();
	
	// filtro per id: X nel campo description TODO:quando aggiundo l'evento lo metto nella descrizione id:<numero>
	const filtered = data.items.filter((event: CalendarEvent) =>
		event.description?.includes(`id:${eventId}`)
	);

	return Response.json(filtered, {
		status: 200,
	});
}
