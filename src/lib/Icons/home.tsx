import React from 'react';
import { IconProps } from "./Icon.Component";

export const Home = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
    );
}