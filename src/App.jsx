import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userFound, setUserFound] = useState({});
  const [idToFind, setIdToFind] = useState();

  async function fetchUsers() {
    const fetchedUsers = await axios.get("/api/users");
    setUsers(fetchedUsers.data);
  }
  async function fetchOneUser() {
    const fetchedUsers = await axios.get("/api/users/" + idToFind);
    setUserFound(fetchedUsers.data);
  }

  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button onClick={fetchUsers}>Fetch Users</button>
      <hr />
      <input
        type="number"
        onChange={(e) => setIdToFind(e.target.value)}
        value={idToFind}
      />

      <div>{JSON.stringify(userFound)}</div>
      <button onClick={fetchOneUser}>Fetch One User</button>
    </div>
  );
}

export default App;
