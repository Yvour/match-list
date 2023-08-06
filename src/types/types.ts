export interface ITeamRecord {
  name: string
  score: number
}

export interface IMatch {
  homeTeam: ITeamRecord
  awayTeam: ITeamRecord
}

export interface IMatchListEntry extends IMatch {
  id: string
  startTime: string
}
