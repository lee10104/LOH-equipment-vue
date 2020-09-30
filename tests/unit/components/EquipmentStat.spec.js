import { shallowMount } from '@vue/test-utils';
import EquipmentStat from '@/components/EquipmentStat.vue';

describe('EquipmentStat', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(EquipmentStat, {
      propsData: {
        stat: { id: 'attack', type: 'percentage' }
      }
    });
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
