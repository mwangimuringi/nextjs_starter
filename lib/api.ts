const BASE_URL = "https://api.example.com";

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok)
    throw new Error(data?.message || `API error: ${response.status}`);
  return data;
};

const getAuthHeaders = (token: string | null) => {
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchData = async (
  endpoint: string,
  token?: string,
  options: RequestInit = {}
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(token || ""),
      },
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
  token?: string,
  options: RequestInit = {}
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(token || ""),
      },
      body: JSON.stringify(data),
      ...options,
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error in postData (${endpoint}):`, error);
    throw error;
  }
};
