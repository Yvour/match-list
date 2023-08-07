import * as React from 'react';
import { IMatchListEntry } from '../types/types';
import { MatchTable } from './match-table';
import { createMatch } from '../utils/create';
import { AddingForm } from './adding-form';
import { UpdatingForm } from './updating-form';
import { updateMatch } from '../utils/update';
import { deleteMatch } from '../utils/delete';
import { summarize } from '../utils/summarize';

interface IScoreboardProps {
  initialList: IMatchListEntry[];
}

export const Scoreboard = (props: IScoreboardProps) => {
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [editFormEntry, setEditFormEntry] =
    React.useState<IMatchListEntry | null>(null);
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
  const onUpdateButtonClick = (item: IMatchListEntry) => {
    setEditFormEntry(item);
    setIsUpdating(true);
  };
  const onUpdateCancel = () => {
    setEditFormEntry(null);
    setIsUpdating(false);
  };
  const onUpdateFormSubmit = (updatedItem: IMatchListEntry) => {
    const updatedList = updateMatch(list, updatedItem, updatedItem.id);
    setList(updatedList);
    setIsUpdating(false);
  };

  const onDeleteButtonClick = (id: string) => {
    const modifiedList = deleteMatch(list, id);
    setList(modifiedList);
  };

  const summarizedList = React.useMemo(() => {
    return summarize(list);
  }, [list]);

  return (
    <div>
      {isAdding ? (
        <AddingForm onCancel={closeAddingForm} onSubmit={submitAddingForm} />
      ) : null}
      {isUpdating ? (
        <UpdatingForm
          onCancel={onUpdateCancel}
          onSubmit={onUpdateFormSubmit}
          matchEntry={editFormEntry}
        />
      ) : null}
      <button onClick={showAddingForm}>Add</button>
      <MatchTable
        list={summarizedList}
        onUpdateButtonClick={onUpdateButtonClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
    </div>
  );
};
