import PropTypes from 'prop-types';
import s from './friendlist.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.Item}>
      {isOnline ? (
        <span className={s.online}>{isOnline}</span>
      ) : (
        <span className={s.offline}>{isOnline}</span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}> {name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
