(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4a2ae58"],{"0df4":function(e,t,s){},"29f8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("signature-modal-modal",{ref:"signatureModal",attrs:{signature:e.signature}}),s("interface-container-title",{attrs:{title:e.$t("common.signMessage")}}),s("div",{staticClass:"content-container"},[s("div",{staticClass:"send-form"},[s("p",[e._v(e._s(e.$t("interface.signMessageDesc")))]),s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("interface.txSideMenuMessage")))])])]),s("div",{staticClass:"the-form"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}]},[e._v("\n          "+e._s(e.errors.first("message"))+"\n        ")])])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.message.length>0?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.signMessage}},[e._v("\n          "+e._s(e.$t("common.sign"))+"\n        ")])]),s("interface-bottom-text")],1)])],1)},n=[],i=s("cebc"),o=s("2f62"),c=s("ce96"),r=s("539d"),d=s("55c1"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-modal",{ref:"signatureModal",staticClass:"bootstrap-modal",attrs:{"hide-footer":"",centered:"",title:"Signature"}},[s("div",{staticClass:"modal-contents"},[s("div",[s("div",{staticClass:"copy-container"},[s("h4",[e._v("Signed Message:")]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:e.copy}},[e._v(e._s(e.$t("common.copy")))])])]),s("textarea",{ref:"signedMess",staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.signature}}),s("div",{staticClass:"button-container"},[s("button",{staticClass:"submit-button large-round-button-green-filled clickable",on:{click:function(t){return e.copy("main")}}},[e._v("\n            Copy\n          ")])])])])])],1)},u=[],m={props:{signature:{type:String,default:""}},methods:{copy:function(e){this.$refs.signedMess.select(),document.execCommand("copy"),c["c"].responseHandler("Copied!",c["c"].INFO),"main"===e&&this.$refs.signatureModal.hide()}}},g=m,f=(s("dfb9"),s("2877")),v=Object(f["a"])(g,l,u,!1,null,"3bb632bd",null),p=v.exports,b={name:"SignMessage",components:{"interface-bottom-text":r["a"],"interface-container-title":d["a"],"signature-modal-modal":p},data:function(){return{message:"",signature:""}},computed:Object(i["a"])({},Object(o["b"])(["account","web3"])),methods:{signMessage:function(){var e=this;this.web3.eth.sign(this.message,this.account.address).then(function(t){e.signature=JSON.stringify({address:e.account.address,msg:e.message,sig:t,version:"3",signer:e.account.isHardware?e.account.identifier:"MEW"},null,2),e.$refs.signatureModal.$refs.signatureModal.show()}).catch(function(e){c["c"].responseHandler(e,!1)})},copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),c["c"].responseHandler("Copied",c["c"].INFO)},deleteInputText:function(){this.signature="",this.message=""}}},h=b,C=(s("8d58"),Object(f["a"])(h,a,n,!1,null,"12731e8c",null)),w=C.exports;s.d(t,"default",function(){return w})},"8d58":function(e,t,s){"use strict";var a=s("0df4"),n=s.n(a);n.a},c699:function(e,t,s){},dfb9:function(e,t,s){"use strict";var a=s("c699"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-c4a2ae58.5763a165.js.map