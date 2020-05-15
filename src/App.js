import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import Results from './components/Results';

function App() {
  // const [state, setState]= useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   passwordConfirm: ""
  // })
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [passwordConfirm, setPasswordConfirm]= useState("");
  const [users, setUsers]= useState([]);

  const createUser=(e)=>{
    e.preventDefault();
    // if(firstName.value.length<1){

    // }
    const newUser= {firstName, lastName, email, password, passwordConfirm};
    console.log(newUser);
    
    setUsers([...users, newUser])
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    console.log("welcome", newUser.firstName);
    console.log(users);
    
  };
  return (
    <div className="App">
     <RegisterForm firstName={firstName} lastName={lastName} email={email} password={password} passwordConfirm={passwordConfirm} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} setPasswordConfirm={setPasswordConfirm} createUser={createUser} />
     <Results firstName={firstName} lastName={lastName} email={email} password={password} passwordConfirm={passwordConfirm} users={users} />
    </div>
  );
}

export default App;
