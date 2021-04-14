import useFetch from './useFetch'

//
// Retrieve site settings hook
//
export const useSettings = () => {
  const { data, error } = useFetch('/api/v1');

  return {
    settings: data,
    isLoading: !error && !data,
    isError: error
  }
}
