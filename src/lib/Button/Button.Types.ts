export interface TorqueButtonProps {
    onClick: TorqueOnClickEvent;
    text: string;
}

export type TorqueOnClickEvent = (value: any) => void;