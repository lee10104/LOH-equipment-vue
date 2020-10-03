<template>
  <div :class="['App', isDialogOpen ? 'App--disabled' : '']">
    <div class="App__body">
      <HeroInfo class="App__component" @change="updateHero"/>
      <Calculator class="App__component" :hero="hero" :equipments="equipments" @open-dialog="disableClick" />
    </div>
    <Equipments @open-dialog="disableClick" @update="updateEquipments" class="App__component" />
  </div>
</template>

<script>
import HeroInfo from './components/HeroInfo.vue'
import Calculator from './components/Calculator.vue'
import Equipments from './components/Equipments.vue'

export default {
  name: 'App',
  components: {
    HeroInfo,
    Calculator,
    Equipments
  },
  data() {
    return {
      isDialogOpen: false,
      equipments: [],
      hero: null
    };
  },
  methods: {
    disableClick() {
      this.isDialogOpen = !this.isDialogOpen;
    },
    updateHero(hero) {
      this.hero = hero;
    },
    updateEquipments(equipments) {
      this.equipments = equipments;
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
  display: flex;
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
