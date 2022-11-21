import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueTable } from './Table.Component';
import { TorqueTableProps } from './Table.Types';

export default {
    title: 'TorqueTable',
    component: TorqueTable,
    argTypes: {

    },
    args: {

    } as TorqueTableProps
}

const Table: ComponentStory<typeof TorqueTable> = (args: TorqueTableProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Table', TorqueLogLevel.WARN);
    return (
        <TorqueTable {...args} />
    )
}
export const _TorqueTable = Table.bind({});