import React from 'react';
import { IconProps } from "./Icon.Component";

export const ArrowLeft = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M14 7l-5 5 5 5V7z"/> <path fill={`${props.color}`} d="M24 0v24H0V0h24z" fill="none"/>
        </svg>
    )
}