export const equipmentTypeList = ['life', 'strength', 'defense', 'precision', 'efficacy', 'resolve', 'frenzy', 'shock', 'leech', 'aegis', 'revenge', 'pierce', 'surge', 'healing'];

export const equipmentTypeInfos = {
  life: { number: 2, statId: 'health', value: 15 },
  strength: { number: 2, statId: 'attack', value: 15 },
  defense: { number: 2, statId: 'defense', value: 15 },
  precision: { number: 2, statId: 'critical_hit_rate', value: 12 },
  efficacy: { number: 2, statId: 'debuff_rate', value: 20 },
  resolve: { number: 2, statId: 'resistance', value: 20 },
  frenzy: { number: 4, statId: 'critical_hit_damage', value: 40 }
};

export const equipmentPartList = ['weapon', 'armor', 'gloves', 'shoes', 'ring', 'necklace'];

const classByEquipmentType = {
  aegis: 'guardian',
  revenge: 'warrior',
  pierce: 'striker',
  surge: 'sniper',
  healing: 'cleric'
};

class Equipment {
  constructor(id, data) {
    if (data)
      this.data = { ...data, id };
    else
      this.data = { id };
  }

  get id() {
    return this.data.id;
  }

  get type() {
    return this.data.type || 'life';
  }

  get part() {
    return this.data.part || 'weapon';
  }

  get grade() {
    return this.data.grade || 6;
  }

  get level() {
    return this.data.level || 15;
  }

  get mainOption() {
    return this.data.mainOption || {};
  }

  get subOptions() {
    return this.data.subOptions || [];
  }

  get format() {
    return {
      type: this.type,
      part: this.part,
      grade: this.grade,
      level: this.level,
      mainOption: this.mainOption,
      subOptions: this.subOptions
    };
  }

  update(newData) {
    this.data = { ...this.data, ...newData };
  }

  isClassAvailable(heroClass) {
    const equipmentTypeOfClass = Object.keys(classByEquipmentType);

    return classByEquipmentType[this.type] === heroClass ||
      !equipmentTypeOfClass.includes(this.type)
  }
}

export default Equipment;
