<template>
  <div class="HeroInfo">
    <div class="HeroInfo__name">[{{ type }}] {{ name }}</div>
    <div class="HeroInfo__stats">
      <div v-for="stat in stats" v-bind:key="stat.id" class="HeroInfo__stat">
        {{ stat.label }}
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
      name: '헬가',
      type: '물',
      stats: [
        { id: 'health', label: '체력', value: 7311 },
        { id: 'attack', label: '공격력', value: 1339 },
        { id: 'defense', label: '방어력', value: 1199 },
        { id: 'speed', label: '속도', value: 102 },
        { id: 'critical_hit_rate', label: '치명타 확률', value: 30, type: 'percentage' },
        { id: 'critical_hit_damage', label: '치명타 피해', value: 60, type: 'percentage' },
        { id: 'debuff rate', label: '효과 적중', value: 20, type: 'percentage' },
        { id: 'resistance', label: '효과 저항', value: 35, type: 'percentage' }
      ]
    };
  }
};
</script>

<style>
.HeroInfo {
  width: 30%;
  display: inline-block;
  margin-right: 10px;
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
