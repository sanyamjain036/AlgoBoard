import React, { useState} from "react";
import { Layer} from "react-konva";
import { Html } from "react-konva-utils";
import Drawer from '@mui/material/Drawer';
import {MdDragHandle} from "react-icons/md"
import Variable from './Variable.jsx';

const VariableManager = ({x,y}) => {
  // const [elements, setelements] = useState(["X"]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isDragabble,setDraggable] = useState(false);
  const toggleDrawer = (open) => {
    setShowDrawer(open);
  };

  const backProp = {
    BackdropProps: {
      invisible: true,
    },
  };

  return (
    <Layer draggable
     
      onClick={(e) => {
        toggleDrawer(true);
      }}
    >
      <Variable  draggable = {isDragabble}/>

      <Html>
      <div onClick={(e)=>{console.log("hello"); setDraggable(!isDragabble)}}   style={{
            position: "relative",
            top: "97px",
            left: "56px"
      }}>
      <MdDragHandle/>
      </div>
      </Html>
      <Html>
      
        <Drawer
          anchor="right"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          ModalProps={backProp}
          elevation={1}
        >
          <section style={{ padding:"10px" , backgroundColor:"#eeeeee", height:"100%"}}>
            <div>
              
            </div>
          </section>
        </Drawer>
      </Html>

    </Layer>
  );
}

export default VariableManager
