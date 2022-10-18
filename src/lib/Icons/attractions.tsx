import React from 'react';
import { IconProps } from "./Icon.Component";

export const Attractions = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M16,10c0-0.57-0.08-1.12-0.23-1.64c0.51-0.46,0.65-1.24,0.29-1.86c-0.36-0.62-1.1-0.89-1.76-0.68 c-0.76-0.79-1.74-1.36-2.84-1.64C11.32,3.51,10.72,3,10,3S8.68,3.51,8.53,4.19C7.44,4.46,6.46,5.04,5.7,5.82 C5.04,5.61,4.3,5.88,3.94,6.5C3.58,7.12,3.72,7.9,4.23,8.36C4.08,8.88,4,9.43,4,10c0,0.57,0.08,1.12,0.23,1.64 c-0.51,0.46-0.65,1.24-0.29,1.86c0.36,0.62,1.1,0.89,1.76,0.68C6,14.49,6.33,14.76,6.69,15l-0.87,2h1.09l0.66-1.52 c0.31,0.14,0.63,0.24,0.96,0.33C8.68,16.49,9.28,17,10,17s1.32-0.51,1.47-1.19c0.33-0.08,0.65-0.19,0.96-0.33L13.09,17h1.09 l-0.87-2c0.36-0.24,0.69-0.52,0.99-0.83c0.66,0.21,1.4-0.05,1.76-0.68c0.36-0.62,0.22-1.4-0.29-1.86C15.92,11.12,16,10.57,16,10z M11.32,14.8C11.07,14.33,10.57,14,10,14s-1.07,0.33-1.32,0.8c-0.24-0.07-0.48-0.14-0.71-0.24l1.2-2.75C9.42,11.93,9.7,12,10,12 s0.58-0.07,0.83-0.18l1.2,2.75C11.8,14.66,11.56,14.73,11.32,14.8z M11.63,11.15C11.86,10.83,12,10.43,12,10c0-1.1-0.9-2-2-2 s-2,0.9-2,2c0,0.43,0.14,0.83,0.37,1.15L7.1,14.06c-0.21-0.15-0.42-0.32-0.61-0.5C6.79,13.1,6.83,12.5,6.54,12 c-0.29-0.5-0.82-0.76-1.36-0.74C5.07,10.85,5,10.44,5,10s0.07-0.85,0.18-1.26C5.72,8.76,6.25,8.5,6.54,8 c0.29-0.5,0.25-1.1-0.04-1.56c0.6-0.59,1.35-1.01,2.19-1.24C8.93,5.67,9.43,6,10,6s1.07-0.33,1.32-0.8 c0.83,0.23,1.59,0.65,2.19,1.24C13.21,6.9,13.17,7.5,13.46,8c0.29,0.5,0.82,0.76,1.36,0.74C14.93,9.15,15,9.56,15,10 s-0.07,0.85-0.18,1.26c-0.54-0.02-1.07,0.24-1.36,0.74c-0.29,0.5-0.25,1.1,0.04,1.56c-0.19,0.18-0.39,0.35-0.61,0.5L11.63,11.15z"/> </g> </g>
        </svg>
    )
}
