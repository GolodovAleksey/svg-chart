import React from "react";
import { IElementDimensions, IRenderableElement } from "./interfaces";

type ISvgCanvas = IElementDimensions;

export const SvgCanvas: React.FC<ISvgCanvas> = ({width = '100%', height = '100%'}) => {
    return (
        <svg width={width} height={height} >
            <g
          stroke="black"
          strokeWidth={2}
          fill="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d={`M539,1
            L1,1 
            L1,329 
            L463,329 
            L493,300
            L539,300
            Z`}
          />
        </g>            
        </svg>)
};
