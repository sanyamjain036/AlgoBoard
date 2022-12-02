import React from "react";
import { Text, Rect, Group, Arrow, Line } from "react-konva";
import ArrayVariable from "./ArrayVariable";
const Array = ({ elements, setElements, pointers }) => {
  return (
    <>
      <Group>
        {elements.map((ele, idx) => {
          console.log(elements);
          return (
            <>
              {idx === 0 ? (
                <>
                  <Rect height={30} width={30} x={115} y={35} stroke="gray" />
                  <Line
                    x={119}
                    y={35}
                    points={[1, 4, 1, 26]}
                    tension={0.5}
                    stroke="gray"
                  ></Line>
                </>
              ) : (
                <></>
              )}
              <ArrayVariable
                value={ele}
                x={(idx + 1) * 100}
                setElements={setElements}
              />
            </>
          );
        })}
      </Group>

      <Group y={70}>
        {elements.map((ele, idx) => {
          return (
            <React.Fragment key={idx}>
              <Rect
                height={30}
                width={100}
                x={25 + (idx + 1) * 100}
                y={50}
                stroke="black"
              />
              <Text
                y={60}
                x={65 + (idx + 1) * 100}
                text={idx}
                width={15}
                align="center"
                verticalAlign="middle"
                wrap="none"
                ellipsis={true}
              />
            </React.Fragment>
          );
        })}
      </Group>

      {pointers.map((ele, idx) => {
        return (
          <Group key={idx} draggable>
            <Arrow
              points={[40, 40, 40, 20]}
              pointerLength={5}
              pointerWidth={5}
              stroke={ele.color}
              fill={ele.color}
              y={140}
              x={(parseInt(ele.idx, 10) + 1) * 100 + 25}
            />
            <Text
              y={160}
              x={70 + (parseInt(ele.idx, 10) + 1) * 100}
              text={ele.name}
              fontSize={20}
              fill={ele.color}
            />
          </Group>
        );
      })}
    </>
  );
};

export default Array;
