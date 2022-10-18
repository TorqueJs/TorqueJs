import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { TorqueTooltip } from './Tooltip.Component';

describe('Torque Tooltip', () => {
    let component: ReactTestRenderer;

    beforeEach(() => {
        component = renderer.create(<TorqueTooltip></TorqueTooltip>)
    });

    it('Should Render', () => {
        let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
        expect(json.props).toBeDefined();
    })
});