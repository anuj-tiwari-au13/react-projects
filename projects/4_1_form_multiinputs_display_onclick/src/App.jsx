import React, {useState} from 'react';

function App() {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onSubmits = (event) => {
    event.preventDefault();
    setFirstName(fName);
    setLastName(lName);

  };
  
  const inputEventOne = (event) => {
    setFName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setLName(event.target.value);
  };

  


  return (
    <>
    <form onSubmit = {onSubmits} >
      <h1> HELLO {firstName}{lastName}</h1>
    <input type="text" placeholder="Enter First Name" onChange = {inputEventOne} value = {fName} />
    <br />
    <input type="text" placeholder= "Enter Last Name" onChange = {inputEventTwo} value = {lName}  />
    <br />
    <button type="submit" >Click Now</button>
    </form>
    </>
    
  );
}

export default App;
