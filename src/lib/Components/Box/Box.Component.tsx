import React, { RefObject } from 'react';
import { StylesService } from '../../Torque/StylesService';
import { ComponentAttributes, ComponentStyles, ComponentType } from '../../Types';
import { GenerateGuid } from '../../Utils/GenerateGuid';
import { _TorqueBox } from './Box.Styles';
import { TorqueBoxProps } from './Box.Types';

interface TorqueBoxState {
    componentStyles: ComponentStyles;
    subscriptionGuid: string;
    componentAttributes: ComponentAttributes
}

export class TorqueBox extends React.Component<TorqueBoxProps, TorqueBoxState> {

    boxRef: RefObject<HTMLDivElement> = React.createRef();

    constructor(props: TorqueBoxProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_BOX);
        this.state = {
            componentStyles: componentStyles,
            subscriptionGuid: GenerateGuid(),
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || 0)
        }
    }

    componentDidMount(): void {
        StylesService.getInstance().torqueBoxSubject.subscribe(this.state.subscriptionGuid, (value: ComponentStyles) => {
            this.setState({
                componentStyles: value,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(value, this.props.identifier || 0)
            })
        });
    }

    componentWillUnmount(): void {
        StylesService.getInstance().torqueBoxSubject.unsubscribe(this.state.subscriptionGuid);
    }

    render(): JSX.Element {
        return (
            <_TorqueBox
                onClick={ (value: MouseEvent) => {
                    if (this.props.onClick) {
                        this.props.onClick(value);
                    }
                } }
                theme={this.state.componentAttributes}
                themeOverride={this.props.themeOverride ? this.props.themeOverride : {} }
                data-name="torque-box"
                ref={this.boxRef}
                >
                {this.props.children}
            </_TorqueBox>
        )
    }
}