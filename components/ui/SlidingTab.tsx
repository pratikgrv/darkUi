"use client";
import React, { useState } from "react";
import Link from "next/link";
import CardCollection from "../CardCollection";
import MintPageList from "../MintPageList";
const SlidingTab = () => {
	const [activeTab, setActiveTab] = useState("all");

	const handleTabChange = (event: {
		target: { id: React.SetStateAction<string> };
	}) => {
		setActiveTab(event.target.id);
	};

	console.log(activeTab);

	return (
		<div className="my-3">
			<div className="wrapper ">
				<nav>
					<input
						type="radio"
						name="tab"
						id="all"
						checked={activeTab === "all"}
						onChange={handleTabChange}
					/>
					<input
						type="radio"
						name="tab"
						id="popular"
						checked={activeTab === "popular"}
						onChange={handleTabChange}
					/>
					<input
						type="radio"
						name="tab"
						id="new"
						checked={activeTab === "new"}
						onChange={handleTabChange}
					/>

					<label htmlFor="all" className="all">
						<a href="#">all</a>
					</label>
					<label htmlFor="popular" className="popular">
						<a href="#">popular</a>
					</label>
					<label htmlFor="new" className="new">
						<a href="#">new</a>
					</label>

					<div className="tab"></div>
				</nav>
			</div>
			{/* <CardCollection type={true} /> */}
			<MintPageList type={activeTab}/>
		</div>
	);
};

export default SlidingTab;

// "use client";
// import React, { useState } from "react";

// const tabs = [
// 	{ id: "all", label: "all" },
// 	{ id: "popular", label: "popular" },
// 	{ id: "new", label: "new" },
// 	{ id: "heart", label: "Heart" },
// 	{ id: "about", label: "About" },
// ];

// function SlidingTab() {
// 	const [activeTab, setActiveTab] = useState(tabs[0].id);

// 	// Calculate the width for each tab
// 	const tabWidth = 100 / tabs.length + "%";

// 	// Calculate the left position for the active tab
// 	const activeTabLeft =
// 		tabs.findIndex((tab) => tab.id === activeTab) * (100 / tabs.length) + "%";

// 	return (
// 		<div className="wrapper">
// 			<nav>
// 				{tabs.map((tab) => (
// 					<React.Fragment key={tab.id}>
// 						<input
// 							type="radio"
// 							name="tab"
// 							id={tab.id}
// 							checked={activeTab === tab.id}
// 							onChange={() => setActiveTab(tab.id)}
// 						/>
// 						<label htmlFor={tab.id} style={{ flex: `0 0 ${tabWidth}` }}>
// 							<a href="#">{tab.label}</a>
// 						</label>
// 					</React.Fragment>
// 				))}
// 				<div className="tab" style={{ left: activeTabLeft }}></div>
// 			</nav>
// 		</div>
// 	);
// }

// export default SlidingTab;
