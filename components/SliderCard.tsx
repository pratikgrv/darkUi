import Image from "next/image";
import React from "react";
const desc =
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ab consectetur officiis adipisci incidunt. Consequuntur error unde aut voluptate! Quae tempore blanditiis molestias repellat! Necessitatibus harum quasi debitis sed autem.";
const SliderCard = ({ data }:any) => {
	const {
		slugName,
		collectionDesc,
		collectionName,
		mintDate,
		mintPrice,
		backgroundUrl,
		imageUrl,
		Supply,
		network,
	} = data;

	return (
		<div className="w-full px-3 sm:px-5 mb-12">
			<div className="slider_card_container relative p-7 md:p-20 flex sm:flex-row flex-col-reverse   gap-6   overflow-hidden">
				{/* <Image className="rounded-2xl object-cover opacity-80 min-w-[15rem] -z-40" src={backgroundUrl} fill alt="" /> */}
				<div className="sc_1 w-full md:flex-1 my-auto ">
					<div className="flex flex-col md:gap-3 gap-2  md:text-left">
						<div className="">
							<span className="rounded-3xl my-2 card px-[7px] py-[3px]">
								#category
							</span>{" "}
						</div>
						<div
							className=" text-4xl md:text-6xl font-bold"
						>
							{collectionName}
						</div>
						<div className="md:text-base text-sm font-medium">
							{collectionDesc?.length > 200
								? `${collectionDesc.slice(0, 200)}...`
								: collectionDesc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Qndis! Atque, ad accusamus, ea a obcaecati fugiat molestiae error ut delectus cupiditate facere rerum! Nulla.
						</div>
						<div className="mt-5">
							<button className="button-31 " role="button">
								VIEW ITEM
							</button>
						</div>
					</div>
				</div>

				<div className="sc_2 w-full md:flex-1 my-auto h-full ">
					<div className="relative min-w-[5rem] max-w-[25rem] sm:max-w-[32rem] aspect-square  mx-auto overflow-hidden">
						<Image
							className="rounded-lg object-cover"
							src={imageUrl}
							fill
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SliderCard;

// <div className="slider_card_container p-12 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-[95%] sm:w-[90%] bg-slate-300 rounded-xl mt-[5rem]">
// 	<div className="sc_1 w-full order-2 my-auto">
// 		<div className="flex flex-col md:gap-3 gap-2 text-center md:text-left">
// 			<div>
// 				<span className="rounded-3xl my-2 card px-[7px] py-[3px]">
// 					#category
// 				</span>
// 			</div>
// 			<div className="text-xl md:text-4xl font-bold">
// 				Title here Lorem ipsum dolor
// 			</div>
// 			<div className="text-sm">{desc.slice(0, 200)}...</div>
// 			<div className="mt-5">
// 				<button className="button-31" role="button">
// 					Button 31
// 				</button>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="sc_2 w-full order-1 my-auto h-full">
// 		<div className="relative min-w-[5rem] max-w-[20rem] sm:max-w-[30rem] aspect-square m-4 mx-auto">
// 			<Image
// 				className="rounded object-cover"
// 				src="https://res.cloudinary.com/dvlghskji/image/upload/v1695282401/moeickcchndfei9sxykp.jpg"
// 				fill
// 				alt=""
// 			/>
// 		</div>
// 	</div>
// </div>;
