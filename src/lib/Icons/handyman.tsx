import React from 'react';
import { IconProps } from "./Icon.Component";

export const Handyman = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M16.71,14.59l-3.54-3.54h-1.41l-0.34-0.34l-0.71,0.71l0.34,0.34v1.41l3.54,3.54c0.39,0.39,1.02,0.39,1.41,0L16.71,16 C17.1,15.61,17.1,14.98,16.71,14.59z"/> <path fill={`${props.color}`} d="M12.57,8.14L12.57,8.14l0.88,0.88l1.06-1.06l1.41,1.41c0.78-0.78,0.78-2.05,0-2.83l-2.47-2.47l-0.74,0.74l0-1.49 l-0.49-0.49L9.74,5.31l0.49,0.49l1.49,0l-0.74,0.74l0.88,0.88L10,9.29L7.51,6.81l0.15-1.26L5.36,3.23L3.23,5.36l2.31,2.31 l1.26-0.15L9.29,10l-1.05,1.05H6.83l-3.54,3.54c-0.39,0.39-0.39,1.02,0,1.41L4,16.71c0.39,0.39,1.02,0.39,1.41,0l3.54-3.54v-1.41 L12.57,8.14z"/> </g> </g>
        </svg>
    )
}
