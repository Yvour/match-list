import * as React from 'react';

interface Interface {
  onSubmit: ({ awayTeamName: string, homeTeamName: string }) => void;
  onCancel: () => void;
}

export const AddingForm = ({ onCancel }: IAddingFormProps) => {
  return (
    <div>
      <label>
        Home Team
        <input aria-label="Home Team" type="text" />
      </label>
      <label>
        Away Team
        <input type="text" />
      </label>
      <button onClick={onCancel}>Cancel</button>
      <button>Submit</button>
    </div>
  );
};
