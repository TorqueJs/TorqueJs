import React from 'react';
import { IconProps } from "./Icon.Component";

export const DynamicForm = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><rect fill="none" height="24" width="24"/><path fill={`${props.color}`} d="M17,20v-9h-2V4h7l-2,5h2L17,20z M15,13v7H4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2H15z M6.25,15.75h-1.5v1.5h1.5V15.75z M13,4v7H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2H13z M6.25,6.75h-1.5v1.5h1.5V6.75z"/></g>
        </svg>
    );
}