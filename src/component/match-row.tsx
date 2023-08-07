import * as React from 'react';
import { IMatchListEntry } from '../types/types';

interface IMatchRowProps {
  matchItem: IMatchListEntry;
  onDeleteButtonClick: (id: string) => void;
  onUpdateButtonClick: (item: IMatchListEntry) => void;
}

export const MatchRow = ({
  matchItem,
  onDeleteButtonClick,
  onUpdateButtonClick,
}: IMatchRowProps) => {
  const { homeTeam, awayTeam, id } = matchItem;
  const updateButtonHandler = React.useCallback(() => {
    onUpdateButtonClick(matchItem);
  }, [matchItem]);

  const deleteButtonHandler = React.useCallback(() => {
    onDeleteButtonClick(id);
  }, [id]);

  return (
    <tr>
      <td>{homeTeam.name} </td>
      <td>{homeTeam.score} </td>
      <td>{'&nbsp;'} </td>
      <td>{awayTeam.name} </td>
      <td>{awayTeam.score} </td>
      <td>
        <button onClick={updateButtonHandler}>Update</button>
      </td>
      <td>
        <button onClick={deleteButtonHandler}>Delete</button>
      </td>
    </tr>
  );
};
