<template>
  <button :class="buttonClass" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    label: { type: String, required: true },
    color: { type: String, default: null },
    size: { type: String, default: null },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    buttonClass() {
      const { color, size, disabled } = this;
      const classList = ['AppButton'];

      if (color) classList.push('AppButton--' + color);
      if (size) classList.push('AppButton--' + size);
      if (disabled) classList.push('AppButton--disabled');

      return classList.join(' ');
    }
  }
};
</script>

<style lang="scss">
.AppButton {
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  background-color: #424244;
  vertical-align: top;
  height: 34px;

  & + & {
    margin-left: 10px;
  }

  &--red {
    background-color: red;
  }

  &--light-grey {
    background-color: #EEEEEE;
    color: #424244;
  }

  &--small {
    padding: 0;
    width: 34px;
  }

  &--disabled {
    opacity: 0.3;
    cursor: default;
  }
}
</style>
