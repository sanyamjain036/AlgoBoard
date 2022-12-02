import React from 'react'
import { Layer, Line } from 'react-konva';
const FreeDraw = ({lines}) => {
  return (
    <Layer>
        {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#000"
            //   strokeWidth={parseInt(penSize}
            strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
    </Layer>
  )
}

export default FreeDraw