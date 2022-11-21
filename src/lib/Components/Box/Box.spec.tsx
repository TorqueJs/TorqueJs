import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { TorqueBox } from './Box.Component';

describe('Torque Box', () => {
    let component: ReactTestRenderer;

    beforeEach(() => {
        component = renderer.create(<TorqueBox></TorqueBox>)
    });

    it('Should Render', () => {
        let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
        expect(json.props).toBeDefined();
    })
});