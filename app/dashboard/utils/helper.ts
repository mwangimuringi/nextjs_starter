export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
  };
  