import React from 'react';
import { IconProps } from "./Icon.Component";

export const VerticalAlignTop = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/>
        </svg>
    )
}
