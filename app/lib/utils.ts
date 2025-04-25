import { Data } from "../types"; // Adjust the path and module name as needed

export const fetchSellerData = async (): Promise<Data> => {
	const baseUrl = process.env.BASE_URL;

	if (!baseUrl) {
		throw new Error("BASE_URL is not defined");
	}

	const res = await fetch(`${baseUrl}/api`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

