(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ec03272"],{"113e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transfer-registrar-container"},[a("div",{staticClass:"transfer-registrar-content"},[a("h3",[t._v("Congratulations! "+t._s(t.fullDomainName)+" is available!")]),a("p",[t._v("Do you want to register "+t._s(t.fullDomainName)+"?")]),a("div",{staticClass:"secret-phrase-container"},[a("label",{attrs:{for:"range-slider"}},[t._v("How many years do you want to keep the name?")]),a("b-form-input",{attrs:{id:"range-slider",type:"range",min:"1",max:"20",step:"1"},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),a("div",[t._v(t._s(t.duration>1?t.duration+" years":t.duration+" year"))])],1),a("div",{staticClass:"transfer-registrar-button"},[a("button",{class:["large-round-button-green-filled",t.loading?"disabled":"",t.info.disable?"disabled":""],on:{click:t.createCommitment}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("\n          Register\n        ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.info.disable,expression:"info.disable"}]},[t._v(" "+t._s(t.info.msg)+" ")])])]),a("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=(a("c5f6"),a("cebc")),o=a("539d"),r=a("2f62"),c={components:{"interface-bottom-text":o["a"]},props:{hostName:{type:String,default:""},createCommitment:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},data:function(){return{duration:"1"}},computed:Object(s["a"])({},Object(r["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},info:function(){var t=this.account.balance;return"0"===t?{disable:!0,msg:"You have no balance to send a Tx"}:{disable:!1,msg:""}}}),watch:{duration:function(t){this.$emit("updateDuration",Number(t))}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},l=c,u=(a("cda2"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"64b6600a",null),f=d.exports;a.d(e,"default",function(){return f})},"98cf":function(t,e,a){},cda2:function(t,e,a){"use strict";var n=a("98cf"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-9ec03272.1e52d236.js.map