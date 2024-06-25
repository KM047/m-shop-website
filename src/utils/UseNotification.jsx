import { useCallback, useState } from "react";
import Notification from "./../components/Notification";

const useNotification = (position = "") => {
    const [notification, setNotification] = useState(null);

    let timer;

    const triggerNotification = useCallback((notificationProps) => {
        clearTimeout(timer);
        setNotification(notificationProps);
        timer = setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration);
    }, []);

    const NotificationComponent = notification ? (
        <div className={` sticky top-2 z-50`}>
            <Notification {...notification} />
        </div>
    ) : null;

    return { NotificationComponent, triggerNotification };
};

export default useNotification;
