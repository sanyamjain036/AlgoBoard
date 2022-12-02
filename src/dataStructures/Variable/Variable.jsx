import React, { useState } from 'react';
import {Rect, Group} from "react-konva";
import { Html } from 'react-konva-utils';
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
import Button from '@mui/material/Button';
import styles from "./variable.module.css";
console.log(styles)
const Variable = ({value = 0, draggable}) => {
    // states 
    const [score, setScore] = useState(value); // state for the value of the variable.
    // console.log(score);
    // handler functions

    // handler for the input change
    const changeHandler = (e)=>{
        if(e.target.value === "" || e.target.value === "-"){
            setScore(e.target.value);
            return;
        }
        let value = parseInt(e.target.value);

        if(isNaN(value)){
            setScore(0);
            return;
        }

        if(value < -100){
            setScore(-100);
        }else if(value > 100)setScore(100);
        else setScore(value);

    }

    // blur handler
    const blurHandler = (e)=>{
        if(e.target.value === "" || e.target.value === "-"){
            setScore(0);
        }
    }

    // conditionally rendering as dom is not updated for Html???..reason :: TODO::
    
    return (
      <Group>
                <Rect height={100} width={100} x={25} stroke="black" />
            
                {
                    draggable ? (<Html draggable
                        divProps={{
                            style: {
                                height:"50px",
                                width:"50px",
                              top: 100,
                              left: '24px',
                              zIndex : "-100"
                        
                            },
                          }}
                        >
                            
                            <div style={{width:'100px', 'height':'100px', 'display':'flex'}}>
                                {/* <Button id="num" variant="outlined" color="inherit"
                                style={{width:'75px', 'height':'100px', 'borderTopRightRadius':'0', 'borderBottomRightRadius':'0', 'borderRightColor':'none'}}>
                                    {score}</Button> */}
        
                                    <input className={styles.input} value = {score}  onChange = {changeHandler} onBlur={blurHandler}/>
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
                        </Html>) :(<Html draggable
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

                            <input className={styles.input} value = {score}  onChange = {changeHandler} onBlur={blurHandler}/>
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
                </Html>)
                }
   
         
      </Group>
    )
}

export default Variable
