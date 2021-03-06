<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <AppButton :label="$t('equipment.add')" @click="onOffEquipmentFormDialog(newEquipment)"/>
      <AppButton :label="$t('warning')" color="red" @click="onOffNoticeDialog" />
      <EquipmentDataManager
        :equipments="equipments"
        class="Equipments__header--right"
        @update="updateEquipments"
      />
    </div>
    <div class="Equipments__container">
      <EquipmentSummary
        v-for="equipment in equipments"
        v-bind:key="equipment.id"
        :equipment="equipment"
        @click="onOffEquipmentFormDialog(equipment)"
      />
    </div>
    <EquipmentFormDialog
      v-if="showEquipmentFormDialog"
      :title="equipmentFormDialogTitle"
      :equipment="equipment"
      @submit="updateEquipment"
      @close="onOffEquipmentFormDialog(null)"
    />
    <NoticeDialog v-if="showNoticeDialog" @close="onOffNoticeDialog" />
  </div>
</template>

<script>
import Equipment from '@/equipment';
import EquipmentSummary from './EquipmentSummary';
import EquipmentFormDialog from './EquipmentFormDialog';
import EquipmentDataManager from './EquipmentDataManager';
import NoticeDialog from './NoticeDialog';

export default {
  name: 'Equipments',
  components: {
    EquipmentSummary,
    EquipmentFormDialog,
    EquipmentDataManager,
    NoticeDialog
  },
  data() {
    return {
      isDialogOpen: false,
      equipment: null,
      equipments: [],
      showEquipmentFormDialog: false,
      showNoticeDialog: false
    }
  },
  mounted() {
    const equipmentData = localStorage.equipments ? JSON.parse(localStorage.equipments) : {};
    this.equipments = Object.keys(equipmentData).map(id => new Equipment(id, equipmentData[id]));

    this.$emit('update', this.equipments);
  },
  computed: {
    newEquipment() {
      let id;
      if (this.equipments.length > 0)
        id = Number(this.equipments[this.equipments.length - 1].id) + 1;
      else
        id = 1;

      return new Equipment(id, {});
    },
    equipmentFormDialogTitle() {
      if (Object.keys(this.equipment.mainOption).length > 0)
        return this.$t('equipment.modify');
      else
        return this.$t('equipment.add');
    }
  },
  methods: {
    onOffEquipmentFormDialog(equipment) {
      this.equipment = equipment;
      this.isDialogOpen = !this.isDialogOpen;
      this.showEquipmentFormDialog = !this.showEquipmentFormDialog;

      this.$emit('open-dialog', this.isDialogOpen);
    },
    onOffNoticeDialog() {
      this.isDialogOpen = !this.isDialogOpen;
      this.showNoticeDialog = !this.showNoticeDialog;

      this.$emit('open-dialog', this.isDialogOpen);
    },
    updateEquipment() {
      const existingIds = this.equipments.map(e => e.id);
      if (!existingIds.includes(this.equipment.id))
        this.equipments.push(this.equipment);

      this.updateLocalStorage();
    },
    updateEquipments(equipmentsData) {
      this.equipments = equipmentsData.map(
        (equipmentData, index) => new Equipment(index, equipmentData)
      );
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      const result = {};
      this.equipments.forEach(equipment => {
        result[equipment.id] = equipment.format;
      });
      localStorage.equipments = JSON.stringify(result);

      this.$emit('update', this.equipments);
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

.Equipments__header {
  &--right {
    float: right;
  }
}
</style>
