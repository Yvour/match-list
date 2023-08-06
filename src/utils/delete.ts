import { IMatchListEntry } from '../types/types';

export const deleteMatch = (
  list: IMatchListEntry[],
  id: string
): IMatchListEntry[] => {
  return list.filter((matchItem) => matchItem.id !== id);
};
