import * as React from 'react';
import { UpdatingForm } from './updating-form';

import { fireEvent, render, screen } from '@testing-library/react';
import { IMatchListEntry } from '../types/types';

const mockedOnSubmit = jest.fn();
const mockedOnCancel = jest.fn();
const HOME_TEAM_NAME = 'HOMETEAMNAME___(';
const AWAY_TEAM_NAME = 'AWAYTEAMNAME=====';

const MATCH_ENTRY: IMatchListEntry = {
  id: 'test id',
  startTime: 'start time',
  homeTeam: { name: HOME_TEAM_NAME, score: 10 },
  awayTeam: { name: AWAY_TEAM_NAME, score: 11 },
};

describe('UpdatingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render two inputs and two buttons and mention both team names', () => {
    render(
      <UpdatingForm
        onSubmit={mockedOnSubmit}
        onCancel={mockedOnCancel}
        matchEntry={MATCH_ENTRY}
      />
    );

    expect(screen.getByText(HOME_TEAM_NAME)).toBeInTheDocument();
    expect(screen.getByText(AWAY_TEAM_NAME)).toBeInTheDocument();

    expect(
      screen.getByLabelText('Home Team Score', { selector: 'input' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Away Team Score', { selector: 'input' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('should call handler if `Cancel` cliked', () => {
    render(
      <UpdatingForm onSubmit={mockedOnSubmit} onCancel={mockedOnCancel} />
    );
    const button = screen.getByRole('button', { name: 'Cancel' });

    fireEvent.click(button);
    expect(mockedOnCancel).toBeCalledTimes(1);
    expect(mockedOnSubmit).toBeCalledTimes(0);
  });

  it('should allow to ender values and send them via submit handler', () => {
    render(
      <UpdatingForm onSubmit={mockedOnSubmit} onCancel={mockedOnCancel} />
    );

    const homeInput = screen.getByLabelText('Home Team Score', {
      selector: 'input',
    });

    fireEvent.change(homeInput, { target: { value: '18' } });

    const awayInput = screen.getByLabelText('Away Team Score', {
      selector: 'input',
    });

    fireEvent.change(awayInput, { target: { value: '21' } });

    const button = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(button);
    expect(mockedOnCancel).toBeCalledTimes(0);
    expect(mockedOnSubmit).toBeCalledTimes(1);
    expect(mockedOnSubmit).toBeCalledWith({
      ...MATCH_ENTRY,
      homeTeam: { ...MATCH_ENTRY.homeTeam, score: 18 },
      awayTeam: { ...MATCH_ENTRY.awayTeam, score: 21 },
    });
  });
});
