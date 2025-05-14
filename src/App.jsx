import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const url = '/users.json';

  const [users, setUsers] = useState([]);

  const newUser = {
    name: 'Sardor',
    lastname: 'Sardorov',
    age: 22,
    id: 0
  };

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  function getNextId() {
    if (users.length === 0) return 0;
    return Math.max(...users.map(user => user.id)) + 1;
  }

  function addUser() {
    const userToAdd = { ...newUser, id: getNextId() };
    setUsers(prev => [...prev, userToAdd]);
  }

  function deleteUserById(id) {
    setUsers(prev => prev.filter(user => user.id !== id));
  }

  return (
    <>
      <Header />
      <main>
        <button onClick={addUser}>Add User</button>
        <ul>
          {
            users.length <= 0 ? (<p>No users</p>) :
              users.map(user => (
                <li className='li' key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.lastname}</p>
                  <p>{user.age}</p>
                  <button onClick={() => deleteUserById(user.id)}>Delete</button>
                </li>
              ))
          }
        </ul>
      </main>
    </>
  );
}

export default App;
