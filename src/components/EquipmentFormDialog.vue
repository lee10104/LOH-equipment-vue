<template>
  <AppDialog
    :disable-submit-button="true"
    :show-submit-button="true"
    @submit="submit"
    @close="$emit('close')"
  >
    <template #title>{{ title }}</template>
    <template #content>
      <div class="AppEquipmentDialog__option-title">{{ $t('equipment.main_option') }}</div>
      <div class="AppEquipmentDialog__main-option">
        <EquipmentStat :stat="mainOption" :index="0" @input="updateOption" />
      </div>
      <div class="AppEquipmentDialog__sub-options">
        <div class="AppEquipmentDialog__option-title">
          {{ $t('equipment.sub_option') }}
          <AppButton label="+" color="light-grey" size="small" @click="addSubOption" />
        </div>
        <div
          class="AppEquipmentDialog__sub-option"
          v-for="(subOption, index) in subOptions"
          v-bind:key="subOption.id"
        >
          <EquipmentStat :stat="subOption" :index="index + 1" @input="updateOption" />
        </div>
      </div>
    </template>
  </AppDialog>
</template>

<script>
import Equipment from '@/equipment';
import EquipmentStat from './EquipmentStat';

export default {
  name: 'EquipmentFormDialog',
  components: { EquipmentStat },
  props: {
    title: { type: String, required: true },
    equipment: { type: Equipment, required: true }
  },
  data() {
    return {
      mainOption: { ...this.equipment.mainOption },
      subOptions: [ ...this.equipment.subOptions ]
    };
  },
  methods: {
    addSubOption() {
      if (this.subOptions.length >= 4) return;

      this.subOptions.push({});
    },
    updateOption(index, newOption) {
      if (index === 0)
        this.mainOption = { ...this.mainOption, ...newOption };
      else
        this.subOptions[index - 1] = { ...this.subOptions[index - 1], ...newOption };
    },
    submit() {
      console.log('submit!');
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
