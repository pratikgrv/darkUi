import React from "react";

const Navcontent = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="hidden md:block">
			
			<div className="flex justify-between md:p-4 items-center ">
				{children}
			</div>
		</div>
	);
};

export default Navcontent;
