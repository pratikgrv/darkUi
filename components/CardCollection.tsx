import React from "react";
import Card from "./ui/Card";
import getCalander from "@/actions/getSearch";

const CardCollection = async ({ type }) => {
	// const query={}
	// if (type === 'featured') {
	// 	// query =featured:true
	// }
	// else if (type==='popular') {

	// }
	// console.log(type)
	const calanderData = await getCalander({
		Popular: `${type}`,
		Featured: "true",
	});

	console.log(calanderData);
	return (
		<div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
			{calanderData.map((item: any) => (
				<Card data={item} key={item._id} />
			))}
		</div>
	);
};

export default CardCollection;
// console.log(calanderData);

// 	const [calendarData, setCalendarData] = useState([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const data = await getCalander({ Featured: true });
// 				setCalendarData(data);
// 			} catch (error) {
// 				// Handle any errors here
// 				console.error("Error fetching data:", error);
// 			}
// 		};

// 		fetchData();
// 	}, []);
