import React from 'react';
import { IconProps } from "./Icon.Component";

export const NetworkCell = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill="none" height="24" width="24"/> <path fill={`${props.color ? props.color : 'black'}`} d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/>
        </svg>
    )
}
