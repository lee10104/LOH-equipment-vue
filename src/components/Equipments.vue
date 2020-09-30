<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <AppButton :label="$t('equipment.add')" @click="onOffEquipmentFormDialog"/>
      <AppButton :label="$t('warning')" color="red" @click="onOffNoticeDialog" />
      <EquipmentFormDialog
        v-if="showEquipmentFormDialog"
        :title="$t('equipment.add')"
        @close="onOffEquipmentFormDialog"
      />
      <NoticeDialog v-if="showNoticeDialog" @close="onOffNoticeDialog" />
    </div>
    <div class="Equipments__container">
      <Equipment />
      <Equipment />
      <Equipment />
    </div>
  </div>
</template>

<script>
import Equipment from './Equipment';
import EquipmentFormDialog from './EquipmentFormDialog';
import NoticeDialog from './NoticeDialog';

export default {
  name: 'Equipments',
  components: { Equipment, EquipmentFormDialog, NoticeDialog },
  data() {
    return {
      showEquipmentFormDialog: false,
      showNoticeDialog: false
    }
  },
  methods: {
    onOffEquipmentFormDialog() {
      this.showEquipmentFormDialog = !this.showEquipmentFormDialog;
    },
    onOffNoticeDialog() {
      this.showNoticeDialog = !this.showNoticeDialog;
    }
  }
};
</script>

<style lang="scss">
.Equipments {
  margin-top: 10px;
}

.Equipments__container {
  margin-top: 20px;
}
</style>
