<template>
  <select class="AppSelect" :name="name" v-model="selected" @change="$emit('change', selected)">
    <option value="">{{ $t('select') }}</option>
    <option v-for="(option, index) in options" v-bind:key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    name: { type: String, required: true },
    options: { type: Array, required: true },
    value: { type: [String, Number], default: '' }
  },
  data() {
    return { selected: this.value };
  }
};
</script>

<style lang="scss">
.AppSelect {
  height: 34px;
}
</style>
