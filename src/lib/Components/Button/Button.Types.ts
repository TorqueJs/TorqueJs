import { ComponentStyling, TorqueOnClickEvent } from "../../Types";

export interface TorqueButtonProps {
    onClick: TorqueOnClickEvent;
    text?: string;
    themeOverride?: ComponentStyling;
    icon?: string;
    iconPosition?: 'left' | 'right' | 'only';
    animation?: 'none' | 'material-ripple' | 'highlight-text';
    identifier?: string;
}