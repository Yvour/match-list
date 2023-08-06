import { updateMatch } from './update'

describe('updateMatch', () => {
  it('should update an item by id', () => {
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
        id: 'some id',
        startTime: 'some time',
      },
    ])
  })

  it('should return an equal array if id is not actual', () => {
    const initArray = [
      {
        id: 'some id',
        startTime: 'some time',
        homeTeam: { name: 'Land One', score: 0 },
        awayTeam: { name: 'Land Two', score: 0 },
      },
    ]
    expect(
      updateMatch(
        initArray,

        {
          homeTeam: { name: 'Land One', score: 0 },
          awayTeam: { name: 'Land Two', score: 1 },
        },
        'fake id'
      )
    ).toEqual(initArray)
  })
})
