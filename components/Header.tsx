import React from "react";
import Link from "next/link";

import Search from "./ui/Search";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import NavList from "./ui/nav-list";
import Navcontent from "./nav-content";
import MobileNav from "./mob-nav";
import PrimaryButton from "./ui/PrimaryButton";

const Header = () => {
	return (
		<div className="main__header z-50">
			<Navcontent>
				<div className="flex gap-5 md:gap-10">
					<Logo />
					<NavList />
				</div>

				<Search />

				<div className="navbar_btn hidden md:block ">
					<Button>
						Button
					</Button>
				</div>
			</Navcontent>
			<MobileNav />
		</div>
	);
};

export default Header;
