import { IMatch, IMatchListEntry } from '../types/types'
import { getTimeStr } from './get-time-str'

export const createMatch = (
  list: IMatchListEntry[],
  item: IMatch
): IMatchListEntry[] => {
  return [
    {
      id: [item.homeTeam.name, item.awayTeam.name].join(' - '),
      startTime: getTimeStr(),
      ...item,
    },
    ...list,
  ]
}
