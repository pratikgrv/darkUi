import React from "react";
import CardCollection from "../app/(routes)/mints/components/CardCollection";
import Link from "next/link";
import Button from "./ui/Button";
const CardSection = ({ name, desc, children }) => {
	return (
		<div className="flex flex-col mx-5 md:p-5 my-4">
			<div className="flex justify-between items-center md:p-4">
				<div>
					<div className="uppercase text-base md:text-xl font-extrabold">
						{name}
					</div>
					<div className="font-thin text-sm pl-3 opacity-80">⭐{desc}</div>
				</div>

				<Link href={`/mints`}>
					<div className="btn  text-xs sm:text-sm">View all </div>
				</Link>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default CardSection;
