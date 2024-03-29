import React from 'react';
import { IconProps } from "./Icon.Component";

export const HomeFilled = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M12 3L4 9v12h5v-7h6v7h5V9z"/>
        </svg>
    );
}