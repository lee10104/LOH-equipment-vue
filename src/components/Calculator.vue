<template>
  <div class="Calculator">
    <div class="Calculator__title">
      {{ $t('calculator') }}
      <AppButton label="+" color="light-grey" size="small" @click="addCondition" />
      <AppButton :label="$t('calculate')" color="red" @click="calculate" />
      <span v-if="total">{{ $t('calculating', [calculatingIndex, total]) }}</span>
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
        <div v-if="results.length > 0" class="Calculator__result-title">
          {{ $t('result', [results.length]) }}
        </div>
        <div class="Calculator__result" v-for="(result, index) in results" v-bind:key="index">
          <EquipmentSummary v-for="equipment in result" v-bind:key="equipment.id" :equipment="equipment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/hero';
import Calculator from '@/calculator';
import Checker from '@/checker';
import { equipmentPartList } from '@/equipment';
import Condition from './Condition';
import EquipmentSummary from './EquipmentSummary';

export default {
  name: 'Calculator',
  components: { Condition, EquipmentSummary },
  props: {
    equipments: { type: Array, required: true },
    hero: {
      required: true,
      validator: v => v === null || v instanceof Hero
    }
  },
  data() {
    return { conditions: [], results: [], total: null };
  },
  methods: {
    addCondition() {
      this.conditions.push({});
    },
    calculate() {
      if (!this.hero) {
        alert(this.$t('select_hero'));
        return;
      }

      const calculator = new Calculator(this.hero);
      const checker = new Checker(this.hero, this.conditions);
      this.results = [];
      const numberList = this.equipmentsPerPart.map(equipments => equipments.length);
      for (let i = 5; i > 0; i--)
        numberList[i - 1] *= numberList[i];
      this.total = numberList[0];

      for (let i = 0; i < this.total; i++) {
        this.calculatingIndex = i + 1;
        const elements = this.equipmentsPerPart.map((equipments, index) => equipments[~~(i % numberList[index] / (numberList[index + 1] || 1))]);

        if (checker.check(calculator.calculate(elements)))
          this.results.push(elements);
      }

      this.total = null;
    },
    updateCondition(index, condition) {
      this.$set(this.conditions, index, condition);
    }
  },
  computed: {
    equipmentsPerPart() {
      return equipmentPartList.map(part => {
        return this.equipments.filter(equipment => (
          equipment.part === part && equipment.isClassAvailable(this.hero.class)
        ));
      });
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

  > span {
    margin-left: 10px;
  }
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
