import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    // Assert the presence of specific elements or components
    // For example, you can check if the Homepage component is rendered
    // by looking for a specific text or element from the Homepage component
    expect(screen.getByText(/Learn to code by watching others/i)).toBeInTheDocument();
  });
});
