import './App.css';
import UserList from './components/UserList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [Users, setUsers] = useState([])

  useEffect(() => {
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    // console.log(response.data);
    setUsers(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  
  }, [])

  return (
    <div className="App">
      <header className="App-header">

      {Users.map((el,i) =><UserList key={i} user={el} />)}  
         </header>
    </div>
  );
}

export default App;
