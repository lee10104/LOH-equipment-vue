<template>
  <div class="Condition">
    {{ $t(`stats.${condition.statId}`) }} - {{ $t(`condition.${condition.type}`) }} - {{ condition.value }}
  </div>
</template>

<script>
export default {
  name: 'Condition',
  props: {
    condition: { type: Object, required: true }
  }
};
</script>

<style lang="scss">
.Condition {
  height: 34px;
  margin-top: 10px;
}
</style>
