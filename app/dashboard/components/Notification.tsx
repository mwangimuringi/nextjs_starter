import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const Notification = () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>([
      { id: 1, message: "New order received!", read: false },
      { id: 2, message: "Your pizza is being prepared", read: false },
    ]);
  
    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification: { id: Key | null | undefined; message: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notification;
  