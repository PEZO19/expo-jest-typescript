import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('matches last snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



describe('simple test, no React Render', () => {
  it('1 is 1', () => {
    expect(1).toBe(1);
  });
});