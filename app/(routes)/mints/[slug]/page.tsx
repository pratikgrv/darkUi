import React from "react";
import Image from "next/image";
import CardInfo from "@/actions/mintInfo";
import Header from "@/components/Header";
import Mintinfo from "@/components/Mintinfo";
import InfoTab from "@/components/InfoTab";
const MintInfo = async ({ params: { slug } }: { params: { slug: string } }) => {
	const data = await CardInfo(slug);
	// console.log(data[0].imageUrl);

	if (data.length === 0) {
		return (
			<div className=" w-[100vw] h-[100vh] flex justify-center items-center">
				<h1>Not Found.....</h1>
			</div>
		);
	}
	const item = data[0];
	const {
		slugName,
		collectionName,
		collectionDesc,
		network,
		imageUrl,
		backgroundUrl,
		Supply,
		Popular,
		Featured,
		mintPrice,
		mintDate,
		createdAt,
	} = item;
	return (
		<div>
			<Header />
			<div className="mint-info mt-12 md:mt-[6rem] w-full md:w-[75%] mx-auto relative">
				<div className="relative  aspect-[7/2] ">
					<Image
						className="object-cover md:rounded-3xl"
						src={item.backgroundUrl}
						alt=""
						fill
					/>
					<div className="gradient_card absolute w-full h-full md:rounded-3xl"></div>
				</div>
				<div className=" w-full top-[-2rem] pl-[1.50%] p-2  relative ">
					<div className=" w-[67px] h-[67px] md:w-[84px] md:h-[84px] card_profile   rounded-xl overflow-hidden object-cover relative">
						<Image
							className="object-cover rounded-xl"
							src={item.imageUrl}
							alt=""
							fill
						/>
					</div>
					<div className="mint_info_heading font-bold md:text-4xl text-2xl my-3 px-1 ">
						{item.collectionName}
					</div>
					<div className="disc_secction">
						<div className=" opacity-90 font-light">
							{item.collectionDesc}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere, quae ad architecto odit ipsam cumque dolor sed eius, mollitia blanditiis velit voluptates similique nihil, numquam consequatur facilis reprehenderit voluptate!
						</div>
					</div>
					<div className=" flex flex-col md:flex-row">
						<div className="w-[95%] mx-auto">
							<Mintinfo item={item} />
						</div>
						<div className="w-full">
							<InfoTab />{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MintInfo;
