import React from 'react';
import { TorqueCheckboxProps } from './Checkbox.Types';
import { _TorqueCheckbox } from './Checkbox.Styles';
import { WithBehaviorSubject } from '../../Utils/WithBehaviorSubject';
import { StylesService } from '../../Torque/StylesService';
import { ComponentAttributes, ComponentStyles, ComponentType } from '../../Types';

interface TorqueCheckboxState {
    componentStyles: ComponentStyles;
    componentAttributes: ComponentAttributes;
    isClicked: boolean;
}

class TorqueCheckboxComponent extends React.Component<TorqueCheckboxProps, TorqueCheckboxState> {

    constructor(props: TorqueCheckboxProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_BUTTON);
        this.state = {
            componentStyles: componentStyles,
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || ComponentType.TORQUE_BUTTON),
            isClicked: false
        };
    }

    componentDidUpdate(): void {
        if (this.props.subjectUpdated) {
            this.props.subjectDataUsed();
            this.setState({
                componentStyles: this.props.subjectData,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(this.props.subjectData, this.props.identifier || ComponentType.TORQUE_CHECKBOX)
            });
        }
    }

    clicked = () => {
        this.setState({ isClicked: !this.state.isClicked });
        this.props.onChange(this.state.isClicked);
    }

    render(): JSX.Element {
        return (
            <_TorqueCheckbox checked={this.state.isClicked} onClick={() => this.clicked()}></_TorqueCheckbox>
        )
    }
}

export const TorqueCheckbox = WithBehaviorSubject(
    TorqueCheckboxComponent,
    StylesService.getInstance().torqueCheckboxSubject
)