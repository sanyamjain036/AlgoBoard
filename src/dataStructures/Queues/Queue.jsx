import React from "react";
import { Text, Rect, Group } from "react-konva";

const Queue = ({ elements }) => {
  return (
    <Group>
      {elements.map((ele, idx) => {
        return (
          <React.Fragment key={idx}>
            <Rect height={50} width={50} x={50 * idx} stroke="black" />
            <Text
              y={20}
              x={15 + 50 * idx}
              text={ele}
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
  );
};

export default Queue;
