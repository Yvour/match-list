import * as React from 'react';
import { IMatchListEntry } from '../types/types';
import { MatchRow } from './match-row';

interface IMatchTableProps {
  list: IMatchListEntry[];
  onDeleteButtonClick: (id: string) => void;
  onUpdateButtonClick: (item: IMatchListEntry) => void;
}

export const MatchTable = (props: IMatchTableProps) => {
  const { list, onDeleteButtonClick, onUpdateButtonClick } = props;
  return (
    <table>
      <tbody>
        {list.map((matchItem) => {
          return (
            <MatchRow
              key={matchItem.id}
              matchItem={matchItem}
              onDeleteButtonClick={onDeleteButtonClick}
              onUpdateButtonClick={onUpdateButtonClick}
            />
          );
        })}
      </tbody>
    </table>
  );
};
