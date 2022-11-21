import React from 'react';
import { IconProps } from "./Icon.Component";

export const DesignServices = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M15.71,13.21l-3.46-3.46l1.33-1.33l-2-2l-1.33,1.33L6.79,4.29C6.4,3.9,5.76,3.9,5.37,4.29L4.29,5.37 C3.9,5.76,3.9,6.4,4.29,6.79l3.46,3.46L4,14v2h2l3.75-3.75l3.46,3.46c0.39,0.39,1.02,0.39,1.41,0l1.08-1.08 C16.1,14.24,16.1,13.6,15.71,13.21z M8.46,9.54L5,6.08L6.08,5c0,0,0,0,0,0l0.69,0.69L6.23,6.23L6.89,6.9l0.54-0.54l1.06,1.06 L7.95,7.96l0.67,0.67l0.54-0.54l0.38,0.38L8.46,9.54z M13.92,15l-3.46-3.46l1.08-1.08l0.4,0.4L11.4,11.4l0.67,0.67l0.54-0.54 l1.06,1.06l-0.54,0.54l0.67,0.67l0.54-0.54L15,13.92L13.92,15z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M15.62,6.38c0.2-0.2,0.2-0.51,0-0.71l-1.29-1.29c-0.2-0.2-0.51-0.2-0.71,0l-1.34,1.34l2,2L15.62,6.38z"/> </g> <g/> </g>
        </svg>
    )
}
