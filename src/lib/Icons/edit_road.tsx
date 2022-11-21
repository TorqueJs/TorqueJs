import React from 'react';
import { IconProps } from "./Icon.Component";

export const EditRoad = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <rect fill={`${props.color ? props.color : 'black'}`} height="12" width="1" x="4" y="4"/> <rect fill={`${props.color ? props.color : 'black'}`} height="2" width="1" x="8.5" y="4"/> <rect fill={`${props.color ? props.color : 'black'}`} height="2" width="1" x="8.5" y="14"/> <rect fill={`${props.color ? props.color : 'black'}`} height="2" width="1" x="8.5" y="9"/> <path fill={`${props.color ? props.color : 'black'}`} d="M18.07,9.64l-0.71-0.71c-0.39-0.39-1.02-0.39-1.41,0L11,13.88V16h2.12l4.95-4.95C18.46,10.66,18.46,10.03,18.07,9.64z M12.71,15H12v-0.71l3.24-3.24l0.71,0.71L12.71,15z"/> <polygon points="14,4 13,4 13,10.46 14,9.46"/> </g> </g>
        </svg>
    )
}
