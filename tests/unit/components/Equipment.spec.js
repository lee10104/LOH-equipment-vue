import { shallowMount } from '@vue/test-utils';
import Equipment from '@/components/Equipment.vue';

describe('Equipment', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Equipment);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
