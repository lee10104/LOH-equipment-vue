import { shallowMount } from '@vue/test-utils';
import HeroInfo from '@/components/HeroInfo.vue';

describe('HeroInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HeroInfo);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
