export type ComponentAttributes = TorqueButtonAttributes | TorqueCheckboxAttributes;

export interface ComponentStyles {
    component: ComponentType;
    attributes: ComponentAttributes;
}

export enum ComponentType {
    TORQUE_BUTTON = 'TORQUE_BUTTON',
    TORQUE_CHECKBOX = 'TORQUE_CHECKBOX'
}

export interface TorqueButtonAttributes {
    width?: string;
    fontSize: string;
    color: string;
    backgroundColor: string;
    border?: string;
    boxShadow?: string;
    padding?: string;
    margin?: string;
    height?: string;
    outline?: string;
}


export interface TorqueCheckboxAttributes {
    
}