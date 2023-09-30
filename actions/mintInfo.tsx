
const CardInfo = async (query: any) => {
	const URL = `${process.env.NEXT_PUBLIC_API_URL}/calander/${query}`;
	

	try {
		// console.log(URL);
		const res = await fetch(URL, {
			method: "GET",

			cache: "no-store",
		});

		// Check if the response status is in the 2xx range (indicating success)
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error; // Rethrow the error to let the caller handle it
	}
};

export default CardInfo;
