import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await axios(url);
      setResponse(res.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);
  return {
    response,
    loading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;
