import React from 'react';
import { IconProps } from "./Icon.Component";

export const Plagiarism = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><g><path fill={`${props.color ? props.color : 'black'}`} d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M15.04,19.45l-1.88-1.88 c-1.33,0.71-3.01,0.53-4.13-0.59c-1.37-1.37-1.37-3.58,0-4.95c1.37-1.37,3.58-1.37,4.95,0c1.12,1.12,1.31,2.8,0.59,4.13l1.88,1.88 L15.04,19.45z M13,9V3.5L18.5,9H13z"/><circle fill={`${props.color ? props.color : 'black'}`} cx="11.5" cy="14.5" r="1.5"/></g></g>
        </svg>
    );
}