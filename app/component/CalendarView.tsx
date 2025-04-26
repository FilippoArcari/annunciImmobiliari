"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Event = {
	date: string; // Stored as 'YYYY-MM-DD' in local time
	title: string;
};

export default function CalendarView({ id }: { id: string }) {
	const [events, setEvents] = useState<Event[]>([]);
	const addEventsInRange = (
		startStr: string,
		endStr: string,
		title: string
	) => {
		const start = new Date(startStr);
		const end = new Date(endStr);

		const existingDates = new Set(events.map((e) => e.date));

		const newEvents: Event[] = [];
		for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
			const date = d.toISOString().split("T")[0];
			if (!existingDates.has(date)) {
				newEvents.push({ date, title });
			}
		}

		if (newEvents.length > 0) {
			setEvents((prev) => [...prev, ...newEvents]);
		}
	};


	useEffect(() => {
		const fetchEvents = async () => {
			const res = await fetch(`/api/calendar/${id}`);
			const data = await res.json();

			for (const event of data) {
				const start = event.start.dateTime || event.start.date;
				const end = event.end?.dateTime || event.end?.date || start; // fallback per eventi giornalieri
				addEventsInRange(start, end, "Occupato");
			}
		};


		if (id) fetchEvents();
	}, [id]);

	const tileClassName = ({ date }: { date: Date }) => {
		// Format the date in local time as YYYY-MM-DD
		const dateStr = [
			date.getFullYear(),
			String(date.getMonth() + 1).padStart(2, "0"),
			String(date.getDate()).padStart(2, "0"),
		].join("-");

		return events.some((event) => event.date === dateStr) ? "highlight" : "";
	};

	const tileContent = ({ date }: { date: Date }) => {
		const dateStr = [
			date.getFullYear(),
			String(date.getMonth() + 1).padStart(2, "0"),
			String(date.getDate()).padStart(2, "0"),
		].join("-");

		const event = events.find((e) => e.date === dateStr);
		// console.log("Event", event, "ww check", dateStr, events);
		return event ? <div className='text-xs p-1'>{event.title}</div> : null;
	};

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<Calendar tileClassName={tileClassName} tileContent={tileContent} />
		</div>
	);
}
