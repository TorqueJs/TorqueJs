import React from 'react';
import { IconProps } from "./Icon.Component";

export const PedalBike = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color}`} d="M14.82,9l-1.58-4.34C13.1,4.26,12.72,4,12.3,4H10v1h2.3l1.46,4H8.75L8.38,8H10V7H6v1h1.32l1.46,4H7.95 C7.7,10.19,6.13,8.86,4.2,9.01c-1.64,0.13-3.01,1.46-3.18,3.1C0.8,14.25,2.41,16,4.5,16c1.79,0,3.21-1.29,3.45-3h4.1 c0.25,1.81,1.83,3.14,3.75,2.99c1.64-0.13,3.01-1.46,3.18-3.1C19.2,10.75,17.59,9,15.5,9H14.82z M9.11,10h3.92 c-0.53,0.52-0.88,1.22-0.98,2H9.84L9.11,10z M4.5,15C3.1,15,2,13.9,2,12.5S3.1,10,4.5,10c1.23,0,2.23,0.85,2.45,2H4v1h2.95 C6.73,14.15,5.73,15,4.5,15z M15.5,15c-1.4,0-2.5-1.1-2.5-2.5c0-0.94,0.5-1.73,1.24-2.16l1.03,2.83l0.94-0.34l-1.02-2.8 C15.3,10.02,15.4,10,15.5,10c1.4,0,2.5,1.1,2.5,2.5S16.9,15,15.5,15z"/> </g>
        </svg>
    )
}