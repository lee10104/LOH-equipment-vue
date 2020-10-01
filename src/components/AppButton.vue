<template>
  <button :class="buttonClass" @click="$emit('click')" :disabled="disabled">
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
    height: 34px;
    width: 34px;
    vertical-align: top;
  }

  &--disabled {
    opacity: 0.1;
    cursor: default;
  }
}
</style>
