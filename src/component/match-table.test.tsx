import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
const mockedUpdateButtonClick = jest.fn();
const mockedDeleteButtonClick = jest.fn();

describe('MatchTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render table', () => {
    render(<MatchTable list={LIST} />);

    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('button')).toHaveLength(6);
  });

  it('should set handlers for delete', () => {
    render(
      <MatchTable
        list={LIST}
        onDeleteButtonClick={mockedDeleteButtonClick}
        onUpdateButtonClick={mockedUpdateButtonClick}
      />
    );

    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButtons[1]);
    expect(mockedUpdateButtonClick).toBeCalledTimes(0);
    expect(mockedDeleteButtonClick).toBeCalledTimes(1);
    expect(mockedDeleteButtonClick).toBeCalledWith('b');
  });

  it('should set handlers for update', () => {
    render(
      <MatchTable
        list={LIST}
        onDeleteButtonClick={mockedDeleteButtonClick}
        onUpdateButtonClick={mockedUpdateButtonClick}
      />
    );

    const deleteButtons = screen.getAllByRole('button', { name: 'Update' });
    fireEvent.click(deleteButtons[1]);
    expect(mockedDeleteButtonClick).toBeCalledTimes(0);
    expect(mockedUpdateButtonClick).toBeCalledTimes(1);
    expect(mockedUpdateButtonClick).toBeCalledWith(MATCH_B);
  });
});
