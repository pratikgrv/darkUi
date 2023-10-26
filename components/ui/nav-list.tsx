import React from "react";
import Link from "next/link";

const NavList = () => {
	return (
		<div className="nav__links flex gap-3 md:gap-6 items-center ">
			<div>
				<Link className="dark:text-white" href="/mints">
					NFT
				</Link>
			</div>
			<div>
				<Link className="dark:text-white" href="/calander">
					Calendar
				</Link>
			</div>
			<div>
				<Link className="dark:text-white" href="">
					News
				</Link>
			</div>
		</div>
	);
};

export default NavList;
