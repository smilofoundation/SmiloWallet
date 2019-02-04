import { shallowMount } from '@vue/test-utils';
import FaqsContainer from '@/containers/FaqsContainer/FaqsContainer.vue';

import { Tooling } from '@@/helpers';

describe('FaqsContainer.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
  });

  beforeEach(() => {
    wrapper = shallowMount(FaqsContainer, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  it('should render correct FAQ contents', () => {
    const linkWrappers = wrapper.findAll('.qa__contents--title');
    let linkWrapper = linkWrappers.at(0);
    linkWrapper.trigger('click');
    expect(wrapper.vm.$data.faqs.faq1.open).toBe(true);
  });

  describe('FaqsContainer.vue Methods', () => {});
});
