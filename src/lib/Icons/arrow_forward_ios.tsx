import React from 'react';
import { IconProps } from "./Icon.Component";

export const ArrowForwardIos = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
        </svg>
    )
}
