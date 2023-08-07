import * as React from 'react';
import { IMatchListEntry } from '../types/types';

interface IMatchRowProps {
  matchItem: IMatchListEntry;
}

export const MatchRow = ({
  matchItem: { homeTeam, awayTeam },
}: IMatchRowProps) => {
  return (
    <tr>
      <td>{homeTeam.name} </td>
      <td>{homeTeam.score} </td>
      <td>{'&nbsp;'} </td>
      <td>{awayTeam.name} </td>
      <td>{awayTeam.score} </td>
    </tr>
  );
};
