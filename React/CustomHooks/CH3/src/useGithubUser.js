import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGithubUser = (username) => {
  const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  };
};

export default useGithubUser;


// esercizio SWR 2
/*import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGithubUser = (username) => {
  const shouldFetch = !!username;
  
  const { data, error } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  return {
    user: data,
    isLoading: shouldFetch && !error && !data,
    isError: error
  };
};

export default useGithubUser;*/





//esercizio SWR 3

/*import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGithubUser = (username) => {
  const shouldFetch = !!username;
  
  const { data, error, mutate } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  const refetch = () => {
    if (shouldFetch) {
      mutate();
    }
  };

  return {
    user: data,
    isLoading: shouldFetch && !error && !data,
    isError: error,
    refetch
  };
};

export default useGithubUser;*/


//esercizio SWR 4

