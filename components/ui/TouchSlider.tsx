'use client'
import React, { useRef, useState } from "react";
 // You can create your own CSS file for styling

const TouchSlider = ({ }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef(null);
	const touchStartX = useRef(null);

	const handleTouchStart = (e:any) => {
		touchStartX.current = e.touches[0].clientX;
	};
    const items = [
			<div className="slider-item-content" key={1}>
				Item 1
			</div>,
			<div className="slider-item-content" key={2}>
				Item 2
			</div>,
			<div className="slider-item-content" key={3}>
				Item 3
			</div>,
		];
	const handleTouchMove = (e:any) => {
		if (touchStartX.current === null) return;

		const touchEndX = e.touches[0].clientX;
		const deltaX = touchEndX - touchStartX.current;

		if (deltaX > 50 && currentIndex > 0) {
			setCurrentIndex(currentIndex - 1); // Swipe right
		} else if (deltaX < -50 && currentIndex < items.length - 1) {
			setCurrentIndex(currentIndex + 1); // Swipe left
		}

		touchStartX.current = null;
	};

	return (
		<div
			className="touch-slider"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			ref={sliderRef}
		>
			<div
				className="slider-content"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{items.map((item, index) => (
					<div key={index} className="slider-item">
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default TouchSlider;
