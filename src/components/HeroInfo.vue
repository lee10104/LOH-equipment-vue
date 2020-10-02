<template>
  <div class="HeroInfo">
    <div class="HeroInfo__name">[{{ heroTypeName }}] {{ heroName }}</div>
    <div class="HeroInfo__stats">
      <div v-for="stat in stats" v-bind:key="stat.id" class="HeroInfo__stat">
        {{ $t(`stats.${stat.id}`) }}
        <div class="HeroInfo__stat-value">{{ stat.value }}<span v-if="stat.type == 'percentage'">%</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/hero';

export default {
  name: 'HeroInfo',
  data() {
    return { id: 'helga', heroType: 'water' };
  },
  computed: {
    hero() {
      return new Hero(this.id, this.heroType);
    },
    stats() {
      if (this.hero === null)
        return null;

      return this.hero.stats;
    },
    heroTypeName() {
      return this.$t(`heroes.type.${this.heroType}`);
    },
    heroName() {
      return this.$t(`heroes.name.${this.id}`);
    }
  }
};
</script>

<style lang="scss">
.HeroInfo {
  width: 30%;
  height: 400px;
}

.HeroInfo__name {
  font-size: 20px;
  font-weight: bold;
}

.HeroInfo__stats {
  margin-top: 20px;
}

.HeroInfo__stat {
  margin-top: 10px;
}

.HeroInfo__stat-value {
  text-align: right;
  float: right;
}
</style>
