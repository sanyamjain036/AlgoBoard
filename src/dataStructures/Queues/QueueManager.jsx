import React, { useState, useRef } from "react";
import { Layer } from "react-konva";
import { Html } from "react-konva-utils";
import Queue from "./Queue.jsx";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { IoMdCloseCircle } from "react-icons/io";
import Button from "../../utils/UI/Button";
import Title from "../../utils/UI/Title";

const QueueManager = ({ toggleDrawer }) => {
  const [elements, setelements] = useState(["X"]);
  const [showDrawer, setShowDrawer] = useState(false);
  const insertRef = useRef(null);

  const push = () => {
    setelements([...elements, insertRef.current.value]);
    insertRef.current.value = "";
  };

  const pop = () => {
    if (elements.length === 1) return;
    let newEles = [...elements];
    newEles.shift();
    newEles[0] = "X";
    setelements([...newEles]);
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
      <Queue elements={elements} />
      <Html>
        <Drawer
          anchor="right"
          open={showDrawer}
          onClose={() => {
            setShowDrawer(false);
            toggleDrawer();
          }}
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
              <Title>Push Element</Title>
              <TextField
                inputRef={insertRef}
                InputLabelProps={{ style: { fontSize: 14 } }}
                margin="normal"
                size="small"
                label="Value"
              />
              <br />
              <Button handleClick={push}>Push</Button>
            </Box>
            <Box mb={2}>
              <Title>Pop Element</Title>
              <Button handleClick={pop}>Pop</Button>
            </Box>
          </section>
        </Drawer>
      </Html>
    </Layer>
  );
};

export default QueueManager;
