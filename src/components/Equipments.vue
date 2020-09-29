<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <AppButton label="장비 추가" />
      <AppButton label="주의사항" color="red" />
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

<style lang="scss">
.Equipments {
  margin-top: 10px;
}

.Equipments__container {
  margin-top: 20px;
}
</style>
