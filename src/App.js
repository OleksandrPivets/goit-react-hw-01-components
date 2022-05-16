import Profile from './components/Profile/Profile'
import user from './data/user.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transaction/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
      username ={user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      statsFollowers = {user.stats.followers}
      statsViews = {user.stats.views}
      statsLikes = {user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />;
    </div>
  )}

export default App;
