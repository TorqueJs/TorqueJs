import React from 'react';
import { StylesService } from '../../Torque/StylesService';
import { ComponentType, ComponentAttributes, ComponentStyles } from '../../Types';
import { WithBehaviorSubject } from '../../Utils/WithBehaviorSubject';
import { _TorqueAccordianWrapper } from './Accordian.Styles';
import { TorqueAccordianProps } from './Accordian.Types';
import { TorqueAccordianContent } from './AccordianContent.Component';
import { TorqueAccordianHeader } from './AccordianHeader.Component';

interface TorqueAccordianState {
    componentStyles: ComponentStyles;
    componentAttributes: ComponentAttributes;
}

class TorqueAccordianComponent extends React.Component<TorqueAccordianProps, TorqueAccordianState> {

    public static Header = TorqueAccordianHeader;
    public static Content = TorqueAccordianContent;

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