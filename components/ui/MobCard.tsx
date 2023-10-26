"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobCard = ({ data, index }) => {
	const {
		slugName,
		collectionName,
		mintDate,
		mintPrice,
		backgroundUrl,
		imageUrl,
		Supply,
		network,
	} = data;

	return (
		<div className="">
			<Link href={`/mints/${slugName}`}>
				<div className="mob overflow-hidden border-solid border-slate-950 ">
					<div className="text-center my-auto font-bold ">{index + 1}.</div>
					<div className="">
						<div className="relative w-16 h-16 aspect-square my-3 mx-auto  ">
							<Image
								className="rounded-full object-cover"
								src={imageUrl}
								alt=""
								fill
							/>
						</div>
					</div>
					<div className="my-auto flex items-center">
						<div className="flex flex-col">
							<div className="flex">
								<div className=" font-semibold text-xl  my-auto mr-1 text-center">
									{collectionName}
								</div>
								<div className=" my-auto">
									<svg
										width="14px"
										height="14px"
										viewBox="0 0 24.00 24.00"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										stroke="#f4d402"
										stroke-width="0.00024000000000000003"
									>
										<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											stroke-linecap="round"
											stroke-linejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z"
												fill="#f4d402"
											></path>{" "}
										</g>
									</svg>
								</div>
							</div>
							<div>
								<div className="flex gap-2 p-1">
									<div>X</div>
									<div>W</div>
									<div>D</div>
								</div>
							</div>
						</div>
						<div className=" my-auto ml-auto mr-4 flex flex-col text-right">
							<div className="">{network}</div>
							<div>{mintDate}</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MobCard;

// <div className="box m-2 flex min-w-[22rem] relative p-3 ">
// 	<div className="px-5 pt-3">
// 		<div className="p-1">1</div>
// 	</div>
// 	<div className="box_container flex-grow flex flex-col">
// 		<div className="flex">
// 			<div className="flex justify-between w-full">
// 				<div className="flex">
// 					<div className="relative w-16 h-16 aspect-square flex my-auto mx-2 ">
// 						<Image
// 							className="rounded-lg"
// 							src={
// 								"https://res.cloudinary.com/dvlghskji/image/upload/v1695282401/moeickcchndfei9sxykp.jpg"
// 							}
// 							alt=""
// 							fill
// 						/>
// 					</div>
// 					<div className="flex items-center justify-center text-lg ">
// 						<div className="">Collection 1</div>
// 					</div>
// 				</div>
// 				<div className="cursor-pointer m-3 p-2 " onClick={toggleAccordion}>
// 					<svg
// 						fill="currentColor"
// 						width="21px"
// 						height="21px"
// 						viewBox="-6.5 0 32 32"
// 						version="1.1"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// 						<g
// 							id="SVGRepo_tracerCarrier"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						></g>
// 						<g id="SVGRepo_iconCarrier">
// 							{" "}
// 							<title>dropdown</title>{" "}
// 							<path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>{" "}
// 						</g>
// 					</svg>
// 				</div>
// 			</div>
// 		</div>
// 		{isExpanded && (
// 			<div className="grid grid-cols-2 max-w-[15rem] font-thin ml-2 opacity-90 absolute  z-10 top-[100%]">
// 				<div>Mint Date:</div>
// 				<div>23 sep</div>
// 				<div>Supply:</div>
// 				<div>5000</div>
// 				{/* Uncommented divs */}
// 				<div>Mint Price:</div>
// 				<div>2 SOL</div>
// 				<div>Network</div>
// 				<div>Solana</div>
// 			</div>
// 		)}
// 	</div>
// </div>
