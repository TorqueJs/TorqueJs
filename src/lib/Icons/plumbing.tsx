import React from 'react';
import { IconProps } from "./Icon.Component";

export const Plumbing = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M13.29,4.45l2.83,2.83l0,0c0.78-0.78,0.78-2.05,0-2.83l-2.12-2.12c-0.39-0.39-1.02-0.39-1.41,0L9.75,5.15l1.41,1.41 L13.29,4.45z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M4.8,11.52L4.8,11.52c0.39,0.39,1.02,0.39,1.41,0L8.34,9.4L6.92,7.98L4.8,10.1C4.41,10.49,4.41,11.13,4.8,11.52z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M12.58,6.57l-1.41,1.41L8.34,5.15c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41L9.75,9.4L9.04,10.1 l-5.3,5.3c-0.59,0.59-0.59,1.54,0,2.12l0,0c0.59,0.59,1.54,0.59,2.12,0l7.42-7.42l0,0c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L12.58,6.57z"/> </g> </g>
        </svg>
    )
}
