import React from 'react';
import { IconProps } from "./Icon.Component";

export const CallMade = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
        </svg>
    )
}
