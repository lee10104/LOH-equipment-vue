import { shallowMount } from '@vue/test-utils';
import EquipmentSummary from '@/components/EquipmentSummary.vue';

describe('EquipmentSummary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(EquipmentSummary);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
