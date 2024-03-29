import React from 'react';
import { IconProps } from "./Icon.Component";

export const KingBed = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M16,8V6c0-0.55-0.45-1-1-1H5C4.45,5,4,5.45,4,6v2C3.45,8,3,8.45,3,9v4h1l0.75,2h0.5L6,13h8l0.75,2h0.5L16,13h1V9 C17,8.45,16.55,8,16,8z M9.5,8H5V6h4.5V8z M15,8h-4.5V6H15V8z"/> </g>
        </svg>
    )
}
