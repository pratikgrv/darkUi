import React from 'react'
import Link from 'next/link';
const Logo = () => {
	return (
	  <Link href='/'>
		<div className="logo text-xl flex items-center justify-center font-bold">
			Exporrr.
		</div></Link>
	);
}

export default Logo