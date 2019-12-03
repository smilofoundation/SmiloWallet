<template lang="html">
  <div v-click-outside="openDropdown" class="currency-picker-container">
    <div>
      <div
        :class="[
          open ? 'open' : '',
          'dropdown-container',
          token ? 'dropdown-text-container' : 'dropdown-text-container-white'
        ]"
        @click="openDropdown"
      >
        <p v-show="token">
          {{ selectedCurrency.symbol }}
          <span class="subname">- {{ selectedCurrency.name }}</span>
        </p>
        <p v-show="!token">{{ selectedCurrency.name }}</p>
        <i :class="['fa', open ? 'fa-angle-up' : 'fa-angle-down']" />
      </div>
      <div :class="[open ? 'open' : 'hide', 'dropdown-item-container']">
        <div class="dropdown-search-container">
          <input v-model="search" placeholder="Search" />
          <i class="fa fa-search" />
        </div>
        <div class="item-container">
          <div
            v-for="(curr, idx) in localCurrency"
            :class="[
              token
                ? selectedCurrency.symbol === curr.symbol
                  ? 'selected'
                  : ''
                : selectedCurrency.name === curr.name
                ? 'selected'
                : '',
              'item'
            ]"
            :key="
              token
                ? curr.name + idx + curr.symbol + page
                : curr.name + page + idx
            "
            @click="selectCurrency(idx)"
          >
            <p v-show="token">
              {{ curr.symbol }}<span class="subname"> - {{ curr.name }}</span>
            </p>
            <p v-show="!token">{{ curr.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { BigNumber } from 'bignumber.js';
export default {
  props: {
    currency: {
      type: Array,
      default: function() {
        return [];
      }
    },
    page: {
      type: String,
      default: ''
    },
    token: {
      type: Boolean,
      default: true
    },
    getSrcTwentyTokens: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      localCurrency: [],
      selectedCurrency: [],
      open: false,
      search: '',
      abi: '',
      address: ''
    };
  },
  computed: {
    ...mapState(['network']),
    networkToken() {
      return {
        name: this.network.type.name_long,
        symbol: this.network.type.name,
        isToken: false,
        decimals: 18
      };
    }
  },
  watch: {
    networkToken() {
      if (this.token) this.selectedCurrency = this.networkToken;
    },
    selectedCurrency(newVal) {
      this.$emit('selectedCurrency', newVal);
    },
    search(newVal) {
      if (newVal !== '') {
        this.localCurrency = this.localCurrency.filter(curr => {
          if (curr.name.toLowerCase().includes(newVal.toLowerCase())) {
            return curr;
          }
        });
      } else {
        if (this.token) {
          this.localCurrency = [this.networkToken];
        } else {
          this.localCurrency = [
            { name: 'Select an item', abi: '', address: '' }
          ];
        }
        this.currency.forEach(curr => this.localCurrency.push(curr));
      }
    }
  },
  mounted() {
    this.localCurrency = [];
    this.localCurrency =
      this.token === true
        ? [this.networkToken]
        : [{ name: 'Select an item', abi: '', address: '' }];
    this.selectedCurrency =
      this.token === true
        ? this.networkToken
        : { name: 'Select an item', abi: '', address: '' };
    // Add the tokens aswell
    for (let i = 0; i < this.network.type.tokens.length; i++) {
      this.localCurrency.push({
        name: this.network.type.tokens[i].name,
        symbol: this.network.type.tokens[i].symbol,
        address: this.network.type.tokens[i].address,
        isToken: true,
        decimals: this.network.type.tokens[i].decimals
      });
    }
    this.chooseCurrency(0);
  },
  methods: {
    openDropdown() {
      this.open = !this.open;
    },
    selectCurrency(index) {
      this.openDropdown();
      this.chooseCurrency(index);
    },
    chooseCurrency(index) {
      setTimeout(() => {
        this.selectedCurrency = this.localCurrency[index];
        this.network.selectedCurrency = this.selectedCurrency;
        this.$root.$emit(
          'selected_currency_changed',
          this.selectedCurrency.symbol
        );
        if (this.selectedCurrency.isToken) {
          const tokenBalance = this.$parent.getSrcTwentyTokenBalance(
            this.selectedCurrency.symbol
          );
          this.selectedCurrency.balance = new BigNumber(tokenBalance).shiftedBy(
            this.selectedCurrency.decimals
          );
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'CurrencyPicker.scss';
</style>
