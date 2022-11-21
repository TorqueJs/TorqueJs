import { ComponentStyles, ComponentStyling, TorqueOnClickEvent } from "../../Types";
import { IWithBehaviorSubject } from "../../Utils/WithBehaviorSubject";

export interface TorqueButtonProps extends IWithBehaviorSubject<ComponentStyles> {
    onClick: TorqueOnClickEvent;
    text?: string;
    themeOverride?: ComponentStyling;
    icon?: string;
    iconPosition?: 'left' | 'right' | 'only';
    animation?: 'none' | 'material-ripple' | 'highlight-text';
    identifier?: string;
}