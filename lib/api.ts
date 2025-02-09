const BASE_URL = "https://api.example.com";

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

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
