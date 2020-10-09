<template>
  <AppDialog @close="$emit('close')">
    <template #title>{{ $t('notice.title') }}</template>
    <template #content>
      <div class="NoticeDialog__content">
        <div class="NoticeDialog__content-title">
          {{ $t('notice.precaution.title') }}
        </div>
        <div
          v-html="$t('notice.precaution.description')"
          class="NoticeDialog__content-description"
        />
      </div>
      <div class="NoticeDialog__content">
        <div class="NoticeDialog__content-title">
          {{ $t('notice.instruction.title') }}
        </div>
        <div
          v-html="$t('notice.instruction.description')"
          class="NoticeDialog__content-description"
        />
      </div>
    </template>
  </AppDialog>
</template>

<script>
export default { name: 'NoticeDialog' };
</script>

<style lang="scss">
.NoticeDialog__content {
  & + & {
    margin-top: 10px;
  }
}

.NoticeDialog__content-title {
  font-weight: 700;
}

.NoticeDialog__content-description {
  margin-top: 10px;
}
</style>
