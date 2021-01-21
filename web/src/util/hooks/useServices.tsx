import React from 'react'
//import axios from 'axios'
import { api } from '../../pages/api'
import useSWR from 'swr'
import Link from 'next/link';

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url); // await fetch(url); // without axios
    const data = await response.data; // response.json(); // without axios

    return data;
  });

  return { data, error };
}

//
// Retrieve a single (project) service
//
export const useService = (slug: string) => {

}

//
// Retrieve all projects (services)
//
export const useServices = () => {
  const { data, error } = useFetch('/api/services');
  return {
    services: data,
    isLoading: !error && !data,
    isError: error
  }
}

const ServiceList: React.FC = () => {
  const { data } = useFetch('/api/services');

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data.map((servico) => (
        <li key={servico.id}>
          <Link href={`/servico/${servico.slug}`}>{servico.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
