import heroes from '@/assets/data/heroes.json';
import { getBaseType } from '@/stats';

export const heroIdList = Object.keys(heroes);
export const heroTypeList = ['darkness', 'fire', 'water', 'earth', 'light'];

class Hero {
  constructor(id, type) {
    if (!heroes[id] || !heroes[id][type])
      throw 'no data';

    this.heroClass = heroes[id][type]['class'];
    this.heroStats = heroes[id][type]['stats'];
  }

  get class() {
    return this.heroClass;
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
