<template>
  <AppDialog @close="$emit('close')">
    <template #title>{{ title }}</template>
    <template #content>
      <div class="AppEquipmentDialog__option-title">{{ $t('equipment.main_option') }}</div>
      <div class="AppEquipmentDialog__main-option">
        <EquipmentStat :stat="mainOption" />
      </div>
      <div class="AppEquipmentDialog__sub-options">
        <div class="AppEquipmentDialog__option-title">{{ $t('equipment.sub_option') }}</div>
        <div
          class="AppEquipmentDialog__sub-option"
          v-for="subOption in subOptions"
          v-bind:key="subOption.id"
        >
          <EquipmentStat :stat="subOption" />
        </div>
      </div>
    </template>
  </AppDialog>
</template>

<script>
import EquipmentStat from './EquipmentStat';

export default {
  name: 'EquipmentFormDialog',
  components: { EquipmentStat },
  props: {
    title: { type: String, required: true }
  },
  data() {
    return {
      mainOption: { id: 'attack', value: 67, type: 'percentage' },
      subOptions: [
        { id: 'health', value: 375 },
        { id: 'defense', value: 6, type: 'percentage' },
        { id: 'critical_hit_damage', value: 13, type: 'percentage' },
        { id: 'attack', value: 64 }
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
}

.AppEquipmentDialog__sub-options {
  margin-top: 40px;
}

.AppEquipmentDialog__sub-option {
  margin-top: 15px;
}
</style>
