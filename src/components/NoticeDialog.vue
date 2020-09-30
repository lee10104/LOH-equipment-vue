<template>
  <AppDialog @close="$emit('close')">
    <template #title></template>
    <template #content></template>
  </AppDialog>
</template>

<script>
export default { name: 'NoticeDialog' };
</script>
