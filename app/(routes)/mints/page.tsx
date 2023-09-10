import Header from "@/components/Header";
import SlidingTab from "@/components/ui/SlidingTab";
import React from "react";

const MintPage = () => {
	return (
		<div className="">
			<Header />
			<div className="p-3 mt-[5rem]">
				<div className="mint_heading md:text-7xl text-4xl font-bold text-center p-2">
					Explore the Upcoming Projects{" "}
				</div>
				<div className="p-2 text-center">
					Struggle to good projects on blockchain. Don&apos;t worry we are here
					for you we provide you with potential projects so you dont miss any
					projects HAPPY MINTING
				</div>{" "}
			</div>
			<SlidingTab />
			
		</div>
	);
};

export default MintPage;
