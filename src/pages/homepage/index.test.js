import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from './';

describe('Homepage', () => {
  test('renders homepage correctly', () => {
    render(<Homepage />);

    // Check if the page elements are rendered correctly
    expect(screen.getByText(/Learn to code by watching others/i)).toBeInTheDocument();
    expect(
      screen.getByText(/See how experienced developers solve problems in real-time./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Try it free 7 days/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CLAIM YOUR FREE TRIAL/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Terms and Services/i })).toBeInTheDocument();
  });

  test('handles form submission correctly', () => {
    render(<Homepage />);

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email Address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password123' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /CLAIM YOUR FREE TRIAL/i }));

    // Add assertions for the form submission
    // Example: expect(someFunctionToCheckFormSubmission).toHaveBeenCalledWith(formData);
  });
});
