import React from 'react';
import { IconProps } from "./Icon.Component";

export const NearMe = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
        </svg>
    )
}
