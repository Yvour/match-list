import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IMatchListEntry } from '../types/types';
import { Scoreboard } from './scoreboard';
import { Simulate } from 'react-dom/test-utils';
import submit = Simulate.submit;

const MATCH_A: IMatchListEntry = {
  id: 'a',
  startTime: '1',
  awayTeam: { name: 'Team One', score: 1 },
  homeTeam: { name: 'Team Two', score: 3 },
};

const MATCH_B: IMatchListEntry = {
  id: 'b',
  startTime: '3',
  awayTeam: { name: 'Team Three', score: 0 },
  homeTeam: { name: 'Team Four', score: 2 },
};

const MATCH_C: IMatchListEntry = {
  id: 'c',
  startTime: '4',
  awayTeam: { name: 'Team Five', score: 1 },
  homeTeam: { name: 'Team Six', score: 1 },
};

const LIST = [MATCH_A, MATCH_B, MATCH_C];
const mockedUpdateButtonClick = jest.fn();
const mockedDeleteButtonClick = jest.fn();

describe('Scoreboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render empty table and `Add` button', () => {
    render(<Scoreboard initialList={[]} />);

    expect(screen.getAllByRole('button', { name: 'Add' })).toHaveLength(1);
    expect(screen.getAllByRole('table')).toHaveLength(1);
  });

  it('should allow to add values via `Add` button', () => {
    render(<Scoreboard initialList={LIST} />);

    expect(
      screen.queryByRole('button', { name: 'Submit' })
    ).not.toBeInTheDocument();

    expect()
    const addButton = screen.getByRole('button', { name: 'Add' });

    expect(screen.getAllByRole('row')).toHaveLength(3);

    fireEvent.click(addButton);

    expect(
      screen.queryByRole('button', { name: 'Submit' })
    ).toBeInTheDocument();

    const homeInput = screen.getByLabelText('Home Team', { selector: 'input' });

    fireEvent.change(homeInput, { target: { value: 'Team one' } });

    const awayInput = screen.getByLabelText('Away Team', { selector: 'input' });

    fireEvent.change(awayInput, { target: { value: 'Team Two' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(submitButton);

    expect(screen.getAllByRole('row')).toHaveLength(4);
  });
});
