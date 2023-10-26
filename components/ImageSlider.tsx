'use client'
import React, { useRef, useEffect, useState } from "react";

const ImageSlider = () => {

const handleClick = () => {
				console.log("Button clicked!");
			};

   useEffect(() => {
			

			const button = document.getElementById("myButton");
			button.addEventListener("click", handleClick);

			// Clean up the event listener when the component unmounts
			return () => {
				button.removeEventListener("click", handleClick);
			};
		}, []);

		return <button id="myButton">Click me</button>;
};

export default ImageSlider;















//  const handleMouseMove = (event) => {
//     console.log('Mouse X:', event.clientX);
//     console.log('Mouse Y:', event.clientY);
//   };

//   return (
//     <div onMouseMove={handleMouseMove}>
//       Move your mouse to see the coordinates in the console.
//     </div>
//   );
// };






















// "use client";
// import React, { useRef, useEffect, useState } from "react";

// const ImageSlider = () => {
// 	const [posX1, setPosX1] = useState(0);
// 	const [posX2, setPosX2] = useState(0);
// 	const [posInitial, setPosInitial] = useState(0);
// 	const [posFinal, setPosFinal] = useState(0);
// 	const [index, setIndex] = useState(0);
// 	const [allowShift, setAllowShift] = useState(true);
// 	const sliderRef = useRef(null);
// 	const itemsRef = useRef(null);

// 	useEffect(() => {
// 		const wrapper = sliderRef.current;
// 		const items = itemsRef.current;
// 		const prev = document.getElementById("prev");
// 		const next = document.getElementById("next");

// 		slide(wrapper, items, prev, next);

// 		function slide(wrapper, items, prev, next) {
// 			// Rest of the code...
// 			// Mouse and Touch events
// 			items.onmousedown = dragStart;

// 			// Touch events
// 			items.addEventListener("touchstart", dragStart);
// 			items.addEventListener("touchend", dragEnd);
// 			items.addEventListener("touchmove", dragAction);

// 			// Click events
// 			prev.addEventListener("click", () => shiftSlide(-1));
// 			next.addEventListener("click", () => shiftSlide(1));

// 			// Transition events
// 			items.addEventListener("transitionend", checkIndex);
// 		}

// 		// Rest of the code...
// 	}, []);

// 	const dragStart = (e) => {
// 		e = e || window.event;
// 		e.preventDefault();
// 		setPosInitial(itemsRef.current.offsetLeft);

// 		if (e.type === "touchstart") {
// 			setPosX1(e.touches[0].clientX);
// 		} else {
// 			setPosX1(e.clientX);
// 			document.onmouseup = dragEnd;
// 			document.onmousemove = dragAction;
// 		}
// 	};

// 	const dragAction = (e) => {
// 		e = e || window.event;

// 		if (e.type === "touchmove") {
// 			setPosX2(posX1 - e.touches[0].clientX);
// 			setPosX1(e.touches[0].clientX);
// 		} else {
// 			setPosX2(posX1 - e.clientX);
// 			setPosX1(e.clientX);
// 		}
// 		itemsRef.current.style.left = `${itemsRef.current.offsetLeft - posX2}px`;
// 	};

// 	const dragEnd = (e) => {
// 		setPosFinal(itemsRef.current.offsetLeft);
// 		if (posFinal - posInitial < -100) {
// 			shiftSlide(1, "drag");
// 		} else if (posFinal - posInitial > 100) {
// 			shiftSlide(-1, "drag");
// 		} else {
// 			itemsRef.current.style.left = `${posInitial}px`;
// 		}

// 		document.onmouseup = null;
// 		document.onmousemove = null;
// 	};

// 	const shiftSlide = (dir, action) => {
// 		itemsRef.current.classList.add("shifting");

// 		if (allowShift) {
// 			if (!action) {
// 				setPosInitial(itemsRef.current.offsetLeft);
// 			}

// 			if (dir === 1) {
// 				itemsRef.current.style.left = `${
// 					posInitial - itemsRef.current.offsetWidth
// 				}px`;
// 				setIndex(index + 1);
// 			} else if (dir === -1) {
// 				itemsRef.current.style.left = `${
// 					posInitial + itemsRef.current.offsetWidth
// 				}px`;
// 				setIndex(index - 1);
// 			}
// 		}

// 		setAllowShift(false);
// 	};

// 	const checkIndex = () => {
// 		itemsRef.current.classList.remove("shifting");

// 		if (index === -1) {
// 			itemsRef.current.style.left = `-${
// 				itemsRef.current.offsetWidth * itemsRef.current.children.length
// 			}px`;
// 			setIndex(itemsRef.current.children.length - 1);
// 		}

// 		if (index === itemsRef.current.children.length) {
// 			itemsRef.current.style.left = `-${itemsRef.current.offsetWidth}px`;
// 			setIndex(0);
// 		}

// 		setAllowShift(true);
// 	};

// 	return (
// 		<div id="slider" className="slider" ref={sliderRef}>
// 			<div className="wrapper_slider">
// 				<div id="items" className="items" ref={itemsRef}>
// 					<span className="slide">Slide 1</span>
// 					<span className="slide">Slide 2</span>
// 					<span className="slide">Slide 3</span>
// 					<span className="slide">Slide 4</span>
// 					<span className="slide">Slide 5</span>
// 				</div>
// 			</div>
// 			<button
// 				id="prev"
// 				className="control prev"
// 				onClick={() => shiftSlide(-1)}
// 			></button>
// 			<button
// 				id="next"
// 				className="control next"
// 				onClick={() => shiftSlide(1)}
// 			></button>
// 		</div>
// 	);
// };

// export default ImageSlider;
