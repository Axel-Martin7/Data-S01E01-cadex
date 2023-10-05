const random = require('./random');

const testValue = random.getRandomInteger(6, 24);

describe('random.getRandomInteger', () => {
  test('should return a number', () => {
    expect(typeof testValue).toBe('number');
  });
  test('should be included in the right range', () => {
    expect(testValue).toBeGreaterThanOrEqual(6);
    expect(testValue).toBeLessThanOrEqual(24);
  });
});
