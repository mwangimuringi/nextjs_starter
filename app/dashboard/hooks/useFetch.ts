import { useState, useEffect } from "react";

const useFetch = (
  url: string,
  options: RequestInit = {},
  dependencies: any[] = []
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options), ...dependencies]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
