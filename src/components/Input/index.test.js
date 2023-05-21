import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './';

describe('Input', () => {
  test('renders input correctly', () => {
    render(
      <Input
        id="test-input"
        placeholder="Test Placeholder"
        name="test"
        type="text"
        onChange={() => {}}
        helperText=""
      />
    );

    // Check if the input element is rendered correctly
    expect(screen.getByPlaceholderText(/Test Placeholder/i)).toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    const handleChange = jest.fn();

    render(
      <Input
        id="test-input"
        placeholder="Test Placeholder"
        name="test"
        type="text"
        onChange={handleChange}
        helperText=""
      />
    );

    // Simulate input change
    const input = screen.getByPlaceholderText(/Test Placeholder/i);
    fireEvent.change(input, { target: { value: 'Test Value' } });

    // Check if the onChange event handler is called with the correct value
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Ensure an object is passed
    expect(handleChange.mock.calls[0][0].target.value).toBe('Test Value');
  });

  test('displays error icon and helper text when there is an error', () => {
    render(
      <Input
        id="test-input"
        placeholder="Test Placeholder"
        name="test"
        type="text"
        onChange={() => {}}
        helperText="Error message"
      />
    );

    // Check if the error icon and helper text are rendered
    expect(screen.getByAltText(/error icon/i)).toBeInTheDocument();
    expect(screen.getByText(/Error message/i)).toBeInTheDocument();
  });

  test('does not display error icon and helper text when there is no error', () => {
    render(
      <Input
        id="test-input"
        placeholder="Test Placeholder"
        name="test"
        type="text"
        onChange={() => {}}
        helperText=""
      />
    );

    // Check if the error icon and helper text are not rendered
    expect(screen.queryByAltText(/error icon/i)).toBeNull();
    expect(screen.queryByText(/Error message/i)).toBeNull();
  });
});
