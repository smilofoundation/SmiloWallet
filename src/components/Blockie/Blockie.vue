<template lang="html">
  <div ref="identicon" class="address-identicon" />
</template>
<script>
import {default as SmiloDenticon} from '@smilo-platform/smiloicon';

export default {
  props: {
    address: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '64px'
    },
    height: {
      type: String,
      default: '64px'
    },
    size: {
      type: Number,
      default: 8
    },
    scale: {
      type: Number,
      default: 16
    },
    diameter: {
      type: Number,
      default: 80
    }
  },
  data() {
    return {};
  },
  watch: {
    address() {
      this.setBlockie();
    },
    width() {
      this.setBlockie();
    },
    height() {
      this.setBlockie();
    },
    scale() {
      this.setBlockie();
    },
    size() {
      this.setBlockie();
    }
  },
  mounted() {
    this.setBlockie();
  },
  methods: {
    setBlockie() {

      const data = SmiloDenticon(
        this.diameter,
        this.jsNumberForAddress(this.address.toLowerCase())
      );
      this.$refs.identicon.style.width = this.width;
      this.$refs.identicon.style.height = this.height;
      this.$refs.identicon.innerHTML = '';
      this.$refs.identicon.appendChild(data);
    },
    jsNumberForAddress(address) {
      const addr = address.slice(2, 10);
      const seed = parseInt(addr, 16);
      return seed;
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'Blockie.scss';
</style>
