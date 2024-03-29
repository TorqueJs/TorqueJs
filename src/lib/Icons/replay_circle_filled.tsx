import React from 'react';
import { IconProps } from "./Icon.Component";

export const ReplayCircleFilled = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M0 0h36v36H0V0z" fill="none"/> <path fill={`${props.color ? props.color : 'black'}`} d="M33 18c0 8.28-6.72 15-15 15-8.28 0-15-6.72-15-15C3 9.72 9.72 3 18 3c8.28 0 15 6.72 15 15zM18 9V4.5l-6 6 6 6V12c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H9c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9z" fill-rule="evenodd"/>
        </svg>
    )
}
