import React , {useState} from 'react';

function App() {

  const [name, setname] = useState('');

  const [fullname, setFullName] = useState();


  const inputEvent = (event) => {
    setname(event.target.value);
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    setFullName(name);
  }


  return (
    <>
    <form onSubmit = {onSubmit}>
    <h1>Hello {fullname} </h1>
    <input type="text" placeholder="Enter Your Name" onChange= {inputEvent} value= {name} />
    <button> Click Me</button>
    </form>
    </>
   
  );
}

export default App;
