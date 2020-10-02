import Equipment from '@/equipment';
import Hero from '@/hero';
import Calculator from '@/calculator';

describe('Calulator', () => {
  describe('calculate', () => {
    it('should work', () => {
      const calculator = new Calculator(new Hero('helga', 'water'));

      const e1 = new Equipment({
        type: 'pierce',
        part: 'weapon',
        mainOption: { id: 'attack', value: 67, type: 'percentage' },
        subOptions: [
          { id: 'health', value: 375, type: 'number' },
          { id: 'defense', value: 6, type: 'percentage' },
          { id: 'critical_hit_damage', value: 13, type: 'percentage' },
          { id: 'attack', value: 64, type: 'number' }
        ]
      });

      const e2 = new Equipment({
        type: 'strength',
        part: 'armor',
        mainOption: { id: 'defense', value: 67, type: 'percentage' },
        subOptions: [
          { id: 'resistance', value: 17, type: 'percentage' },
          { id: 'speed', value: 6, type: 'number' },
          { id: 'attack', value: 14, type: 'percentage' },
          { id: 'critical_hit_rate', value: 4, type: 'percentage' }
        ]
      });

      const e3 = new Equipment({
        type: 'pierce',
        part: 'gloves',
        mainOption: { id: 'attack', value: 67, type: 'percentage' },
        subOptions: [
          { id: 'critical_hit_damage', value: 5, type: 'percentage' },
          { id: 'defense', value: 12, type: 'percentage' },
          { id: 'speed', value: 6, type: 'number' },
          { id: 'debuff_rate', value: 26, type: 'percentage' }
        ]
      });

      const e4 = new Equipment({
        type: 'pierce',
        part: 'shoes',
        mainOption: { id: 'attack', value: 67, type: 'percentage' },
        subOptions: [
          { id: 'speed', value: 14, type: 'number' },
          { id: 'attack', value: 22, type: 'number' },
          { id: 'critical_hit_rate', value: 10, type: 'percentage' },
          { id: 'critical_hit_damage', value: 5, type: 'percentage' }
        ]
      });

      const e5 = new Equipment({
        type: 'pierce',
        part: 'ring',
        mainOption: { id: 'health', value: 67, type: 'percentage' },
        subOptions: [
          { id: 'resistance', value: 17, type: 'percentage' },
          { id: 'speed', value: 10, type: 'number' },
          { id: 'debuff_rate', value: 9, type: 'percentage' },
          { id: 'defense', value: 6, type: 'percentage' }
        ]
      });

      const e6 = new Equipment({
        type: 'strength',
        part: 'necklace',
        mainOption: { id: 'critical_hit_rate', value: 50, type: 'percentage' },
        subOptions: [
          { id: 'defense', value: 12, type: 'number' },
          { id: 'attack', value: 10, type: 'percentage' },
          { id: 'critical_hit_damage', value: 5, type: 'percentage' },
          { id: 'debuff_rate', value: 13, type: 'percentage' }
        ]
      });

      expect(
        calculator.calculate([e1, e2, e3, e4, e5, e6])).toStrictEqual({
          health: 5274,
          attack: 3300,
          defense: 1104,
          speed: 36,
          critical_hit_rate: 64,
          critical_hit_damage: 28,
          debuff_rate: 48,
          resistance: 34
        });
    });
  });
});
