import React from 'react';


export default function Friend({ friend, deleteFriend, setCurrentFriendId }) {
  // `deleteFriend` and `setCurrentFriendId` are not going to work in those onClick handlers
  // Review the implementation of these functions and use them correctly!

  return (
    <div>
      <span>{friend.name} is {friend.age}</span>

      <button onClick={() => setCurrentFriendId(friend.id)} className='small'>Edit Friend</button>
      <button onClick={() => deleteFriend(friend.id)} className='small danger'>Delete Friend</button>
    </div>
  );
}
