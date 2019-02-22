<template lang="html">
  <div class="address-container">
    <div class="currency-container">
      <img
        v-if="lowerCaseSelectedCurrency"
        :src="
          require(`@/assets/images/currency/${lowerCaseSelectedCurrency}.svg`)
        "
      />
      <p>
        <span class="currency-amt">
          {{ direction === 'from' ? '-' : '+' }}
          {{ tokenTransferVal !== '' ? tokenTransferVal : converter(value) }}
        </span>
        <span class="currency-type">{{ selectedCurrency }}</span>
      </p>
    </div>
    <div class="identicon-container">
      <p>{{ direction | capitalize }} Address</p>
    </div>
    <div class="address">{{ checksumAddress }}</div>
  </div>
</template>

<script>
import { isAddress, toChecksumAddress } from '@/helpers/addressUtils';
import web3 from '@smilo-platform/web3';
import BigNumber from 'bignumber.js';
import { mapGetters } from 'vuex';
export default {
  props: {
    address: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    tokenTransferTo: {
      type: String,
      default: ''
    },
    tokenTransferVal: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedCurrency: []
    };
  },
  computed: {
    ...mapGetters({
      network: 'network'
    }),
    lowerCaseSelectedCurrency() {
      if (typeof this.selectedCurrency == 'string') {
        return this.selectedCurrency.toLowerCase();
      }
    },
    checksumAddress() {
      if (isAddress(this.tokenTransferTo))
        return toChecksumAddress(this.tokenTransferTo);
      if (isAddress(this.address)) return toChecksumAddress(this.address);
      return '';
    }
  },
  mounted() {
    this.$root.$on('selected_currency_changed', selectedCurrency => {
      this.selectedCurrency = selectedCurrency;
    });
  },
  methods: {
    converter(num) {
      return web3.utils.fromWei(new BigNumber(num).toFixed(), 'ether');
    }
  }
};
</script>

<style lang="scss">
@import 'AddressBlock.scss';
</style>
