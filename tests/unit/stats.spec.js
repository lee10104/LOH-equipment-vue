import { statIdList, getBaseType } from '@/stats';

describe('statIdList', () => {
  it('should work', () => {
    expect(statIdList.length).toBe(8);
  });
});

describe('getBaseType', () => {
  it('should work', () => {
    expect(getBaseType('health')).toBe('number');
    expect(getBaseType('debuff_rate')).toBe('percentage');
  });
});
