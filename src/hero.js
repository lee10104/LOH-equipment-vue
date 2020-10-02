import heroes from '@/assets/data/heroes.json';
import { getBaseType } from '@/stats';

class Hero {
  constructor(id, type) {
    this.heroStats = heroes[id][type];
  }

  get rawStats() {
    return this.heroStats;
  }

  get stats() {
    return Object.keys(this.heroStats).map(id => (
      { id, value: this.heroStats[id], type: getBaseType(id) }
    ));
  }
}

export default Hero;
