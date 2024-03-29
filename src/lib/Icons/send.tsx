import React from 'react';
import { IconProps } from "./Icon.Component";

export const Send = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
    )
}
