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
      <div class="Calculator__results">
        <div class="Calculator__result-title">장비셋1</div>
        <div class="Calculator__result">
          <EquipmentSummary
            v-for="equipment in equipments"
            v-bind:key="equipment.id"
            :equipment="equipment"
          />
        </div>
        <div class="Calculator__result-title">장비셋2</div>
        <div class="Calculator__result">
          <EquipmentSummary
            v-for="equipment in equipments"
            v-bind:key="equipment.id"
            :equipment="equipment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Condition from './Condition';
import Equipment from '@/equipment';
import EquipmentSummary from './EquipmentSummary';

export default {
  name: 'Calculator',
  components: { Condition, EquipmentSummary },
  data() {
    return {
      conditions: [],
      equipments: localStorage.equipments ? JSON.parse(localStorage.equipments).map(data => new Equipment(data)) : [],
    };
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
