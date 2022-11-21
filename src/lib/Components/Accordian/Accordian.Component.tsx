import React, { RefObject } from 'react';
import { StylesService } from '../../Torque/StylesService';
import { ComponentType, ComponentAttributes, ComponentStyles } from '../../Types';
import { GenerateGuid } from '../../Utils/GenerateGuid';
import { _TorqueAccordianWrapper } from './Accordian.Styles';
import { TorqueAccordianProps } from './Accordian.Types';
import { TorqueAccordianContent } from './AccordianContent.Component';
import { TorqueAccordianHeader } from './AccordianHeader.Component';

interface TorqueAccordianState {
    componentStyles: ComponentStyles;
    subscriptionGuid: string;
    componentAttributes: ComponentAttributes;
}

export class TorqueAccordian extends React.Component<TorqueAccordianProps, TorqueAccordianState> {

    public static Header = TorqueAccordianHeader;
    public static Content = TorqueAccordianContent;

    constructor(props: TorqueAccordianProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_ACCORDIAN);
        this.state = {
            componentStyles: componentStyles,
            subscriptionGuid: GenerateGuid(),
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || 0)
        }
    }

    componentDidMount(): void {
        StylesService.getInstance().torqueAccordianSubject.subscribe(this.state.subscriptionGuid, (value: ComponentStyles) => {
            this.setState({
                componentStyles: value,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(value, this.props.identifier || 0)
            })
        });
    }

    componentWillUnmount(): void {
        StylesService.getInstance().torqueAccordianSubject.unsubscribe(this.state.subscriptionGuid);
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