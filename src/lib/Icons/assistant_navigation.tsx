import React from 'react';
import { IconProps } from "./Icon.Component";

export const AssistantNavigation = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm3.57 16L12 15.42 8.43 17l-.37-.37L12 7l3.95 9.63-.38.37z"/>
        </svg>
    )
}
