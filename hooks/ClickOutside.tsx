'use client'

import React, { useEffect, useRef } from 'react';

const useClickOutside = (onClickOutside) => {




  
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("inside hook")
      onClickOutside && onClickOutside();
    }
  };
 const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };
  useEffect(() => {
   

    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, []);

  return ref;
};

export default useClickOutside;



// import React from 'react'
// import { useEffect,useRef } from 'react'



// const ClickOutside = (props) => {
//     const ref = useRef(null);
//     const { onClickOutside, children } = props;

//     const handleClickOutside = (event:any) => {
//          if (ref.current && !ref.current.contains(event.target)) {
//         onClickOutside && onClickOutside();
//     }
//     }

   
//      useEffect(() => {
// 				// Add event listener when the component mounts
// 				document.addEventListener("click", handleClickOutside,true);

// 				// Clean up the event listener when the component unmounts
// 				return () => {
// 					document.removeEventListener("click", handleClickOutside,true);
// 				};
//      }, []);
//     if (!children) {
//         return null;
//     }
//   return (
//       <div ref={ref}>
//           {children}
//     </div>
//   )
// }

// export default ClickOutside
