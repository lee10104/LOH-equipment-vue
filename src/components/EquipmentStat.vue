<template>
  <div class="EquipmentStat">
    <select name="id" v-model="selected" @input="update('id', $event.target.value)">
      <option value="">{{ $t('select') }}</option>
      <option v-for="statId in statIdList" v-bind:key="statId" :value="statId">
        {{ $t(`stats.${statId}`) }}
      </option>
    </select>
    <div class="EquipmentStat__value">
      <input type="text" class="EquipmentStat__input" :value="statForm.value" @input="update('value', $event.target.value)">
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
    statIdList: () => statIdList,
    isPercentage() {
      return this.statForm.type === 'percentage';
    }
  },
  methods: {
    emitInput() {
      this.$emit('input', this.index, this.statForm );
    },
    updateType() {
      let newType = '';
      if (this.isPercentage) newType = 'number';
      else newType = 'percentage';

      this.statForm = { ...this.statForm, type: newType };
    },
    update(key, value) {
      this.statForm = { ...this.statForm, [key]: value };
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
