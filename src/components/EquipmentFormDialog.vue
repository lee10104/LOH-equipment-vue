<template>
  <AppDialog @close="$emit('close')">
    <template #title>{{ title }}</template>
    <template #content>
      <div class="AppEquipmentDialog__option-title">주옵션</div>
      <div class="AppEquipmentDialog__main-option">
        {{ mainOption.label }}
        <input type="text" class="AppEquipmentDialog__value" :value="mainOption.value">
      </div>
      <div class="AppEquipmentDialog__sub-options">
        <div class="AppEquipmentDialog__option-title">부옵션</div>
        <div
          class="AppEquipmentDialog__sub-option"
          v-for="subOption in subOptions"
          v-bind:key="subOption.id"
        >
          {{ subOption.label }}
          <input type="text" class="AppEquipmentDialog__value" :value="subOption.value">
        </div>
      </div>
    </template>
  </AppDialog>
</template>

<script>
export default {
  name: 'EquipmentFormDialog',
  props: {
    title: { type: String, required: true }
  },
  data() {
    return {
      mainOption: { id: 'attack', label: '공격력', value: 67, type: 'percentage' },
      subOptions: [
        { id: 'health', label: '공격력', value: 375 },
        { id: 'defense', label: '방어력', value: 6, type: 'percentage' },
        { id: 'critical_hit_damage', label: '치명타 피해', value: 13, type: 'percentage' },
        { id: 'attack', label: '공격력', value: 64 }
      ]
    }
  }
};
</script>

<style lang="scss">
.AppEquipmentDialog__option-title {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 20px;
}

.AppEquipmentDialog__main-option {
  font-size: 20px;
  height: 35px;
  line-height: 35px;
}

.AppEquipmentDialog__sub-options {
  margin-top: 40px;
}

.AppEquipmentDialog__sub-option {
  margin-top: 15px;
  height: 35px;
  line-height: 35px;
}

.AppEquipmentDialog__value {
  text-align: right;
  float: right;
}
</style>
