import React from "react";
import Link from "next/link";

const NavList = () => {
	return (
		<div className="nav__links flex gap-3 md:gap-6 items-center">
			<div><Link  href="/mints">
				NFT
			</Link></div>
			<div><Link  href="/calander">
				Calendar
			</Link></div>
			<div><Link  href="">
				News
			</Link></div>
		</div>
	);
};

export default NavList;
