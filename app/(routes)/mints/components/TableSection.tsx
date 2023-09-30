'use client'
import React, { Children, useState } from "react";
import TableCollection from "./TableCollection";
import Search from "../../../../components/ui/Search";
import SlidingMiniTab from "./Slidingmini";

const detail = [
	"Mint date",
	"Mint Price",
	"Supply",
	"Created At",
	"Populrity",
	"Social",
];
const TableSection = ({ filter, setFilter }) => {
	

	const handleClick = (action: string) => {
		if (filter === action) {
			setFilter({
				...filter,
				sort: '',
				page:1

			});

		}
		if (filter !== action) {
			setFilter({
				...filter,
				sort: action,
				page:1
			})
		}
		
	}
	// console.log(filter);
	// const [activeBtn, setActiveBtn] = useState('')
	return (
		<div>
			{" "}
			<div className="  ">
				<div className="text-center font-extrabold text-3xl m-7 flex flex-col">
					{" "}
					Popular Mints
				</div>

				<div className="table_heading  w-full ">
					<div className="grid grid-cols-8  gap-3  py-3 font-light">
						<div className="item_1">Collction name</div>
						<div>
							<button
								className={`rounded p-1 ${
									filter === "mintDate" ? "card bg-slate-600" : ""
								}`}
								onClick={() => {
									handleClick("mintDate");
								}}
							>
							Mint Date{}
							</button>
						</div>
						<div>Mint Price</div>
						<div>Supply</div>
						<div>
							<button
								className={`rounded p-1 ${
									filter === "createdAt" ? "card bg-slate-600" : ""
								}`}
								onClick={() => {
									handleClick("createdAt");
								}}
							>
								Created At {}
							</button>
						</div>{" "}
						<div>
							<button
								className={`p-1 ${
									filter === "popular" ? "card bg-slate-600" : ""
								} rounded`}
								onClick={() => {
									handleClick("popular");
								}}
							>
								Popular
							</button>
						</div>
						<div>Social</div>
						{/* {detail.map((columnName, index) => (
							<div key={index}>{columnName}</div>
						))} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableSection;


//   const handleButtonClick = (action) => {
//     // Perform different actions based on the 'action' parameter
//     if (action === 'recent') {
//       // Handle the "Recent" button click
//       // You can set the currentfilter state or perform other actions here
//       setCurrentfilter('recent');
//     } else if (action === 'popular') {
//       // Handle the "Popular" button click
//       setCurrentfilter('popular');
//     }
//   };

