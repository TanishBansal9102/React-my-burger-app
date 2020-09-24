import React from 'react' ;

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BurgerBuilder } from './BurgerBuilder';
import buildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<Burger Builder />', () => {
     let wrapper ;

     beforeEach(() => {
         wrapper = shallow(<BurgerBuilder onInitIngredients = {() => {}} />);
     });

     it('shoufdvnkjdn', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(buildControls)).toHaveLength(1)
     });


})