<template>
  <input class="AppInput" type="text" v-model="inputText" @input="$emit('input', inputText)">
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: { type: [Number, String] }
  },
  data() {
    return { inputText: this.value };
  }
};
</script>

<style lang="scss">
.AppInput {
  width: 70px;
  height: 34px;
  vertical-align: top;
  text-align: right;
  box-sizing: border-box;
}
</style>
