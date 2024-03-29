import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsHockey = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M3,14v2h1v-3C3.45,13,3,13.45,3,14z"/> </g> <g> <polygon points="12.32,13 11.1,10.34 14,4 11.8,4 10,7.94 8.2,4 6,4 8.9,10.34 10,12.74 11.5,16 15,16 15,13"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M16,13v3h1v-2C17,13.45,16.55,13,16,13z"/> </g> <g> <polygon points="7.68,13 5,13 5,16 8.5,16 9.45,13.94 8.35,11.54"/> </g> </g> </g>
        </svg>
    )
}
