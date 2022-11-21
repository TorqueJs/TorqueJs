import React from 'react';
import { IconProps } from "./Icon.Component";

export const SkipPrevious = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
        </svg>
    )
}
