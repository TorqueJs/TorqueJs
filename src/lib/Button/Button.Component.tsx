import React from 'react';
import { TorqueButtonProps } from './Button.Types';
import { _TorqueButton } from './Button.Styles';

interface TorqueButtonState {

}

export class TorqueButton extends React.Component<TorqueButtonProps, TorqueButtonState> {
    constructor(props: TorqueButtonProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <_TorqueButton onClick={ this.props.onClick } data-name="torque-button" >
                { this.props.text || 'Submit' }
            </_TorqueButton>
        );
    }
}