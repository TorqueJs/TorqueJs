import React from 'react';
import { IconProps } from "./Icon.Component";

export const Celebration = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <polygon fill-rule="evenodd" points="6.88,6.76 3,17 13.25,13.11"/> </g> <path fill={`${props.color}`} d="M9.36,3.56L8.66,4.27l0.35,0.35c0.39,0.39,0.39,1.02,0,1.41L8.3,6.75l0.71,0.71 l0.71-0.71c0.78-0.78,0.78-2.05,0-2.83L9.36,3.56z" fill-rule="evenodd"/> <path fill={`${props.color}`} d="M17.85,6.39l0.71-0.71L18.2,5.33c-0.78-0.78-2.05-0.78-2.83,0l-4.24,4.24 l0.71,0.71l4.24-4.24c0.39-0.39,1.02-0.39,1.41,0L17.85,6.39z" fill-rule="evenodd"/> <path fill={`${props.color}`} d="M17.5,10.28l-0.71-0.71c-0.78-0.78-2.05-0.78-2.83,0l-1.41,1.41l0.71,0.71 l1.41-1.41c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71L17.5,10.28z" fill-rule="evenodd"/> <path fill={`${props.color}`} d="M12.19,2.15l-0.71,0.71l1.06,1.06c0.39,0.39,0.39,1.02,0,1.41L9.72,8.16 l0.71,0.71l2.83-2.83c0.78-0.78,0.78-2.05,0-2.83L12.19,2.15z" fill-rule="evenodd"/> </g> </g>
        </svg>
    )
}
