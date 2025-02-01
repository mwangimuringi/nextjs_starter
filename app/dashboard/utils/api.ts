const API_BASE_URL = "https://api.example.com";

const apiRequest = async (endpoint: string, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  return response.json();
};

const get = async (endpoint: string) => {
    return apiRequest(endpoint, { method: "GET" });
  };
  
  const post = async (endpoint: string, body: object) => {
    return apiRequest(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };
  
export { apiRequest, get, post };
