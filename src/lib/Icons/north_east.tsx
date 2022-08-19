import React from 'react';
import { IconProps } from "./Icon.Component";

export const NorthEast = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill={`${props.color}`} fill="none" height="24" width="24"/> <path fill={`${props.color}`} d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"/>
        </svg>
    )
}
