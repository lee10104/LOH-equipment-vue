<template>
  <div class="EquipmentSummary" @click="$emit('click')">
    {{ equipment.grade }}⭐ +{{ equipment.level }}
    <div class="EquipmentSummary__type">{{ $t(`equipment.type.${equipment.type}`) }}</div>
  </div>
</template>

<script>
import Equipment from '@/equipment';

export default {
  name: 'EquipmentSummary',
  props: {
    equipmentData: { type: Object, required: true }
  },
  computed:{
    equipment() {
      return new Equipment(this.equipmentData);
    }
  }
};
</script>

<style lang="scss">
.EquipmentSummary {
  display: inline-block;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border: 1px solid #EEEEEE;
  border-radius: 2px;
  padding: 10px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }
}

.EquipmentSummary__type {
  margin-top: 10px;
  font-weight: 700;
}
</style>
