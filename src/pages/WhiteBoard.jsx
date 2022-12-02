import React, { useState } from "react";
import "../components/navbar/Navbar";
import Navbar from "../components/navbar/Navbar";
import ArrayManager from "../dataStructures/Arrays/ArrayManager";
import StackManager from "../dataStructures/Stacks/StackManager";
import QueueManager from "../dataStructures/Queues/QueueManager";
import VariableManager from "../dataStructures/Variable/VariableManager";
import StageArea from "./StageArea";
import Grid from "@mui/material/Grid";
import SLLManager from "../dataStructures/Lists/Singly/SLLManager";

export default function WhiteBoard() {
  const [lines, setLines] = React.useState([]);
  const [tool, setTool] = React.useState("pen");
  // const [penSize,setPenSize]=useState("9");
  const [arrays, setArrays] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [queues, setQueues] = useState([]);
  const [variables, setVariables] = useState([]);
  const [sll, setSll] = useState([]);
  const [isDrawer, SetIsDrawer] = useState(false);

  const deleteText = () => {
    setLines([]);
  };
  
  //toggling Drawer
  const toggleDrawer = () => {
    SetIsDrawer((prev) => !prev);
  };

  // creating an Array
  const insertArray = () => {
    let num = parseInt(window.prompt("enter number of elements").trim(), 10);
    let elements = window
      .prompt(`Enter ${num} elements separated by space`)
      .trim()
      .split(" ");
    let newArr = elements.map((ele) => parseFloat(ele));
    setArrays((prev) => [
      ...prev,
      <ArrayManager array={newArr} toggleDrawer={toggleDrawer} />,
    ]);
  };

  // creating a stack
  const insertStack = () => {
    setStacks((prev) => [
      ...prev,
      <StackManager toggleDrawer={toggleDrawer} />,
    ]);
  };

  //creating a queue
  const insertQueue = () => {
    setQueues((prev) => [
      ...prev,
      <QueueManager toggleDrawer={toggleDrawer} />,
    ]);
  };

  const insertVariable = () => {
    console.log("Variable");
    setVariables((prev) => [...prev, <VariableManager />]);
  };

  //creating a SLL
  const insertSLL = () => {
    setSll((prev) => [...prev, <SLLManager />]);
  };

  return (
    <>
      <h2 className="heading"> WhiteBoard </h2>
      <Grid container style={{ height: "100%" }} spacing={1} columns={40}>
        <Grid item xs={2}>
          <Navbar
            insertArray={insertArray}
            insertStack={insertStack}
            insertQueue={insertQueue}
            insertVariable={insertVariable}
            insertSLL={insertSLL}
            setTool={setTool}
            deleteText={deleteText}
          />
        </Grid>
        <Grid item xs={isDrawer ? 30 : 38}>
          <StageArea
            arrays={arrays}
            stacks={stacks}
            queues={queues}
            variables={variables}
            sll={sll}
            tool={tool}
            lines={lines}
            setLines={setLines}
          />
        </Grid>
        {isDrawer && <Grid item xs={8}></Grid>}
      </Grid>
    </>
  );
}
