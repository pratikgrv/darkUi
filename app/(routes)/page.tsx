import React from "react";

import getCalander from "@/actions/getSearch";
import Header from "@/components/Header";
import PostFeed from "@/components/Postfeed";
import FeedSeperator from "@/components/FeedSeperator";
import CardCollection from "@/app/(routes)/mints/components/CardCollection";
import CardSection from "@/components/CardSection";
import Footer from "@/components/ui/Footer";
import Accordian from "@/components/Accordian";
import TouchSlider from "@/components/ui/TouchSlider";
const HomePage = async () => {
	// const products = await getCalander({});
	// console.log(products)

	return (
		<div>
			<Header />
			{/* <TouchSlider/> */}
			<PostFeed />
			<FeedSeperator />

			<CardSection
				name={"🔥Trending Mints"}
				desc={" Most awaited mints,might be something big"}
			>
				<CardCollection type={true} />
			</CardSection>
			<CardSection name={"🆕Recent Released"} desc={" New projects"}>
				<CardCollection type={false} />
			</CardSection>
			<Accordian />

			<Footer />
		</div>
	);
};

export default HomePage;
