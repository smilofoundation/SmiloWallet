import tokens from '@/tokens/tokens-xsm.json';
import contracts from '@/contracts/contract-abi-eth.json';
import xsm from '@/assets/images/networks/xsm.svg';
import xsmnetworkicon from '@/assets/images/networks/xsmnetworkicon.png';
// import { EthAbi } from '../ensAbis';

export default {
  name: 'XSMT',
  name_long: 'Smilo',
  homePage: 'https://smilo.io',
  blockExplorerTX: 'https://testnet-explorer.smilo.network/tx/[[txHash]]',
  blockExplorerAddr:
    'https://testnet-explorer.smilo.network/account/[[address]]',
  chainID: 10,
  tokens: tokens,
  contracts: contracts,
  ensResolver: '0x314159265dd8dbb310642f98f50c066173c1259b',
  // ensAbi: EthAbi,
  icon: xsm,
  icon_network: xsmnetworkicon,
  currencyName: 'XSMT'
};
