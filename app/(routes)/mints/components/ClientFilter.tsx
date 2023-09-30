"use client";
import React, { useState, useEffect } from "react";
import TableSection from "./TableSection";
import TableCollection from "./TableCollection";
import getCalendar from "@/actions/getSearch";
import { slugify } from "@/libs/basic";
import Search from "@/components/ui/Search";
import useDebounce from "@/libs/useDebounce";
import { useQuery } from "react-query";
import { useRouter, useSearchParams } from "next/navigation";

const ClientFilter = ({ initialData }) => {
	const [datas, setDatas] = useState(initialData);
	const [filter, setFilter] = useState({
		search: "",
		sort: "",
		page: 1,
	});
	const dbs = useDebounce(filter.search, 500);

	const { isLoading, error, data } = useQuery({
		queryKey: ["repoData", { filter }],
		queryFn: async () => {
			const arr = {};
			if (filter.search) {
				arr.search = filter.search;
			}
			if (filter.sort) {
				arr.sort = filter.sort;
			}
			if (filter.page) {
				arr.page = filter.page;
			}
			const filteredData = await getCalendar(arr);
			setDatas( filter.page===1 ? filteredData : ((prev)=>[
				...prev,
	 			...filteredData,
	 		]));
			return filteredData;
		},
	});

	//  const { isLoading, isError, data, error } = useQuery({
	// 		queryKey: ["todos"],
	// 	 queryFn: () => {
	// 			fetch('https://adminapi.vercel.app/api/calander').then((res) =>
	// 				res.json()
	// 			);
	// 		},
	//  });

	console.log(data);

	// useEffect(() => {
	// 	console.log("inside useeffect")
	// 	const arr = {}
	// 	if (filter.search) {
	// 		arr.search=filter.search
	// 	}
	// 	if (filter.sort) {
	// 		arr.sort=filter.sort

	// 	}if (filter.page) {
	// 		arr.page = filter.page;
	// 	}
	// 	const filterData = async () => {
	// 		const filteredData = await getCalendar(arr);

	// 		setData( filter.page===1 ? filteredData : ((prev)=>[
	// 			...prev,
	// 			...filteredData,
	// 		]));
	// 		console.log("fd",filteredData);

	// 	};
	// 	filterData();
	// 	console.log("data",data)
	// }, [filter.sort,filter.page,dbs]);

	// const nextPageClick = () => {
	// 	setPage(page + 1);
	// };

	//  if (isLoading) {
	// 		return <span>Loading... by react query</span>;
	//  }

	const load = () => {
		setFilter({
			...filter,
			page: filter.page + 1,
		});
	};
	let btn;
	btn = (
		<button className={`card p-2}`} type="button" onClick={load}>
			Load More
		</button>
	);
	// console.log(filter)

	return (
		<div className="md:w-[90%] mx-auto overflow-x-auto  ">
			<Search filter={filter} setFilter={setFilter} />
			<TableSection filter={filter} setFilter={setFilter} />

			{data ? (
				// Render your content that depends on 'data' here
				datas.map((item, index) => (
					<TableCollection data={item} key={item._id} num={index} />
				))
			) : (
				// Render a loading indicator or some other content while data is fetching
				<div>Loading...</div>
			)}

			<div
				className="w-full flex justify-center
			"
			>
				{btn}
			</div>
		</div>
	);
};

export default ClientFilter;

// const searchParams = useSearchParams();

// console.log(sort);
// console.log(search);
// console.log(dbSearch);
// console.log(initialData);

// const updateQuery = (query) => {
// 	setSearch(slugify(query));
// };

// useEffect(() => {
// 	if (dbSearch || sort) {
// 		setPage(1);
// 		const filterData = async () => {
// 			const filteredData = await getCalendar({
// 				search: `${slugify(dbSearch)}`,
// 				sort: `${sort}`,
// 			});
// 			setData(filteredData);
// 		};
// 		filterData();
// 	}
// }, [dbSearch, sort]);

// useEffect(() => {
// 	if (page > 1) {
// 		const filterData = async () => {
// 			const filteredData = await getCalendar({
// 				page: `${page}`,
// 				search: `${slugify(dbSearch)}`,
// 				sort: `${sort}`,
// 			});

// 			setData((prev: Document[] | undefined) => [
// 				...(prev?.length ? prev : []),
// 				...filteredData,
// 			]);
// 		};

// 		filterData();
// 	}
// }, [page]);

// useEffect(() => {
// useEffect(() => {
// 	const filterData = async () => {
// 		const filteredData = await getCalendar({
// 			page: `${page}`,
// 		});
// 		if (page > 1) {
// 			setData((prev) => [...prev, ...filteredData]);
// 		}
// 	};

// 	filterData();
// 	const filterData = async () => {
// 		const filteredData = await getCalendar({
// 			search: `${slugify(dbSearch)}`,
// 			sort: `${sort}`,

// 		});

// 		console.log(filteredData);
// 	};

// 	filterData();

// }, [initialData, sort, dbSearch, page]);
{
	/* {data.map((item) => (
				<div key={item._id}>{item.collectionDesc}data</div>
			))} */
}
// const popularClick = () => {
// 	setPopular((prevPopular) => !prevPopular);
// 	console.log(popular);
// };

// const recentClick = () => {
// 	setRecent((prevRecent) => !prevRecent);
// 	console.log(recent);
// };
// useEffect(() => {
// 	const filterData = async () => {
// 		const filteredData = await getCalendar({
// 			search: `${slugify(dbSearch)}`,
// 			sort: `${sort}`,
// 			page: `${page}`,
// 		});
// 		if (page === 1) {
// 			setData(filteredData);
// 		}

// 		if (page > 1) {
// 			setData((prev: Document[] | undefined) => [
// 				...(prev?.length ? prev : []),
// 				...filteredData,
// 			]);
// 		}
// 	};

// 	filterData();
// }, [sort, dbSearch, page]);

// useEffect(() => {
// 	const filterData = async () => {

// 		if (page === 1) {
// 			const filteredData = await getCalendar({
// 				search: `${slugify(dbSearch)}`,
// 				sort: `${sort}`,
// 				page: `${page}`,
// 			});

// 			setData(filteredData);
// 		}

// 		if (page !== 1) {
// 			const filteredDatac = await getCalendar({
// 				search: `${slugify(dbSearch)}`,
// 				sort: `${sort}`,
// 				page: `${page}`,
// 			});

// 			setData((prev: Document[] | undefined) => [
// 				...(prev?.length ? prev : []),
// 				...filteredDatac,
// 			]);
// 		}
// 	};

// 	filterData();
// }, [sort, dbSearch, page]);
// useEffect(() => {

// 	setData(initialData)

// }, [page,initialData])
// useEffect(() => {
// 	const filterData = async () => {
// 		const filteredData = await getCalendar({
// 			page: `${page}`,

// 		});

// 			setData((prev: Document[] | undefined) => [
// 				...(prev?.length ? prev : []),
// 				...filteredData,
// 			]);

// 	};

// 	filterData();
// }, [page]);
