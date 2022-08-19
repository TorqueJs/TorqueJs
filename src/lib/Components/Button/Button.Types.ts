import { ComponentStyling } from "../../Types";

export interface TorqueButtonProps {
    onClick: TorqueOnClickEvent;
    text?: string;
    themeOverrides?: ComponentStyling;
    icon?: string;
    iconPosition?: 'left' | 'right' | 'only';
    animation?: 'none' | 'material-ripple' | 'highlight-text';
    identifier?: string;
}

export type TorqueOnClickEvent = (value: any) => void;