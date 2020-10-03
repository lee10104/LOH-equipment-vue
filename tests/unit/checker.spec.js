import Hero from '@/hero';
import Checker from '@/checker';

describe('Checker', () => {
  describe('check', () => {
    it('should work', () => {
      const checker = new Checker(
        new Hero('helga', 'water'),
        [
          { statId: 'attack', type: 'gte', value: 3339 },
          { statId: 'health', type: 'lt', value: 9311 }
        ]
      );

      expect(checker.check({ attack: 1000, health: 3000 })).toBe(false);
      expect(checker.check({ attack: 2500, health: 3000 })).toBe(false);
      expect(checker.check({ attack: 1000, health: 1500 })).toBe(false);
      expect(checker.check({ attack: 2500, health: 1500 })).toBe(true);
    });
  });
});
