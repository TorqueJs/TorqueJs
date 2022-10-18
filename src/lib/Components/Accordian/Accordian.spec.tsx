import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { TorqueAccordian } from './Accordian.Component';

describe('Torque Accordian', () => {
    let component: ReactTestRenderer;

    beforeEach(() => {
        component = renderer.create(<TorqueAccordian></TorqueAccordian>)
    });

    it('Should Render', () => {
        let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
        expect(json.props).toBeDefined();
    })
});