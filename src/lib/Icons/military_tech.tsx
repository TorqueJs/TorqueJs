import React from 'react';
import { IconProps } from "./Icon.Component";

export const MilitaryTech = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M13.16,13.29l-2.27-0.19l-0.56-1.31l2.45-1.63C12.92,10.06,13,9.9,13,9.73V3H7v6.73c0,0.17,0.08,0.32,0.22,0.42l2.45,1.63 l-0.56,1.31l-2.27,0.19l1.72,1.49L8.05,17L10,15.82L11.95,17l-0.52-2.22L13.16,13.29z M9.5,4h1v6.46L10,10.8l-0.5-0.33V4z"/> </g>
        </svg>
    )
}
