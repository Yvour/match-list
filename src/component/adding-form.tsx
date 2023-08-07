import * as React from 'react';

interface IAddingFormProps {
  onSubmit: ({ awayTeamName: string, homeTeamName: string }) => void;
  onCancel: () => void;
}

export const AddingForm = ({ onCancel, onSubmit }: IAddingFormProps) => {
  const [homeTeamName, setHomeTeamName] = React.useState('');
  const [awayTeamName, setAwayTeamName] = React.useState('');

  const onSubmitButtonClick = () => {
    onSubmit({ homeTeamName, awayTeamName });
  };

  return (
    <div>
      <label>
        Home Team
        <input
          type="text"
          value={homeTeamName}
          onChange={(e) => setHomeTeamName(e.target.value)}
        />
      </label>
      <label>
        Away Team
        <input
          type="text"
          value={awayTeamName}
          onChange={(e) => setAwayTeamName(e.target.value)}
        />
      </label>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onSubmitButtonClick}>Submit</button>
    </div>
  );
};
