<template>
  <div class="HeroInfo">
    <div class="HeroInfo__name">
      <AppSelect name="type" :options="heroTypes" :value="heroType" @change="updateType" />
      <AppSelect name="id" :options="heroIds" :value="id" @change="updateId" />
    </div>
    <div v-if="stats" class="HeroInfo__stats">
      <div v-for="stat in stats" v-bind:key="stat.id" class="HeroInfo__stat">
        {{ $t(`stats.${stat.id}`) }}
        <div class="HeroInfo__stat-value">
          {{ stat.value }}<span v-if="stat.type == 'percentage'">%</span>
          <span v-if="equipmentStats[stat.id]">(+{{ equipmentStats[stat.id] }}<template v-if="stat.type == 'percentage'">%</template>)</span>
        </div>
      </div>
    </div>
    <div v-else class="HeroInfo__stats">
      {{ $t('no_data') }}
    </div>
  </div>
</template>

<script>
import { heroIdList, heroTypeList } from '@/hero';
import Hero from '@/hero';

export default {
  name: 'HeroInfo',
  props: {
    equipmentStats: { type: Object, required: true }
  },
  data() {
    return { id: '', heroType: '' };
  },
  computed: {
    heroIds() {
      return heroIdList.map(id => ({
        value: id,
        label: this.$t(`heroes.name.${id}`)
      }));
    },
    heroTypes() {
      return heroTypeList.map(type => ({
        value: type,
        label: this.$t(`heroes.type.${type}`)
      }));
    },
    hero() {
      let hero;
      try {
        hero = new Hero(this.id, this.heroType);
      } catch {
        hero = null;
      }

      this.$emit('change', hero);
      return hero;
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
  },
  methods: {
    updateId(id) {
      this.id = id;
    },
    updateType(type) {
      this.heroType = type;
    }
  }
};
</script>

<style lang="scss">
.HeroInfo {
  width: 30%;
  height: 364px;
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
