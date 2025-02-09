const BASE_URL = "https://api.example.com";

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok)
    throw new Error(data?.message || `API error: ${response.status}`);
  return data;
};

export const fetchData = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error in fetchData (${endpoint}):`, error);
    throw error;
  }
};

export const postData = async (
  endpoint: string,
  data: object,
  options: RequestInit = {}
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      ...options,
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error in postData (${endpoint}):`, error);
    throw error;
  }
};
