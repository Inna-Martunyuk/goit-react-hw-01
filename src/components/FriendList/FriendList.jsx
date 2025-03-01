import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"


export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
          <li key = {id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>)
          )}
       
    </ul>
  )
}
