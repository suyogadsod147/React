import React from 'react';

function UserCard({ user }) {
  return (
    <div className="w-[450px] h-[250px] bg-green-200 rounded-md flex flex-col">
      <div className="flex p-8">
        <div>
          <img className="h-40 w-40" src={ user.picture.large } alt="" />
        </div>
        <div className="flex flex-col mx-8">
          <p>Gender: {user.gender}</p>
          <p>City: {user.location.city}</p>
          <p>Country: {user.location.country}</p>
          <p>Age: {user.dob.age}</p>
        </div>
      </div>
    
    </div>
  );
}

export default UserCard;
