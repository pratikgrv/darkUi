import Image from "next/image";
import React from "react";

const Test = () => {
	return (
		<div className="mob">
			<div className="mob_container flex flex-col p-5 max-w-[32rem] card">
				<div className="flex w-full justify-between">
					<div>
						<div className="w-14 h-14 relative">
							<Image
								className=""
								src={
									"https://res.cloudinary.com/dvlghskji/image/upload/v1692254847/ewzyemvd1xatxghks98w.jpg"
								}
								alt=""
								fill
							/>
						</div>
					</div>
					<div className="flex-grow flex justify-start items-center ml-3">
						<span>name</span>
					</div>
					<div className="flex justify-center items-center w-14 h-14">
						<svg
							fill="#ffffff"
							height="32px"
							width="32px"
							version="1.1"
							id="Icons"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 32 32"
							xmlSpace="preserve"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M21.7,16.7l-4,4C17.5,20.9,17.3,21,17,21 s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l4,4 c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.2,0.1,0.5,0,0.8C21.9,16.5,21.8,16.6,21.7,16.7z"></path>{" "}
							</g>
						</svg>
					</div>
				</div>
				<div className="flex flex-col py-3">
					<div className="flex justify-between p-1">
						<div>
							<div>Mint Date</div>
							<div>23 sep 2023</div>
						</div>
						<div>
							<div>Mint Date</div>
							<div>23 sep 2023</div>
						</div>
					</div>
					<div className="flex justify-between p-1">
						<div>
							<div>Mint Date</div>
							<div>23 sep 2023</div>
						</div>
						<div>
							<div>Mint Date</div>
							<div>23 sep 2023</div>
						</div>
					</div>
				</div>
				<div>
					<div className="relative w-full h-[12rem] ">
						{" "}
						<Image
							className=""
							src={
								"https://res.cloudinary.com/dvlghskji/image/upload/v1692254847/ewzyemvd1xatxghks98w.jpg"
							}
							alt=""
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
