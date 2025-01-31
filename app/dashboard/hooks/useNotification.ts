import { useState } from "react";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

const useNotifications = () => {
  const [notifications, _setNotifications] = useState<Notification[]>([]);

  return { notifications };
};

export default useNotifications;
