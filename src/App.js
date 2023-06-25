import { useState } from "react";
import Usertable from "./tables/Usertable";
import AddUserForm from "./forms/AddUserForm";
import EditForm from "./forms/EditForm";

function App() {
  const userdata = [
    {
      id: 1,
      name: "John",
      username: "vrJohn",
    },
    {
      id: 2,
      name: "naveen",
      username: "prabu",
    },
    {
      id: 3,
      name: "damim",
      username: "ansari",
    },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [users, setUsers] = useState(userdata);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>Crud Operations</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditForm
                setEditing={setEditing}
                updateUser={updateUser}
                currentUser={currentUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>view user</h2>
          <Usertable editRow={editRow} users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
