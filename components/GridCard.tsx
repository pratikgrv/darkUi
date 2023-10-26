import React from 'react'
import MobCard from './ui/MobCard'
import getCalander from '@/actions/getSearch';

const GridCard = async() => {

	const calanderData = await getCalander({
		
	});
  return (
		<div className="gridcard grid gap-y-2 mx-8 gap-x-9 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-rows-4 sm:grid-rows-6 grid-rows-[10] grid-flow-col grid-auto-rows">
			{calanderData?.map((item: any, index: number) => (
				<MobCard data={item} key={item._id} index={index} />
			))}
		</div>
	);
}

export default GridCard
//