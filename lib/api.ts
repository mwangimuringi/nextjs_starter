const BASE_URL = "https://api.example.com";

const getAuthHeaders = (token?: string): HeadersInit => {
  const headers: HeadersInit = new Headers();
  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok)
    throw new Error(data?.message || `API error: ${response.status}`);
  return data;
};

export const apiRequest = async (
  method: "GET" | "POST",
  endpoint: string,
  data?: object,
  token?: string,
  options: RequestInit = {}
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: getAuthHeaders(token),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return await handleResponse(response);
  } catch (error) {
    console.error(`Error in API request (${method} ${endpoint}):`, error);
    throw error;
  }
};

export const fetchData = (
  endpoint: string,
  token?: string,
  options: RequestInit = {}
) => apiRequest("GET", endpoint, undefined, token, options);

export const postData = (
  endpoint: string,
  data: object,
  token?: string,
  options: RequestInit = {}
) => apiRequest("POST", endpoint, data, token, options);
