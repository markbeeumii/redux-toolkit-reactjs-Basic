import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './hooks/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  screen.debug();
  //const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByRole('link', { name: /learn react/i });
  // expect(linkElement).toBeInTheDocument();
  const textElement = screen.getByText(/learn react/i);

  // Assert that the element containing the text is found
  expect(textElement).toBeInTheDocument();
});
