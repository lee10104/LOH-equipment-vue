import Equipment from '@/equipment';

describe('Equipment', () => {
  let equipment;
  beforeEach(() => {
    equipment = new Equipment({
      id: 'equipment1',
      part: 'weapon',
      type: 'strength',
      grade: 6,
      level: 15,
      mainOption: { id: 'attack', value: 67, type: 'percentage' },
      subOptions: [
        { id: 'health', value: 375, type: 'number' },
        { id: 'defense', value: 6, type: 'percentage' },
        { id: 'critical_hit_damage', value: 13, type: 'percentage' },
        { id: 'attack', value: 64 }
      ]
    });
  });

  describe('type', () => {
    it('should work', () => {
      expect(equipment.type).toBe('strength');
    });
  });

  describe('part', () => {
    it('should work', () => {
      expect(equipment.part).toBe('weapon');
    });
  });

  describe('grade', () => {
    it('should work', () => {
      expect(equipment.grade).toBe(6);
    });
  });

  describe('level', () => {
    it('should work', () => {
      expect(equipment.level).toBe(15);
    });
  });

  describe('mainOption', () => {
    it('should work', () => {
      expect(equipment.mainOption).toStrictEqual({ id: 'attack', value: 67, type: 'percentage' });
    });
  });

  describe('subOptions', () => {
    it('should work', () => {
      expect(equipment.subOptions).toStrictEqual([
        { id: 'health', value: 375, type: 'number' },
        { id: 'defense', value: 6, type: 'percentage' },
        { id: 'critical_hit_damage', value: 13, type: 'percentage' },
        { id: 'attack', value: 64 }
      ]);
    });
  });
});
