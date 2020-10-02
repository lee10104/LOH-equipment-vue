import { shallowMount } from '@vue/test-utils';
import Condition from '@/components/Condition.vue';

describe('Condition', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Condition, {
      propsData: { condition: {} }
    });
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});

