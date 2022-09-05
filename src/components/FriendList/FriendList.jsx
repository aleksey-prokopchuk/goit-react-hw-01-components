const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {/* <!-- Довільна кіл-сть FriendListItem --> */}
      {friends.map(frend => (
        <li key={frend.id} class="item">
          <span class="status">{frend.isOnline}</span>
          <img class="avatar" src={frend.avatar} alt={frend.name} width="48" />
          <p class="name">{frend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
