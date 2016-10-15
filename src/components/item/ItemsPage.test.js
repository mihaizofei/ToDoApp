import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ItemsPage} from './ItemsPage';

describe('Items Page', () => {
    it('sets error message when trying to save empty item', () => {
        const wrapper = mount(<ItemsPage items={[]}/>);
        const addItem = wrapper.find('div').last();
        
        console.log(addItem.props());
    });
});