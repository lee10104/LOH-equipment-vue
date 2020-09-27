import { shallowMount } from '@vue/test-utils';
import Equipments from '@/components/Equipments.vue';

describe('Equipments', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Equipments);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
