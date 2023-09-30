import Image from "next/image";
import React from "react";
import PrimaryButton from "./ui/PrimaryButton";

const PostFeed = () => {
	return (
		<div className="grid grid-cols-1 md:mt-20 mt-12 md:grid-cols-3 gap-2 md:mx-11 bg-slate-500 rounded-lg px-[10rem]">
			<div className="relative col-span-2 rounded overflow-hidden  w-[34rem] aspect-square">
				<Image
					className="object-cover items-center "
					src={
						"https://res.cloudinary.com/dvlghskji/image/upload/v1692344638/xkdebxs6bj23rzhaqoaa.jpg"
					}
					fill
					alt=""
				/>
			</div>
			<div className="relative flex flex-col justify-evenly">
				<div className="font-semibold text-3xl">
					the is heading
					</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
					assumenda nihil voluptas porro cupiditate tempore voluptatibus illum
					incidunt temporibus, quasi obcaecati, at natus blanditiis, est tempora
					atque consectetur totam minus?
				</div>
				<div className="flex">
					<PrimaryButton />
					<PrimaryButton />
				</div>
			</div>
		</div>
	);
};

export default PostFeed;
