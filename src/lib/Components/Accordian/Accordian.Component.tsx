import React from 'react';
import { StylesService } from '../../Torque/StylesService';
import { ComponentType, ComponentAttributes, ComponentStyles } from '../../Types';
import { WithBehaviorSubject } from '../../Utils/WithBehaviorSubject';
import { _TorqueAccordianWrapper } from './Accordian.Styles';
import { TorqueAccordianProps } from './Accordian.Types';

interface TorqueAccordianState {
    componentStyles: ComponentStyles;
    componentAttributes: ComponentAttributes;
}

class TorqueAccordianComponent extends React.Component<TorqueAccordianProps, TorqueAccordianState> {

    constructor(props: TorqueAccordianProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_ACCORDIAN);
        this.state = {
            componentStyles: componentStyles,
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || ComponentType.TORQUE_ACCORDIAN)
        }
    }

    componentDidUpdate(): void {
        if (this.props.subjectUpdated) {
            this.props.subjectDataUsed();
            console.log(this.props.subjectData);
            this.setState({
                componentStyles: this.props.subjectData,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(this.props.subjectData, this.props.identifier || ComponentType.TORQUE_ACCORDIAN)
            });
        }
    }

    render(): JSX.Element {
        return (
            <_TorqueAccordianWrapper
                theme={this.state.componentAttributes}
                themeOverrides={this.props.themeOverride ? this.props.themeOverride : {}}
                data-name="torque-accordian-wrapper"
                data-active={ this.props.isActive ? 'active' : 'inactive' }
                >
                { this.props.children }
            </_TorqueAccordianWrapper>
        )
    }
}

export const TorqueAccordian = WithBehaviorSubject(
    TorqueAccordianComponent,
    StylesService.getInstance().torqueAccordianSubject
)