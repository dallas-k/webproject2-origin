"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[61],{5367:function(t,s,e){e.d(s,{Z:function(){return c}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"title",attrs:{id:"common-title"}},[s("h2",[t._v(t._s(t.sTitle)+" ")])])},a=[],i={name:"content-title",props:{sTitle:String}},n=i,r=e(1001),l=(0,r.Z)(n,o,a,!1,null,"00bb8b0d",null),c=l.exports},61:function(t,s,e){e.r(s),e.d(s,{default:function(){return y}});var o=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"stockView"}},[s("commonTitle",{attrs:{sTitle:t.title}}),s("stockList")],1)},a=[],i=e(5367),n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"stock"},[s("div",{staticClass:"stock-sort"},[s("button",{on:{click:function(s){return t.stockSort("")}}},[t._v("전체")]),s("button",{on:{click:function(s){return t.stockSort("국내주식")}}},[t._v("국내")]),s("button",{on:{click:function(s){return t.stockSort("해외주식")}}},[t._v("해외")]),s("button",{on:{click:function(s){return t.stockSort("실물ETF")}}},[t._v("실물")]),s("button",{on:{click:function(s){return t.stockSort("채권ETF")}}},[t._v("채권")]),s("button",{on:{click:function(s){return t.stockSort("외화")}}},[t._v("외화")]),s("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"},on:{click:t.formToggle}})]),t._m(0),s("div",{staticClass:"stock-main"},t._l(t.stockList,(function(e,o){return s("div",{key:o,staticClass:"stock-list"},[s("div",{staticClass:"stock-list-meta list1"},[s("span",[t._v(t._s(e.date))]),s("span",[t._v(t._s(e.category))])]),s("span",{staticClass:"list2"},[t._v(t._s(e.name))]),s("span",{staticClass:"list3"},[t._v(t._s(e.price.toLocaleString("ko-KR")))]),s("span",{staticClass:"list4"},[t._v(t._s(e.count)+"주")]),s("span",{staticClass:"list5"},[t._v(t._s(t.intOrFloat(e.price,e.count)))]),s("span",{staticClass:"list6"},[s("button",{on:{click:function(s){return t.editStock(o)}}},[t._v("수정")])])])})),0),t.addForm?s("stockForm",{on:{formClose:t.formToggle}}):t._e()],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"stock-list stock-header"},[s("span",{staticClass:"list1"},[t._v("분류")]),s("span",{staticClass:"list2"},[t._v("종목명")]),s("span",{staticClass:"list3"},[t._v("매입금액")]),s("span",{staticClass:"list4"},[t._v("수량")]),s("span",{staticClass:"list5"},[t._v("계")]),s("span",{staticClass:"list6"},[t._v("정리")])])}],l=(e(7658),function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal",attrs:{id:"modalbg"}},[s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(s){return s.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"modal-body-title"},[s("legend",[t._v("주식 추가")]),s("i",{staticClass:"fa fa-times",attrs:{id:"modalClose","aria-hidden":"true"},on:{click:t.formClose}})]),s("div",{staticClass:"modal-body-main"},[s("div",{staticClass:"box1"},[s("label",{attrs:{for:"name"}},[t._v("종목명")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),s("div",{staticClass:"box2"},[s("label",{attrs:{for:"price"}},[t._v("매입금액")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text",id:"price"},domProps:{value:t.price},on:{input:function(s){s.target.composing||(t.price=s.target.value)}}})]),s("div",{staticClass:"box3"},[s("label",{attrs:{for:"count"}},[t._v("수량")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"text",id:"count"},domProps:{value:t.count},on:{input:function(s){s.target.composing||(t.count=s.target.value)}}})]),s("div",{staticClass:"box4"},[s("label",{attrs:{for:"category"}},[t._v("카테고리")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{name:"category",id:"category"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.category=s.target.multiple?e:e[0]}}},[s("option",[t._v("국내주식")]),s("option",[t._v("해외주식")]),s("option",[t._v("실물ETF")]),s("option",[t._v("채권")]),s("option",[t._v("외화")])])]),s("button",[t._v("등록하기")])])])])])}),c=[],u={data(){return{name:"",price:"",count:"",category:"",sum:"",date:this.getDate()}},methods:{formClose(){this.$emit("formClose",!1)},submitForm(){console.log()},getDate(){let t=new Date,s=t.getFullYear(),e=t.getMonth()+1,o=t.getDate();return`${s}-${e}-${o}`}}},d=u,m=e(1001),v=(0,m.Z)(d,l,c,!1,null,"445696b3",null),p=v.exports,f={created(){this.$http.get("/api/stock").then((t=>{this.stockList=t.data})).catch((t=>{alert(t),console.log(t)}))},data(){return{stockList:[],addForm:!1}},components:{stockForm:p},methods:{intOrFloat(t,s){var e=Number(t),o=Number(s),a=e*o;return a.toLocaleString("ko-KR")},editStock(t){alert(t)},stockSort(t){if(this.temp=[],""===t)this.temp=this.datas;else for(let s in this.datas){let e=this.datas[s];t===e.category&&this.temp.push(e)}},formToggle(){this.addForm=!this.addForm}}},_=f,k=(0,m.Z)(_,n,r,!1,null,"866590ce",null),g=k.exports,C={name:"StockView",data(){return{title:"보유 주식 관리"}},components:{commonTitle:i.Z,stockList:g}},h=C,b=(0,m.Z)(h,o,a,!1,null,null,null),y=b.exports}}]);
//# sourceMappingURL=61.03f87681.js.map