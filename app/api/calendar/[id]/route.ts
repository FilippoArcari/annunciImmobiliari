import { NextRequest } from "next/server";

interface CalendarEvent {
	description?: string;
	// Add other relevant fields if needed
}

export async function GET(request: NextRequest) {
	const id = request.nextUrl.pathname.split("/").pop(); // Estrae l'id dalla URL
	if (!id) {
		return new Response(JSON.stringify({ error: "ID parameter is missing" }), {
			status: 400,
		});
	}

	const calendarId = process.env.CALENDAR_ID!;
	const apiKey = process.env.GOOGLE_CALENDAR_API_KEY!;
	const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
	const res = await fetch(url);
	const data = await res.json();

	const filtered = data.items.filter((event: CalendarEvent) =>
		event.description?.includes(`id:${id}`)
	);

	return Response.json(filtered, {
		status: 200,
	});
}
