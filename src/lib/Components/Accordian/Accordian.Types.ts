import { ComponentStyles, ComponentStyling, TorqueOnClickEvent } from "../../Types";
import { IWithBehaviorSubject } from "../../Utils/WithBehaviorSubject";

export interface TorqueAccordianProps extends IWithBehaviorSubject<ComponentStyles> {
  identifier?: string;
  themeOverride?: ComponentStyling;
}

export interface TorqueAccordianHeaderProps {
  identifier?: string;
  themeOverride?: ComponentStyling;
  onClick?: TorqueOnClickEvent;
  children?: any;
}

export interface TorqueAccordianContentProps {
  identifier?: string;
  themeOverride?: ComponentStyling;
  children?: any;
}