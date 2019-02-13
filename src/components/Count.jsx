import React from 'react';

// Implement Count component so it renders the `count` in an h3,
// and also two button elements that invoke `increment` and `decrement` on click.
// Wrap everything in a div with the class of 'sub-container' so styles will work.
export default function Count({ count, increment, decrement }) {
  return (
    <div className="sub-container">
      <h3>This is the Count: {count}</h3>
      <div>
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
      </div>
    </div>
  );
}
