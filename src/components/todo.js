import React, { useState } from "react";
function Todo() {
  const [todoData, setTodo] = useState("");
  const [Additems, setItem] = useState([]);
  const [Edititems, setEditItem] = useState("");
  const [classSwitch, setClassSwitch] = useState("Edit-container-invisible");
  const [saveEdit, setSaveEdit] = useState("");
  // console.log(todoData);

  function AddtoList(event) {
    if (todoData == "") {
    } else {
      setItem([...Additems, todoData]);
      // console.log(Additems);
    }
    setTodo("");
    event.preventDefault();
  }

  function Delete(unique) {
    let afterDelete = Additems.filter((elem, ind) => {
      return ind != unique;
    });
    setItem(afterDelete);
  }
  function Save() {
    setClassSwitch("Edit-container-invisible");
    Additems.splice(saveEdit, 1, Edititems);
    // console.log(Additems);
    // console.log(saveEdit);
    // console.log(classEdit);
  }

  function Edit(unique) {
    setSaveEdit(unique);
    setEditItem(Additems[unique]);
    setClassSwitch("Edit-container-visible");
    // console.log(Edititems);
    // console.log(classEdit);
  }
  return (
    <>
      <div className="Form-container">
        <h2>TODO LIST</h2>
        <form id="Form">
          <textarea
            value={todoData}
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            placeholder="Enter todo Item..."
          />
          <button type="submit" onClick={AddtoList}>
            Add Todo
          </button>
        </form>
        <div className={classSwitch}>
          <textarea
            id="editArea"
            value={Edititems}
            onChange={(event) => {
              setEditItem(event.target.value);
            }}
          />
          <button
            id="save"
            type="submit"
            onClick={() => {
              Save();
            }}
          >
            Save Change
          </button>
        </div>

        {Additems.map((elem, ind) => {
          return (
            <div className="added-item-container" key={ind}>
              <p className="Added_item">{elem}</p>
              <button
                onClick={() => {
                  Edit(ind);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button
                onClick={(event) => {
                  Delete(ind);
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Todo;
