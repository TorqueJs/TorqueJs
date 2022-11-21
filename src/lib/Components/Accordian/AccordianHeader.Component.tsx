import React, { useEffect } from 'react';
import { StylesService } from '../../Torque/StylesService';
import { ComponentStyles, ComponentType } from '../../Types';
import { GenerateGuid } from '../../Utils/GenerateGuid';
import { _TorqueAccordianHeader } from './Accordian.Styles';
import { TorqueAccordianHeaderProps } from './Accordian.Types';


export const TorqueAccordianHeader: React.FC<TorqueAccordianHeaderProps> = (props: TorqueAccordianHeaderProps) => {
    let componentStyles = StylesService.getInstance().getComponentStyle(ComponentType.TORQUE_ACCORDIAN);
    let subscriptionGuid = GenerateGuid();
    let componentAttributes = StylesService.getInstance().getAttributesByIdentifier(componentStyles, props.identifier || ComponentType.TORQUE_ACCORDIAN);

    useEffect(() => {
        StylesService.getInstance().torqueAccordianSubject.subscribe(subscriptionGuid, (value: ComponentStyles) => {
            componentStyles = value,
            componentAttributes = StylesService.getInstance().getAttributesByIdentifier(value, props.identifier || ComponentType.TORQUE_ACCORDIAN)
        });

        return function cleanup() {
            StylesService.getInstance().torqueAccordianSubject.unsubscribe(subscriptionGuid);
        }
    }, []);

    return (
        <_TorqueAccordianHeader
            theme={componentAttributes}
            themeOverrides={props.themeOverride ? props.themeOverride : {}}
            data-name="torque-accordian-header"
            >
            { props.children }
        </_TorqueAccordianHeader>
    )
}