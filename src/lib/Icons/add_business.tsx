import React from 'react';
import { IconProps } from "./Icon.Component";

export const AddBusiness = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <rect fill={`${props.color}`} height="1" width="10" x="4" y="4"/> <path fill={`${props.color}`} d="M13,14h1v-3h1v-1l-1-4H4l-1,4v1h1v5h6v-5h3V14z M9,15H5v-4h4V15z"/> <polygon points="16,15 16,13 15,13 15,15 13,15 13,16 15,16 15,18 16,18 16,16 18,16 18,15"/> </g> </g>
        </svg>
    )
}
