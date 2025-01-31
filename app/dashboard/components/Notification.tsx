import { useState } from "react";

const Notification = () => {
    const [notifications, setNotifications] = useState<Notification[]>([
      { id: 1, message: "New order received!", read: false },
      { id: 2, message: "Your pizza is being prepared", read: false },
    ]);
  
    const markAsRead = (id: number) => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    };
  
    const clearAll = () => {
      setNotifications([]);
    };
  
    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.message} {notification.read ? "(Read)" : "(Unread)"}
              {!notification.read && (
                <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
              )}
            </li>
          ))}
        </ul>
        <button onClick={clearAll}>Clear All</button>
      </div>
    );
  };
  
  export default Notification;
  