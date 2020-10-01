import { isEqual } from '@/lib';

describe('isEqual', () => {
  it('should work', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('1', 1)).toBe(false);
    expect(isEqual(undefined, 2)).toBe(false);
  });

  it('should work when array', () => {
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1], [1])).toBe(true);
    expect(isEqual([1], [2])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(isEqual([2, 1], [1, 2])).toBe(false);

    expect(isEqual([{a: 1}, {}], [{a: 1}, {}])).toBe(true);
    expect(isEqual([{a: 1}, {}], [{}, {a: 1}])).toBe(false);
  });

  it('should work when object', () => {
    expect(isEqual({a: 1}, {a: 1})).toBe(true);
    expect(isEqual({a: 1, b: 2}, {b: 2, a: 1})).toBe(true);
    expect(isEqual({a: 1, b: 2}, {a: 1, b: 2, c: 3})).toBe(false);

    expect(isEqual({a: [1, 2]}, {a: [1, 2]})).toBe(true);
    expect(isEqual({a: [1, 2]}, {a: [2, 1]})).toBe(false);
  });
});
