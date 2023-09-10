import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const TableCollection = ({ data }) => {

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
			<div className="grid grid_table grid-cols-6  gap-3 py-3 ">
				<div className=" grid_items item_1 flex gap-3">
					<div className="mx-2 my-auto">1.</div>
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
					<div className="flex  justify-center items-center">
						<span>{collectionName}</span>
					</div>
				</div>
				<div className="grid_items item_2">{mintDate}</div>
				<div className="grid_items item_3"> {mintPrice}</div>
				<div className="grid_items item_4"> {Supply}</div>
                <div className="grid_items item_5">{network}</div>
			</div>
		</Link>
	);
};

export default TableCollection