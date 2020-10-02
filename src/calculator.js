import { equipmentTypeInfos } from '@/equipment';
import { statIdList } from '@/stats';

class Calculator {
  constructor(hero) {
    this.hero = hero;
    this.stats = [];
  }

  calculate(equipments) {
    const equippedNumber = {};
    equipments.forEach(equipment => {
      if (equippedNumber[equipment.type])
        equippedNumber[equipment.type] += 1;
      else
        equippedNumber[equipment.type] = 1;

      this.stats.push(equipment.mainOption);
      this.stats = this.stats.concat(equipment.subOptions);
    });

    Object.keys(equippedNumber).forEach(key => {
      const equipmentTypeInfo = equipmentTypeInfos[key];
      if (!equipmentTypeInfo) return;

      const setNumber = ~~(equippedNumber[key] / equipmentTypeInfo.number);

      for (let i = 0; i < setNumber; i++)
        this.stats.push(
          { id: equipmentTypeInfo.statId, value: equipmentTypeInfo.value, type: 'percentage' }
        );
    });

    const result = {};
    statIdList.map(id => (result[id] = 0));
    this.stats.forEach(stat => {
      if (stat.type === 'percentage' && ['health', 'attack', 'defense'].includes(stat.id))
        result[stat.id] += this.hero.rawStats[stat.id] * stat.value * 0.01;
      else
        result[stat.id] += stat.value;
    });

    Object.keys(result).forEach(key => {
      result[key] = Math.ceil(result[key]);
    });
    return result;
  }
}

export default Calculator;
