import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.section}>
        <img className={css.images} src={image} alt="User avatar" />
        <p className={css.textName}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.title}>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}