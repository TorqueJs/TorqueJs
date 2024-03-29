import React from 'react';
import { IconProps } from "./Icon.Component";

export const PeopleAlt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g/> <g> <g> <circle fill={`${props.color ? props.color : 'black'}`} cx="8.5" cy="7.5" fill-rule="evenodd" r="2.5"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M10.99,9.95C11.16,9.98,11.33,10,11.5,10c1.38,0,2.5-1.12,2.5-2.5 C14,6.12,12.88,5,11.5,5c-0.17,0-0.34,0.02-0.51,0.05C11.61,5.68,12,6.55,12,7.5S11.61,9.32,10.99,9.95z" fill-rule="evenodd"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M8.5,11C6.66,11,3,11.66,3,13.23V15h11v-1.77C14,11.66,10.34,11,8.5,11z" fill-rule="evenodd"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M13.73,11.23c0.75,0.48,1.27,1.12,1.27,2V15h2v-1.77 C17,12.18,15.36,11.54,13.73,11.23z" fill-rule="evenodd"/> </g> </g> </g>
        </svg>
    )
}
