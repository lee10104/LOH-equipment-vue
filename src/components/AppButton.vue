<template>
  <button :class="['AppButton', 'AppButton--' + color]" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    label: { type: String, required: true },
    color: { type: String, default: 'default' }
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

  & + & {
    margin-left: 10px;
  }

  &--default {
    background-color: #424244;
  }

  &--red {
    background-color: red;
  }
}
</style>
