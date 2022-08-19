import React from 'react';
import { IconProps } from "./Icon.Component";

export const ScatterPlot = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <circle fill={`${props.color}`} cx="7" cy="14" r="3"/> <circle fill={`${props.color}`} cx="11" cy="6" r="3"/> <circle fill={`${props.color}`} cx="16.6" cy="17.6" r="3"/> </g>
        </svg>
    )
}
