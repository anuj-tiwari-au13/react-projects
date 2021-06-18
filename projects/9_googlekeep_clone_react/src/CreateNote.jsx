import React , {useState} from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);

  const [note , setNote] = useState({

     title : '',
     content :'',
  });




  const inputEvent = (event)=>{

    const value = event.target.value;
    const name = event.target.name;


    setNote((prevData) =>{
      return {
        ...prevData,
        [name] : value,
      };
    }); 


  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title : '',
      content : '',

    });

  };

  const expandIt = () => {
    setExpand(true);
  };

  const btoNormal = () => {
    setExpand(false);
  };


  return (
    <>
    <div className="main_note" onDoubleClick={btoNormal}>
        <form >

         {expand ?  ( <input type="text" placeholder="Title" autoComplete="off" name="title" value={note.title} onChange= {inputEvent} /> ) : null }
            
            <textarea column="" rows="" placeholder="write a note..." name="content" value={note.content} onChange={inputEvent} onClick={expandIt}  ></textarea>
           
           {expand ? ( <Button onClick={addEvent}>
                    <AddIcon className="plus-sign" />
            </Button>) : null }
        </form>

    </div>
    </>
   
  );
}

export default CreateNote;
