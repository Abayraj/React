import { useEffect, useState } from 'react'
import './global.css'
import axios from 'axios';
import UserList from './components/UserList';

function App() {
  const API_URL = "https://dummyjson.com/users"
  console.log(API_URL)

  const [user, setUsers] = useState([]);
  // console.log(user);
  const callUserlist = async () => {
    const response = await axios(API_URL);
    setUsers(response.data.users);
    console.log(response.data, "===response from url")
  }
  useEffect(() => {
    callUserlist();
  }, []);
  return (
    <> 
      {user.length > 0 && (<UserList setUsers={setUsers}  users={user} />)}
    </>

  )
}

export default App;
