<template>
  <div class="StatsCondition">
    <div class="StatsCondition__title">
      {{ $t('calculator') }}
      <AppButton label="+" color="light-grey" size="small" />
      <AppButton :label="$t('calculate')" color="red" />
    </div>
  </div>
</template>

<script>
export default { name: 'StatsCondition' };
</script>

<style lang="scss">
.StatsCondition {
  width: calc(70% - 10px);
  height: 400px;
}

.StatsCondition__title {
  font-size: 20px;
  font-weight: 700;
}
</style>
