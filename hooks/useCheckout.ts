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
      
      const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.address) {
    alert("Please fill in all fields.");
    return;
  }
  setIsSubmitted(true);
  console.log("Order Submitted:", formData);
};
          
  return { formData };
};
