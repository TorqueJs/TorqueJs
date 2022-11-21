import React from 'react';
import { IconProps } from "./Icon.Component";

export const PriorityHigh = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle fill={`${props.color ? props.color : 'black'}`} cx="12" cy="19" r="2"/> <path fill={`${props.color ? props.color : 'black'}`} d="M10 3h4v12h-4z"/>
        </svg>
    )
}
