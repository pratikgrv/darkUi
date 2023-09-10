import React from "react";
import Image from "next/image";
import { inter } from "@/app/layout";
import Link from "next/link";
export const dynamic = "force-dynamic";

const Card = ({ data }) => {
	// console.log(data);
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
		<Link href={`/mints/${slugName}`}>
			<div className="card h-auto bg-slate-600 m-2 rounded-xl  relative ">
				<div className="card_background h-[140px] md:h-[180px] relative w-[95%] m-auto mt-3 rounded-lg overflow-hidden ">
					{/* <div className="bg-gradient-to-r from-indigo-500 absolute w-full h-full z-10 gradient_card"></div> */}
					<Image
						className="object-fill"
						src={backgroundUrl}
						fill
						priority
						alt=""
					/>
				</div>

				<div className="card_info ">
					<div className="title_name_logo pt-5 flex justify-center  relative">
						<div className="card_profile_outer absolute  bottom-[70%] ">
							<div className="card_profile w-[4rem] sm:w-[5rem] h-[3.5rem] sm:h-[5rem]  rounded-xl overflow-hidden object-cover relative">
								<Image className="z-20"
									src={imageUrl}
									fill
									priority
									alt="" />
							</div>
						</div>
						<div className="card_title flex justify-center items-center">
							<span className="text-xl font-semibold px-2 ">
								{collectionName}
							</span>
							<span>
							
							
								{(() => {
									switch (network) {
										case "Solana":
											return (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 397.7 311.7"
													// style={{ enableBackground: "new 0 0 397.7 311.7" }}
													width="24px"
													height="24px"
												>
													<linearGradient
														id="SVGID_1_"
														gradientUnits="userSpaceOnUse"
														x1="360.8791"
														y1="351.4553"
														x2="141.213"
														y2="-69.2936"
														gradientTransform="matrix(1 0 0 -1 0 314)"
													>
														<stop offset="0" style={{ stopColor: "#00FFA3" }} />
														<stop offset="1" style={{ stopColor: "#DC1FFF" }} />
													</linearGradient>
													<path
														fill="url(#SVGID_1_)"
														d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
        c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
													/>
													<linearGradient
														id="SVGID_2_"
														gradientUnits="userSpaceOnUse"
														x1="264.8291"
														y1="401.6014"
														x2="45.163"
														y2="-19.1475"
														gradientTransform="matrix(1 0 0 -1 0 314)"
													>
														<stop offset="0" style={{ stopColor: "#00FFA3" }} />
														<stop offset="1" style={{ stopColor: "#DC1FFF" }} />
													</linearGradient>
													<path
														fill="url(#SVGID_2_)"
														d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
        c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
													/>
													<linearGradient
														id="SVGID_3_"
														gradientUnits="userSpaceOnUse"
														x1="312.5484"
														y1="376.688"
														x2="92.8822"
														y2="-44.061"
														gradientTransform="matrix(1 0 0 -1 0 314)"
													>
														<stop offset="0" style={{ stopColor: "#00FFA3" }} />
														<stop offset="1" style={{ stopColor: "#DC1FFF" }} />
													</linearGradient>
													<path
														fill="url(#SVGID_3_)"
														d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
        c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
													/>
												</svg>
											);
										case "Ethereum":
											return (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 40 65"
													id="etherium"
												>
													<g fill="none" fillRule="nonzero">
														<path
															fill="#8A92B2"
															d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z"
														></path>
														<path
															fill="#454A75"
															d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z"
														></path>
														<path
															fill="#8A92B2"
															d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z"
														></path>
														<path
															fill="gray"
															d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z"
														></path>
														<path
															fill="#62688F"
															d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z"
														></path>
														<path
															fill="#62688F"
															d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z"
														></path>
													</g>
												</svg>
											);
										case "Bitcoin":
											return (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													version="1.1"
													shapeRendering="geometricPrecision"
													textRendering="geometricPrecision"
													imageRendering="optimizeQuality"
													fillRule="evenodd"
													clipRule="evenodd"
													width="24px"
													height="24px"
													viewBox="0 0 4091.27 4091.73"
												>
													<g id="Layer_x0020_1">
														<metadata id="CorelCorpID_0Corel-Layer" />
														<g id="_1421344023328">
															<path
																fill="#F7931A"
																fillRule="nonzero"
																d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
															/>
															<path
																fill="white"
																fillRule="nonzero"
																d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.30l-92.90 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.20c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.30c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
															/>
														</g>
													</g>
												</svg>
											);
										default:
											return <div></div>;
									}
								})()}
							</span>
						</div>
					</div>

					<div
						className={`card_info_details flex p-3  text-xs font-medium ${inter.className}`}
					>
						<div className="flex flex-col flex-grow  items-center justify-center rounded-lg">
							<span>Mint Date:</span>
							<span>{mintDate}</span>
						</div>
						<div className="flex flex-col flex-grow items-center justify-center rounded-lg">
							<span>Mint Price:</span>
							<span>{mintPrice}</span>
						</div>
						<div className="flex flex-col flex-grow  items-center justify-center rounded-lg">
							<span>Supply:</span>
							<span>{Supply}</span>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
