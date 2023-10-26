"use client";
import React, { useEffect, useState } from "react";

import getCalendar from "@/actions/getSearch";
import TableCollection from "./TableCollection";
import TableSection from "./TableSection";
import { usePathname, useRouter } from "next/navigation";

const MintPageList = ({ type }:any) => {
	const [calendarData, setCalendarData] = useState([]);
	const router = useRouter();
	const pathname = usePathname();
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
			// console.log(data);
			// setCalendarData(data);
		};

		fetchData();
	}, [type]);
	// console.log(router);
	// console.log(pathname);
	return (
		<div>
			<TableSection>
				{calendarData.map((item:any, index) => (
					// <Card data={item} key={item._id} />

					<TableCollection data={item} key={item._id} num={index} />
				))}
			</TableSection>
		</div>
	);
};

export default MintPageList;
