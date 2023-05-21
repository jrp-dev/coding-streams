import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from './';

describe('PrimaryButton', () => {
  test('renders button correctly', () => {
    render(
      <PrimaryButton
        id="test-button"
        type="button"
        className="test-class"
        onClick={() => {}}
        content="Test Button"
      />
    );

    // Check if the button element is rendered correctly
    expect(screen.getByText(/Test Button/i)).toBeInTheDocument();
  });

  test('calls onClick event handler correctly', () => {
    const handleClick = jest.fn();

    render(
      <PrimaryButton
        id="test-button"
        type="button"
        className="test-class"
        onClick={handleClick}
        content="Test Button"
      />
    );

    // Simulate button click
    fireEvent.click(screen.getByText(/Test Button/i));

    // Check if the onClick event handler is called
    expect(handleClick).toHaveBeenCalled();
  });
});