import { ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { TorqueIcon } from '../../Icons/Icon.Component';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueAccordian } from './Accordian.Component';
import { TorqueAccordianProps } from './Accordian.Types';
import { TorqueAccordianContent } from './AccordianContent.Component';
import { TorqueAccordianHeader } from './AccordianHeader.Component';

export default {
    title: 'TorqueAccordian',
    component: TorqueAccordian,
    argTypes: {

    },
    args: {

    } as TorqueAccordianProps
}

const Accordian: ComponentStory<typeof TorqueAccordian> = (args: TorqueAccordianProps) => {
    const [clickedFirst, setClickedFirst] = useState(false);
    const [clickedSecond, setClickedSecond] = useState(false);
    const [clickedThird, setClickedThird] = useState(false);
    const [clickedFourth, setClickedFourth] = useState(false);
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Accordian', TorqueLogLevel.WARN);
    return (
        <div>
            <TorqueAccordian identifier='default' isActive={ clickedFirst }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedFirst(!clickedFirst);
                } }>
                    { clickedFirst ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}
                    <p>First Item</p>
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedFirst } >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rerum est, molestias corporis placeat laudantium enim debitis, eius illo eligendi ipsam. Explicabo nihil, aspernatur provident eveniet necessitatibus reprehenderit culpa error.
                </TorqueAccordianContent>
            </TorqueAccordian>

            <TorqueAccordian identifier='default' isActive={ clickedSecond }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedSecond(!clickedSecond);
                } }>
                    { clickedSecond ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}: Second Item
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedSecond } >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at inventore laboriosam esse cupiditate ab aliquid sapiente minus rem numquam sequi sunt, necessitatibus, doloribus dolorem nemo iure, porro blanditiis officia!
                </TorqueAccordianContent>
            </TorqueAccordian>

            <TorqueAccordian identifier='default' isActive={ clickedThird }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedThird(!clickedThird);
                } }>
                    { clickedThird ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}: Third Item
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedThird } >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad sunt odit, tempora consequuntur quo repellendus in aperiam nobis ex libero quae repellat ipsam voluptatum dolores quidem aspernatur a fugiat?
                </TorqueAccordianContent>
            </TorqueAccordian>

            <TorqueAccordian identifier='default' isActive={ clickedFourth }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedFourth(!clickedFourth);
                } }>
                    { clickedFourth ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}: Third Item
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedFourth } >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad sunt odit, tempora consequuntur quo repellendus in aperiam nobis ex libero quae repellat ipsam voluptatum dolores quidem aspernatur a fugiat?
                </TorqueAccordianContent>
            </TorqueAccordian>

        </div>
    )
}
export const _TorqueAccordian = Accordian.bind({});