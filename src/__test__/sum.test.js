const minus = require('../sum');

test('더하기 테스트', () => {
    expect(sum(5,6)).toBe(11);
    expect(sum(2,3)).toBe(10);
});