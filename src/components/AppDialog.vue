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
        <AppButton class="AppDialog__close-button" label="닫기" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import AppButton from './AppButton';

export default {
  name: 'AppDialog',
  components: { AppButton }
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
  margin: 20px 30px 10px 30px;
  font-weight: bold;
  font-size: 25px;
}

.AppDialog__content {
  margin: 0 30px;
}

.AppDialog__footer {
  width: 100%;
}

.AppDialog__close-button {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
</style>
