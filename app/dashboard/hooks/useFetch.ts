import { useState, useEffect, useCallback } from "react";

const useFetch = (
  url: string,
  options: RequestInit = {},
  dependencies: any[] = []
) => {
  const [data, setData] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  return { data, loading, error };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(url, options);
  //       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       console.error("Fetch error:", err);
  //       setError(err instanceof Error ? err : new Error("Unknown error"));
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
};

export default useFetch;
