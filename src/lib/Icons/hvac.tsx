import React from 'react';
import { IconProps } from "./Icon.Component";

export const Hvac = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M10,13c0.88,0,1.67-0.39,2.22-1H7.78C8.33,12.61,9.12,13,10,13z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M10,7C9.12,7,8.34,7.39,7.79,7.99h4.42C11.66,7.39,10.88,7,10,7z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M7.42,11.5h5.17c0.22-0.38,0.36-0.8,0.39-1.26H7.02C7.06,10.7,7.2,11.12,7.42,11.5z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M7.42,8.49c-0.22,0.38-0.36,0.8-0.4,1.26h5.95c-0.04-0.46-0.18-0.88-0.4-1.26H7.42z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M15,4H5C4.45,4,4,4.45,4,5v10c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1V5C16,4.45,15.55,4,15,4z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z"/> </g> </g> </g>
        </svg>
    )
}
