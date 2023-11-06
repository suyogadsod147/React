import React, { useEffect } from 'react';
import UserCard from './UserCard';
import RandomUserButton from './RandomUserButton';
import {useUserContext} from './UserContext'

function RandomUserApp() {
//   const [user, setUser] = useState(null);

// context
const {user , setUserData} = useUserContext();

  const getRandomUser = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/public/randomusers?page=1&limit=100');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const num = Math.floor(Math.random() * 100);
    //   setUser(data.data.data[num]);
    //   context
      setUserData(data.data.data[num]);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <div className="flex pt-16 justify-center flex-col">
      {user && <UserCard user={user} />}
      <RandomUserButton onClick={getRandomUser} />
    </div>
  );
}

export default RandomUserApp;
