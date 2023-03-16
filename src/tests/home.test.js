import React from 'react';
import { render } from '@testing-library/react';
import Home from '../component/DetailsPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../features/store';

describe('Home Test', () => {
  test('to render each coin details: ', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(home).toMatchSnapshot();
  });
});
