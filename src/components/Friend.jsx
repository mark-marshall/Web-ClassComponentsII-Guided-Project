import React from 'react';


export default function Friend({ friend }) {
  return (
    <div>
      <span key={friend.id}>{friend.name} is {friend.age}</span>
      <button className='small'>Edit Friend</button>
      <button className='small danger'>Delete Friend</button>
    </div>
  );
}
