"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";
import PrimaryButton from "./ui/PrimaryButton";

const MobileNav = () => {
	const [menu, setMenu] = useState(false);
	const [searchToggle, setSearchToggle] = useState(false);
	// const [SearchInput, setSearchInput] = useState(false);

	const searchFocus = useRef(null);
	useEffect(() => {
		document.body.style.overflow = menu ? "hidden" : "unset";
		if (searchToggle && searchFocus.current) {
			// Use focus method to focus on the input when searchToggle is true
			searchFocus.current.focus();
		}
	}, [searchToggle, menu]);

	return (
		<div className="md:hidden p-3  flex justify-between items-center  relative ">
			<div className="flex">
				<div
					className="cursor-pointer"
					onClick={() => {
						setMenu(!menu);
					}}
				>
					<svg
						width="21px"
						height="21px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						id="menu-alt"
						className="icon glyph"
						fill="#ffffff"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke="#CCCCCC"
							strokeWidth="0.8121000000000001"
						>
							<path d="M21,19H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
							<path d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
							<path d="M21,7H3A1,1,0,0,1,3,5H21a1,1,0,0,1,0,2Z"></path>
						</g>
						<g id="SVGRepo_iconCarrier">
							<path d="M21,19H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
							<path d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
							<path d="M21,7H3A1,1,0,0,1,3,5H21a1,1,0,0,1,0,2Z"></path>
						</g>
					</svg>
				</div>

				<div
					className={`side__menu absolute top-full h-[92vh] w-[15rem] overflow-hidden ${
						menu ? "side__menu__visible" : ""
					}`}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="relative flex flex-col justify-between items-center mobile__nav h-full">
						<div className="w-full p-3 ">
							<div className="p-3 flex gap-2 justify-start items-center ">
								<svg
									width="21px"
									height="21px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#f2f2f2"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<g clipPath="url(#clip0_429_11031)">
											{" "}
											<path
												d="M3 4V18C3 19.1046 3.89543 20 5 20H17H19C20.1046 20 21 19.1046 21 18V8H17"
												stroke="#e8e8e8"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
											<path
												d="M3 4H17V18C17 19.1046 17.8954 20 19 20V20"
												stroke="#e8e8e8"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
											<path
												d="M13 8L7 8"
												stroke="#e8e8e8"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
											<path
												d="M13 12L9 12"
												stroke="#e8e8e8"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
										</g>{" "}
										<defs>
											{" "}
											<clipPath id="clip0_429_11031">
												{" "}
												<rect width="24" height="24" fill="white"></rect>{" "}
											</clipPath>{" "}
										</defs>{" "}
									</g>
								</svg>
								<span>Posts</span>
							</div>
							<div className="p-3  flex gap-2 justify-start items-center">
								<svg
									width="21px"
									height="21px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M6.5 13L7.28446 14.5689C7.54995 15.0999 7.68269 15.3654 7.86003 15.5954C8.01739 15.7996 8.20041 15.9826 8.40455 16.14C8.63462 16.3173 8.9001 16.4501 9.43108 16.7155L11 17.5L9.43108 18.2845C8.9001 18.5499 8.63462 18.6827 8.40455 18.86C8.20041 19.0174 8.01739 19.2004 7.86003 19.4046C7.68269 19.6346 7.54995 19.9001 7.28446 20.4311L6.5 22L5.71554 20.4311C5.45005 19.9001 5.31731 19.6346 5.13997 19.4046C4.98261 19.2004 4.79959 19.0174 4.59545 18.86C4.36538 18.6827 4.0999 18.5499 3.56892 18.2845L2 17.5L3.56892 16.7155C4.0999 16.4501 4.36538 16.3173 4.59545 16.14C4.79959 15.9826 4.98261 15.7996 5.13997 15.5954C5.31731 15.3654 5.45005 15.0999 5.71554 14.5689L6.5 13Z"
											stroke="#ffffff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>{" "}
										<path
											d="M15 2L16.1786 5.06442C16.4606 5.79765 16.6016 6.16426 16.8209 6.47264C17.0153 6.74595 17.254 6.98475 17.5274 7.17909C17.8357 7.39836 18.2024 7.53937 18.9356 7.82138L22 9L18.9356 10.1786C18.2024 10.4606 17.8357 10.6016 17.5274 10.8209C17.254 11.0153 17.0153 11.254 16.8209 11.5274C16.6016 11.8357 16.4606 12.2024 16.1786 12.9356L15 16L13.8214 12.9356C13.5394 12.2024 13.3984 11.8357 13.1791 11.5274C12.9847 11.254 12.746 11.0153 12.4726 10.8209C12.1643 10.6016 11.7976 10.4606 11.0644 10.1786L8 9L11.0644 7.82138C11.7976 7.53937 12.1643 7.39836 12.4726 7.17909C12.746 6.98475 12.9847 6.74595 13.1791 6.47264C13.3984 6.16426 13.5394 5.79765 13.8214 5.06442L15 2Z"
											stroke="#ffffff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>{" "}
									</g>
								</svg>
								<span>latest Projects</span>
							</div>
							<div className="p-3 flex gap-2 justify-start items-center">
								<svg
									fill="#ffffff"
									width="21px"
									height="21px"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#ffffff"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<title></title>{" "}
										<g data-name="Layer 97" id="Layer_97">
											{" "}
											<path d="M16,30A10,10,0,0,1,6,20C6,17,7.93,5.33,8,4.84a1,1,0,0,1,1.92-.21l2.85,7.13,2.25-9a1,1,0,0,1,1.94,0l2.25,9,2.85-7.13A1,1,0,0,1,24,4.84C24.07,5.33,26,17,26,20A10,10,0,0,1,16,30ZM9.42,8.73C8.83,12.49,8,18.13,8,20a8,8,0,0,0,16,0c0-1.87-.83-7.51-1.42-11.27l-2.65,6.64a1,1,0,0,1-1,.63,1,1,0,0,1-.9-.76L16,7.12l-2,8.12a1,1,0,0,1-.9.76,1,1,0,0,1-1-.63Z"></path>{" "}
											<path d="M20.94,21.35a1,1,0,0,0-1.48-.75A2.9,2.9,0,0,1,18,21a3,3,0,0,1-3-2.61,1,1,0,0,0-.54-.76,1,1,0,0,0-.94,0A5,5,0,1,0,21,22,4.46,4.46,0,0,0,20.94,21.35Z"></path>{" "}
											<path d="M24.51,22.91,24,19.23c0,2.25-4.15,6.12-8,6.12s-8.35-5.22-7.91-6.9L7,19.21c0,.3,0,.57,0,.79a9,9,0,0,0,17.51,2.91Z"></path>{" "}
										</g>{" "}
									</g>
								</svg>
								<span>Popular Projects</span>
							</div>
							<div className="p-3 flex gap-2 justify-start items-center">
								<svg
									fill="#ffffff"
									width="21px"
									height="21px"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#ffffff"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<title></title>{" "}
										<g data-name="Layer 14" id="Layer_14">
											{" "}
											<path d="M18,27H14a2,2,0,0,1-2-2V21.16a10,10,0,0,1-6-9.47A10.14,10.14,0,0,1,15.69,2h0A10,10,0,0,1,26,12a10,10,0,0,1-6,9.16V25A2,2,0,0,1,18,27ZM15.75,4A8.12,8.12,0,0,0,8,11.75a8,8,0,0,0,5.33,7.79,1,1,0,0,1,.67.94V25h4V20.48a1,1,0,0,1,.67-.94A8,8,0,0,0,15.75,4Z"></path>{" "}
											<path d="M15,24V19.48a9,9,0,0,1-6-8.76c.09-3,1.71-4.93,4.52-6.32C9.49,4.47,7.12,8,7,11.72a9,9,0,0,0,6,8.76V25a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1H16A1,1,0,0,1,15,24Z"></path>{" "}
											<path d="M19,30H13a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"></path>{" "}
											<path d="M20.85,11.47A1,1,0,0,0,20,11H18.87l1-1.45a1,1,0,0,0,.05-1A1,1,0,0,0,19,8H15a1,1,0,0,0-.89.55l-3,6A1,1,0,0,0,12,16h3v4a1,1,0,0,0,.77,1A.91.91,0,0,0,16,21a1,1,0,0,0,.89-.55l4-8A1,1,0,0,0,20.85,11.47Z"></path>{" "}
											<path d="M5,6a1,1,0,0,1-.71-.29l-2-2A1,1,0,0,1,3.71,2.29l2,2a1,1,0,0,1,0,1.42A1,1,0,0,1,5,6Z"></path>{" "}
											<path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z"></path>{" "}
											<path d="M3,21a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l2-2a1,1,0,0,1,1.42,1.42l-2,2A1,1,0,0,1,3,21Z"></path>{" "}
											<path d="M27,6a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l2-2a1,1,0,1,1,1.42,1.42l-2,2A1,1,0,0,1,27,6Z"></path>{" "}
											<path d="M29,13H28a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"></path>{" "}
											<path d="M29,21a1,1,0,0,1-.71-.29l-2-2a1,1,0,0,1,1.42-1.42l2,2a1,1,0,0,1,0,1.42A1,1,0,0,1,29,21Z"></path>{" "}
										</g>{" "}
									</g>
								</svg>
								<span>Resources</span>
							</div>
						</div>
						<div className=" items-center flex flex-col justify-center p-3 gap-5">
							<div>
								<PrimaryButton />
							</div>
							<div>twitter discord something</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-xl font-bold ">Exporrr.</div>
			<div
				className="cursor-pointer w-7 h-7 flex items-center justify-center "
				onClick={() => {
					setSearchToggle(!searchToggle);
				}}
			>
				{searchToggle ? (
					<svg
						width="23px"
						height="23px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{" "}
							<path
								d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
								fill="#ffffff"
							></path>{" "}
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
								fill="#ffffff"
							></path>{" "}
						</g>
					</svg>
				) : (
					<svg
						width="23px"
						height="23px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{" "}
							<path
								d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z"
								fill="#ffffff"
							></path>{" "}
							<path
								d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z"
								fill="#ffffff"
							></path>{" "}
						</g>
					</svg>
				)}
			
			</div>	{searchToggle ? (
					<input
						ref={searchFocus}
						className=" mobile__sbi absolute top-[8px] left-2 w-[83%] sm:w-[88%]  rounded-2xl p-[7px] border-none outline-none  text-sm z-50"
						type="text"
						placeholder="Search here"
					/>
				) : (
					''
				)}
		</div>
	);
};

export default MobileNav;
