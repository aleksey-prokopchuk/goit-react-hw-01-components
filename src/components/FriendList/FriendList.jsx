import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  // console.log(friends[0].isOnline);
  return (
    <ul className={css['friend-list']}>
      {/* <!-- Довільна кіл-сть FriendListItem --> */}
      {friends.map(frend => (
        <li key={frend.id} className={css.item}>
          <span
            className={
              frend.isOnline ? css.status : `${css.status} ${css.isOfnline}`
            }
          >
            {frend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={frend.avatar}
            alt={frend.name}
            width="48"
          />
          <p className={css.name}>{frend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  frend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
export default FriendList;
