import styled from 'styled-components';
import { StylesService } from '../../Torque/StylesService';
import { ComponentStyling } from '../../Types';
import { TorqueAccordianAttributes } from '../../Types/Theme';


export const _TorqueAccordianWrapper: any = styled('div')`
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString((props.theme as TorqueAccordianAttributes).accordianWrapper?.styles?.default)}
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString((props.themeOverride as ComponentStyling)?.default)}
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString(StylesService.getInstance().getAllPseudoClasses((props.theme as TorqueAccordianAttributes).accordianWrapper?.styles, (props.themeOverride as ComponentStyling)))}
`;

export const _TorqueAccordianHeader: any = styled('div')`
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString((props.theme as TorqueAccordianAttributes).accordianHeader?.styles?.default)}
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString((props.themeOverride as ComponentStyling)?.default)}
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString(StylesService.getInstance().getAllPseudoClasses((props.theme as TorqueAccordianAttributes).accordianHeader?.styles, (props.themeOverride as ComponentStyling)))}
`;

export const _TorqueAccordianContent: any = styled('div')`
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString((props.theme as TorqueAccordianAttributes).accordianContent?.styles?.default)}
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString((props.themeOverride as ComponentStyling)?.default)}
  ${ (props: any) => StylesService.getInstance().turnStylesIntoCSSString(StylesService.getInstance().getAllPseudoClasses((props.theme as TorqueAccordianAttributes).accordianContent?.styles, (props.themeOverride as ComponentStyling)))}
`;