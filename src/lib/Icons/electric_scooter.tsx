import React from 'react';
import { IconProps } from "./Icon.Component";

export const ElectricScooter = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M15,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.1,10,15,10z M15,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S15.55,13,15,13z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M12,11.99C12,10.34,13.34,9,14.99,9l0.24,0l-1.2-5.22C13.93,3.32,13.52,3,13.05,3H10v1h3.05l0.95,4.14 c-1.57,0.4-2.75,1.72-2.96,3.36H6.93c-0.26-1.01-1.29-1.72-2.44-1.44c-0.71,0.18-1.29,0.78-1.44,1.5C2.77,12.86,3.75,14,5,14 c0.93,0,1.71-0.64,1.93-1.5H12V11.99z M5,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S5.55,13,5,13z"/> <polygon points="9.5,15 7,15 10.5,17 10.5,16 13,16 9.5,14"/> </g> </g>
        </svg>
    )
}
