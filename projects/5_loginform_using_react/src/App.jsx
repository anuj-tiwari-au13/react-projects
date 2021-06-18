import React, {useState} from 'react' ; 


const App = () => {

  const [fullName, setFullName] = useState({

    fName : "",
    lName : "", 
    email : "",
    phone : "",

  });


  const inputHandle = (event) => {

    const value = event.target.value;
    const name = event.target.name;
  
  
  
    setFullName((preValue) =>{
  
      if (name === "firstName"){
       return{
  
        fName: value,
        lName: preValue.lName,
        email : preValue.email,
        phone : preValue.phone,
  
      };
  
     } else  if (name === "lastName"){
      return{
  
        fName: preValue.fName,
        lName: value,
        email : preValue.email,
        phone : preValue.phone,
  
      };
  
    } else if (name === "emailName"){
      return{
 
       fName: preValue.fName, 
       lName: preValue.lName,
       email: value,
       phone : preValue.phone,
 
     };
 
    } else if (name === "phoneName"){
      return{
 
       fName: preValue.fName,
       lName: preValue.lName,
       email : preValue.email,
       phone : value,
 
     };
    }
  })
  }

  const submitHandle =(event) =>{
    event.preventDefault();
  
  
  }



  return (
    <>
    <form onSubmit={submitHandle}>
      <h1> Hello {fullName.fName} {fullName.lName} </h1>
      <p> {fullName.email} </p>
      <p> {fullName.phone}</p>
      <input type="text" placeholder="Enter First Name" name="firstName" onChange={inputHandle} value={fullName.fName} />
      <br />
      <input type="text" placeholder="Enter Last Name" name="lastName" onChange={inputHandle} value={fullName.lName} />
      <br />
      <input type="text" placeholder="Enter Email" name="emailName" onChange={inputHandle} value={fullName.email} />
      <br />
      <input type="text" placeholder="Enter Phone Number" name="phoneName" onChange={inputHandle} value={fullName.phone} />
      <br />
      <button type="submit"> Sign In</button>

    </form>
   </>
  );
}

export default App;
