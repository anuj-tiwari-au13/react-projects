import React , {useState} from 'react';



const App = () => {
  const [fullName , setFullName] = useState({

    fname:"",
    lname:"",

  });

const inputEvent = (event) => {

  const value = event.target.value;
  const name = event.target.name;



setFullName((preValue) =>{

  if (name === "pehlaNaam"){
    return{

      fname: value,
      lname: preValue.lname,

    };

  } else  if (name === "doosraNaam"){
    return{

      fname: preValue.fname,
      lname: value,

    };

  } 
})
}
  

const onSubmits =(event) =>{
  event.preventDefault();


}
  
  
  
  return (
    <form onSubmit = {onSubmits}>
      <h1>HELLO {fullName.fname} {fullName.lname}</h1>
      <input type="text" placeholder = "Enter first name" onChange = {inputEvent}  name = "pehlaNaam" value ={fullName.fname} />
      <br />
      <input type="text" placeholder = "Enter last name" onChange = {inputEvent}  name = "doosraNaam" value ={fullName.lname} />
      <br />
      <button type="submit" >Submit Now</button>

    </form>
   
  );
}

export default App;
