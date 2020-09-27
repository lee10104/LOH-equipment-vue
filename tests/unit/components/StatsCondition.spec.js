import { shallowMount } from '@vue/test-utils';
import StatsCondition from '@/components/StatsCondition.vue';

describe('StatsCondition', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(StatsCondition);
  });

  it('should work', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});

