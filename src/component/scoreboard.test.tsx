import * as React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { IMatchListEntry } from '../types/types';
import { Scoreboard } from './scoreboard';

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

  it('should allow to add values via `Add` button', async () => {
    render(<Scoreboard initialList={LIST} />);

    expect(
      screen.queryByRole('button', { name: 'Submit' })
    ).not.toBeInTheDocument();

    expect();
    const addButton = screen.getByRole('button', { name: 'Add' });

    expect(screen.getAllByRole('row')).toHaveLength(3);

    await fireEvent.click(addButton);

    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    );

    const homeInput = screen.getByLabelText('Home Team', { selector: 'input' });

    fireEvent.change(homeInput, { target: { value: 'Added Team One' } });

    const awayInput = screen.getByLabelText('Away Team', { selector: 'input' });

    fireEvent.change(awayInput, { target: { value: 'Added Team Two' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(submitButton);

    expect(screen.getAllByRole('row')).toHaveLength(4);
    expect(screen.getByText('Added Team One')).toBeInTheDocument();
  });

  it('should allow edit score via `Update` buttons', async () => {
    const NEW_HOME_TEAM_SCORE = 12;
    const NEW_AWAY_TEAM_SCORE = 13;
    render(<Scoreboard initialList={LIST} />);

    expect(
      screen.queryByRole('button', { name: 'Submit' })
    ).not.toBeInTheDocument();

    expect(screen.getAllByRole('button', { name: 'Update' })).toHaveLength(3);
    const updateButton = screen.getAllByRole('button', { name: 'Update' })[1];

    await fireEvent.click(updateButton);

    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    );

    const homeInput = screen.getByLabelText('Home Team Score', {
      selector: 'input',
    });

    fireEvent.change(homeInput, { target: { value: '12' } });

    const awayInput = screen.getByLabelText('Away Team Score', {
      selector: 'input',
    });

    fireEvent.change(awayInput, { target: { value: '13' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(submitButton);

    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getByText(NEW_HOME_TEAM_SCORE)).toBeInTheDocument();
    expect(screen.getByText(NEW_AWAY_TEAM_SCORE)).toBeInTheDocument();
  });

  it('should allow remove a match via `Delete` buttons', async () => {
    expect;

    render(<Scoreboard initialList={LIST} />);

    // Check the row to be deleted

    expect(screen.getByText('Team One')).toBeInTheDocument();
    expect(screen.getByText('Team Two')).toBeInTheDocument();
    expect(screen.getByText('Team Three')).toBeInTheDocument();
    expect(screen.getByText('Team Four')).toBeInTheDocument();
    expect(screen.getByText('Team Five')).toBeInTheDocument();
    expect(screen.getByText('Team Six')).toBeInTheDocument();

    expect(screen.getAllByRole('button', { name: 'Delete' })).toHaveLength(3);
    const deleteButton = screen.getAllByRole('button', { name: 'Delete' })[1];

    await fireEvent.click(deleteButton);

    expect(screen.getAllByRole('row')).toHaveLength(2);

    // Check the row was visually deleted
    expect(screen.getByText('Team One')).toBeInTheDocument();
    expect(screen.getByText('Team Two')).toBeInTheDocument();
    expect(screen.getByText('Team Three')).toBeInTheDocument();
    expect(screen.getByText('Team Four')).toBeInTheDocument();
    expect(screen.queryByText('Team Five')).not.toBeInTheDocument();
    expect(screen.queryByText('Team Six')).not.toBeInTheDocument();
  });
});
