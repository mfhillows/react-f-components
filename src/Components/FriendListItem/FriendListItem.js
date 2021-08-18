import PropTypes from "prop-types";

import s from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.green}></span>
      ) : (
        <span className={s.red}></span>
      )}
      <img classNames={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
