import React, { useState, useRef } from "react";
import Array from "./Array";
import { Html } from "react-konva-utils";
import { Layer } from "react-konva";
import { getRandomColor } from "../../utils";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { IoMdCloseCircle } from "react-icons/io";
import Button from "../../utils/UI/Button";
import Title from "../../utils/UI/Title";

const ArrayManager = ({ array, toggleDrawer }) => {
  const [elements, setElements] = useState(array);
  const [pointers, setPointers] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const pointerName = useRef(null);
  const pointerIdx = useRef(null);
  const pushVal = useRef(null);
  const swapI1 = useRef(null);
  const swapI2 = useRef(null);

  const insert = (ele, idx) => {
    setElements((prev) => {
      let newA = [...prev];
      newA.splice(idx, 0, ele);

      return newA;
    });
  };
  const remove = (idx) => {
    setElements((prev) => {
      let newA = [...prev];
      newA.splice(idx, 1);

      return newA;
    });
  };

  const pushBack = () => {
    let val = parseInt(pushVal.current.value);
    insert(val, elements.length);
    pushVal.current.value = "";
  };

  const popBack = () => {
    remove(elements.length - 1);
  };

  const sort = () => {
    setElements((prev) => [...prev.sort()]);
  };

  const swap = () => {
    let i = swapI1.current.value;
    let j = swapI2.current.value;
    setElements((prev) => {
      let newA = [...prev];
      let temp = newA[i];
      newA[i] = newA[j];
      newA[j] = temp;

      return newA;
    });

    swapI1.current.value = "";
    swapI2.current.value = "";
  };

  const addPointer = () => {
    console.log("clicked", pointerIdx.current.value, pointerName.current.value);
    if (pointerIdx.current.value === "" || pointerName.current.value === "") {
      return;
    }

    let idx = parseInt(pointerIdx.current.value, 10);
    let name = pointerName.current.value;
    setPointers((prev) => [
      ...prev,
      {
        idx,
        name,
        color: getRandomColor(),
      },
    ]);

    pointerIdx.current.value = "";
    pointerName.current.value = "";
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
        setShowDrawer(true);
        toggleDrawer();
      }}
    >
      <Array elements={elements} pointers={pointers} setElements={setElements} />
      <Html>
        <Drawer
          anchor="right"
          open={showDrawer}
          ModalProps={backProp}
          elevation={1}
          variant="temporary"
          onClose={() => {
            setShowDrawer(false);
            toggleDrawer();
          }}
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
              <Title>Insert a pointer</Title>
              <TextField
                inputRef={pointerIdx}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="dense"
                size="small"
                label="Index"
              />
              <br />
              <TextField
                inputRef={pointerName}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="dense"
                size="small"
                label="Pointer Name"
              />
              <br />
              <Button handleClick={addPointer}> Add </Button>
            </Box>

            <Box mb={2}>
              <Title>Sort in non-decreasing order</Title>
              <Button handleClick={sort}>Sort</Button>
            </Box>

            <Box mb={2}>
              <Title>Push Back</Title>
              <TextField
                inputRef={pushVal}
                InputLabelProps={{ style: { fontSize: 14 } }}
                type="number"
                margin="dense"
                size="small"
                label="Value"
              />
              <br />
              <Button handleClick={pushBack}>Push</Button>
            </Box>

            <Box mb={2}>
              <Title>Pop Back</Title>
              <Button handleClick={popBack}>Pop</Button>
            </Box>

            <Box mb={2}>
              <Title>Swap</Title>
              <TextField
                inputRef={swapI1}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="dense"
                size="small"
                label="FirstIndex"
              />
              <br />
              <TextField
                inputRef={swapI2}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="dense"
                size="small"
                label="SecondIndex"
              />
              <br />
              <Button handleClick={swap}>Swap</Button>
            </Box>
          </section>
        </Drawer>
      </Html>
    </Layer>
  );
};

export default ArrayManager;
