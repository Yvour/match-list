import * as React from 'react';
import { render, screen } from '@testing-library/react';
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
    render(<Scoreboard list={[]} />);

    expect(screen.getAllByRole('button', { name: 'Add' })).toHaveLength(1);
    expect(screen.getAllByRole('table')).toHaveLength(1);
  });
});
