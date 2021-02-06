import React from 'react'
import { api } from '../pages/api'
import useSWR from 'swr'

//
// Fetch function with axios
//
const useFetch = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url); // await fetch(url); // without axios
    const data = await response.data; // response.json(); // without axios

    return data;
  });

  return { data, error };
}

export default useFetch;
