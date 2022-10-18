import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsBasketball = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color}`} d="M13.05,9.5h3.92c-0.1-1.43-0.63-2.74-1.47-3.81C14.16,6.48,13.22,7.87,13.05,9.5z"/> </g> <g> <path fill={`${props.color}`} d="M6.95,10.5H3.03c0.1,1.43,0.63,2.74,1.47,3.81C5.84,13.52,6.78,12.13,6.95,10.5z"/> </g> <g> <path fill={`${props.color}`} d="M6.95,9.5c-0.17-1.63-1.1-3.02-2.46-3.81C3.66,6.76,3.13,8.07,3.03,9.5H6.95z"/> </g> <g> <path fill={`${props.color}`} d="M13.05,10.5c0.17,1.63,1.1,3.02,2.46,3.81c0.83-1.07,1.36-2.38,1.47-3.81H13.05z"/> </g> <g> <path fill={`${props.color}`} d="M12.03,10.5H10.5v6.47c1.67-0.12,3.17-0.82,4.31-1.9C13.26,14.1,12.18,12.43,12.03,10.5z"/> </g> <g> <path fill={`${props.color}`} d="M12.03,9.5c0.16-1.93,1.23-3.6,2.79-4.58c-1.14-1.08-2.64-1.78-4.31-1.9V9.5H12.03z"/> </g> <g> <path fill={`${props.color}`} d="M7.97,10.5c-0.16,1.93-1.23,3.6-2.79,4.58c1.14,1.08,2.64,1.78,4.31,1.9V10.5H7.97z"/> </g> <g> <path fill={`${props.color}`} d="M7.97,9.5H9.5V3.03c-1.67,0.12-3.17,0.82-4.31,1.9C6.74,5.9,7.82,7.57,7.97,9.5z"/> </g> </g> </g>
        </svg>
    )
}
