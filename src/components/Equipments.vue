<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <button>장비 추가</button>
      <button>주의사항</button>
    </div>
    <div class="Equipments__container">
      <Equipment />
      <Equipment />
      <Equipment />
    </div>
  </div>
</template>

<script>
import Equipment from './Equipment';

export default {
  name: 'Equipments',
  components: { Equipment }
};
</script>

<style>
.Equipments {
  margin-top: 10px;
}

.Equipments__container {
  margin-top: 20px;
}
</style>
