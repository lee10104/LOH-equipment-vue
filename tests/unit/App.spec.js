import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('should work', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
