import React from 'react';
import { IconProps } from "./Icon.Component";

export const LabelImportantOutline = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M15 19H3l4.5-7L3 5h12c.65 0 1.26.31 1.63.84L21 12l-4.37 6.16c-.37.52-.98.84-1.63.84zm-8.5-2H15l3.5-5L15 7H6.5l3.5 5-3.5 5z"/>
        </svg>
    );
}