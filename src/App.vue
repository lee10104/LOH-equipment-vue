<template>
  <div :class="['App', isDialogOpen ? 'App--disabled' : '']">
    <div class="App__body">
      <HeroInfo class="App__component" />
      <StatsCondition class="App__component" />
    </div>
    <Equipments @open-dialog="disableClick" class="App__component" />
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
  },
  data() {
    return { isDialogOpen: false };
  },
  methods: {
    disableClick() {
      this.isDialogOpen = !this.isDialogOpen;
    }
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

.App--disabled {
  pointer-events: none;
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
