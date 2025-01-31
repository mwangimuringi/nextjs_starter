import { useState } from "react";

type NotificationItem = {
  id: number;
  message: string;
  read: boolean;
};

const Notification = () => {
  const [notifications, _setNotifications] = useState<NotificationItem[]>([
    { id: 1, message: "New order received!", read: false },
    { id: 2, message: "Your pizza is being prepared", read: false },
  ]);

  return (
    <div>
      <h2>Notifications ({notifications.length})</h2>
    </div>
  );
};

export default Notification;
