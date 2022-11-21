import React from 'react';
import { IconProps } from "./Icon.Component";

export const CleaningServices = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M13,9h-1V4c0-0.55-0.45-1-1-1H9C8.45,3,8,3.45,8,4v5H7c-1.66,0-3,1.34-3,3v5h12v-5C16,10.34,14.66,9,13,9z M15,16h-2v-1.5 c0-0.28-0.22-0.5-0.5-0.5S12,14.22,12,14.5V16h-1.5v-1.5c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5V16H8v-1.5 C8,14.22,7.78,14,7.5,14S7,14.22,7,14.5V16H5v-4c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2V16z"/> </g>
        </svg>
    )
}
