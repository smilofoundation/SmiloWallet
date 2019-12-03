(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f18946"],{"0355":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-offline-container"},[a("interface-container-title",{attrs:{title:t.$t("common.offline")}}),a("div",{staticClass:"generate-tx"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"send-form"},[a("div",{staticClass:"form-block amount-to-address"},[a("ul",{staticClass:"type-amount"},[a("li",{staticClass:"type"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxType")))])]),a("currency-picker",{attrs:{currency:t.allTokens,token:!0,default:t.selectedCoinType.hasOwnProperty("symbol")?t.selectedCoinType:{},page:"sendOfflineGenTx"},on:{selectedCurrency:t.setSelectedCurrency}})],1),a("li",{staticClass:"amount"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxAmount")))])]),a("div",{staticClass:"the-form amount-number"},[a("input",{attrs:{placeholder:t.$t("interface.depAmount"),type:"number",step:"any",name:""},domProps:{value:t.toAmt},on:{input:t.debouncedAmount}})])])]),a("div",{staticClass:"to-address"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxToAddr"))+"  ")]),a("blockie",{directives:[{name:"show",rawName:"v-show",value:""!==t.address&&t.validAddress,expression:"address !== '' && validAddress"}],staticClass:"blockie-image-icon",attrs:{address:t.address,width:"32px",height:"32px"}}),a("button",{staticClass:"title-button copy-button prevent-user-select",on:{click:t.copyToAddress}},[t._v("\n                "+t._s(t.$t("common.copy"))+"\n              ")])],1),a("div",{staticClass:"the-form address-block"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"toaddress",attrs:{name:"name",placeholder:"Please Enter The Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("i",{class:[t.validAddress?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.data")))])])])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{disabled:"ETH"!==t.selectedCoinType.symbol,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:[""!==t.toData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.gasLimit")))]),a("popover",{attrs:{popcontent:t.$t("popover.gasLimit")}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gasLimit"),type:"number"},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.gasLimit>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.nonce")))]),a("popover",{attrs:{popcontent:t.$t("popover.nonce")}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.localNonce,expression:"localNonce"}],attrs:{placeholder:t.$t("common.nonce"),type:"number"},domProps:{value:t.localNonce},on:{input:function(e){e.target.composing||(t.localNonce=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.localNonce>=0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.gasPrice")))]),a("popover",{attrs:{popcontent:t.txSpeedMsg}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.localGasPrice,expression:"localGasPrice"}],attrs:{placeholder:t.$t("common.gasPrice"),type:"number"},domProps:{value:t.localGasPrice},on:{input:function(e){e.target.composing||(t.localGasPrice=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.localGasPrice>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"submit-button-container"},[a("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),a("div",{staticClass:"submit-button large-round-button-green-border",on:{click:t.uploadClick}},[t._v("\n          Import JSON\n        ")]),a("div",{class:[t.isAllInputValid?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.generateTx}},[t._v("\n          "+t._s(t.$t("interface.generateTx"))+"\n        ")]),a("interface-bottom-text",{attrs:{link:"https://kb.myetherwallet.com",question:"Have issues?","link-text":"Help Center"}})],1)]),a("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":t.signed,"raw-tx":t.raw}})],1)],1)},n=[],i=(a("96cf"),a("3b8d")),o=(a("6b54"),a("7514"),a("ac6a"),a("456d"),a("55dd"),a("a481"),a("7f7f"),a("cebc")),r=a("55c1"),c=a("539d"),l=a("d7a2"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:t.$t("interface.signedTx"),"hide-footer":""}},[a("div",{staticClass:"d-block"},[a("div",{staticClass:"title-block"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.signedTx")))])]),a("div",{staticClass:"signed-tx-container"},[a("code",[t._v(t._s(JSON.parse(t.signedTx).rawTransaction))]),a("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:t.signedTx}})]),a("div",{staticClass:"scan-download-container"},[a("h4",{staticClass:"block-title"},[t._v("Scan QR code")]),""!==t.signedTx?a("div",{staticClass:"scan-download-items"},[a("qrcode",{attrs:{value:JSON.parse(t.signedTx).rawTransaction,options:{size:200}}}),t._v("or "),a("a",{attrs:{href:t.jsonFile,download:t.jsonFileName}},[t._v("Download JSON")])],1):t._e()]),a("div",{staticClass:"raw"},[a("div",{staticClass:"title-block"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.raw")))]),a("div",{staticClass:"sliding-switch-white"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.showRaw=!t.showRaw}}}),a("span",{staticClass:"slider round"})])])]),t.showRaw?a("div",{staticClass:"raw-tx-container"},[a("code",[t._v(t._s(t.rawTx))])]):t._e()])]),a("div",{staticClass:"button-container"},[a("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:t.copyAndContinue}},[t._v(t._s(t.$t("interface.copyAndCont")))])],1)])},u=[],p={name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(t){var e=JSON.parse(t),a=this.rawTx;delete a["generateOnly"];var s=Object.assign({},e.tx,a);delete e["tx"],e["tx"]=s;var n=JSON.stringify(e),i=new Blob([n],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(i)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.$refs.signedTx.hide()}}},m=p,h=(a("f762"),a("2877")),v=Object(h["a"])(m,d,u,!1,null,null,null),f=v.exports,g=a("c8e5"),b=a("901e"),y=a.n(b),w=a("70c1"),C=a("2f62"),x=a("b7d3"),T=a("8ded"),k=a.n(T),_=a("ce96"),N=a("1131"),A=a.n(N),$={components:{"interface-bottom-text":c["a"],blockie:g["a"],"signed-tx-modal":f,"currency-picker":l["a"],"interface-container-title":r["a"]},props:{tokens:{type:Array,default:function(){return[]}},nonce:{type:String,default:"0"},highestGas:{type:String,default:"0"}},data:function(){return{toAmt:0,address:"",toData:"0x",gasLimit:21e3,selectedCoinType:{},raw:{},signed:"{}",localNonce:this.nonce,file:"",localGasPrice:this.highestGas}},computed:Object(o["a"])({},Object(C["b"])(["wallet","network","web3","linkQuery"]),{txSpeedMsg:function(){var t=this.network.type.name,e="".concat(this.$t("popover.txSpeedPt1").replace("{0}",t)," ").concat(this.$t("popover.txSpeedPt2").replace("{0}",t));return e},validAddress:function(){return Object(x["a"])(this.address)},allTokens:function(){var t=k.a.get("customTokens"),e=this.tokens.concat(t[this.network.type.name]),a=e.sort(function(t,e){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:t.symbol.toUpperCase()>e.symbol.toUpperCase()?1:0});return a},isAllInputValid:function(){return this.toData.length>=2&&this.address.length>0&&this.validAddress&&this.toAmt>=0&&this.gasLimit>0&&this.localNonce>=0&&this.localGasPrice}}),watch:{highestGas:function(t){this.localGasPrice=t},nonce:function(t){this.localNonce=t},toData:function(t){_["b"].validateHexString(t)?this.toData=t:this.toData="0x"},tokens:function(t){if(t.length>0&&Object.keys(this.linkQuery).length>0){var e=this.linkQuery,a=e.data,s=e.to,n=e.value,i=e.gaslimit,o=e.gas,r=e.tokensymbol,c=r?t.find(function(t){return t.symbol.toLowerCase()===r.toLowerCase()}):void 0;this.toAmt=n?new y.a(n).toFixed():0,this.toData=a&&_["b"].validateHexString(a)?a:"",this.address=s||"",this.gasLimit=i?new y.a(i).toString():"21000",this.localGasPrice=o?new y.a(o).toFixed():0,this.selectedCoinType=c||this.selectedCoinType,_["c"].responseHandler("Form has been prefilled. Please proceed with caution!",_["c"].WARN),this.$store.dispatch("saveQueryVal",{})}},toAmt:function(t){this.createDataHex(t,null,null)},address:function(t){this.validAddress&&this.createDataHex(null,t,null)},selectedCoinType:function(t){this.createDataHex(null,null,t)}},methods:{debouncedAmount:A.a._.debounce(function(t){var e=this.network.type.currencyName,a=this.selectedCoinType.symbol===e?18:parseInt(this.selectedCoinType.decimals);this.toAmt=t.target.valueAsNumber<0||isNaN(t.target.valueAsNumber)?0:new y.a(t.target.valueAsNumber).decimalPlaces(a).toFixed()},300),createDataHex:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a,s){var n,i,o,r,c,l,d,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=null!==e?e:this.toAmt,i=null!==a?a:this.address,o=null!==s?s:this.selectedCoinType,r=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],c=this.network.type.currencyName,o.symbol!==c&&""!==i&&(l=""===n||null===n?"0":n,d=new this.web3.eth.Contract(r,o.address),u=new y.a(l).times(new y.a(10).pow(o.decimals)),this.toData=d.methods.transfer(i,u.toFixed()).encodeABI());case 6:case"end":return t.stop()}},t,this)}));function e(e,a,s){return t.apply(this,arguments)}return e}(),copyToAddress:function(){var t=this.$refs.toaddress;t.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,a=new FileReader;a.onloadend=function(a){try{var s=JSON.parse(a.target.result);e.localGasPrice=w["fromWei"](s.gasPrice,"gwei"),e.localNonce=s.nonce}catch(t){_["c"].responseHandler(t,_["c"].WARN)}},a.readAsBinaryString(t.target.files[0])},generateTx:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.network.type.currencyName,a=this.selectedCoinType.symbol!==e,s=w["toWei"](this.toAmt,"ether"),n={nonce:_["b"].sanitizeHex(new y.a(this.localNonce).toString(16)),gasLimit:_["b"].sanitizeHex(new y.a(this.gasLimit).toString(16)),gasPrice:_["b"].sanitizeHex(new y.a(w["toWei"](this.localGasPrice,"gwei")).toString(16)),to:a?this.selectedCoinType.address:this.address.toLowerCase().trim(),value:a?0:s,data:this.toData,chainId:this.network.type.chainID},this.raw=n,t.next=7,this.wallet.signTransaction(this.raw);case 7:i=t.sent,this.signed=JSON.stringify(i),this.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setSelectedCurrency:function(t){var e=this.network.type.currencyName;this.selectedCoinType=t,t.symbol===e&&(this.toData="0x")},processChange:function(t){this.$router.push({name:t})},getSrcTwentyTokenBalance:function(t){return this.$parent.getSrcTwentyTokenBalance(t)}}},S=$,P=(a("a4ae"),Object(h["a"])(S,s,n,!1,null,"6dc275dc",null)),O=P.exports;a.d(e,"default",function(){return O})},"772e":function(t,e,a){},9401:function(t,e,a){},a4ae:function(t,e,a){"use strict";var s=a("9401"),n=a.n(s);n.a},f762:function(t,e,a){"use strict";var s=a("772e"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-68f18946.a710ae0c.js.map