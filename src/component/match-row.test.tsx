import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MatchRow } from './match-row';
import { IMatchListEntry } from '../types/types';

const MATCH_ID = 'the match id for the test';
const HOME_TEAM_NAME = 'ONE';
const AWAY_TEAM_NAME = 'two';
const AWAY_TEAM_SCORE = 3;
const HOME_TEAM_SCORE = 4;

const mockedDeleteHandler = jest.fn();
const mockedUpdateHandler = jest.fn();

const TEST_MATCH_ITEM: IMatchListEntry = {
  id: MATCH_ID,
  homeTeam: { name: HOME_TEAM_NAME, score: HOME_TEAM_SCORE },
  awayTeam: { name: AWAY_TEAM_NAME, score: AWAY_TEAM_SCORE },
  startTime: '',
};

describe('MatchRow', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render team names and scores', () => {
    render(
      <table>
        <tbody>
          <MatchRow
            matchItem={TEST_MATCH_ITEM}
            onDeleteButtonClick={mockedDeleteHandler}
            onUpdateButtonClick={mockedUpdateHandler}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText(HOME_TEAM_SCORE)).toBeInTheDocument();
    expect(screen.getByText(AWAY_TEAM_SCORE)).toBeInTheDocument();
    expect(screen.getByText(HOME_TEAM_NAME)).toBeInTheDocument();
    expect(screen.getByText(AWAY_TEAM_NAME)).toBeInTheDocument();
  });

  it('should render `Delete` button and launch  handler with params`', () => {
    render(
      <table>
        <tbody>
          <MatchRow
            matchItem={TEST_MATCH_ITEM}
            onDeleteButtonClick={mockedDeleteHandler}
            onUpdateButtonClick={mockedUpdateHandler}
          />
        </tbody>
      </table>
    );

    const button = screen.getByRole('button', { name: 'Delete' });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockedUpdateHandler).toBeCalledTimes(0);
    expect(mockedDeleteHandler).toBeCalledTimes(1);
    expect(mockedDeleteHandler).toBeCalledWith(MATCH_ID);
  });

  it('should render `Update` button and launch  handler with params`', () => {
    render(
      <table>
        <tbody>
          <MatchRow
            matchItem={TEST_MATCH_ITEM}
            onDeleteButtonClick={mockedDeleteHandler}
            onUpdateButtonClick={mockedUpdateHandler}
          />
        </tbody>
      </table>
    );

    const button = screen.getByRole('button', { name: 'Update' });
    fireEvent.click(button);
    expect(mockedUpdateHandler).toBeCalledTimes(1);
    expect(mockedDeleteHandler).toBeCalledTimes(0);
    expect(mockedUpdateHandler).toBeCalledWith(TEST_MATCH_ITEM);
  });
});
