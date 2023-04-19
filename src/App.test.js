// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Time Converter App', () => {
  test('renders local time input', () => {
    render(<App />);
    const localTimeInput = screen.getByLabelText(/local time/i);
    expect(localTimeInput).toBeInTheDocument();
  });

  test('renders foreign timezone select', () => {
    render(<App />);
    const foreignTimezoneSelect = screen.getByLabelText(/foreign timezone/i);
    expect(foreignTimezoneSelect).toBeInTheDocument();
  });

});
