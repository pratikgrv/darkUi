import Header from "@/components/Header";
import SlidingTab from "@/app/(routes)/mints/components/SlidingTab";
import React from "react";
import TableSection from "./components/TableSection";
import TableCollection from "./components/TableCollection";
import getCalander from "@/actions/getSearch";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import ClientFilter from "./components/ClientFilter";

const MintPage = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const page = searchParams.page;
	const sort = searchParams.sort 
	const search = searchParams.search 
	const initialData = await getCalander({
		// search: search,
		page: page,
		// sort:sort
	});

	// console.log(searchParams.search);
	return (
		<>
			<Header />
			<div>
				<div className="p-3 mt-[5rem]">
					<div className="mint_heading md:text-6xl text-4xl font-bold text-center p-2">
						Explore the Upcoming Projects{" "}
					</div>
					<div className="p-2 text-center balance">
						Struggle to good projects on blockchain. Don&apos;t worry we are
						here for you we provide you with potential projects so you dont miss
						any projects HAPPY MINTING
					</div>
				</div>
			</div>

			<ClientFilter initialData={initialData} />
			<Footer />
		</>
	);
};

export default MintPage;
