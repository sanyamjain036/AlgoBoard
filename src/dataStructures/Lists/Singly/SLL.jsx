import React from 'react';
import { Rect, Arrow, Line} from "react-konva";
import SLLNode from './SLLNode';

const SLL = ({elements, setElements}) => {
  // console.log(elements);
    return (
      <>
        {elements.map((ele, idx) => {
          
          return (
            <>
            {
              idx === 0 ? (
              <>
                <Rect height={30} width={30} x={155} y={35} stroke="gray" />
                <Line 
                  x={159}
                  y={35}
                  points={[1, 4, 1, 26]}
                  tension={0.5}
                  stroke="gray"></Line>
              </>
              ):(
                <></>
              )
            }
            <SLLNode value = {ele} x = {(idx+1)*140} setElements = {setElements}/>
            {
              idx !== 0 ? (
                <Arrow
                points={[0, 20, 40, 20]}
                pointerLength={5}
                pointerWidth={5}
                stroke={"black"}
                fill={"black"}
                y={30}
                x={-20+(idx+1) * 140}
                />
              ):(
                <></>
              )
            }
            </>
          );
        })
      }    
      </>
        
    )
  };
  
export default SLL;