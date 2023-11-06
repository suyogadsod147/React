import React from 'react';

function RandomUserButton({ onClick }) {
  return (
    <button className="bg-blue-400 w-20 rounded-md mt-5" onClick={onClick}>
      Click me!
    </button>
  );
}

export default RandomUserButton;
