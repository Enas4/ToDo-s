import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import "./List.css";

const List = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="deleteDiv">
      <span onClick={cutIt}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "null" }}>
        {props.text}
      </li>
    </div>
  );
};

export default List;
