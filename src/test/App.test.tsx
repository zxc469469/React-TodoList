import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux'
import store from '../store/store'

test('renders learn react link', () => {
  const { getByTestId } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByTestId('App');
  expect(linkElement).toBeInTheDocument();
});
