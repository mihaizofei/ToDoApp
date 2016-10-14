import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import AddItem from './AddItem';

function setup(saving) {
    let props = {
        item: {}, 
        saving: saving, 
        onItemChange: () => {}, 
        onSave: () => {}
    };

    return shallow(<AddItem {...props} />);
}

describe('AddItem via Enzyme', () => {
    it('renders div and TextField', () => {
        const wrapper = setup(false);
        expect(wrapper.find('div').length).toBe(1);

        expect(wrapper.find('TextField').props().hintText).toEqual('Add item');
    });

    it('add button is labeled "Add" when not saving', ()=> {
        const wrapper = setup(false);
        expect(wrapper.find('RaisedButton').props().label).toBe('Add');
    });

    it('add button is labeled "Adding..." when saving', ()=> {
        const wrapper = setup(true);
        expect(wrapper.find('RaisedButton').props().label).toBe('Adding...');
    });
});