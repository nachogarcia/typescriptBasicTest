import { reverseWords } from '../src/reverseWords'

describe('Reverse words', () => {
  it('changes the order of the words', () => {
    expect(reverseWords('Hello world')).toEqual('world Hello')
  })
})
