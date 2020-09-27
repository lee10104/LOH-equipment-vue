import { shallowMount } from '@vue/test-utils';
import AppButton from '@/components/AppButton.vue';

describe('AppButton', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppButton, {
      propsData: { label: 'Click!' }
    });
  });

  it('should work', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should show label', () => {
    expect(wrapper.text()).toMatch('Click!');
  });
});
