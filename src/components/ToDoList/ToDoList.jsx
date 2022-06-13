import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import List from "../List/List";
import Card from "@mui/material/Card";
import "./ToDoList.css";
import { useState } from "react";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [storeItem, setStoreItem] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = () => {
    setStoreItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem(" ");
  };
  return (
    <>
      <Card className="card">
        <div className="main_div">
          <h1>ToDo List</h1>
          <div className="center_div">
            <br />

            <TextField
              id="outlined-basic"
              placeholder="Add an Items"
              onChange={handleChange}
              variant="outlined"
              value={item}
            />

            <Button id="btn" variant="contained" onClick={handleClick}>
              <AddIcon />
            </Button>

            <br />
          </div>
          <ul>
            {storeItem.map((val, i) => {
              return <List text={val} key={i} />;
            })}
          </ul>
        </div>
      </Card>
    </>
  );
};

export default ToDoList;
