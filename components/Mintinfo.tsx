import React from 'react'

const Mintinfo = ({item}:any) => {
  return (
		<div>
			<div className="flex mt-5 flex-wrap card rounded-xl w-full ">
				<div className="flex-grow flex-col  min-w-[50%] p-1 text-center ">
					<div>Mint Date:</div>
					<div>{item.mintDate}</div>
				</div>
				<div className="flex-grow flex-col  min-w-[50%] p-1 text-center">
					<div>Supply:</div>
					<div>{item.Supply}</div>
				</div>

				<div className="flex-grow flex-col  min-w-[50%] p-1 text-center">
					<div>Network:</div>
					<div>{item.network}</div>
				</div>
				<div className="flex-grow flex-col min-w-[50%] p-1 text-center">
					<div>Mint Price:</div>
					<div>{item.mintPrice}</div>
				</div>
		  </div>
		  <div className='w-full card my-4 rounded-lg p-4 text-center  text-lg'>Whitelish Status :<span className='green'>OPEN</span></div>
		</div>
	);
}

export default Mintinfo