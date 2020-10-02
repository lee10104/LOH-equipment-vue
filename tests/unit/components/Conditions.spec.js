import { shallowMount } from '@vue/test-utils';
import Conditions from '@/components/Conditions.vue';

describe('Conditions', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Conditions);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});

