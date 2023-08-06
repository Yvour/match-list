import { IMatch, IMatchListEntry } from '../types/types'

export const updateMatch = (
  list: IMatchListEntry[],
  updatedItem: IMatch,
  id: string
): IMatchListEntry[] => {
  return list.map((listItem) => {
    if (listItem.id === id) {
      return {
        ...listItem,
        ...updatedItem,
      }
    } else return listItem
  })
}
