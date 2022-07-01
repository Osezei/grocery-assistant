import "./index.css";
import React, { useState, useEffect } from "react";
import List from "./list";
import Alert from "./alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "hello world",
    type: "success",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //deal with edit
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery assistant</h3>
        <div>
          <input
            type="text"
            placeholder="e.g. milk, eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} />
          <button>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
