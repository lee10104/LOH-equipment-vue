<template>
  <div class="EquipmentStat">
    {{ $t(`stats.${stat.id}`) }}
    <div class="EquipmentStat__value">
      <input type="text" class="EquipmentStat__input" :value="stat.value">
      <AppButton
        class="EquipmentStat__button"
        :label="isPercentage ? '%' : '.'"
        color="light-grey"
        size="small"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipmentStat',
  props: {
    stat: { type: Object, required: true }
  },
  computed: {
    isPercentage() {
      return this.stat.type === 'percentage';
    }
  }
};
</script>

<style lang="scss">
.EquipmentStat {
  height: 34px;
  line-height: 34px;
  display: flex;
  justify-content: space-between;
}

.EquipmentStat__input {
  height: 34px;
  width: 70px;
  text-align: right;
  box-sizing: border-box;
  vertical-align: top;
}

.EquipmentStat__button {
  margin-left: 5px;
  vertical-align: top;
}
</style>
