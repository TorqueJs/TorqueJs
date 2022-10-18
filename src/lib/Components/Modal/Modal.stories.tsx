import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
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
    return (
        <TorqueModal {...args} />
    )
}
export const _TorqueModal = Modal.bind({});