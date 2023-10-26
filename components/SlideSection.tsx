"use client";
import React from "react";
import SliderCard from "./SliderCard";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRerender } from "use-is-rerender";

const SlideSection = ({ data }) => {
	useRerender();
	const swiper = useSwiper();
	return (
		<div className="">
			<Swiper
				spaceBetween={7}
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				loop
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
					// pauseOnMouseEnter: true,
				}}
				pagination={{ clickable: true }}
				onSlideChange={(swiper) => console.log(swiper)}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				{data.map((item: any, index: number) => (
					<SwiperSlide  key={item._id}>
						<SliderCard data={item}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SlideSection;
