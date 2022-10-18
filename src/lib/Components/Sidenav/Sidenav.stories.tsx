import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
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
    return (
        <TorqueSidenav {...args} />
    )
}
export const _TorqueSidenav = Sidenav.bind({});