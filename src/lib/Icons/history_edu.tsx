import React from 'react';
import { IconProps } from "./Icon.Component";

export const HistoryEdu = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M7,4v0.73c-0.68-0.32-1.4-0.5-2.13-0.5c-1.28,0-2.56,0.49-3.54,1.46l2.12,2.12h1.41L4.76,9.13 c0.62,0.62,1.42,0.92,2.23,0.92c0,0,0.01,0,0.01,0V12H5v2.5C5,15.33,5.67,16,6.5,16H14c1.1,0,2-0.9,2-2V4H7z M6.99,9.05 c-0.43,0-0.84-0.12-1.19-0.36l0.15-1.87H3.87L2.84,5.79c0.61-0.36,1.31-0.55,2.03-0.55c1.07,0,2.07,0.42,2.83,1.17l1.41,1.41 l-0.6,0.6C8.1,8.82,7.56,9.05,6.99,9.05z M15,14c0,0.55-0.45,1-1,1s-1-0.45-1-1v-2H8V9.87c0.44-0.15,0.86-0.39,1.22-0.74l0.6-0.6 L12.29,11H13v-0.71L8.4,5.7C8.28,5.57,8.14,5.48,8,5.37V5h7V14z"/> </g> </g>
        </svg>
    )
}
