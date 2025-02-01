const API_BASE_URL = "https://api.example.com";

const apiRequest = async (endpoint: string, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  return response.json();
};

export { apiRequest };
