<template>
  <b-modal
    ref="metamask"
    :title="$t('accessWallet.accessByMetaMask')"
    hide-footer
    class="bootstrap-modal modal-metamask"
    centered
  >
    <div v-if="web3WalletExists">
      <div class="modal-multi-icons">
        <img class="icon" src="~@/assets/images/icons/button-smilowallet.svg" />
        <img class="icon" src="~@/assets/images/icons/clip.svg" />
        <img class="icon logo-small" src="~@/assets/images/logo-small.png" />
      </div>
      <div class="d-block content-container text-center">
        <h4 v-show="!unlockWeb3Wallet">
          {{ $t('accessWallet.metaMaskModalDesc') }}
        </h4>
        <h4 v-show="unlockWeb3Wallet">
          {{ $t('accessWallet.unlockMetamaskWallet') }}
        </h4>
      </div>
      <div class="accept-terms">
        <label class="checkbox-container">
          {{ $t('accessWallet.acceptTerms') }}
          <router-link to="/terms-and-conditions">
            {{ $t('common.terms') }} </router-link
          >.
          <input
            type="checkbox"
            @click="accessMyWalletBtnDisabled = !accessMyWalletBtnDisabled"
          />
          <span class="checkmark" />
        </label>
      </div>
      <div class="button-container">
        <b-btn
          v-show="!unlockWeb3Wallet"
          :disabled="accessMyWalletBtnDisabled"
          class="mid-round-button-green-filled close-button"
          @click="getWeb3Wallet"
          >{{ $t('common.accessMyWallet') }}</b-btn
        >
        <b-btn
          v-show="unlockWeb3Wallet"
          class="mid-round-button-green-filled close-button"
          @click="getWeb3Wallet"
          >{{ $t('accessWallet.tryAgain') }}</b-btn
        >
      </div>
    </div>
    <div v-else>
      <div class="modal-multi-icons">
        <img class="icon" src="~@/assets/images/icons/button-smilowallet.svg" />
      </div>
      <div class="d-block content-container text-center">
        <h4>{{ $t('accessWallet.installMetaMaskModalDesc') }}</h4>
      </div>
      <div class="accept-terms hidden">
        <label class="checkbox-container">
          {{ $t('accessWallet.acceptTerms') }}
          <router-link to="/terms-and-conditions">
            {{ $t('common.terms') }} </router-link
          >. <input type="checkbox" /> <span class="checkmark" />
        </label>
      </div>
      <div class="button-container">
        <p v-show="!refreshPage && isChrome">Coming soon...</p>
        <a
          v-show="!refreshPage && !isChrome"
          href="https://addons.mozilla.org/en-US/firefox/addon/smilo-browser-extension/"
          target="_blank"
          rel="noopener noreferrer"
          class="mid-round-button-green-filled close-button"
          @click="refreshPage = true"
          >{{ $t('accessWallet.installMetamask') }}</a
        >
        <b-btn
          v-show="refreshPage"
          class="mid-round-button-green-filled close-button"
          @click="reload"
          >{{ $t('accessWallet.refresh') }}</b-btn
        >
      </div>
    </div>
    <customer-support />
  </b-modal>
</template>

<script>
import CustomerSupport from '@/components/CustomerSupport';
import { Web3Wallet } from '@/wallets/software';
import Web3 from '@smilo-platform/web3';
import { mapGetters } from 'vuex';

export default {
  components: {
    'customer-support': CustomerSupport
  },
  props: {
    networkAndAddressOpen: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      accessMyWalletBtnDisabled: true,
      unlockWeb3Wallet: false,
      web3WalletExists: false,
      refreshPage: false
    };
  },
  computed: {
    ...mapGetters({
      path: 'path'
    }),
    isChrome: function() {
      return (
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor)
      );
    }
  },
  mounted() {
    this.web3WalletExists = this.checkWeb3();
  },
  methods: {
    reload() {
      window.location.reload();
    },
    async getWeb3Wallet() {
      if (this.checkWeb3() !== true) return;
      if (window.smilo) {
        window.web3 = new Web3(window.smilo);
        try {
          await window.smilo.enable();
        } catch (e) {
          this.web3WalletExists = false;
        }
        this.signIn(window.web3);
      } else if (window.smiloWeb3) {
        this.signIn(window.smiloWeb3);
      }
    },
    signIn(web3) {
      new Web3(web3.currentProvider).eth
        .getAccounts()
        .then(accounts => {
          if (!accounts.length) return (this.unlockWeb3Wallet = true);
          const address = accounts[0];
          const wallet = new Web3Wallet(address);
          this.$store.dispatch('decryptWallet', [wallet, web3.currentProvider]);
          this.$router.push({
            path: 'interface'
          });
        })
        .catch(() => {
          return (this.web3WalletExists = false);
        });
    },
    checkWeb3() {
      if (window.smilo) {
        return true;
      } else if (window.smiloWeb3) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'MetamaskModal.scss';
</style>
