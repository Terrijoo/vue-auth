(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229656"],{dcef:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:"success"!==t.form.status,expression:"form.status !== 'success'"}]},[t._v(" Loading users... ")]),"success"===t.form.status?e("div",[t._l(t.form.data.items,(function(s){return[e("div",[t._v(" "+t._s(s.first_name)+" "),e("span",{staticClass:"pull-right"},[e("button",{on:{click:function(e){return t.impersonateDefault(s)}}},[t._v(" Default ")]),e("button",{on:{click:function(e){return t.impersonateVuex(s)}}},[t._v(" Vuex ")])])]),e("span",{staticClass:"text-muted"},[t._v(" ("+t._s(s.role)+") ")]),e("hr")]}))],2):t._e()])},u=[],a={data:function(){return{form:{status:null,data:null}}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var t=this;this.form.status="loading",this.$http({url:"users/list"}).then((function(s){t.form.data=s.data.data,t.form.status="success"}))},impersonateDefault:function(t){this.$auth.impersonate({url:"auth/"+t.id+"/impersonate",redirect:{name:"user-account"}})},impersonateVuex:function(t){this.$store.dispatch("auth/impersonate",{user:t})}}},r=a,i=e("2877"),o=Object(i["a"])(r,n,u,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d229656.1e5dc657.js.map