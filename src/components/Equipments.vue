<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <AppButton :label="$t('equipment.add')" @click="onOffEquipmentFormDialog"/>
      <AppButton :label="$t('warning')" color="red" />
      <EquipmentFormDialog
        v-if="showEquipmentFormDialog"
        :title="$t('equipment.add')"
        @close="onOffEquipmentFormDialog"
      />
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

export default {
  name: 'Equipments',
  components: { Equipment, EquipmentFormDialog },
  data() {
    return {
      showEquipmentFormDialog: false
    }
  },
  methods: {
    onOffEquipmentFormDialog() {
      this.showEquipmentFormDialog = !this.showEquipmentFormDialog;
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
