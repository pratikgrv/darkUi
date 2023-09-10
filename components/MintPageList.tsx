'use client'
import React, { useEffect, useState } from "react";
import Card from "./ui/Card";
import getCalendar from "@/actions/getSearch";

const MintPageList = ({ type }) => {
	const [calendarData, setCalendarData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let data = [];

			if (type === "all") {
				data = await getCalendar({});
			} else if (type === "popular") {
				data = await getCalendar({ Popular: "true" });
			} else if (type === "new") {
				data = await getCalendar({ Popular: "false" });
			}
console.log(data)
			setCalendarData(data);
		};

		fetchData();
	}, [type]);

	return (
		<div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-3">
			{calendarData.map((item) => (
				<Card data={item} key={item._id} />
			))}
		</div>
	);
};

export default MintPageList;
