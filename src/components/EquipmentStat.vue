<template>
  <div class="EquipmentStat">
    <AppSelect
      name="id"
      :value="this.statForm.id"
      :options="statIds"
      @change="updateId"
    />
    <div class="EquipmentStat__value">
      <input type="text" class="EquipmentStat__input" :value="statForm.value" @input="updateValue($event.target.value)">
      <AppButton
        @click="updateType"
        class="EquipmentStat__button"
        :label="isPercentage ? '%' : '.'"
        color="light-grey"
        size="small"
      />
    </div>
  </div>
</template>

<script>
import { statIdList } from '@/stats';

export default {
  name: 'EquipmentStat',
  props: {
    index: { type: Number, required: true },
    stat: { type: Object, required: true }
  },
  data() {
    return {
      selected: this.stat.id || '',
      statForm: { ...this.stat },
    };
  },
  computed: {
    statIds() {
      return statIdList.map(id => ({
        value: id,
        label: this.$t(`stats.${id}`)
      }));
    },
    isPercentage() {
      return this.statForm.type === 'percentage';
    }
  },
  methods: {
    updateOption() {
      this.$emit('input', this.index, this.statForm );
    },
    updateId(id) {
      this.statForm = { ...this.statForm, id };
      this.updateOption();
    },
    updateType() {
      let newType = '';
      if (this.isPercentage) newType = 'number';
      else newType = 'percentage';

      this.statForm = { ...this.statForm, type: newType };
      this.updateOption();
    },
    updateValue(value) {
      this.statForm = { ...this.statForm, value };
      this.updateOption();
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
}
</style>
