import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueTabs } from './Tabs.Component';
import { TorqueTabsProps } from './Tabs.Types';

export default {
    title: 'TorqueTabs',
    component: TorqueTabs,
    argTypes: {

    },
    args: {

    } as TorqueTabsProps
}

const Tabs: ComponentStory<typeof TorqueTabs> = (args: TorqueTabsProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueTabs {...args} />
    )
}
export const _TorqueTabs = Tabs.bind({});