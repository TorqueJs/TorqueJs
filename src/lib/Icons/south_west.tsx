import React from 'react';
import { IconProps } from "./Icon.Component";

export const SouthWest = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill="none" height="24" width="24"/> <path fill={`${props.color ? props.color : 'black'}`} d="M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z"/>
        </svg>
    )
}
