<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <AppButton :label="$t('equipment.add')" @click="onOffEquipmentFormDialog(newEquipment)"/>
      <AppButton :label="$t('warning')" color="red" @click="onOffNoticeDialog" />
      <AppButton :label="$t('export')" color="light-grey" @click="exportEquipments" />
      <AppButton :label="$t('import')" color="light-grey" @click="importEquipments" />
      <input type="file" id="file" class="Equipments__header--right">
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
      @submit="updateEquipments"
      @close="onOffEquipmentFormDialog(null)"
    />
    <NoticeDialog v-if="showNoticeDialog" @close="onOffNoticeDialog" />
  </div>
</template>

<script>
import Equipment from '@/equipment';
import EquipmentSummary from './EquipmentSummary';
import EquipmentFormDialog from './EquipmentFormDialog';
import NoticeDialog from './NoticeDialog';

export default {
  name: 'Equipments',
  components: { EquipmentSummary, EquipmentFormDialog, NoticeDialog },
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
    updateEquipments() {
      const existingIds = this.equipments.map(e => e.id);
      if (!existingIds.includes(this.equipment.id))
        this.equipments.push(this.equipment);

      const result = {};
      this.equipments.forEach(equipment => {
        result[equipment.id] = equipment.format;
      });
      localStorage.equipments = JSON.stringify(result);

      this.$emit('update', this.equipments);
    },
    exportEquipments() {
      console.log('export!');
    },
    importEquipments() {
      const files = document.getElementById('file').files;
      if (files.length <= 0) {
        alert(this.$t('alert.select_file'));
        return;
      }

      console.log('import!');
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
