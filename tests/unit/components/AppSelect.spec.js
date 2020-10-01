import { shallowMount } from '@vue/test-utils';
import AppSelect from '@/components/AppSelect.vue';

describe('AppSelect', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppSelect);
  });

  it('should work', () => {
    expect(wrapper.find('select').exists()).toBe(true);
  });
});
