import React from 'react';
import { IconProps } from "./Icon.Component";

export const SensorWindow = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> <path fill={`${props.color ? props.color : 'black'}`} d="M15,4v12H5V4H15 M15,3H5C4.45,3,4,3.45,4,4v12c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1V4C16,3.45,15.55,3,15,3L15,3z M6,10 v5h8v-5H6z M8.5,9V8h3v1H14V5H6v4H8.5z"/> </g>
        </svg>
    )
}
