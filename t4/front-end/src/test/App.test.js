import React from 'react';
import renderer from 'react-test-renderer'
import Search from '../components/Search';
import App from '../App';

describe('Snapshot for search component', ()=>{
  test('front-end snapshot', () => {
    const renderedComponent = renderer.create(<Search/>).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  });
  
})

