<template>
  <div class="Calculator">
    <div class="Calculator__title">
      {{ $t('calculator') }}
      <AppButton label="+" color="light-grey" size="small" @click="addCondition" />
      <AppButton :label="$t('calculate')" color="red" />
    </div>
    <Condition
      v-for="(condition, index) in conditions"
      v-bind:key="index"
      :index="index"
      :condition="condition"
      @update="updateCondition"
    />
  </div>
</template>

<script>
import Condition from './Condition';

export default {
  name: 'Calculator',
  components: { Condition },
  data() {
    return {
      conditions: []
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
  height: 400px;
  overflow: auto;
}

.Calculator__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
