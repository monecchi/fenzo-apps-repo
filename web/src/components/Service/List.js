import React from 'react'
//import { useFetch } from '../../util/hooks/useServices'
import { useServices } from '../../util/hooks/useServices'
import Link from 'next/link';

//
// Formatted services list
//
const ServiceList = () => {
  const { services } = useServices(); //useFetch('/api/services'); // returns data

  if (!services) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <Link href={`/servico/${service.slug}`}>{service.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
