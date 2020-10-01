import { shallowMount } from '@vue/test-utils';
import Equipment from '@/equipment';
import EquipmentSummary from '@/components/EquipmentSummary.vue';

describe('EquipmentSummary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(EquipmentSummary, {
      propsData: { equipment: new Equipment({}) }
    });
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
