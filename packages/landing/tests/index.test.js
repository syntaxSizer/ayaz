import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/index';
import Store from '../pages/store';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('App', () => {
  const initialState = {
    auth: { isLoggedIn: false },
    cart: {},
    _proxy: {
      feed: {
        cuisine: null,
      },
    },
  };
  const mockStore = configureStore();
  it('Landing page renders without crashing', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <LandingPage />
      </Provider>
    );
  });
  it('Store page renders without crashing', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Store />
      </Provider>
    );
  });
});
