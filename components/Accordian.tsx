"use client";
import React, { useState } from "react";

function Accordion() {
	const [openSection, setOpenSection] = useState(null);

	const toggleAccordion = (section:any) => {
		if (openSection === section) {
			// Clicking on the currently open section should close it
			setOpenSection(null);
		} else {
			// Clicking on a different section should open it and close the previously open one
			setOpenSection(section);
		}
	};

	return (
		<div className="accordion m-2  ">
			<div
				className="accordion-header flex justify-between w-[95%]  mx-auto p-4 cardx "
				onClick={() => toggleAccordion("first")}
			>
				<div className="md:text-2xl  font-semibold text-center text-sm">
					What is exprorrr. all about?
				</div>
				<button>{openSection === "first" ? "-" : "+"}</button>
			</div>
			{openSection === "first" && (
				<div className="accordion-content w-[95%]  mx-auto p-6 cardx">
					<p>
						{} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim id
						maiores facilis consectetur soluta aspernatur necessitatibus quod
						optio est qui? Suscipit atque consectetur minima quod? Alias, rerum!
						Expedita, aut distinctio.
					</p>
				</div>
			)}
			<div
				className="accordion-header flex justify-between  w-[95%]  mx-auto p-6 cardx "
				onClick={() => toggleAccordion("second")}
			>
				<div className="md:text-2xl  font-semibold text-center text-sm">
					Where do we find projects
				</div>
				<button>{openSection === "second" ? "-" : "+"}</button>
			</div>
			{openSection === "second" && (
				<div className="accordion-content w-[95%]  mx-auto p-6 cardx">
                    <p>{ }
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos perferendis, incidunt veritatis nam eius possimus minus sequi expedita quod molestias voluptate cumque? Voluptatibus sed beatae illum et adipisci ullam.
                    </p>
				</div>
			)}
			<div
				className="accordion-header flex justify-between  w-[95%]  mx-auto p-6 cardx "
				onClick={() => toggleAccordion("third")}
			>
				<div className="md:text-2xl  font-semibold text-center text-sm">
					So it only limited to nft minting?
				</div>
				<button>{openSection === "third" ? "-" : "+"}</button>
			</div>
			{openSection === "third" && (
				<div className="accordion-content w-[95%]  mx-auto p-6 cardx">
					<p>{} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus molestias at accusamus optio et beatae facilis praesentium blanditiis consectetur! Hic fuga dignissimos, sunt eligendi aut voluptates ratione facere incidunt.</p>
				</div>
			)}
		</div>
	);
}

export default Accordion;
	// <div
	// 			className="accordion-header flex justify-between w-[95%]  mx-auto p-4 cardx "
	// 			onClick={() => toggleAccordion("first")}
	// 		>
	// 			<div className="md:text-2xl  font-semibold text-center text-sm">
	// 				What is exprorrr. all about?
	// 			</div>
	// 			<button>{openSection === "first" ? "-" : "+"}</button>
	// 		</div>

	// 		<div
	// 			className={` w-[95%] h-0 mx-auto opacity-0  ${
	// 				openSection === "first" && "  accordion-content"
	// 			}`}
	// 		>
	// 			<p>
	// 				{} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim id
	// 				maiores facilis consectetur soluta aspernatur necessitatibus quod
	// 				optio est qui? Suscipit atque consectetur minima quod? Alias, rerum!
	// 				Expedita, aut distinctio.
	// 			</p>
	// 		</div>