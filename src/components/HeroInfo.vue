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
export default {
  name: 'HeroInfo',
  data() {
    return {
      id: 'helga',
      heroType: 'water',
      stats: [
        { id: 'health', value: 7311 },
        { id: 'attack', value: 1339 },
        { id: 'defense', value: 1199 },
        { id: 'speed', value: 102 },
        { id: 'critical_hit_rate', value: 30, type: 'percentage' },
        { id: 'critical_hit_damage', value: 60, type: 'percentage' },
        { id: 'debuff_rate', value: 20, type: 'percentage' },
        { id: 'resistance', value: 35, type: 'percentage' }
      ]
    };
  },
  computed: {
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
  display: inline-block;
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
