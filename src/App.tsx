import React from 'react';
import {useUsers} from './hooks';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

function App() {
  let userResponse = useUsers();
  console.log('123', userResponse)
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
        <UserList users={userResponse.users} />
        
        <p>
          {/* TODO: 
            When users are selected, display a greeting with their first name 
            
            eg: 👋 Well, hello Richard, Dinesh!

          */}
        </p>
      </main>
    </div>
  );
}

export default App;
