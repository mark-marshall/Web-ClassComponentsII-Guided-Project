import React from 'react';


export default function Friend({ friend, deleteFriend, setCurrentFriendId }) {
  const onDelete = () => deleteFriend(friend.id);
  const onsetCurrentFriendId = () => setCurrentFriendId(friend.id);

  return (
    <div>
      <span>{friend.name} is {friend.age}</span>
      <button onClick={onsetCurrentFriendId} className='small'>Edit Friend</button>
      <button onClick={onDelete} className='small danger'>Delete Friend</button>
    </div>
  );
}
