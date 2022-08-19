import React, { RefObject } from 'react';
import { TorqueButtonProps } from './Button.Types';
import { _TorqueButton } from './Button.Styles';
import { StylesService } from '../../Torque/StylesService';
import { ComponentStyles, ComponentType, ComponentStyling, ComponentAttributes } from '../../Types';
import { GenerateGuid } from '../../Utils/GenerateGuid';
import { IconProps, TorqueIcon } from '../../Icons/Icon.Component';

interface TorqueButtonState {
    componentStyles: ComponentStyles;
    subscriptionGuid: string;
    componentAttributes: ComponentAttributes;
}

export class TorqueButton extends React.Component<TorqueButtonProps, TorqueButtonState> {

    buttonRef: RefObject<HTMLButtonElement> = React.createRef();

    constructor(props: TorqueButtonProps) {
        super(props);
        let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_BUTTON);
        this.state = {
            componentStyles: componentStyles,
            subscriptionGuid: GenerateGuid(),
            componentAttributes: StylesService.getInstance().getAttributesByIdentifier(componentStyles, this.props.identifier || 0)
        };
    }

    componentDidMount(): void {
        StylesService.getInstance().torqueButtonSubject.subscribe(this.state.subscriptionGuid, (value: ComponentStyles) => {
            this.setState({
                componentStyles: value,
                componentAttributes: StylesService.getInstance().getAttributesByIdentifier(value, this.props.identifier || 0)
            });
        });
    }

    componentWillUnmount(): void {
        StylesService.getInstance().torqueButtonSubject.unsubscribe(this.state.subscriptionGuid);
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

    getFontSize = () => {
        let override = this.props.themeOverrides && 
            this.props.themeOverrides.default && 
            this.props.themeOverrides.default.fontSize ? this.props.themeOverrides.default.fontSize : null;
        let theme = (this.state.componentAttributes.styles as ComponentStyling).default.fontSize ?
            (this.state.componentAttributes.styles as ComponentStyling).default.fontSize : null;
        return override ? override : (theme ? theme : '24');
    }

    getColor = () => {
        let override = this.props.themeOverrides && 
            this.props.themeOverrides.default && 
            this.props.themeOverrides.default.color ? this.props.themeOverrides.default.color : null;
        let theme = (this.state.componentAttributes.styles as ComponentStyling).default.color ?
            (this.state.componentAttributes.styles as ComponentStyling).default.color : null;
        return override ? override : (theme ? theme : 'black');
    }

    render(): JSX.Element {
        return (
            <_TorqueButton 
                onClick={ (value: MouseEvent) => {
                    this.clicked(value)
                    this.props.onClick(value) 
                } } 
                theme={this.state.componentAttributes}
                themeOverrides={ this.props.themeOverrides ? this.props.themeOverrides : {} }
                data-name="torque-button"
                ref={this.buttonRef} 
                animation={this.props.animation ? this.props.animation : ''}
            >
                {
                    this.props.icon && this.props.iconPosition === 'left' ? 
                    <TorqueIcon { ...{ 
                        icon: this.props.icon, 
                        fontSize: this.getFontSize(),
                        margin: '4px 10px 0 0',
                        color: this.getColor()
                    } as IconProps } css={{ marginRight: '8px' }} ></TorqueIcon> :
                    null
                }
                <span className="torque-button-text">{ this.props.text || '' }</span>
                {
                    this.props.icon && this.props.iconPosition === 'right' ? 
                    <TorqueIcon { ...{ 
                        icon: this.props.icon, 
                        fontSize: this.getFontSize(),
                        margin: '4px 0 0 10px',
                        color: this.getColor()
                    } as IconProps } ></TorqueIcon> :
                    (
                        this.props.icon && this.props.iconPosition === 'only' ?
                        <TorqueIcon { ...{ 
                            icon: this.props.icon, 
                            fontSize: this.getFontSize(),
                            margin: '4px 0px 0 0px',
                            color: this.getColor()
                        } as IconProps } ></TorqueIcon> :
                        null
                    )
                }
            </_TorqueButton>
        );
    }
}