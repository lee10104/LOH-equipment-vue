<template>
  <div class="Conditions">
    <div class="Conditions__title">
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
  name: 'Conditions',
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
.Conditions {
  width: calc(70% - 10px);
  height: 400px;
  overflow: auto;
}

.Conditions__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
