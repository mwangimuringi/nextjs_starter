import { useState } from "react";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string) => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, read: false },
    ]);
  };

  return { notifications, addNotification };
};

export default useNotifications;
