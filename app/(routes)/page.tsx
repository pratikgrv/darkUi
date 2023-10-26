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
import SliderCard from "@/components/SliderCard";
import SlideSection from "@/components/SlideSection";
import GridCard from "@/components/GridCard";
import Card2 from "@/components/ui/card2";
const HomePage = async () => {
	const products = await getCalander({});
	// console.log(products)

	return (
		<div>
			<Header />
			<SlideSection data={products} />
			<FeedSeperator />
			<GridCard />
		
			{/* <CardSection
				name={"🔥Trending Mints"}
				desc={" Most awaited mints,might be something big"}
			>
				<CardCollection type={true} />
			</CardSection> */}

			<CardSection name={"🆕Recent Released"} desc={" New projects"}>
				<CardCollection type={false} />
			</CardSection>
			<Accordian />
			<Card2/>
			<Footer />
		</div>
	);
};

export default HomePage;
