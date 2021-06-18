import React, {useState} from 'react';


const App =() =>{

const purple = "#8e44ad";
//state for background color
const [bg, setBg] = useState(purple);

// State for text On button
let initialText = "Click Me";
const [text,setText] = useState(initialText);


const bgChange = () => {
  let tempBg = Math.floor(Math.random()*16777215).toString(16);
  let newBg = "#" + tempBg ;
  setBg(newBg);

  let newText = "Change Color Again";
  setText(newText);
};



  return (
    <div style = {{background:bg}}>
      <button onClick= {bgChange}> {text} </button>
    </div>
   
  );
}


export default App;
