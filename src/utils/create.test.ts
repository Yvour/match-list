import { createMatch } from './create';

const TIME_COST = 'TIME_COST';
jest.mock('./get-time-str', () => {
  return {
    getTimeStr: () => TIME_COST,
  };
});

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
    ]);
  });

  it('should add an item to filled array', () => {
    expect(
      createMatch(
        [
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
        ],
        {
          homeTeam: { name: 'Land One', score: 0 },
          awayTeam: { name: 'Land Two', score: 0 },
        }
      )
    ).toEqual([
      {
        homeTeam: { name: 'Land One', score: 0 },
        awayTeam: { name: 'Land Two', score: 0 },
        id: 'Land One - Land Two',
        startTime: TIME_COST,
      },
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
});
