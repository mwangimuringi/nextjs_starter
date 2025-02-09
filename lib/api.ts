const BASE_URL = "https://api.example.com";

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

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
