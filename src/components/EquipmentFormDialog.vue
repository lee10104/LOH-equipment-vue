<template>
  <AppDialog
    :disable-submit-button="disableSubmitButton"
    :show-submit-button="true"
    @submit="submit"
    @close="$emit('close')"
  >
    <template #title>{{ title }}</template>
    <template #content>
      <div class="AppEquipmentDialog__select-header">
        <AppSelect name="type" :value="type" :options="equipmentTypes" @change="updateType" />
        <AppSelect name="part" :value="part" :options="equipmentParts" @change="updatePart" />
      </div>
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
          v-bind:key="index"
        >
          <EquipmentStat :stat="subOption" :index="index + 1" @input="updateOption" />
        </div>
      </div>
    </template>
  </AppDialog>
</template>

<script>
import { isEqual } from '@/lib';
import { equipmentPartList, equipmentTypeList } from '@/equipment';
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
      part: this.equipment.part,
      type: this.equipment.type,
      mainOption: { ...this.equipment.mainOption },
      subOptions: [ ...this.equipment.subOptions ]
    };
  },
  methods: {
    addSubOption() {
      if (this.subOptions.length >= 4) return;

      this.subOptions.push({});
    },
    submit() {
      this.equipment.update({
        type: this.type,
        part: this.part,
        mainOption: this.mainOption,
        subOptions: [ ...this.subOptions ]
      });
      this.$emit('submit', this.equipment);
    },
    updateOption(index, newOption) {
      if (index === 0)
        this.mainOption = { ...this.mainOption, ...newOption };
      else
        this.$set(this.subOptions, index - 1, newOption)
    },
    updatePart(part) {
      this.part = part;
    },
    updateType(type) {
      this.type = type;
    }
  },
  computed: {
    disableSubmitButton() {
      return isEqual(this.mainOption, this.equipment.mainOption)
        && isEqual(this.subOptions, this.equipment.subOptions)
        && isEqual(this.type, this.equipment.type)
        && isEqual(this.part, this.equipment.part);
    },
    equipmentParts() {
      return equipmentPartList.map(part => ({
        value: part,
        label: this.$t(`equipment.part.${part}`)
      }));
    },
    equipmentTypes() {
      return equipmentTypeList.map(type => ({
        value: type,
        label: this.$t(`equipment.type.${type}`)
      }));
    }
  }
};
</script>

<style lang="scss">
.AppEquipmentDialog__select-header {
  position: absolute;
  top: 25px;
  right: 30px;

  > select {
    height: 34px;

    + select {
      margin-left: 10px;
    }
  }
}

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
