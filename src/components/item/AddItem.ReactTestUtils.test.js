import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AddItem from './AddItem';

function setup(saving) {
    let props = {
        item: {}, 
        saving: saving, 
        onItemChange: () => {}, 
        onSave: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<AddItem {...props}/>);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('AddItem via React Test Utils', () => {
    it('renders div and TextField', () => {
        const { output } = setup();
        expect(output.type).toBe('div');
        let [TextField] = output.props.children;
        expect(TextField.props.hintText).toBe('Add item');
    });

    it('add button is labeled "Add" when not saving', ()=> {
        const { output } = setup(false);
        const submitButton = output.props.children[1];
        expect(submitButton.props.label).toBe('Add');
    });

    it('add button is labeled "Adding..." when saving', ()=> {
        const { output } = setup(true);
        const submitButton = output.props.children[1];
        expect(submitButton.props.label).toBe('Adding...');
    });
});