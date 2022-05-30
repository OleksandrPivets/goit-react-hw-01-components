import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './friendlist.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
