import styled from 'styled-components';
import { StylesService } from '../../Torque/StylesService';

export const _TorqueBox: any = styled('div')`
  ${(props: any) => StylesService.getInstance().turnStylesIntoCSSString(props.theme.styles.default)}
  ${(props: any) => StylesService.getInstance().turnStylesIntoCSSString(props.themeOverride.default)}
  ${(props: any) => StylesService.getInstance().turnStylesIntoCSSString(StylesService.getInstance().getAllPseudoClasses(props.theme.styles, props.themeOverride))}
`