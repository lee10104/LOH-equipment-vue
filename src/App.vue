<template>
  <div class="App">
    <HeroInfo />
    <StatsCondition />
    <Equipments />
  </div>
</template>

<script>
import HeroInfo from './components/HeroInfo.vue'
import StatsCondition from './components/StatsCondition.vue'
import Equipments from './components/Equipments.vue'

export default {
  name: 'App',
  components: {
    HeroInfo,
    StatsCondition,
    Equipments
  }
}
</script>

<style>
.App {
  margin: 30px 20px;
}
</style>
