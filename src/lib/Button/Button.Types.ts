export interface TorqueButtonProps {
    onClick: TorqueOnClickEvent;
    text: string;
    type?: TorqueButtonType;
    shape?: TorqueButtonShape;
}

export type TorqueOnClickEvent = (value: any) => void;

export enum TorqueButtonType {
    OUTLINED,
    FILLED,
    TEXT
}

export enum TorqueButtonShape {
    RECT,
    CIRCLE
}