import React from 'react'
import TableCollection from './TableCollection';

const TableSection = () => {
  return (
		<div>
			{" "}
			<div className="max-w-[90%] mx-auto">
				<div className="text-center font-extrabold text-3xl m-7">
					{" "}
					Popular Mints
				</div>
				<div className="table_heading ">
					<div className="grid grid-cols-6  gap-3  py-3 px-1">
						<div className=" item_1 ">Collction name</div>
						<div className=" ">mint date</div>
						<div className=" "> mint price</div>
						<div className=" "> supply</div>
						<div className=" ">network</div>
					</div>
				</div>
				<TableCollection data={undefined} />
				
			</div>
		</div>
	);
}

export default TableSection