import { addMatch } from './add'

describe('addMatch', () => {
    it('should add an item', () => {
        expect(addMatch([], {})).toEqual([{}])
    })
})
