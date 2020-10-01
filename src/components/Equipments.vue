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
      <Equipment v-for="equipment in equipments" v-bind:key="equipment.id" :equipment-data="equipment" />
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
    equipments() {
      return this.equipmentsData;
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
