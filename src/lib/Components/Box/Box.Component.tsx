import React, { RefObject } from 'react';
import { StylesService } from '../../Torque/StylesService';
import { ComponentAttributes, ComponentStyles, ComponentType } from '../../Types';
import { WithBehaviorSubject } from '../../Utils/WithBehaviorSubject';
import { _TorqueBox } from './Box.Styles';
import { TorqueBoxProps } from './Box.Types';

interface TorqueBoxState {
    componentStyles: ComponentStyles;
    componentAttributes: ComponentAttributes
}

class TorqueBoxComponent extends React.Component<TorqueBoxProps, TorqueBoxState> {

    boxRef: RefObject<HTMLDivElement> = React.createRef();

    constructor(props: TorqueBoxProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_BOX);
        this.state = {
            componentStyles: componentStyles,
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || ComponentType.TORQUE_BOX)
        }
    }

    componentDidUpdate(): void {
        if (this.props.subjectUpdated) {
            this.props.subjectDataUsed();
            this.setState({
                componentStyles: this.props.subjectData,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(this.props.subjectData, this.props.identifier || ComponentType.TORQUE_BOX)
            });
        }
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

export const TorqueBox: any = WithBehaviorSubject(TorqueBoxComponent, StylesService.getInstance().torqueBoxSubject);