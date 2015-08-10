import specHelper from './support/specHelper';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import assert from 'assert';
import Component from '../src/Component';

describe('Component', () => {
  describe('render', () => {
    it('should work', () => {

      const component = TestUtils.renderIntoDocument(<Component />);
      const componentDOM = React.findDOMNode(component);

      assert.equal('Hello, World', componentDOM.innerHTML);
    });
  });
});
