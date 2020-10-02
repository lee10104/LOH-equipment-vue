<template>
  <div class="Conditions">
    <div class="Conditions__title">
      {{ $t('calculator') }}
      <AppButton label="+" color="light-grey" size="small" />
      <AppButton :label="$t('calculate')" color="red" />
    </div>
  </div>
</template>

<script>
export default { name: 'Conditions' };
</script>

<style lang="scss">
.Conditions {
  width: calc(70% - 10px);
  height: 400px;
}

.Conditions__title {
  font-size: 20px;
  font-weight: 700;
}
</style>
