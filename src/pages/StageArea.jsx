import React from "react";
import { Stage } from "react-konva";
import FreeDraw from "../dataStructures/FreeDraw/FreeDraw";
const StageArea = ({
  arrays,
  stacks,
  queues,
  variables,
  sll,
  tool,
  lines,
  setLines
  // penSize,
}) => {
 
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div style={{ height: "100vh" }}>
      <Stage
        height={window.innerHeight * 0.85}
        width={window.innerWidth * 0.935}
        style={{backgroundColor: "#FFF" }}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        {arrays}
        {stacks}
        {queues}
        {variables}
        {sll}
        <FreeDraw lines={lines}  />
      </Stage>
    </div>
  );
};

export default StageArea;
