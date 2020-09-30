<template>
  <AppDialog @close="$emit('close')">
    <template #title>{{ title }}</template>
    <template #content>
      <div class="AppEquipmentDialog__option-title">{{ $t('equipment.main_option') }}</div>
      <div class="AppEquipmentDialog__main-option">
        {{ $t(`stats.${mainOption.id}`) }}
        <div class="AppEquipmentDialog__value">
          <input type="text" class="AppEquipmentDialog__input" :value="mainOption.value">
          <AppButton
            class="AppEquipmentDialog__button"
            :label="isPercentage(mainOption.type) ? '%' : '.'"
            color="light-grey"
            size="small"
            @click="updateStatType('main')"
          />
        </div>
      </div>
      <div class="AppEquipmentDialog__sub-options">
        <div class="AppEquipmentDialog__option-title">{{ $t('equipment.sub_option') }}</div>
        <div
          class="AppEquipmentDialog__sub-option"
          v-for="subOption in subOptions"
          v-bind:key="subOption.id"
        >
          {{ $t(`stats.${subOption.id}`) }}
          <div class="AppEquipmentDialog__value">
            <input type="text" class="AppEquipmentDialog__input" :value="subOption.value">
            <AppButton
              class="AppEquipmentDialog__button"
              :label="isPercentage(subOption.type) ? '%' : '.'"
              color="light-grey"
              size="small"
              @click="updateStatType('main')"
            />
          </div>
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
      mainOption: { id: 'attack', value: 67, type: 'percentage' },
      subOptions: [
        { id: 'health', value: 375 },
        { id: 'defense', value: 6, type: 'percentage' },
        { id: 'critical_hit_damage', value: 13, type: 'percentage' },
        { id: 'attack', value: 64 }
      ]
    }
  },
  methods: {
    isPercentage(type) {
      return type === 'percentage';
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
  height: 34px;
  line-height: 34px;
  display: flex;
  justify-content: space-between;
}

.AppEquipmentDialog__sub-options {
  margin-top: 40px;
}

.AppEquipmentDialog__sub-option {
  margin-top: 15px;
  height: 34px;
  line-height: 34px;
  display: flex;
  justify-content: space-between;
}

.AppEquipmentDialog__input {
  height: 34px;
  width: 70px;
  text-align: right;
  box-sizing: border-box;
  vertical-align: top;
}

.AppEquipmentDialog__button {
  margin-left: 5px;
  vertical-align: top;
}
</style>
