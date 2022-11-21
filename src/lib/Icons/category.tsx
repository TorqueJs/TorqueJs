import React from 'react';
import { IconProps } from "./Icon.Component";

export const Category = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M12 2l-5.5 9h11z"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="17.5" cy="17.5" r="4.5"/> <path fill={`${props.color ? props.color : 'black'}`} d="M3 13.5h8v8H3z"/>
        </svg>
    )
}
