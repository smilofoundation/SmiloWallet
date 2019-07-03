import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
// import InteractWithContractContainer from '@/layouts/InterfaceLayout/containers/InteractWithContractContainer/InteractWithContractContainer.vue';
//import InterfaceContainerTitle from '@/layouts/InterfaceLayout/components/InterfaceContainerTitle/InterfaceContainerTitle.vue';
import DeployContractContainer from '@/layouts/InterfaceLayout/containers/DeployContractContainer/DeployContractContainer.vue';
// import InterfaceBottomText from '@/components/InterfaceBottomText/InterfaceBottomText.vue';
// import CurrencyPicker from '@/layouts/InterfaceLayout/components/CurrencyPicker/CurrencyPicker.vue';
import PopOver from '@/components/PopOver/PopOver.vue';
import BackButton from '@/layouts/InterfaceLayout/components/BackButton/BackButton.vue';
import nodeList from '@/networks';
import url from 'url';
import Web3 from '@smilo-platform/web3';
// import sinon from 'sinon';
import { Tooling } from '@@/helpers';

describe('[Needs Cleaned Up 1-16-19] InteractWithContractContainer.vue', () => {
  let localVue, i18n, wrapper, store;
  const resetView = jest.fn();

  beforeAll(() => {
    window.scrollTo = jest.fn().mockImplementation((valX, valY) => {
      window.pageXOffset = valX;
      window.pageYOffset = valY;
    });

    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
    Vue.config.errorHandler = () => {};

    const actions = {
      setGasPrice: jest.fn()
    };

    const network = nodeList['XSMT'][0];
    const hostUrl = url.parse(network.url);

    const newWeb3 = new Web3(
      `${hostUrl.protocol}//${hostUrl.hostname}:${network.port}${hostUrl.pathname}`
    );

    const wallet = {
      getAddressString: function() {
        return '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D';
      }
    };

    const getters = {
      gasPrice: () => {},
      web3: () => {
        return newWeb3;
      },
      wallet: () => {
        return wallet;
      }
    };

    store = new VueX.Store({
      actions,
      getters,
      state: {
        web3: newWeb3,
        network: network,
        wallet: {
          getAddressString: function() {
            return '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D';
          }
        }
      }
    });
  });
  beforeEach(() => {
    wrapper = shallowMount(DeployContractContainer, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      stubs: {
        'back-button': BackButton,
        popover: PopOver
      },
      propsData: {
        resetView: resetView
      }
    });
    wrapper.find('div'); // added to suppress eslint warning
  });
  it('should render correct bytecode', () => {
    const bytecode = 'bytecode';
    wrapper.setData({ bytecode });
    expect(wrapper.vm.$el.querySelectorAll('textarea')[0].value).toEqual(
      wrapper.vm.$data.bytecode
    );
  });

  it('should render correct abi', () => {
    const abi = 'abi';
    wrapper.setData({ abi });
    expect(wrapper.vm.$el.querySelectorAll('textarea')[1].value).toEqual(
      wrapper.vm.$data.abi
    );
  });

  xit('should render correct contractName', () => {
    const contractName = 'contractName';
    wrapper.setData({ contractName });
    expect(
      wrapper.vm.$el.querySelectorAll('.domain-name input')[0].value
    ).toEqual(contractName);
  });

  xit('should render correct contractName placeholder', () => {
    expect(
      wrapper.vm.$el.querySelectorAll('.domain-name input')[0].placeholder
    ).toEqual(wrapper.vm.$data.contractNamePlaceholder);
  });

  it('should render correct bytecode', () => {
    const bytecode = 'bytecode';
    wrapper.setData({ bytecode });
    expect(wrapper.vm.$el.querySelectorAll('textarea')[0].value).toEqual(
      wrapper.vm.$data.bytecode
    );
  });

  it('should render correct abi', () => {
    const abi = 'abi';
    wrapper.setData({ abi });
    expect(wrapper.vm.$el.querySelectorAll('textarea')[1].value).toEqual(
      wrapper.vm.$data.abi
    );
  });

  it('should render correct contractName', () => {
    const contractName = 'contractName';
    wrapper.setData({ contractName });
    expect(
      wrapper.vm.$el.querySelectorAll('.contract-name input')[0].value
    ).toEqual(contractName);
  });

  it('should render correct contractName placeholder', () => {
    expect(
      wrapper.vm.$el.querySelectorAll('.contract-name input')[0].placeholder
    ).toEqual('Name for the contract');
  });

  it('should render correct value data', () => {
    wrapper
      .find('.submit-button-container .buttons .submit-button')
      .trigger('click');
  });

  it('should render correct validAbi', () => {
    expect(
      wrapper.vm.$el
        .querySelector('i.good-button')
        .className.indexOf('not-good')
    ).toBeGreaterThan(-1);
  });

  describe('DeployContractContainer.vue Methods', () => {
    it('should Open confirmationModal when click button', () => {
      window.pageXOffset = 100;
      window.pageYOffset = 100;
      wrapper.find('.submit-button').trigger('click');
      expect(window.pageXOffset).toBe(0);
      expect(window.pageYOffset).toBe(0);
    });
  });
});
