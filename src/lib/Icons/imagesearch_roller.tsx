import React from 'react';
import { IconProps } from "./Icon.Component";

export const ImagesearchRoller = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2"/>
        </svg>
    )
}
