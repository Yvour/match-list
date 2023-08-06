import { updateMatch } from './update'

describe('addMatch', () => {
  it('should add an item to empty array', () => {
    expect(
      updateMatch(
        [
          {
            id: 'some id',
            startTime: 'some time',
            homeTeam: { name: 'Land One', score: 0 },
            awayTeam: { name: 'Land Two', score: 0 },
          },
        ],
        {
          homeTeam: { name: 'Land One', score: 0 },
          awayTeam: { name: 'Land Two', score: 1 },
        },
        'some id'
      )
    ).toEqual([
      {
        homeTeam: { name: 'Land One', score: 0 },
        awayTeam: { name: 'Land Two', score: 1 },
        id: 'Land One - Land Two',
        startTime: 'some time',
      },
    ])
  })
})
