import { shallowMount } from '@vue/test-utils';
import NoticeDialog from '@/components/NoticeDialog.vue';

describe('NoticeDialog', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(NoticeDialog);
  });

  it('should work', () => {
    expect(wrapper.find('AppDialog').exists()).toBe(true);
  });
});
