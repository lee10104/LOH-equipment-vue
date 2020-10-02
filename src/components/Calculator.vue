<template>
  <div class="Calculator">
    <div class="Calculator__title">
      {{ $t('calculator') }}
      <AppButton label="+" color="light-grey" size="small" @click="addCondition" />
      <AppButton :label="$t('calculate')" color="red" />
    </div>
    <div class="Calculator__content">
      <div class="Calculator__conditions">
        <Condition
          v-for="(condition, index) in conditions"
          v-bind:key="index"
          :index="index"
          :condition="condition"
          @update="updateCondition"
        />
      </div>
      <div class="Calculator__results" />
    </div>
  </div>
</template>

<script>
import Hero from '@/hero';
// import Equipment from '@/equipment';
import Condition from './Condition';
// import EquipmentSummary from './EquipmentSummary';

export default {
  name: 'Calculator',
  components: { Condition },
  props: {
    equipments: { type: Array, required: true },
    hero: {
      required: true,
      validator: v => v === null || v instanceof Hero
    }
  },
  data() {
    return { conditions: [] };
  },
  methods: {
    addCondition() {
      this.conditions.push({});
    },
    updateCondition(index, condition) {
      this.$set(this.conditions, index, condition);
    }
  }
};
</script>

<style lang="scss">
.Calculator {
  width: calc(70% - 10px);
  height: 364px;
  overflow: auto;
}

.Calculator__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.Calculator__content {
  display: flex;
}

.Calculator__conditions {
  width: 350px;
}

.Calculator__results {
  padding-left: 20px;
}

.Calculator__result {
  border: 1px solid;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-top: 5px;
}

.Calculator__result-title {
  margin-bottom: 10px;
  font-weight: 700;
}
</style>
