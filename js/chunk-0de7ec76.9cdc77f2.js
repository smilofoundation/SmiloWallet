(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0de7ec76"],{"1f4c":function(e,s,t){},"55e2":function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"verify-content-container"},[t("div",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[e._v("Signature:")]),t("div",{staticClass:"copy-buttons"},[t("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),t("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),t("div",{staticClass:"the-form signature"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{name:"signature"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}})]),t("div",[""!==e.message&&!0===e.showMessage?t("p",{staticClass:"success-message"},[e._v("\n        "+e._s(JSON.parse(e.message).address)+"\n        "+e._s(e.$t("interface.verifiedMessage"))+":\n        "),JSON.parse(e.message).msg.length>20?t("br"):e._e(),t("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("signature")?t("p",[e._v(e._s(e.errors.first("signature")))]):e._e()])]),t("div",{staticClass:"submit-button-container"},[t("div",{staticClass:"buttons"},[t("button",{class:[e.errors.has("signature")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v("\n        "+e._s(e.$t("common.verifyMessage"))+"\n      ")])])])])},n=[],i=t("f29f"),r=i["a"],c=(t("5b3d"),t("2877")),o=Object(c["a"])(r,a,n,!1,null,"70b69d08",null),u=o.exports;t.d(s,"a",function(){return u})},"5b3d":function(e,s,t){"use strict";var a=t("be01"),n=t.n(a);n.a},bb65:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sign-message-container"},[t("interface-container-title",{attrs:{title:e.$t("common.verifyMessage")}}),t("verify-message-input"),t("div",{staticClass:"content-container"},[t("div",{staticClass:"submit-button-container"},[t("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.smilowallet.io"}})],1)])],1)},n=[],i=t("539d"),r=t("55c1"),c=t("55e2"),o={name:"VerifyMessage",components:{"interface-bottom-text":i["a"],"interface-container-title":r["a"],"verify-message-input":c["a"]}},u=o,l=(t("ff24"),t("2877")),f=Object(l["a"])(u,a,n,!1,null,"4360f38a",null),d=f.exports;t.d(s,"default",function(){return d})},be01:function(e,s,t){},f29f:function(e,s,t){"use strict";(function(e){t("6b54"),t("a481");var a=t("cebc"),n=t("ce96"),i=t("2f62"),r=t("b671");s["a"]={props:{signature:{type:String,default:""}},data:function(){return{message:this.signature,showMessage:!1}},computed:Object(a["a"])({},Object(i["b"])(["web3"])),watch:{message:function(e){this.message=e},signature:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.showMessage=!1,this.message=""},verifyMessage:function(){try{var s=JSON.parse(this.message),t=Object(r["hashPersonalMessage"])(Object(r["toBuffer"])(s.msg)),a=e.from(s.sig.replace("0x",""),"hex");if(65!==a.length)return void n["c"].responseHandler("Something went wrong!",n["c"].ERROR);a[64]=0===a[64]||1===a[64]?a[64]+27:a[64],"1"===s.version&&(t=this.web3.utils.sha3(s.msg));var i=Object(r["ecrecover"])(t,a[64],a.slice(0,32),a.slice(32,64));s.address.replace("0x","")!==Object(r["pubToAddress"])(i).toString("hex")?(this.showMessage=!1,n["c"].responseHandler("Signer address is different from the derived address!",n["c"].ERROR)):this.showMessage=!0}catch(c){n["c"].responseHandler(c,n["c"].ERROR)}}}}}).call(this,t("1c35").Buffer)},ff24:function(e,s,t){"use strict";var a=t("1f4c"),n=t.n(a);n.a}}]);
//# sourceMappingURL=chunk-0de7ec76.9cdc77f2.js.map