import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { MatchRow } from './match-row';
import { IMatchListEntry } from '../types/types';

const HOME_TEAM_NAME = 'ONE';
const AWAY_TEAM_NAME = 'two';
const AWAY_TEAM_SCORE = 3;
const HOME_TEAM_SCORE = 4;

const TEST_MATCH_ITEM: IMatchListEntry = {
  id: 'test id',
  homeTeam: { name: HOME_TEAM_NAME, score: HOME_TEAM_SCORE },
  awayTeam: { name: AWAY_TEAM_NAME, score: AWAY_TEAM_SCORE },
  startTime: '',
};

describe('MatchRow', () => {
  it('should render team names and scores', () => {
    render(<MatchRow matchItem={TEST_MATCH_ITEM} />);

    expect(screen.getByText(HOME_TEAM_SCORE)).toBeInTheDocument();

    expect(screen.getByText(AWAY_TEAM_SCORE)).toBeInTheDocument();

    expect(screen.getByText(HOME_TEAM_NAME)).toBeInTheDocument();

    expect(screen.getByText(AWAY_TEAM_NAME)).toBeInTheDocument();
  });
});
