import React, {useState} from 'react';

const Home = () => {
    const [Img, setImg] = useState('');


    

    const  inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);

    }


    return (
        <>
        <div className="searchbar">
         <input type="text" placeholder="Search Image" value={Img} onChange= {inputEvent} />
        <br /> <br />
        {Img === "" ? null :  <img src={`https://source.unsplash.com/400x300/?${Img}`} alt="SearchedImage" />} 
        {/* with this ternary opeerator we are checking , if the search box is empty display no pics. */}
       
         </div>
        </>
       


    );
};


export default Home;