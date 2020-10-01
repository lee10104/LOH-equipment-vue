<template>
  <div class="Equipments">
    <div :class="isDialogOpen ? 'Equipments--disabled' : ''">
      <div class="Equipments__header">
        <AppButton :label="$t('equipment.add')" @click="onOffEquipmentFormDialog({})"/>
        <AppButton :label="$t('warning')" color="red" @click="onOffNoticeDialog" />
      </div>
      <div class="Equipments__container">
        <Equipment
          v-for="equipment in equipments"
          v-bind:key="equipment.id"
          :equipment-data="equipment"
          @click="onOffEquipmentFormDialog(equipment)"
        />
      </div>
    </div>
    <EquipmentFormDialog
      v-if="showEquipmentFormDialog"
      :title="equipmentFormDialogTitle"
      @close="onOffEquipmentFormDialog(null)"
    />
    <NoticeDialog v-if="showNoticeDialog" @close="onOffNoticeDialog" />
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
      isDialogOpen: false,
      equipmentData: null,
      showEquipmentFormDialog: false,
      showNoticeDialog: false,
      equipmentsData: [
        {
          id: 'equipment1',
          part: 'weapon',
          type: 'strength',
          grade: 6,
          level: 15,
          mainOption: { id: 'attack', value: 67, type: 'percentage' },
          subOptions: [
            { id: 'health', value: 375, type: 'number' },
            { id: 'defense', value: 6, type: 'percentage' },
            { id: 'critical_hit_damage', value: 13, type: 'percentage' },
            { id: 'attack', value: 64 }
          ]
        },
        {
          id: 'equipment2',
          part: 'armor',
          type: 'life',
          grade: 6,
          level: 15,
          mainOption: { id: 'attack', value: 67, type: 'percentage' },
          subOptions: [
            { id: 'health', value: 375, type: 'number' },
            { id: 'defense', value: 6, type: 'percentage' },
            { id: 'critical_hit_damage', value: 13, type: 'percentage' },
            { id: 'attack', value: 64 }
          ]
        }
      ]
    }
  },
  computed: {
    equipmentFormDialogTitle() {
      if (Object.keys(this.equipmentData).length > 0)
        return this.$t('equipment.modify');
      else
        return this.$t('equipment.add');
    },
    equipments() {
      return this.equipmentsData;
    }
  },
  methods: {
    onOffEquipmentFormDialog(equipmentData) {
      this.equipmentData = equipmentData;
      this.isDialogOpen = !this.isDialogOpen;
      this.showEquipmentFormDialog = !this.showEquipmentFormDialog;
    },
    onOffNoticeDialog() {
      this.isDialogOpen = !this.isDialogOpen;
      this.showNoticeDialog = !this.showNoticeDialog;
    }
  }
};
</script>

<style lang="scss">
.Equipments {
  margin-top: 10px;
}

.Equipments--disabled {
  pointer-events: none;
}

.Equipments__container {
  margin-top: 20px;
}
</style>
