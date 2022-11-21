import styled, { keyframes } from 'styled-components';
import { StylesService } from '../../Torque/StylesService';

const _TorqueButtonAnimated: any = styled('button')((props: any) => {
    let animation = {}
    if (props.animation && props.animation === 'highlight-text') {
        let focusColor = props.theme.styles.focus?.color;
        animation = {
            transition: 'color 0.25s ease-out',
            '&&:focus': {
                color: focusColor ? focusColor : StylesService.getInstance().secondary
            }
        }
    }
    return {
        display: 'flex',
        'flex-direction': 'row',
        position: 'relative',
        overflow: 'hidden',
        ...animation
    }
});

export const _TorqueButton: any = styled(_TorqueButtonAnimated)`
    ${(props: any) => StylesService.getInstance().turnStylesIntoCSSString(props.theme.styles.default)}
    ${(props: any) => StylesService.getInstance().turnStylesIntoCSSString(props.themeOverride.default)}
    ${(props: any) => StylesService.getInstance().turnStylesIntoCSSString(StylesService.getInstance().getAllPseudoClasses(props.theme.styles, props.themeOverride))}
    && span.ripple {
        animation: ${(props: any) => {
            let animation = keyframes``;
            if (props.animation && props.animation === 'material-ripple') {
                animation = keyframes`
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                `;
            }
            return animation;
        }} 1s linear;
    }
`