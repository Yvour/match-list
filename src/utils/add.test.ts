import { addMatch } from './add'

const TIME_COST = 'TIME_COST'

describe('addMatch', () => {
    it('should add an item to empty array', () => {
        expect(
            addMatch([], {
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
