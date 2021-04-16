import React from 'react';
import { shallow, mount } from 'enzyme';
import { getByAttribute } from '../util/getByAttribute';
import TextInput from './TextInput';

const setup = (props) => {
    return shallow(<TextInput {...props} />)
}


describe('TextInput', () => {
    let shallowComponent;

    let personalInfo = {
        "name": "name.first",
        "type": "text",
        "label": "First name",
        "description": "Enter your first name.",
        "displayOrder": 1
    };

    beforeEach(() => {
        shallowComponent = setup({ personalInfo });
        console.log(shallowComponent.debug());
    });

    it('should render the component correctly', () => {
        expect(shallowComponent.children().length).toEqual(2);
        expect(shallowComponent.find('label').text()).toEqual('First name');
        const descriptionDiv = getByAttribute(shallowComponent, 'description-div');
        expect(descriptionDiv.children().length).toEqual(0);
    });

    it('should display description when input is in focus', () => {
        const input = shallowComponent.find('input');
        input.simulate('focus');
        const descriptionDiv = getByAttribute(shallowComponent, 'description-div');
        expect(descriptionDiv.children().length).toEqual(1);
    });

    it('should display the correct description text when input is in focus', () => {
        const input = shallowComponent.find('input');
        input.simulate('focus');
        const descriptionDiv = getByAttribute(shallowComponent, 'description-div');
        expect(descriptionDiv.find('p').text()).toEqual('Enter your first name.');
    });
});
