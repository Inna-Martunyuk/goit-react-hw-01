export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-card">
      <img className="friend-avatar" src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

