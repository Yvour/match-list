import { summarize } from './summarize';

describe('summarize', () => {
  it('should return empty list for empty list', () => {
    expect(summarize([])).toEqual([]);
  });

  it('should work with array of single item', () => {
    const matchItem = {
      id: 'some id',
      startTime: 'some time',
      homeTeam: { name: 'some team 1', score: 5 },
      awayTeam: { name: 'some team 2', score: 6 },
    };

    expect(summarize([matchItem])).toEqual([matchItem]);
  });

  it('should return an array sorted by total score and not to change original array', () => {
    const matchOne = {
      id: 'some id',
      startTime: 'some time',
      homeTeam: { name: 'some team 1', score: 0 },
      awayTeam: { name: 'some team 2', score: 1 },
    };

    const matchTwo = {
      id: 'some id',
      startTime: 'some time',
      homeTeam: { name: 'some team 1', score: 5 },
      awayTeam: { name: 'some team 2', score: 6 },
    };

    const matchThree = {
      id: 'some id',
      startTime: 'some time',
      homeTeam: { name: 'some team 1', score: 3 },
      awayTeam: { name: 'some team 2', score: 3 },
    };
    const originalArray = [matchOne, matchTwo, matchThree];
    expect(summarize(originalArray)).toEqual([matchTwo, matchThree, matchOne]);
    expect(originalArray).toEqual([matchOne, matchTwo, matchThree]);
  });

  it('should return by sorted startTime if the total score is the same score (the recently started match first)', () => {
    const matchOne = {
      id: 'some id',
      startTime: 'XXXX-XX-XXT21:00:00',
      homeTeam: { name: 'some team 1', score: 3 },
      awayTeam: { name: 'some team 2', score: 3 },
    };

    const matchTwo = {
      id: 'some id',
      startTime: 'XXXX-XX-XXT09:00:00',
      homeTeam: { name: 'some team 1', score: 0 },
      awayTeam: { name: 'some team 2', score: 6 },
    };

    const matchThree = {
      id: 'some id',
      startTime: 'XXXX-XX-XXT12:00:00',
      homeTeam: { name: 'some team 1', score: 2 },
      awayTeam: { name: 'some team 2', score: 4 },
    };

    expect(summarize([matchOne, matchTwo])).toEqual([matchOne, matchTwo]);

    expect(summarize([matchTwo, matchOne])).toEqual([matchOne, matchTwo]);

    expect(summarize([matchOne, matchTwo, matchThree])).toEqual([
      matchOne,
      matchThree,
      matchTwo,
    ]);

    expect(summarize([matchThree, matchOne, matchTwo])).toEqual([
      matchOne,
      matchThree,
      matchTwo,
    ]);
  });
});
