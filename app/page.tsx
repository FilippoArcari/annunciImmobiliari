// app/page.tsx
import { Data,Immobile } from "./types";
import { fetchSellerData } from "./lib/utils";
import HouseCard from "./component/HouseCard";

export default async function Home() {
	const data: Data = await fetchSellerData();

	return (
		<>
			
			<div className="flex gap-2 flex-col m-2">{data.immobili.map((immoData:Immobile) => (
				<HouseCard key={immoData.id} {...immoData} />
			))}</div>
		</>
	);
}
