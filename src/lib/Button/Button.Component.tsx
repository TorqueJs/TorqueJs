import React from 'react';
import { TorqueButtonProps } from './Button.Types';
import { _TorqueButton } from './Button.Styles';
import { StylesService } from '../Torque/StylesService';
import { ComponentStyles, ComponentType } from '../Types';
import { GenerateGuid } from '../Utils/GenerateGuid';

interface TorqueButtonState {
    componentStyles: ComponentStyles;
    subscriptionGuid: string;
}

export class TorqueButton extends React.Component<TorqueButtonProps, TorqueButtonState> {
    constructor(props: TorqueButtonProps) {
        super(props);
        this.state = {
            componentStyles: StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_BUTTON),
            subscriptionGuid: GenerateGuid()
        };
    }

    componentDidMount(): void {
        StylesService.getInstance().torqueButtonSubject.subscribe(this.state.subscriptionGuid, (value: ComponentStyles) => {
            this.setState({
                componentStyles: value
            });
        });
    }

    componentWillUnmount(): void {
        StylesService.getInstance().torqueButtonSubject.unsubscribe(this.state.subscriptionGuid);
    }

    render(): JSX.Element {
        return (
            <_TorqueButton onClick={ this.props.onClick } data-name="torque-button" theme={this.state.componentStyles}>
                { this.props.text || 'Submit' }
            </_TorqueButton>
        );
    }
}