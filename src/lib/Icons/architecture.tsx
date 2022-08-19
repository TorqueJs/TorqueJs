import React from 'react';
import { IconProps } from "./Icon.Component";

export const Architecture = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M6.67,14.89L6.79,16l0.81-0.77l1.92-5.28C9.19,9.9,8.87,9.79,8.58,9.63L6.67,14.89z"/> <path fill={`${props.color}`} d="M11.42,9.63c-0.29,0.16-0.61,0.27-0.95,0.32l1.92,5.28L13.21,16l0.13-1.11L11.42,9.63z"/> <path fill={`${props.color}`} d="M12,7c0-0.93-0.64-1.71-1.5-1.93V4h-1v1.07C8.64,5.29,8,6.07,8,7c0,1.1,0.9,2,2,2S12,8.1,12,7z M10,8C9.45,8,9,7.55,9,7 c0-0.55,0.45-1,1-1s1,0.45,1,1C11,7.55,10.55,8,10,8z"/> </g> </g>
        </svg>
    )
}