import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsVolleyball = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M7.03,16.33C7.93,16.76,8.94,17,10,17c2.41,0,4.54-1.22,5.8-3.08l-2.3-1.33L7.03,16.33z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M9.5,9.71V3.03C8.61,3.09,7.77,3.32,7,3.68v7.47L9.5,9.71z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M10,10.58l-5.8,3.35c0.49,0.72,1.11,1.34,1.82,1.83l6.47-3.74L10,10.58z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M6,4.26C4.19,5.53,3,7.62,3,10c0,1.1,0.26,2.13,0.71,3.05L6,11.73V4.26z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M10.5,6.82v2.89l5.79,3.34c0.37-0.76,0.61-1.6,0.68-2.49L10.5,6.82z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M16.97,9.41c-0.29-3.42-3.03-6.14-6.47-6.39v2.64L16.97,9.41z"/> </g> </g>
        </svg>
    )
}
