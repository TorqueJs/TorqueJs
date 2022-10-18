import React from 'react';
import { IconProps } from "./Icon.Component";

export const TheaterComedy = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M10,4v4h1h1v1v0.57C12.27,9.23,12.84,9,13.5,9c0.92,0,1.67,0.45,1.67,1H12v1.65 c0.46,0.22,0.96,0.35,1.5,0.35c1.93,0,3.5-1.57,3.5-3.5V4H10z M12,7.75c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75 S12.75,6.59,12.75,7C12.75,7.41,12.41,7.75,12,7.75z M15,7.75c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75 S15.75,6.59,15.75,7C15.75,7.41,15.41,7.75,15,7.75z" fill-rule="evenodd"/> <path fill={`${props.color}`} d="M4,13.5C4,15.43,5.57,17,7.5,17s3.5-1.57,3.5-3.5V9H4V13.5z M7.5,15 c-0.92,0-1.67-0.45-1.67-1h3.33C9.17,14.55,8.42,15,7.5,15z M9,11.25c0.41,0,0.75,0.34,0.75,0.75c0,0.41-0.34,0.75-0.75,0.75 S8.25,12.41,8.25,12C8.25,11.59,8.59,11.25,9,11.25z M6,11.25c0.41,0,0.75,0.34,0.75,0.75c0,0.41-0.34,0.75-0.75,0.75 S5.25,12.41,5.25,12C5.25,11.59,5.59,11.25,6,11.25z" fill-rule="evenodd"/> </g> </g>
        </svg>
    )
}
