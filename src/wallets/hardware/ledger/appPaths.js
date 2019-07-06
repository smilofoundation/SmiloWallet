import { XSM, XSMT, ETC, ETH } from '@/networks/types';
import {
  smilo,
  smiloTestnet,
  ledgerEthereum,
  ledgerLiveEthereum,
  ledgerEthereumClassic,
  ledgerLiveEthereumClassic
} from '../../bip44/paths';
const appList = [
  {
    network: XSM,
    prefixes: ["m/44'/60'"],
    paths: [smilo]
  },
  {
    network: XSMT,
    prefixes: ["m/44'/60'"],
    paths: [smiloTestnet]
  },
  {
    network: ETH,
    prefixes: ["m/44'/60'"],
    paths: [ledgerEthereum, ledgerLiveEthereum]
  },
  {
    network: ETC,
    prefixes: ["m/44'/61'", "m/44'/60'"],
    paths: [ledgerEthereumClassic, ledgerLiveEthereumClassic]
  }
];
export default appList;
