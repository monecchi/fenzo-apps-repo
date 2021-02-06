import useFetch from '../hooks/useFetch'

//
// Retrieve a single (project) service hook
//
export const useService = (slug: string) => {
  const { data, error } = useFetch(`/api/services/${slug}`);
  return {
    service: data,
    isLoading: !error && !data,
    isError: error
  }
}

//
// Retrieve all projects (services) hook
//
export const useServices = () => {
  const { data, error } = useFetch('/api/services');
  return {
    services: data,
    isLoading: !error && !data,
    isError: error
  }
}
