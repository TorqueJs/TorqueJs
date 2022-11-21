import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueSidenav } from './Sidenav.Component';
import { TorqueSidenavProps } from './Sidenav.Types';

export default {
    title: 'TorqueSidenav',
    component: TorqueSidenav,
    argTypes: {

    },
    args: {

    } as TorqueSidenavProps
}

const Sidenav: ComponentStory<typeof TorqueSidenav> = (args: TorqueSidenavProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Sidenav', TorqueLogLevel.WARN);
    return (
        <TorqueSidenav {...args} />
    )
}
export const _TorqueSidenav = Sidenav.bind({});