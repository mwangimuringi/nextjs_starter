import { useState } from "react";

interface CheckoutData {
    name: string;
    email: string;
    address: string;
  }  

export const useCheckout = () => {
    const [formData, setFormData] = useState<CheckoutData>({
        name: "",
        email: "",
        address: "",
      }); 
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };           
  return { formData };
};
