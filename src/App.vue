<template>
  <div class="App">
    <div class="App__body">
      <HeroInfo class="App__component" />
      <StatsCondition class="App__component" />
    </div>
    <Equipments class="App__component" />
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

.App__body {
  width: 100%;
}

.App__component {
  box-sizing: border-box;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  padding: 20px;
}
</style>
