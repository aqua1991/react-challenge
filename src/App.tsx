import React from 'react';
import { useState } from "react";
import {useUsers} from './hooks';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

function App() {
  const userResponse = useUsers();
  const users = userResponse.users;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onSelect = (ids: string[]) => {
    setSelectedIds(ids);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>
          Who would you like to greet?
        </p>

        {/* TODO: Fill in the list of users with useUsers hook */}
        <UserList users={users} selectedIds={selectedIds} onSelect={onSelect}/>
        <p>
          👋 Well, hello {users.map((user)=> {
            if(selectedIds.indexOf(user.id) >= 0) {
              return user.firstName + ',';
            }
          })} !
        </p>
      </main>
    </div>
  );
}

export default App;
