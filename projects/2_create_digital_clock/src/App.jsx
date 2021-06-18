import React, {useState} from 'react';


const App = () => {

    let currtime = new Date().toLocaleTimeString();

    let [time, setTime] = useState(currtime) ;
    
    const updateTime = ()  =>{
        currtime = new Date().toLocaleTimeString();
        setTime(currtime);
    }

    setInterval(updateTime,1000);

    return (
        <>
        <h1>{time}</h1>
        </>
    );
}

export default App;
