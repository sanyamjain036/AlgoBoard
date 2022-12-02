import React, { useState, useEffect} from 'react';
import { Group, Rect} from "react-konva";
import { Html } from "react-konva-utils";

import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';

import Button from '@mui/material/Button';
import styles from "../Variable/variable.module.css";


const Variable = ({value = 0, idx, setElements}) => {
  // states 
  let [score, setScore] = useState(value); // state for the value of the variable.
  // console.log(score);
  // handler functions
  useEffect(()=>{
    setScore(value)
  },[value])

  useEffect(()=>{
    setElements((prev)=>{
        
      let newA = [...prev];
      newA[idx] = score;
      return newA;
    })
  }, [score,idx ,setElements])
  // handler for the input change
  const changeHandler = (e)=>{
      
      if(e.target.value === "" || e.target.value === "-"){
          setScore(e.target.value);
          return;
      }
      let val = parseInt(e.target.value);

      if(isNaN(val)){
          setScore(0);
          return;
      }
      setElements((prev)=>{
        
        let newA = [...prev];
        newA[idx] = val;
        return newA;
      })
      if(val < -100){
          setScore(-100);
      }else if(val > 100)setScore(100);
      else setScore(val);

  }

  // blur handler
  const blurHandler = (e)=>{
      if(e.target.value === "" || e.target.value === "-"){
          setScore(0);
      }
  }

  return (
    <Group>
              <Rect height={100} width={100} x={25} stroke="black" />
          
              <Html draggable
              divProps={{
                  style: {
                      height:"50px",
                      width:"50px",
                    top: 100,
                    left: '24px',
            
              
                  },
                }}
              >
                  
                  <div style={{width:'100px', 'height':'100px', 'display':'flex'}}>
                      {/* <Button id="num" variant="outlined" color="inherit"
                      style={{width:'75px', 'height':'100px', 'borderTopRightRadius':'0', 'borderBottomRightRadius':'0', 'borderRightColor':'none'}}>
                          {score}</Button> */}

                          <input className={styles.input} value = {score}  onInput = {changeHandler} onBlur={blurHandler}/>
                      <div style={{'display':'flex', 'flexDirection':'column', 'zIndex':'10'}}>
                          <Button id="p1" 
                              variant="contained"
                              onClick={() => score < 100 && setScore(score + 1)}  
                              style={{height:'50px','minWidth':'25px', 'zIndex':'10','borderTopLeftRadius':'0', 'borderBottomLeftRadius':'0', 'borderBottomRightRadius':'0', 'padding':'0'}}>
                                  <AiOutlineUp/>
                          </Button>
                          <Button id="p2" 
                              variant="contained"
                              style={{height:'50px', 'minWidth':'25px', 'borderTopLeftRadius':'0', 'borderBottomLeftRadius':'0','borderTopRightRadius':'0', 'padding':'0'}}
                              onClick={() => score > -100 && setScore(score - 1)}>
                              <AiOutlineDown/>
                          </Button>
                      </div>
                  </div>
              </Html>
       
    </Group>
  )
}
const ArrayVariable = ({value, x, setElements}) => {
  const idx = x/100-1;
  // console.log((value)+" "+(x/140-1));
  return (
    <>
      <Group x = {x}  >
          <Variable value = {value} idx = {idx} setElements = {setElements}/>
      </Group>
      
    </>
      
  )
};

export default ArrayVariable;
