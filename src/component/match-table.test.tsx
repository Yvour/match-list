import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IMatchListEntry } from '../types/types';
import { MatchTable } from './match-table';

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

describe('MatchTable', () => {
  it('should render table', () => {
    render(<MatchTable list={LIST} />);

    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('button')).toHaveLength(6);
  });
});
