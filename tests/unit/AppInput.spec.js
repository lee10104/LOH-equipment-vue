import { shallowMount } from '@vue/test-utils';
import AppInput from '@/components/AppInput.vue';

describe('AppInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppInput);
  });

  it('should work', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
