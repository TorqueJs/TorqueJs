import React from 'react';
import { IconProps } from "./Icon.Component";

export const TableRows = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20" x="0" y="0"/> <path fill={`${props.color}`} d="M16,7H4V4h12V7z M16,8.5H4v3h12V8.5z M16,13H4v3h12V13z"/> </g>
        </svg>
    )
}
