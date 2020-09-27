<template>
  <div class="Equipment" />
</template>

<script>
export default { name: 'Equipment' };
</script>

<style lang="scss">
.Equipment {
  display: inline-block;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 1px solid #EEEEEE;
  border-radius: 2px;
  padding: 10px;

  & + & {
    margin-left: 10px;
  }
}
</style>
