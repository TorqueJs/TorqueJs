import React from 'react';
import { IconProps } from "./Icon.Component";

export const FiberDvr = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="24" width="24" x="0"/> </g> <g> <g> <g> <path fill={`${props.color}`} d="M17.5,10.5h2v1h-2V10.5z M4.5,10.5h2v3h-2V10.5z M21,3H3C1.89,3,1,3.89,1,5v14c0,1.1,0.89,2,2,2h18c1.11,0,2-0.9,2-2V5 C23,3.89,22.11,3,21,3z M8,13.5C8,14.35,7.35,15,6.5,15H3V9h3.5C7.35,9,8,9.65,8,10.5V13.5z M12.62,15h-1.5L9.37,9h1.5l1,3.43 l1-3.43h1.5L12.62,15z M21,11.5c0,0.6-0.4,1.15-0.9,1.4L21,15h-1.5l-0.85-2H17.5v2H16V9h3.5c0.85,0,1.5,0.65,1.5,1.5V11.5z"/> </g> </g> </g>
        </svg>
    )
}
