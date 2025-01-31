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
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-2 rounded ${
                  notification.read ? "bg-gray-200" : "bg-blue-100"
                }`}
              >
                {notification.message}
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="ml-2 text-sm text-blue-500 underline"
                  >
                    Mark as Read
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={clearAll}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear All
          </button>
        </div>
      );
    }      