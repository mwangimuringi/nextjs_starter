import { useState, useEffect } from "react";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const storedNotifs = localStorage.getItem("notifications");
    if (storedNotifs) {
      setNotifications(JSON.parse(storedNotifs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

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

  const clearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem("notifications");
  };

  return { notifications, addNotification, markAsRead, clearNotifications };
};

export default useNotifications;
