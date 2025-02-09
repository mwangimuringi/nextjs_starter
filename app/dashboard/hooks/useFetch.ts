import { useState, useEffect } from "react";

const useFetch = (
  url: string,
  options: RequestInit = {},
  dependencies: any[] = []
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options), ...dependencies]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
