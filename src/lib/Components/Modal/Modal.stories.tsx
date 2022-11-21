import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueModal } from './Modal.Component';
import { TorqueModalProps } from './Modal.Types';

export default {
    title: 'TorqueModal',
    component: TorqueModal,
    argTypes: {

    },
    args: {

    } as TorqueModalProps
}

const Modal: ComponentStory<typeof TorqueModal> = (args: TorqueModalProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Modal', TorqueLogLevel.WARN);
    return (
        <TorqueModal {...args} />
    )
}
export const _TorqueModal = Modal.bind({});