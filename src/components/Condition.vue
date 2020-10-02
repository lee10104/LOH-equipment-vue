<template>
  <div class="Condition">
    <AppSelect class="Condition__element" name="id" :value="conditionForm.statId" :options="statIds" @change="updateId" />
    <AppInput class="Condition__element" type="text" :value="conditionForm.value" @input="updateValue" />
    <AppSelect class="Condition__element" name="type" :value="conditionForm.type" :options="conditionTypes" @change="updateType" />
  </div>
</template>

<script>
import { statIdList } from '@/stats';

export default {
  name: 'Condition',
  props: {
    condition: { type: Object, required: true }
  },
  data() {
    return {
      conditionForm: { ...this.condition }
    };
  },
  methods: {
    updateId(statId) {
      this.conditionForm = { ...this.conditionForm, statId };
    },
    updateType(type) {
      this.conditionForm = { ...this.conditionForm, type };
    },
    updateValue(value) {
      this.conditionForm = { ...this.conditionForm, value };
    }
  },
  computed: {
    conditionTypes() {
      return ['gte', 'lt'].map(type => ({ value: type, label: this.$t(`condition.${type}`) }));
    },
    statIds() {
      return statIdList.map(id => ({
        value: id,
        label: this.$t(`stats.${id}`)
      }));
    }
  }
};
</script>

<style lang="scss">
.Condition {
  height: 34px;
  margin-top: 10px;
}

.Condition__element {
  & + & {
    margin-left: 10px;
  }
}
</style>
