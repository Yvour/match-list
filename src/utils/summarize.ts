import { IMatchListEntry } from '../types/types';

export const summarize = (list: IMatchListEntry[]): IMatchListEntry[] => {
  return [...list].sort((matchA, matchB) => {
    const scoreSumA = matchA.awayTeam.score + matchA.homeTeam.score;
    const scoreSumB = matchB.awayTeam.score + matchB.homeTeam.score;

    if (scoreSumA > scoreSumB) {
      return -1;
    }
    if (scoreSumA < scoreSumB) {
      return 1;
    }

    if (matchA.startTime > matchB.startTime) {
      return -1;
    }
    if (matchA.startTime < matchB.startTime) {
      return 1;
    }
    return 0;
  });
};
