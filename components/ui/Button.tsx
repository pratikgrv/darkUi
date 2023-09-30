import Link from 'next/link'
import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
	return (
		<Link href={`/`}>
			<button>
				<div className="btn sm:text-sm text-xs ">{children}</div>
			</button>
		</Link>
	);
};

export default Button