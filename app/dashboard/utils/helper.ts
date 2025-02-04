export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const formatDate = (date: string | Date): string => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };
  
  export const deepClone = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  };
  
  export const generateId = (length = 8): string => {
    return Math.random().toString(36).substring(2, 2 + length);
  };
  