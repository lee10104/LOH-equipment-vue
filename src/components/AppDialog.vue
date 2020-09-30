<template>
  <transition name="modal">
    <div class="AppDialog">
      <div class="AppDialog__title">
        <slot name="title" />
      </div>
      <div class="AppDialog__content">
        <slot name="content" />
      </div>
      <div class="AppDialog__footer">
        <div class="AppDialog__buttons">
          <AppButton v-if="showSubmitButton" :label="$t('submit')" :disabled="true" @click="$emit('submit')" />
          <AppButton :label="$t('close')" @click="$emit('close')" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppDialog',
  props: { showSubmitButton: { type: Boolean, default: false } }
};
</script>

<style lang="scss">
.AppDialog {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #424244;
  background-color: white;
  width: 512px;
  height: 512px;
}

.AppDialog__title {
  margin: 20px 30px 20px 30px;
  font-weight: bold;
  font-size: 25px;
}

.AppDialog__content {
  margin: 0 30px;
}

.AppDialog__footer {
  width: 100%;
}

.AppDialog__footer {
  position: absolute;
  bottom: 0;
}

.AppDialog__buttons {
  float: right;
  margin-bottom: 20px;
  margin-right: 30px;
}
</style>
