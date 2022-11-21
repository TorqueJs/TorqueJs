import React from 'react';
import { IconProps } from "./Icon.Component";

export const SensorDoor = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> <path fill={`${props.color ? props.color : 'black'}`} d="M15,3H5C4.45,3,4,3.45,4,4v13h12V4C16,3.45,15.55,3,15,3z M13,11c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C14,10.55,13.55,11,13,11z"/> </g>
        </svg>
    )
}
