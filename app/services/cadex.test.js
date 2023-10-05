const cadexService = require('./cadex');

const cadex = cadexService.generate();

describe('cadexService.generate', () => {
  test('should return an object', () => {
    expect(typeof cadex).toBe('object');
  });
  test('should have a name propery, containing a not empty string', () => {
    expect(typeof cadex.name).toBe('string');
    expect(cadex.name.length).toBeGreaterThanOrEqual(3);
  });
  test('should have a adjective propery, containing a not empty string', () => {
    expect(typeof cadex.adjective).toBe('string');
    expect(cadex.adjective.length).toBeGreaterThanOrEqual(3);
  });
  test('should have a verb propery, containing a not empty string', () => {
    expect(typeof cadex.verb).toBe('string');
    expect(cadex.verb.length).toBeGreaterThanOrEqual(3);
  });
  test('should have a complement propery, containing a not empty string', () => {
    expect(typeof cadex.complement).toBe('string');
    expect(cadex.complement.length).toBeGreaterThanOrEqual(3);
  });
  test('should have a toString method that convert the object to a cadex string', () => {
    expect(`${cadex}`.includes(cadex.name)).toBe(true);
    expect(`${cadex}`.includes(cadex.adjective)).toBe(true);
    expect(`${cadex}`.includes(cadex.verb)).toBe(true);
    expect(`${cadex}`.includes(cadex.complement)).toBe(true);
  });
});
