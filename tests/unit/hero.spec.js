import Hero from '@/hero';

describe('Hero', () => {
  describe('stats', () => {
    it('should work', () => {
      const hero = new Hero('helga', 'water');

      expect(hero.stats).toStrictEqual([
        { id: 'health', value: 7311, type: 'number' },
        { id: 'attack', value: 1339, type: 'number' },
        { id: 'defense', value: 1199, type: 'number' },
        { id: 'speed', value: 102, type: 'number' },
        { id: 'critical_hit_rate', value: 30, type: 'percentage' },
        { id: 'critical_hit_damage', value: 60, type: 'percentage' },
        { id: 'debuff_rate', value: 20, type: 'percentage' },
        { id: 'resistance', value: 35, type: 'percentage' }
      ]);
    });
  });
});
