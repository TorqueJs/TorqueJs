import React from 'react';
import { IconProps } from "./Icon.Component";

export const MedicalServices = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M16,6h-3V4c0-0.55-0.45-1-1-1H8C7.45,3,7,3.45,7,4v2H4C3.45,6,3,6.45,3,7v9c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1V7 C17,6.45,16.55,6,16,6z M8,4h4v2H8V4z M12.5,12h-2v2h-1v-2h-2v-1h2V9h1v2h2V12z"/> </g> </g>
        </svg>
    )
}
