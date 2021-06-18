import React, { useState } from "react";
import todoimage from "../images/add.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItemHandle = () => {
    if (!inputData) {
      alert("Please !! Fill in the data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    // console.log(id);
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });
    // console.log(updateditems);

    setItems(updateditems);
  };

  const removeAllHandle = () => {
    setItems([]);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoimage} alt="icon" />
            <figcaption> YOUR PERSONAL TODO LIST </figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Tasks"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Tasks"
                onClick={addItemHandle}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Update Task"
                onClick={addItemHandle}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>

                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Task"
                      onClick={() => editItem(elem.id)}
                    ></i>

                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Task"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAllHandle}
            >
              <span>CHECKLISt</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
