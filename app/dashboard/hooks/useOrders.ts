import { useState } from "react";

const useOrder = () => {
  const [order, setOrder] = useState(null);

  return { order, setOrder };
};

export default useOrder;
