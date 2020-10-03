class Checker {
  constructor(hero, conditions) {
    this.conditions = conditions.map(condition => ({ ...condition, value: condition.value - hero.rawStats[condition.statId] }));
  }

  check(stats) {
    return this.conditions.reduce((flag, condition) => {
      switch (condition.type) {
        case 'gte':
          return stats[condition.statId] >= condition.value && flag;
        case 'lt':
          return stats[condition.statId] < condition.value && flag;
      }
    }, true);
  }
}

export default Checker;
