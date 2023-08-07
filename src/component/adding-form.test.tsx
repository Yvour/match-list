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
    render(<AddingForm onSubmit={mockedOnSubmit} onCancel={mockedOnCancel} />);
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
    render(<AddingForm onSubmit={mockedOnSubmit} onCancel={mockedOnCancel} />);
    const button = screen.getByRole('button', { name: 'Cancel' });

    fireEvent.click(button);
    expect(mockedOnCancel).toBeCalledTimes(1);
    expect(mockedOnSubmit).toBeCalledTimes(0);
  });

  it('should allow to ender values and send them via submit handler', () => {
    render(<AddingForm onSubmit={mockedOnSubmit} onCancel={mockedOnCancel} />);

    const homeInput = screen.getByLabelText('Home Team', { selector: 'input' });

    fireEvent.change(homeInput, { target: { value: 'Team one' } });

    const awayInput = screen.getByLabelText('Away Team', { selector: 'input' });

    fireEvent.change(awayInput, { target: { value: 'Team Two' } });

    const button = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(button);
    expect(mockedOnCancel).toBeCalledTimes(0);
    expect(mockedOnSubmit).toBeCalledTimes(1);
    expect(mockedOnSubmit).toBeCalledWith({
      homeTeamName: 'Team one',
      awayTeamName: 'Team Two',
    });
  });
});
