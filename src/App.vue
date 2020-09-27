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

<style lang="scss">
@import '@/sass/_fonts.scss';

.App {
  margin: 30px 20px;
  font-family: 'NotoSansCJKkr';
  color: #424244;
}

.App__body {
  width: 100%;
}

.App__component {
  box-sizing: border-box;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  padding: 20px;

  & + & {
    margin-left: 10px;
  }
}
</style>
