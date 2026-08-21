type LikeNotify = {
    type: string,
    fromUser: string
}
type SystemNotify = {
    type: string,
    message: string,
    actionUrl?: string;
}
const renderNotification = (notification: LikeNotify | SystemNotify): string => {
    if (notification.type === 'like') {
        return `${notification.fromUser} liked your post.`;
    }
    if (notification.actionUrl) {
        return `System: ${notification.message} (Tap to view)`;
    }
    return `System: ${notification.message}`;
}


console.log(renderNotification({ type: "like", fromUser: "Aisha" }));// "Aisha liked your post."

console.log(renderNotification({ type: "system", message: "Maintenance complete." }));// "System: Maintenance complete."

console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));// "System: Your subscription is expiring soon. (Tap to view)"
