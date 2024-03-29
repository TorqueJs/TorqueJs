import React from 'react';
import { IconProps } from "./Icon.Component";

export const NearMeDisabled = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill="none" height="24" width="24"/> <path fill={`${props.color ? props.color : 'black'}`} d="M12,6.34L21,3l-3.34,9L12,6.34z M22.61,19.78L4.22,1.39L2.81,2.81l5.07,5.07L3,9.69v1.41l7.07,2.83L12.9,21h1.41l1.81-4.88 l5.07,5.07L22.61,19.78z"/>
        </svg>
    )
}
