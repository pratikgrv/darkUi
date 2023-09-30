import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const TableCollection = ({ data,num }) => {

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
			<div className="grid grid_table grid-cols-8  gap-3 py-3 font-light text-sm">
				<div className=" grid_items item_1 flex gap-3">
					<div className="mx-2 my-auto">{num+1}.</div>
					<div>
						<div className="relative w-10  aspect-square ">
							<Image
								className="rounded-md"
								src={imageUrl}
								alt={collectionName}
								fill
								priority
							/>
						</div>
					</div>
					<div className="flex  justify-center items-center ">
						<span>{collectionName}</span>
					</div>
				</div>
				<div className="grid_items">{mintDate}</div>
				<div className="grid_items "> {mintPrice}</div>
				<div className="grid_items"> {Supply}</div>
				<div className="grid_items"> {Supply}</div>
				<div className="grid_items"> {Supply}</div>
				<div className="grid_items"> {Supply}</div>
			</div>
		</Link>
	);
};

export default TableCollection