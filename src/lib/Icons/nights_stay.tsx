import React from 'react';
import { IconProps } from "./Icon.Component";

export const NightsStay = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color}`} d="M9.38,10.05C7.75,6.89,9.03,4.11,9.76,3C6,3.13,3,6.21,3,9.99c0,0.4,0.04,0.78,0.1,1.16C3.39,11.06,3.69,11,4,11 c0.86,0,1.68,0.38,2.24,1.01C7.51,12.13,8.5,13.2,8.5,14.5c0,0.83-0.41,1.56-1.04,2.02C8.25,16.82,9.11,17,10.01,17 c2.45,0,4.6-1.26,5.86-3.17C14.21,13.99,10.98,13.16,9.38,10.05z"/> </g> <path fill={`${props.color}`} d="M6,13l-0.27,0C5.38,12.4,4.74,12,4,12c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c0.53,0,1.54,0,2,0c0.83,0,1.5-0.67,1.5-1.5 S6.83,13,6,13z"/> </g> </g>
        </svg>
    )
}
