import { ComponentStyling, TorqueOnClickEvent } from "../../Types";

export interface TorqueAccordianProps {
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