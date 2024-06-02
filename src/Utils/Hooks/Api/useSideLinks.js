import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


function useSideLinks() {
  const getSideLinks = () => axios.get(`http://localhost:3500/routes`).then(r => r.data).then(data => data)
  return useQuery({
    queryKey: "SideLinks",
    queryFn: getSideLinks,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}

export default useSideLinks