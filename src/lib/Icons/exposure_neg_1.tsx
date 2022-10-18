import React from 'react';
import { IconProps } from "./Icon.Component";

export const ExposureNegOne = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/> <path fill={`${props.color}`} d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"/>
        </svg>
    )
}
