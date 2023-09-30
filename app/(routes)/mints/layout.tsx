"use client"
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";



const queryClient = new QueryClient();
const Mintlayout = ({children}) => {
  return (
      <div>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider></div>
  )
}

export default Mintlayout