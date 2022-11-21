import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueMenu } from './Menu.Component';
import { TorqueMenuProps } from './Menu.Types';

export default {
    title: 'TorqueMenu',
    component: TorqueMenu,
    argTypes: {

    },
    args: {

    } as TorqueMenuProps
}

const Menu: ComponentStory<typeof TorqueMenu> = (args: TorqueMenuProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Menu', TorqueLogLevel.WARN);
    return (
        <TorqueMenu {...args} />
    )
}
export const _TorqueMenu = Menu.bind({});