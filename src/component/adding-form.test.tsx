import * as React from 'react';
import { AddingForm } from './adding-form';

import { fireEvent, render, screen } from '@testing-library/react';

const mockedOnSubmit = jest.fn();
const mockedOnCancel = jest.fn();

describe('AddingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render two inputs and two buttons', () => {
    render(<AddingForm onSubmit={mockedOnSubmit} />);
    expect(
      screen.getByLabelText('Home Team', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Away Team', { selector: 'input' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('should call handler if `Cancel` cliked', () => {
    const button = screen.getByRole('button', { name: 'Cancel' });

    fireEvent.click(button);
    expect(mockedOnCancel).toBeCalledTimes(1);
    expect(mockedOnSubmit).toBeCalledTimes(0);
  });
});
