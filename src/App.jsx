import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {

  const [users, setUsers] = useState([]);
  const [esc, setEsc] = useState(false);
  
  const newUser = {
    name: "",
    lastname: "",
    age: "",
    gender: "",
    id: users.length + 1
  };
  
  const [form, setForm] = useState(newUser);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(form)
  }, [form]);


  function addUser() {
    setEsc(!esc);
    if (form.name && form.lastname && form.age && form.gender) {
      const neww = { ...form, id: users.length + 1 };
      const update = [...users, neww];
      setUsers(update);

      fetch("/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(update)
      })
        .then(res => res)
        .catch(err => console.error("Server error:", err));

      setForm({ name: "", lastname: "", age: "", gender: "", id: users.length + 1 });
    }
  }


  function deleteUserById(id) {
    setUsers(prev => prev.filter(user => user.id !== id));
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key == 'Escape' && setEsc(false));
    };

    window.addEventListener("keydown", handleKeyDown);

    setEsc(false);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <>
      <Header />
      {(esc && <h1>True</h1>) || <h1>False</h1>}
      <main>
        <button onClick={addUser}>Add User</button>
        <ul>
          {
            (users.length <= 0 && (<p>No users</p>) ||
              users.map(user => (
                <li className='li' key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.lastname}</p>
                  <p>{user.age}</p>
                  <p>{user.gender}</p>
                  <button onClick={() => deleteUserById(user.id)}>Delete</button>
                </li>
              ))
            )
          }
        </ul>
      </main>
      {(esc && <Modal add={addUser} form={handleChange} ne={form} />) || null}
    </>
  );
}

export default App;
