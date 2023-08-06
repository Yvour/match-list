import { createMatch } from './create'

const TIME_COST = 'TIME_COST'
jest.mock('./get-time-str', () => {
  return {
    getTimeStr: () => TIME_COST,
  }
})

describe('createMatch', () => {
  it('should add an item to empty array', () => {
    expect(
      createMatch([], {
        homeTeam: { name: 'Land One', score: 0 },
        awayTeam: { name: 'Land Two', score: 0 },
      })
    ).toEqual([
      {
        homeTeam: { name: 'Land One', score: 0 },
        awayTeam: { name: 'Land Two', score: 0 },
        id: 'Land One - Land Two',
        startTime: TIME_COST,
      },
    ])
  })
})
