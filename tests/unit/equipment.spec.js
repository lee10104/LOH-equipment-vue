import { equipmentPartList, equipmentTypeList } from '@/equipment';
import Equipment from '@/equipment';

describe('equipmentTypeList', () => {
  it('should work', () => {
    expect(equipmentTypeList.length).toBe(14);
  });
});

describe('equipmentPartList', () => {
  it('should work', () => {
    expect(equipmentPartList.length).toBe(6);
  });
});

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

  describe('id', () => {
    it('should work', () => {
      expect(equipment.id).toBe('equipment1');
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

  describe('format', () => {
    it('should work', () => {
      expect(equipment.format).toStrictEqual({
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
  });

  describe('update', () => {
    it('should work', () => {
      equipment.update({
        type: 'precision',
        mainOption: { id: 'speed', value: 11, type: 'number' },
        subOptions: [
          { id: 'attack', value: 44, type: 'number' }
        ]
      });
      expect(equipment.type).toBe('precision');
      expect(equipment.mainOption).toStrictEqual({ id: 'speed', value: 11, type: 'number' })
      expect(equipment.subOptions).toStrictEqual([
        { id: 'attack', value: 44, type: 'number' }
      ]);
    });
  });
});
