import React from "react";
import { Line, Text, Rect, Group } from "react-konva";

const sin = (angle) => {
  return Math.sin(Math.PI * (angle / 180));
};
const cos = (angle) => {
  return Math.cos(Math.PI * (angle / 180));
};

const Stack = ({ elements }) => {
  const dimension = 50; //dimension should always be greater than 40
  const z = dimension - 20;
  return (
    <Group>
      {elements.map((ele, i) => {
        return (
          <React.Fragment key={i}>
            <Rect
              height={dimension}
              width={dimension}
              x={50}
              y={50 + dimension * i}
              stroke="black"
            />
            <Line
              x={50}
              y={50 + dimension * i}
              points={[0, 0, z * cos(30), -z * sin(30)]}
              stroke="black"
            />
            <Line
              x={100}
              y={50 + dimension * i}
              points={[0, 0, z * cos(30), -z * sin(30)]}
              stroke="black"
            />
            <Line
              x={100}
              y={100 + dimension * i}
              points={[0, 0, z * cos(30), -z * sin(30)]}
              stroke="black"
            />
            <Line
              x={50 + z * cos(30)}
              y={50 + dimension * i - z * sin(30)}
              points={[0, 0, dimension, 0]}
              stroke="black"
            />
            <Line
              x={100 + z * cos(30)}
              y={50 + dimension * i - z * sin(30)}
              points={[0, 0, 0, dimension]}
              stroke="black"
            />
            <Text
              y={65 + dimension * i}
              x={71}
              text={ele}
              fontSize={18}
              align="center"
              verticalAlign="middle"
              wrap="none"
              ellipsis={true}
            />
          </React.Fragment>
        );
      })}
    </Group>
  );
};

export default Stack;
