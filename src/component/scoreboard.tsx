import * as React from 'react';
import { IMatchListEntry } from '../types/types';
import { MatchTable } from './match-table';
import { createMatch } from '../utils/create';
import { AddingForm } from './adding-form';

interface IScoreboardProps {
  initialList: IMatchListEntry[];
}

export const Scoreboard = (props: IScoreboardProps) => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [list, setList] = React.useState(
    Array.isArray(props.initialList) ? props.initialList : []
  );
  const closeAddingForm = () => setIsAdding(false);
  const submitAddingForm = ({
    awayTeamName,
    homeTeamName,
  }: {
    awayTeamName: string;
    homeTeamName: string;
  }) => {
    const modifiedList = createMatch(list, {
      homeTeam: { name: homeTeamName, score: 0 },
      awayTeam: { name: awayTeamName, score: 0 },
    });
    setList(modifiedList);
    setIsAdding(false);
  };
  const showAddingForm = () => setIsAdding(true);

  return (
    <div>
      {isAdding ? (
        <AddingForm onCancel={closeAddingForm} onSubmit={submitAddingForm} />
      ) : null}
      <button onClick={showAddingForm}>Add</button>
      <MatchTable list={list} />
    </div>
  );
};
