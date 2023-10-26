"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useDebounce from "@/libs/useDebounce";
const Search = ({ filter, setFilter }:any) => {
	if (!filter) {
		filter={}
	}
	if (filter) {
		// console.log("data",filter)

	}
	
	const router = useRouter();
	const handleChange = (e: any) => {
		setFilter({
			...filter,
			search: e.target.value,
			page:1
		});
		
	};
// const	db=useDebounce(handleChange,500)

	// const handleKeyUp = (e: any) => {
	// 	if (e.key === "Enter") {
	// 		const validInput = filter.toLowerCase();
	// 		router.push(`/search/${validInput}`);
	// 	}
	// };

	return (
		<div className="search-bar flex rounded-xl text-gray-50 tracking-wide overflow-hidden h-10 w-[25rem]">
			<div className="search-icon flex items-center px-3">
				<svg
					width="18px"
					height="18px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#000000"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12"
							stroke="#828282"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</g>
				</svg>
			</div>
			<div className="input-div flex items-center justify-center relative sm:min-w-[22rem]  h-full min-w-[24rem]">
				<input
					className="border-none outline-none absolute top-0 w-full h-full bg-transparent text-sm "
					type="text"
					placeholder="Search here"
					onChange={handleChange}
					value={filter.search?filter.search:''}
					// onKeyUp={handleKeyUp}
				/>
			</div>
		</div>
	);
};

export default Search;
