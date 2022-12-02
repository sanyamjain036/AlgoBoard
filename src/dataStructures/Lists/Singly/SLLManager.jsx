import React, { useState, useRef } from "react";
import { Layer } from "react-konva";
import { Html } from "react-konva-utils";
import Drawer from "@mui/material/Drawer";
import { IoMdCloseCircle } from "react-icons/io";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "../../../utils/UI/Button";
import Title from "../../../utils/UI/Title";

import SLL from "./SLL";
const SLLManager = () => {
  const [elements, setElements] = useState(["X"]);
  const [showDrawer, setShowDrawer] = useState(false);
  const addFirstRef = useRef(null);
  const addLastRef = useRef(null);
  const addAtRef = useRef(null);
  const indexRef = useRef(null);

  const insert = (ele, idx) => {
    setElements((prev) => {
      let newA = [...prev];
      newA.splice(idx, 0, parseInt(ele));
      return newA;
    });
  };

  const addAt = (insertRef, idx) => {
    if (idx < 1 || idx > elements.length) {
      insertRef.current.value = "";
      return;
    }
    let val = insertRef.current.value;
    insert(val, idx);
    insertRef.current.value = "";
  };

  const toggleDrawer = (open) => {
    setShowDrawer(open);
  };

  const backProp = {
    BackdropProps: {
      invisible: true,
    },
  };

  return (
    <Layer
      draggable
      onClick={(e) => {
        toggleDrawer(true);
      }}
    >
      <SLL elements={elements} setElements={setElements} />

      <Html>
        <Drawer
          anchor="right"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          ModalProps={backProp}
          elevation={1}
        >
          <section className="manager-box">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Operations</h2>
              <IoMdCloseCircle
                onClick={() => {
                  setShowDrawer(false);
                  toggleDrawer();
                }}
              />
            </Box>
            <Box mb={2}>
              <Title>Add element in front</Title>
              <TextField
                inputRef={addFirstRef}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="normal"
                size="small"
                label="Value"
              />
              <br />
              <Button
                handleClick={() => {
                  addAt(addFirstRef, 1);
                }}
              >
                ADD
              </Button>
            </Box>
            <Box mb={2}>
              <Title>Add element at index i</Title>
              <TextField
                inputRef={indexRef}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="normal"
                size="small"
                label="Index"
              />
              <br />
              <TextField
                inputRef={addAtRef}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="normal"
                size="small"
                label="Value"
              />
              <br />
              <Button
                handleClick={() => {
                  addAt(addAtRef, indexRef.current.value);
                  indexRef.current.value = "";
                }}
              >
                ADD
              </Button>
            </Box>
            <Box mb={2}>
              <Title>Add element at last</Title>
              <TextField
                inputRef={addLastRef}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="normal"
                size="small"
                label="Value"
              />
              <br />
              <Button
                handleClick={() => {
                  addAt(addLastRef, elements.length);
                }}
              >
                ADD
              </Button>
            </Box>
          </section>
        </Drawer>
      </Html>
    </Layer>
  );
};

export default SLLManager;
