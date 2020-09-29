import { shallowMount } from '@vue/test-utils';
import AppDialog from '@/components/AppDialog.vue';

describe('AppDialog', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppDialog);
  });

  it('should work', () => {
    expect(wrapper.find('.AppDialog').exists()).toBe(true);
  });
});
