import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<Navigation Item />',() => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('shold render two navigation item elements if not auth',()=> {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);

    });
    it('shold render three navigation item elements if not auth',()=> {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);

    });
    it('shold render three navigation item elements if not auth',()=> {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link ='/logout'>Logout</NavigationItem>)).toEqual(true);

    });
})

