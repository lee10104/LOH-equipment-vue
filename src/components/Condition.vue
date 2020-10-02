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
    index: { type: Number, required: true },
    condition: { type: Object, required: true }
  },
  data() {
    return {
      conditionForm: { ...this.condition }
    };
  },
  methods: {
    update() {
      this.$emit('update', this.index, this.conditionForm);
    },
    updateId(statId) {
      this.conditionForm = { ...this.conditionForm, statId };
      this.update();
    },
    updateType(type) {
      this.conditionForm = { ...this.conditionForm, type };
      this.update();
    },
    updateValue(value) {
      this.conditionForm = { ...this.conditionForm, value };
      this.update();
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
  margin-bottom: 10px;
}

.Condition__element {
  & + & {
    margin-left: 10px;
  }
}
</style>
