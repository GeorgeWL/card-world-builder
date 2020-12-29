import { chunkArray } from './dataManipulate';
describe('Array to Array of Arrays with specified max length', () => {
  it('does not explode if given empty array', () => {
    expect(() => {
      try {
        return chunkArray([], 10)
      } catch (error) {
        throw error
      }
    }).not.toThrow();
  })
  it('does not explode if chunk size is larger than array size', () => {
    expect(() => {
      try {
        return chunkArray(['1', '2', '3'], 10)
      } catch (error) {
        throw error
      }
    }).not.toThrow();
  })
  it('returns array of smaller arrays with length of 2 if given an array length evenly divisible by 2', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    expect(chunkArray(testArray, 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  })
  it('returns array of smaller arrays with length of 2 and an extra with length of 1 if given an array length not evenly divisible by 2', () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7];
    expect(chunkArray(testArray, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  })
});
