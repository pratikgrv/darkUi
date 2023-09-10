"use client";

import Image from "next/image";
import React, { useState } from "react";

const MobCard = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleAccordion = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div>
			<div className="box m-2 flex">
				<div className="px-5 pt-3">
					<span className="p-1">1</span>
				</div>
				<div className="box_container w-full flex flex-col">
					<div className="flex">
						<div className="flex justify-between w-full">
							<div className="flex">
								<div className="relative w-12 h-12 aspect-square flex my-auto mx-2 ">
									<Image
										className="rounded-lg"
										src={
											"https://res.cloudinary.com/dvlghskji/image/upload/v1692254847/ewzyemvd1xatxghks98w.jpg"
										}
										alt=""
										fill
									/>
								</div>
								<div className="flex items-center justify-center text-lg ">
									<span className="">Collection 1</span>
								</div>
							</div>
							<div
								className="cursor-pointer m-3 p-2 "
								onClick={toggleAccordion}
							>
								<svg
									fill="#ffffff"
									width="21px"
									height="21px"
									viewBox="-6.5 0 32 32"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<title>dropdown</title>{" "}
										<path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>{" "}
									</g>
								</svg>
							</div>
						</div>
					</div>
					{isExpanded && (
						<div className="grid grid-cols-2 max-w-[15rem] font-thin ml-2 opacity-90">
							<div>Mint Date:</div>
							<div>23 sep</div>
							<div>Supply:</div>
							<div>5000</div>
							{/* Uncommented divs */}
							<div>Mint Price:</div>
							<div>2 SOL</div>
							<div>Network</div>
							<div>Solana</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MobCard;
