import heroes from '@/assets/data/heroes.json';

class Hero {
  constructor(id, type) {
    this.heroStats = heroes[id][type];
  }

  get stats() {
    return Object.keys(this.heroStats).map(id => {
      let type = null;
      if (['health', 'attack', 'defense', 'speed'].includes(id))
        type = 'number';
      else
        type = 'percentage';

      return { id, value: this.heroStats[id], type };
    });
  }
}

export default Hero;
