import { deleteMatch } from './delete';

describe('updateMatch', () => {
  it('should delete the last item by id', () => {
    expect(
      deleteMatch(
        [
          {
            id: 'some id',
            startTime: 'some time',
            homeTeam: { name: 'Land One', score: 0 },
            awayTeam: { name: 'Land Two', score: 0 },
          },
        ],
        'some id'
      )
    ).toEqual([]);
  });

  it('should delete an item', () => {
    expect(
      deleteMatch(
        [
          {
            id: 'first id',
            startTime: 'first time',
            homeTeam: { name: 'First Land One', score: 0 },
            awayTeam: { name: 'First Land Two', score: 0 },
          },
          {
            id: 'some id',
            startTime: 'some time',
            homeTeam: { name: 'Land One', score: 0 },
            awayTeam: { name: 'Land Two', score: 0 },
          },
          {
            id: 'last id',
            startTime: 'last time',
            homeTeam: { name: 'Last Land One', score: 0 },
            awayTeam: { name: 'Last Land Two', score: 0 },
          },
        ],
        'some id'
      )
    ).toEqual([
      {
        id: 'first id',
        startTime: 'first time',
        homeTeam: { name: 'First Land One', score: 0 },
        awayTeam: { name: 'First Land Two', score: 0 },
      },

      {
        id: 'last id',
        startTime: 'last time',
        homeTeam: { name: 'Last Land One', score: 0 },
        awayTeam: { name: 'Last Land Two', score: 0 },
      },
    ]);
  });

  it('should return an equal array if id is not actual', () => {
    const initArray = [
      {
        id: 'some id',
        startTime: 'some time',
        homeTeam: { name: 'Land One', score: 0 },
        awayTeam: { name: 'Land Two', score: 0 },
      },
    ];
    expect(
      deleteMatch(
        initArray,

        'fake id'
      )
    ).toEqual(initArray);
  });
});
