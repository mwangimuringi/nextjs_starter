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

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const clearNotifications = () => setNotifications([]);

  return { notifications, addNotification, markAsRead, clearNotifications };
};

export default useNotifications;
