import React , {useState} from 'react';

const App = () => {

  const [fullName , setFullName] = useState({
    fName : "",
    lName : "",
    email : "",
    phone : "",

  });


  const inputHandle = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setFullName((preVal)=>{
      return {
        ...preVal,  //SPREAD OPERATOR
        [name] : value,
      };

    });

  }

  const submitHandle = (event) => {
    event.preventDefault();
    alert("Sign In Successfull");
  }

  return (
    <>
    <form action="">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <br />
      <h2>{fullName.email}</h2>
      <br />
      <h3>{fullName.phone}</h3>
      <br />
      <input type="text" placeholder="Enter first name" name = "fName" onChange={inputHandle} value={fullName.fName} />
      <br />
      <input type="text" placeholder="Enter last name" name = "lName" onChange={inputHandle} value={fullName.lName} />
      <br />
      <input type="text" placeholder="Enter email " name = "email" onChange={inputHandle} value={fullName.email} />
      <br />
      <input type="text" placeholder="Enter phone number" name = "phone" onChange={inputHandle} value={fullName.phone} />
      <br />
      <button type="submit">Click Me</button>
    </form>
    </>
   
  );
}

export default App;
