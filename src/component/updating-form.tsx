import * as React from 'react';
import { IMatchListEntry } from '../types/types';

interface IUpdatingFormProps {
  matchEntry: IMatchListEntry;
  onSubmit: (item: IMatchListEntry) => void;
  onCancel: () => void;
}

export const UpdatingForm = (props: IUpdatingFormProps) => {
  const { matchEntry, onCancel, onSubmit } = props;

  const [homeTeamScore, setHomeTeamScore] = React.useState('');
  const [awayTeamScore, setAwayTeamScore] = React.useState('');

  const onSubmitButtonClick = () => {
    onSubmit({
      ...matchEntry,
      homeTeam: { ...matchEntry.homeTeam, score: Number(homeTeamScore) },
      awayTeam: { ...matchEntry.awayTeam, score: Number(awayTeamScore) },
    });
  };
  return (
    <div>
      <div>
        <div>{matchEntry.homeTeam.name}</div>
        <label>
          Home Team Score
          <input
            type="text"
            value={homeTeamScore}
            onChange={(e) => setHomeTeamScore(e.target.value)}
          />
        </label>
      </div>
      <div>
        <div>{matchEntry.awayTeam.name}</div>
        <label>
          Away Team Score
          <input
            type="text"
            value={awayTeamScore}
            onChange={(e) => setAwayTeamScore(e.target.value)}
          />
        </label>
      </div>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onSubmitButtonClick}>Submit</button>
    </div>
  );
};
