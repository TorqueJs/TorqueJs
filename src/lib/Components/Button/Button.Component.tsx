import React, { RefObject } from 'react';
import { TorqueButtonProps } from './Button.Types';
import { _TorqueButton } from './Button.Styles';
import { StylesService } from '../../Torque/StylesService';
import { ComponentStyles, ComponentType, ComponentAttributes } from '../../Types';
import { getIconColor, getIconFontSize, IconProps, TorqueIcon } from '../../Icons/Icon.Component';
import { WithBehaviorSubject } from '../../Utils/WithBehaviorSubject';

interface TorqueButtonState {
    componentStyles: ComponentStyles;
    componentAttributes: ComponentAttributes;
}

class TorqueButtonComponent extends React.Component<TorqueButtonProps, TorqueButtonState> {

    buttonRef: RefObject<HTMLButtonElement> = React.createRef();

    constructor(props: TorqueButtonProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_BUTTON);
        this.state = {
            componentStyles: componentStyles,
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || ComponentType.TORQUE_BUTTON)
        };
    }

    componentDidUpdate(): void {
        if (this.props.subjectUpdated) {
            this.props.subjectDataUsed();
            this.setState({
                componentStyles: this.props.subjectData,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(this.props.subjectData, this.props.identifier || ComponentType.TORQUE_BUTTON)
            });
        }
    }

    clicked = (event: MouseEvent): void => {
        if (this.props.animation && this.props.animation === 'material-ripple') {
            const button = (this.buttonRef as RefObject<HTMLButtonElement>)?.current as HTMLButtonElement;
            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            circle.style.position = 'absolute';
            circle.style.borderRadius = '50%';
            circle.style.transform = 'scale(0)';
            circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
            circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
            circle.classList.add("ripple");
            const ripple = button.getElementsByClassName("ripple")[0];
            if (ripple) {
                ripple.remove();
            }
            button.appendChild(circle);
        }
    }

    render(): JSX.Element {
        return (
            <_TorqueButton 
                onClick={ (value: MouseEvent) => {
                    this.clicked(value)
                    this.props.onClick(value) 
                } } 
                theme={this.state.componentAttributes}
                themeOverride={ this.props.themeOverride ? this.props.themeOverride : {} }
                data-name="torque-button"
                ref={this.buttonRef} 
                animation={this.props.animation ? this.props.animation : ''}
            >
                {
                    this.props.icon && this.props.iconPosition === 'left' ? 
                    <TorqueIcon { ...{ 
                        icon: this.props.icon, 
                        fontSize: getIconFontSize(this.props.themeOverride, this.state.componentAttributes),
                        margin: '4px 10px 0 0',
                        color: getIconColor(this.props.themeOverride, this.state.componentAttributes)
                    } as IconProps } css={{ marginRight: '8px' }} ></TorqueIcon> :
                    null
                }
                <span className="torque-button-text">{ this.props.text || '' }</span>
                {
                    this.props.icon && this.props.iconPosition === 'right' ? 
                    <TorqueIcon { ...{ 
                        icon: this.props.icon, 
                        fontSize: getIconFontSize(this.props.themeOverride, this.state.componentAttributes),
                        margin: '4px 0 0 10px',
                        color: getIconColor(this.props.themeOverride, this.state.componentAttributes)
                    } as IconProps } ></TorqueIcon> :
                    (
                        this.props.icon && this.props.iconPosition === 'only' ?
                        <TorqueIcon { ...{ 
                            icon: this.props.icon, 
                            fontSize: getIconFontSize(this.props.themeOverride, this.state.componentAttributes),
                            margin: '4px 0px 0 0px',
                            color: getIconColor(this.props.themeOverride, this.state.componentAttributes)
                        } as IconProps } ></TorqueIcon> :
                        null
                    )
                }
            </_TorqueButton>
        );
    }
}

export const TorqueButton = WithBehaviorSubject(
    TorqueButtonComponent,
    StylesService.getInstance().torqueButtonSubject
);