import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueAccordian } from './Accordian.Component';
import { TorqueAccordianProps } from './Accordian.Types';

export default {
    title: 'TorqueAccordian',
    component: TorqueAccordian,
    argTypes: {

    },
    args: {

    } as TorqueAccordianProps
}

const Accordian: ComponentStory<typeof TorqueAccordian> = (args: TorqueAccordianProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Accordian', TorqueLogLevel.WARN);
    return (
        <TorqueAccordian {...args}>
            <TorqueAccordian.Header></TorqueAccordian.Header>
            <TorqueAccordian.Content></TorqueAccordian.Content>
        </TorqueAccordian>
    )
}
export const _TorqueAccordian = Accordian.bind({});