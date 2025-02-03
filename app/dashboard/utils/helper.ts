export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
  };
  
  export const formatDate = (date: string | Date): string => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };
  