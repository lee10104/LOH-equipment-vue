<template>
  <div class="Calculator">
    <div class="Calculator__title">
      {{ $t('calculator') }}
      <AppButton label="+" color="light-grey" size="small" @click="addCondition" />
      <AppButton :label="$t('calculate')" color="red" @click="calculate" />
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
          <EquipmentSummary
            v-for="equipment in result.equipments"
            v-bind:key="equipment.id"
            :equipment="equipment"
            @click="onOffEquipmentFormDialog(equipment)"
          />
          <AppButton
            class="Calculator__check"
            size="small"
            label="✓"
            :disabled="clickedIndex === index"
            @click="updateHeroInfo(index, result.calculationResult)"
          />
        </div>
      </div>
    </div>
    <EquipmentFormDialog
      v-if="showEquipmentFormDialog"
      :title="$t('equipment.information')"
      :equipment="equipment"
      :read-only="true"
      @close="onOffEquipmentFormDialog(null)"
    />
  </div>
</template>

<script>
import Hero from '@/hero';
import Checker from '@/checker';
import { equipmentPartList, equipmentTypeInfos } from '@/equipment';
import { statIdList } from '@/stats';
import Condition from './Condition';
import EquipmentSummary from './EquipmentSummary';
import EquipmentFormDialog from './EquipmentFormDialog';

export default {
  name: 'Calculator',
  components: { Condition, EquipmentSummary, EquipmentFormDialog },
  props: {
    equipments: { type: Array, required: true },
    hero: {
      required: true,
      validator: v => v === null || v instanceof Hero
    }
  },
  data() {
    return {
      clickedIndex: null,
      conditions: [],
      equipment: null,
      results: [],
      showEquipmentFormDialog: false
    };
  },
  watch: {
    hero() {
      this.initializeData();
    }
  },
  methods: {
    addCondition() {
      this.conditions.push({});
    },
    calculateEquipment(equipment, result) {
      const newResult = { ...result };
      const stats = [equipment.mainOption, ...equipment.subOptions];
      stats.forEach(stat => (newResult[stat.id] += this.calculateStat(stat)));

      return newResult;
    },
    calculateSetEffect(equipments, result) {
      const stats = [];
      const newResult = { ...result };
      const equippedNumber = equipments.reduce((result, equipment) => {
        result[equipment.type] ||= 0;
        result[equipment.type] += 1;
        return result;
      }, {});

      for (let key in equippedNumber) {
        const equipmentTypeInfo = equipmentTypeInfos[key];
        if (!equipmentTypeInfo) continue;

        const setNumber = ~~(equippedNumber[key] / equipmentTypeInfo.number);

        for (let i = 0; i < setNumber; i++)
          stats.push({ id: equipmentTypeInfo.statId, value: equipmentTypeInfo.value, type: 'percentage' });
      }

      stats.forEach(stat => (newResult[stat.id] += this.calculateStat(stat)));

      return newResult;
    },
    calculateStat(stat) {
      const value = Number(stat.value);
      if (stat.type === 'percentage' && ['health', 'attack', 'defense'].includes(stat.id))
        return this.hero.rawStats[stat.id] * value * 0.01;
      else
        return value;
    },
    calculate() {
      if (!this.hero) {
        alert(this.$t('alert.select_hero'));
        return;
      }

      if (this.conditions.length === 0) {
        alert(this.$t('alert.add_conditions'));
        return;
      }

      this.initializeData();

      const results = [];
      const checker = new Checker(this.hero, this.conditions);
      const calculationResult = new Array(6);

      try {
        this.equipmentsPerPart[0].forEach(e0 => {
          calculationResult[0] = this.calculateEquipment(e0, this.emptyResult());

          this.equipmentsPerPart[1].forEach(e1 => {
            calculationResult[1] = this.calculateEquipment(e1, calculationResult[0]);

            this.equipmentsPerPart[2].forEach(e2 => {
              calculationResult[2] = this.calculateEquipment(e2, calculationResult[1]);

              this.equipmentsPerPart[3].forEach(e3 => {
                calculationResult[3] = this.calculateEquipment(e3, calculationResult[2]);

                this.equipmentsPerPart[4].forEach(e4 => {
                  calculationResult[4] = this.calculateEquipment(e4, calculationResult[3]);

                  this.equipmentsPerPart[5].forEach(e5 => {
                    calculationResult[5] = this.calculateEquipment(e5, calculationResult[4]);

                    const equipments = [e0, e1, e2, e3, e4, e5];
                    const result = this.calculateSetEffect(equipments, calculationResult[5]);

                    for (let key in result)
                      result[key] = Math.ceil(result[key]);

                    if (checker.check(result))
                      results.push({ equipments: equipments, calculationResult: result });

                    if (results.length > 100) throw 'too_many_results';
                  });
                });
              });
            });
          });
        });
      } catch(e) {
        alert(this.$t(`alert.${e}`));
        return;
      }

      if (results.length === 0)
        alert(this.$t('alert.no_data'));

      this.results = results;
    },
    emptyResult() {
      return statIdList.reduce((result, id) => {
        result[id] = 0;
        return result;
      }, {});
    },
    initializeData() {
      this.results = [];
      this.updateHeroInfo(null, {});
    },
    onOffEquipmentFormDialog(equipment) {
      this.equipment = equipment;
      this.showEquipmentFormDialog = !this.showEquipmentFormDialog;

      this.$emit('open-dialog', this.showEquipmentFormDialog);
    },
    updateCondition(index, condition) {
      this.$set(this.conditions, index, condition);
    },
    updateHeroInfo(index, equipmentStats) {
      this.clickedIndex = index;
      this.$emit('update', equipmentStats);
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

.Calculator__check {
  margin-right: 5px;
  margin-bottom: 5px;
  vertical-align: bottom !important;
}

.Calculator__result-title {
  margin-bottom: 10px;
  font-weight: 700;
}
</style>
