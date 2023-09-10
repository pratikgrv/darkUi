
import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export const useDebounce = (
	callback: () => void,
	delay: number,
	deps: ReadonlyArray<any>
) => {
	const { reset, clear } = useTimeout(callback, delay);

	useEffect(reset, [...deps, reset]);
	useEffect(clear, []); // Empty dependency array to run the effect only once
};
