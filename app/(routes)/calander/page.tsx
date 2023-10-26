
import ImageSlider from '@/components/ImageSlider';
import SliderCard from '@/components/SliderCard';
import Card from '@/components/ui/Card';
import MobCard from '@/components/ui/MobCard';
import Card2 from '@/components/ui/card2';
import CardWithBg from '@/components/ui/cardwithbg';
import Image from 'next/image';
import React from 'react'


const images = [
	"https://res.cloudinary.com/dvlghskji/image/upload/v1692344638/xkdebxs6bj23rzhaqoaa.jpg",
	"https://res.cloudinary.com/dvlghskji/image/upload/v1692344638/xkdebxs6bj23rzhaqoaa.jpg",
	"https://res.cloudinary.com/dvlghskji/image/upload/v1692344638/xkdebxs6bj23rzhaqoaa.jpg",
	// Add more image URLs here
];
const CalanderPage = () => {
  return (
		<div className="w-full h-[200vh] ">
			{/* <Card2/>
		  <Card data={[]} />
		  <MobCard data={[]} index={''} />
		  <CardWithBg />
		  
		   */}
			<div className="trigger">
				HOVER ME
				<div className="sub">
					<div className="item">Item 1</div>
					<div className="item">Item 2</div>
					<div className="item">Item 3</div>
					<div className="item">Item 4</div>
				</div>
			</div>
		</div>
	);
}

export default CalanderPage