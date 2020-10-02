import { shallowMount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Calculator);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});

