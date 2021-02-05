import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render cardlist component', () => {
	const mockRobots = [ 
	 {
	 	id: 1,
	 	name: 'jon snow',
	 	username: 'johnjohn',
	 	email: 'yourmom@gmail.com'
	 } 
	]
	expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})