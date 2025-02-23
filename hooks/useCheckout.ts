import { useState } from "react";

interface CheckoutData {
    name: string;
    email: string;
    address: string;
  }  

export const useCheckout = () => {
  const [formData, setFormData] = useState({});
  return { formData };
};
