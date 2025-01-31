import { useState } from "react";

type NotificationItem = {
  id: number;
  message: string;
  read: boolean;
};

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
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
    <section
      className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
      aria-labelledby="notifications-title"
    >
      <h2 id="notifications-title" className="text-xl font-semibold mb-4">
        Notifications
      </h2>
      {notifications.length > 0 ? (
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-2 rounded flex justify-between items-center ${
                notification.read ? "bg-gray-200" : "bg-blue-100"
              }`}
            >
              <span>{notification.message}</span>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-sm text-blue-500 underline"
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No new notifications</p>
      )}
      {notifications.length > 0 && (
        <button
          onClick={clearAll}
          className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Clear All
        </button>
      )}
    </section>
  );
};

export default Notification;
