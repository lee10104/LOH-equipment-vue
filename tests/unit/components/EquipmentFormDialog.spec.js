import { shallowMount } from '@vue/test-utils';
import EquipmentFormDialog from '@/components/EquipmentFormDialog.vue';

describe('EquipmentFormDialog', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(EquipmentFormDialog, {
      propsData: { title: 'Amazing title', equipment: {} }
    });
  });

  it('should work', () => {
    expect(wrapper.find('AppDialog').exists()).toBe(true);
  });
});
