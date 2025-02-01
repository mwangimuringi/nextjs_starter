const API_BASE_URL = "https://api.example.com";

const apiRequest = async (endpoint: string, options = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
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
