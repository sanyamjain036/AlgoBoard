import React from "react";
import "./navbar.css";
import { BiEraser } from "react-icons/bi";
import { BsPencil, BsLink } from "react-icons/bs";
import { VscSymbolArray } from "react-icons/vsc";
import { ImStack, ImCross } from "react-icons/im";
import { CgLoadbarSound } from "react-icons/cg";
import Tooltip from "@mui/material/Tooltip";

const Navbar = ({
  insertArray,
  insertStack,
  insertQueue,
  insertSLL,
  insertVariable,
  setTool,
  deleteText,
  // setPenSize,
  // penSize
}) => {
  return (
    <ul className="navbar-nav">
      <Tooltip title="Pen" arrow>
        <li>
          <BsPencil
            onClick={() => setTool("pen")}
            style={{ color: "black", fontSize: "27px" }}
          />
        </li>
      </Tooltip>
      {/* <li>
        <select className="size-dropdown" value={penSize} onChange={(e)=> setPenSize(e.target.value)}>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="27">27</option>
        </select>
      </li> */}
      <Tooltip title="Eraser" arrow>
        <li>
          <BiEraser
            onClick={() => setTool("eraser")}
            style={{ color: "black", fontSize: "27px" }}
          />
        </li>
      </Tooltip>
      <Tooltip title="Delete Text" arrow>
        <li>
          <ImCross onClick={() => deleteText()} />
        </li>
      </Tooltip>
      <Tooltip title="Array" arrow>
        <li onClick={insertArray}>
          <VscSymbolArray style={{ color: "black", fontSize: "27px" }} />
        </li>
      </Tooltip>
      <Tooltip title="Stack" arrow>
        <li onClick={insertStack}>
          <ImStack style={{ color: "black", fontSize: "27px" }} />
        </li>
      </Tooltip>
      <Tooltip title="Queue" arrow>
        <li onClick={insertQueue}>
          <CgLoadbarSound style={{ color: "black", fontSize: "34px" }} />
        </li>
      </Tooltip>
      {/* <li onClick={insertVariable}>
        <BsCardList style={{ color: "black", fontSize: "34px" }} />
      </li> */}
      <Tooltip title="Linked List" arrow>
        <li onClick={insertSLL}>
          <BsLink style={{ color: "black", fontSize: "34px" }} />
        </li>
      </Tooltip>
    </ul>
  );
};

export default Navbar;
