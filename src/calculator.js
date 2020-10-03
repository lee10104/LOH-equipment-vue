import { equipmentTypeInfos } from '@/equipment';
import { statIdList } from '@/stats';

class Calculator {
  constructor(hero) {
    this.hero = hero;
  }

  calculate(equipments) {
    const stats = [];
    const equippedNumber = {};
    equipments.forEach(equipment => {
      if (equippedNumber[equipment.type])
        equippedNumber[equipment.type] += 1;
      else
        equippedNumber[equipment.type] = 1;

      stats.push(equipment.mainOption);
      stats.push(...equipment.subOptions);
    });

    for (let key in equippedNumber) {
      const equipmentTypeInfo = equipmentTypeInfos[key];
      if (!equipmentTypeInfo) continue;

      const setNumber = ~~(equippedNumber[key] / equipmentTypeInfo.number);

      for (let i = 0; i < setNumber; i++)
        stats.push({ id: equipmentTypeInfo.statId, value: equipmentTypeInfo.value, type: 'percentage' });
    }

    const result = {};
    statIdList.map(id => (result[id] = 0));
    stats.forEach(stat => {
      const value = Number(stat.value);
      if (stat.type === 'percentage' && ['health', 'attack', 'defense'].includes(stat.id))
        result[stat.id] += this.hero.rawStats[stat.id] * value * 0.01;
      else
        result[stat.id] += value;
    });

    for (let key in result) {
      result[key] = Math.ceil(result[key]);
    }
    return result;
  }
}

export default Calculator;
