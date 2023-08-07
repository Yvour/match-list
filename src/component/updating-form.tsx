import * as React from 'react';
import { IMatchListEntry } from '../types/types';

interface IUpdatingFormProps {
  matchEntry: IMatchListEntry;
  onSubmit: (item: IMatchListEntry) => void;
  onCancel: () => void;
}

export const UpdatingForm = (props: IUpdatingFormProps) => {
  return null;
};
