import { useState } from "react";

export const useCheckout = () => {
  const [formData, setFormData] = useState({});
  return { formData };
};
