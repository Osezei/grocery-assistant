import "./input.css";
import React, { useState, useEffect } from "react";
import List from "./list";
import Alert from "./alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, "danger", "enter something boss");
    } else if (name && isEditing) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "your item hass been changed Boss");
    } else {
      showAlert(true, "success", "it has been added to the list, boss");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "your stuff has been removed boss");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className=" my-8  bg-[#3d3b3b]">
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="p-3 text-center font-semibold text-xl"
        >
          <div className="bg-[#fff] capitalize m-4">
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
          </div>
          <h3 className="font-serif text-center uppercase text-sky-50 font-semibold text-2xl">
            Grocery assistant
          </h3>
          <div className="text-center my-3">
            <input
              type="text"
              placeholder="e.g. milk, eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded p-1 active:bg-[#e21f1f]"
            />
            <button
              type="submit"
              className="mx-2 bg-[#fff] capitalize text-xl rounded p-1 hover:bg-[#e21f1f]"
            >
              {" "}
              {isEditing ? "edit" : "submit"}{" "}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="text-center">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              onClick={clearList}
              className="bg-[#e21f1f] text-white capitalize text-xl rounded p-2 hover:bg-[black] mb-8"
            >
              clear items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
