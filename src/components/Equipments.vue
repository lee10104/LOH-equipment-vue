<template>
  <div class="Equipments">
    <div class="Equipments__header">
      <AppButton :label="$t('equipment.add')" @click="onOffEquipmentFormDialog(newEquipment)"/>
      <AppButton :label="$t('warning')" color="red" @click="onOffNoticeDialog" />
      <div class="Equipments__header--right">
        <AppButton :label="$t('initialize')" color="red" @click="initializeEquipments" />
        <AppButton :label="$t('export')" color="light-grey" @click="exportEquipments" />
        <AppButton :label="$t('import')" color="light-grey" @click="importEquipments" />
        <input type="file" id="file">
      </div>
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
import { equipmentTypeList, equipmentPartList } from '@/equipment';
import { statIdList } from '@/stats';
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
    initializeEquipments() {
      if (confirm(this.$t('confirm.initialize'))) {
        this.equipments = [];
        this.updateEquipments;
      }
    },
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

      this.updateLocalStorage();
    },
    updateLocalStorage() {
      const result = {};
      this.equipments.forEach(equipment => {
        result[equipment.id] = equipment.format;
      });
      localStorage.equipments = JSON.stringify(result);

      this.$emit('update', this.equipments);
    },
    exportEquipments() {
      const dataStr = this.equipments.map(equipment => {
        const arr = [
          this.$t(`equipment.type.${equipment.type}`),
          this.$t(`equipment.part.${equipment.part}`),
          equipment.grade,
          equipment.level,
          ...this.optionToArr(equipment.mainOption),
          ...equipment.subOptions.flatMap(subOption => this.optionToArr(subOption))
        ];

        return arr.join(',');
      }).join('\n');

      const blob = new Blob([dataStr], {type: 'text/csv'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'LOH-equipment.csv';
      link.click();
      window.URL.revokeObjectURL(link.href);
    },
    optionToArr(option) {
      return [
        this.$t(`stats.${option.id}`),
        option.type === 'percentage' ? option.value + '%' : option.value
      ];
    },
    importEquipments() {
      const files = document.getElementById('file').files;
      if (files.length <= 0) {
        alert(this.$t('alert.select_file'));
        return;
      }

      const fr = new FileReader();
        fr.onload = e => {
          const equipments = this.parseEquipments(e.target.result.split('\n'))
          if (equipments) {
            this.equipments = equipments;
            this.updateLocalStorage();
          }
        }
        fr.readAsText(files.item(0));
    },
    parseEquipments(equipmentsData) {
      try {
        const locales = this.$i18n.messages[this.$i18n.locale]['equipment'];
        const typeMap = this.swapKeyAndValue(locales['type']);
        const partMap = this.swapKeyAndValue(locales['part']);
        return equipmentsData.map((equipmentData, index) => {
          const arr = equipmentData.split(',');

          const equipmentObj = {};
          equipmentObj.type = typeMap[arr[0]];
          equipmentObj.part = partMap[arr[1]];
          equipmentObj.grade = Number(arr[2]);
          equipmentObj.level = Number(arr[3]);
          const options = [];
          for (let i = 2; i < 7; i++) {
            options.push(arr.slice(i * 2, (i + 1) * 2));
          }
          equipmentObj.mainOption = this.parseOptionArr(options[0]);
          equipmentObj.subOptions = options.slice(1, 5).map(option => this.parseOptionArr(option));

          if (!this.valid(equipmentObj)) throw index;

          return new Equipment(index, equipmentObj);
        });
      } catch(e) {
        alert(this.$t('alert.file_not_valid', [e + 1]));
        return null;
      }
    },
    parseOptionArr(optionArr) {
      const option = {}

      const [optionKey, optionValue] = optionArr;

      const statMap = this.swapKeyAndValue(this.$i18n.messages[this.$i18n.locale]['stats']);
      option.id = statMap[optionKey];

      const valueLength = optionValue.length;
      if (optionValue[valueLength - 1] === '%') {
        option.type = 'percentage';
        option.value = Number(optionValue.slice(0, valueLength - 1));
      }
      else {
        option.type = 'number';
        option.value = Number(optionValue);
      }

      return option;
    },
    valid(equipmentObj) {
      if (!equipmentTypeList.includes(equipmentObj.type)) return false;
      if (!equipmentPartList.includes(equipmentObj.part)) return false;
      if (isNaN(equipmentObj.grade)) return false;
      if (isNaN(equipmentObj.level)) return false;

      const options = [equipmentObj.mainOption, ...equipmentObj.subOptions];
      return options.reduce((result, option) => {
        return result && statIdList.includes(option.id) && !isNaN(option.value);
      }, true);
    },
    swapKeyAndValue(obj) {
      return Object.keys(obj).reduce((ret, key) => {
        ret[obj[key]] = key;
        return ret;
      }, {});
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
