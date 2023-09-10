import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<span>
			<span className="footer flex flex-col md:flex-row p-3 my-7 mx-4">
				<span className="logo_side flex-grow p-9 text-3xl font-extrabold">
					Exporrr.
				</span>
				<span className="flex flex-grow mx-3">
					<span className="resouces flex-grow">
						<span>Resources</span>
						<span className="my-3 gap-3 flex flex-col text-sm opacity-75 ">
							<span>
								<Link href={""}>Calander</Link>
							</span>
							<span>
								<Link href={""}>Mints</Link>
							</span>
							<span>
								<Link href={""}>Posts</Link>
							</span>
						</span>
					</span>
					<span className="legal  flex-grow">
						<span>Legal</span>
						<span className="my-3 gap-3 flex flex-col text-sm opacity-75 ">
							<span>
								<Link href={""}>Privecy</Link>
							</span>
							<span>
								<Link href={""}>Term & condition</Link>
							</span>
						</span>
					</span>
					<span className="follow  flex-grow">
						<span>Follow</span>
						<span className="my-3 gap-3 flex flex-col text-sm opacity-75 ">
							<span>
								<Link href={""}>Twitter</Link>
							</span>
							<span>
								<Link href={""}>Discord</Link>
							</span>
							<span>
								<Link href={""}>Instagram</Link>
							</span>
						</span>
					</span>
				</span>
			</span>
		</span>
	);
};

export default Footer;
