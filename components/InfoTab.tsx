import React from "react";

const InfoTab = () => {
	return (
		<div className="w-full tabs p-3 ">
			<input
				type="radio"
				className="tabs__radio"
				name="tabs-example"
				id="tab1"
				defaultChecked
			/>
			<label htmlFor="tab1" className="tabs__label">
				Wl info
			</label>
			<div className="tabs__content">CONTENT for Tab #1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde quisquam consequatur maiores laudantium dicta neque facere esse, exercitationem adipisci a autem reprehenderit odit non veritatis, quibusdam dolorum quasi vel.</div>
			<input
				type="radio"
				className="tabs__radio"
				name="tabs-example"
				id="tab2"
			/>
			<label htmlFor="tab2" className="tabs__label">
				about
			</label>
			<div className="tabs__content">CONTENT for Tab #2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ea laborum doloribus? Rerum voluptatum dignissimos blanditiis reiciendis laboriosam id laborum sapiente at sed quasi, possimus iure, praesentium cumque, nulla pariatur.</div>
			<input
				type="radio"
				className="tabs__radio"
				name="tabs-example"
				id="tab3"
			/>
			<label htmlFor="tab3" className="tabs__label">
				Team
			</label>
			<div className="tabs__content">CONTENT for Tab #3</div>

		</div>
	);
};

export default InfoTab;
