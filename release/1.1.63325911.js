webpackJsonp([1],{24:function(e,t,i){i(25);var r=i(6)(i(27),i(33),null,null);e.exports=r.exports},25:function(e,t,i){var r=i(26);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);i(12)("04b7b919",r,!0)},26:function(e,t,i){t=e.exports=i(11)(),t.push([e.id,".dunNameListMov{font-size:20px;position:absolute;top:50%}.dunNameList-wrap{display:inline-block;vertical-align:top;width:40%}.dunNameList{max-height:434px;overflow-y:auto}.dunNameList>p{cursor:pointer}.back-btns{position:fixed;top:50%;margin-top:-44px;left:79%;z-index:1}.back-btns>button{box-shadow:0 0 20px #aaa}.overdueDaysRange{padding:0;width:242px;height:36px}.overdueDaysRange input{height:34px;border:0;outline:0}",""])},27:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(22),s=(r(a),i(28)),o=r(s);t.default={components:{orderTrail:o.default},created:function(){},data:function(){return{friendMobile:"",sortName:"",showOrderTrailSide:!1,setDunnerPrivilege:!1,sort:null,backDetail:{},originUrl:window.location.origin+window.location.pathname+"#",checkAllOverdueDays:!1,loanIds:[],channelName:"渠道",backChannel:0,channelId:-1,channelList:null,dialogBack:!1,dialogDunnerLister:!1,dialogDunnerListerNew:!1,page:1,rows:20,total:0,condition:"",pages:null,overdueDaysOpts:null,beginOverdueDays:null,endOverdueDays:null,tableData:[],currentItem:{},personInChargeName:"负责人",personInCharge:"",dunnerList:[],caseStatus:null,caseStatusName:"案件状态",orderStatus:1,orderStatusName:"催收中",dunnerLister:[],reconfigurationDunnerList:[]}},methods:{handleCloseOrderTrailSide:function(){this.showOrderTrailSide=!1,this.currentLoanId=null}}}},28:function(e,t,i){i(29);var r=i(6)(i(31),i(32),null,null);e.exports=r.exports},29:function(e,t,i){var r=i(30);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);i(12)("15b26ad8",r,!0)},30:function(e,t,i){t=e.exports=i(11)(),t.push([e.id,".orderTrailSide{position:fixed;z-index:1;right:0;top:56px;bottom:0;width:500px;border-left:1px solid #d1dbe5;background:#fff;overflow:hidden;-webkit-transform:translateX(120%);transform:translateX(120%);transition:transform .3s;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04)}.orderTrailSide .el-tabs--border-card>.el-tabs__header>.el-tabs__item{margin-left:0;margin-right:0}.orderTrailSide .el-tabs__item{width:33.33%;text-align:center}.orderTrailSide.on{-webkit-transform:translateX(0);transform:translateX(0)}.orderTrailSide_bd{position:absolute;top:102px;right:0;left:0;bottom:50px;padding:20px;overflow-y:auto}.orderTrailSide_bd li{margin-bottom:20px}.orderTrailSide_bd li>div{display:inline-block;width:65%}.orderTrailSide_bd li.text-rigth>div{text-align:left}.orderTrailSide_bd .text{display:inline-block;text-align:left;margin-bottom:3px;word-break:break-all}.orderTrailSide_bd .el-tag{min-width:40px;margin-right:5px;text-align:center}.orderTrailSide_ft{position:absolute;bottom:10px;left:0;right:0;height:36px}.orderTrailSide_ft .box{width:100%;position:relative;z-index:1}.orderTrailSide_ft input{border:1px solid #d1dbe5;padding:10px;box-sizing:border-box;outline:0}.orderTrailSide_ft input:focus{border-color:#20a0ff}.orderTrailSide_ft>i{width:36px;line-height:36px;text-align:center}.orderTrailSide_ft .el-button{border-radius:0}",""])},31:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=this;this.orderTrailSideBd=document.getElementById("orderTrailSideBd"),Vue.observer.$off(["getOrderTrail"]),Vue.observer.$on("getOrderTrail",function(t){e.addTrailUrl||(e.addTrailUrl=t.addTrailUrl),e.content="",e.loanId=t.loanId,e.type=0,e.page=1,e.inputFocus=!0,e.getOrderTrail()})},data:function(){return{inputFocus:!0,orderTrailSideBd:null,morePage:!1,moreLoading:!1,type:0,page:1,rows:20,loanId:null,addTrailUrl:null,content:"",listData:[]}},methods:{hideTrail:function(e){return this.type=0,e.target.parentElement.parentElement.className="orderTrailSide",this.$emit("closeOrderTrailSide","close"),!1},trail:function(){var e=this,t=this.content;return t&&""!=t?(this.$http.post(this.addTrailUrl,{loanId:this.loanId,content:t}).then(function(t){var i=t.data.head||{};return"100"==i.code?(e.content="",e.getOrderTrail(),void e.$message.success(i.message||"添加成功")):void e.$message.success(i.message||"添加失败")}),!1):void this.$message.error("内容不能为空")},selectOrderTrail:function(e){this.page=1,this.type=e,this.getOrderTrail()},getOrderTrail:function(e){var t=this;e&&(this.moreLoading=!0,this.page+=e);var i={loanId:this.loanId,type:this.type,page:this.page,rows:this.rows};this.$http.post("/loan/orderTrail",i).then(function(i){var r=i.data.body||{};e?(t.moreLoading=!1,t.listData=t.listData.concat(r.rows||[])):(t.listData=r.rows||[],t.orderTrailSideBd.scrollTop=0),t.total=r.total||0,t.morePage=t.total>t.rows*t.page})}}}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"orderTrailSide"},[i("div",{staticClass:"el-card__header"},[i("i",{staticClass:"iconfont"},[e._v("")]),e._v("\n\t\t订单轨迹\n\t\t"),i("i",{staticClass:"el-message-box__close el-icon-close fr",on:{click:function(t){e.hideTrail(t)}}})]),e._v(" "),i("div",{staticClass:"el-tabs el-tabs--border-card",staticStyle:{border:"0"}},[i("div",{staticClass:"el-tabs__header"},[i("div",{staticClass:"el-tabs__item",class:{"is-active":0==e.type},on:{click:function(t){e.selectOrderTrail(0)}}},[e._v("全部")]),e._v(" "),i("div",{staticClass:"el-tabs__item",class:{"is-active":1==e.type},on:{click:function(t){e.selectOrderTrail(1)}}},[e._v("操作轨迹")]),e._v(" "),i("div",{staticClass:"el-tabs__item",class:{"is-active":2==e.type},on:{click:function(t){e.selectOrderTrail(2)}}},[e._v("记录轨迹")])])]),e._v(" "),i("div",{staticClass:"orderTrailSide_bd",attrs:{id:"orderTrailSideBd"}},[i("ul",{staticClass:"mp0"},[i("li",{directives:[{name:"show",rawName:"v-show",value:!e.listData.length,expression:"!listData.length"}],staticClass:"text-center",staticStyle:{"line-height":"80px"}},[e._v("无记录")]),e._v(" "),e._l(e.listData,function(t){return i("li",{class:[1==t.opertype?"text-rigth":""]},[0==t.opertype?i("div",[i("div",{staticClass:"text"},[i("span",{staticClass:"el-tag bg-info"},[e._v(e._s(t.label||""))]),e._v(e._s(t.content)+"\n\t\t\t\t\t")]),e._v(" "),i("div",{staticClass:"color-gray"},[e._v(e._s(t.workName||"")+"，"+e._s(e._f("time")(t.operdate)))])]):e._e(),e._v(" "),1==t.opertype?i("div",[i("div",{staticClass:"text"},[i("span",{staticClass:"el-tag bg-violet"},[e._v(e._s(t.label||""))]),e._v("记录内容："+e._s(t.content)+"\n\t\t\t\t\t")]),e._v(" "),i("div",{staticClass:"color-gray text-rigth"},[e._v(e._s(t.workName||"")+"，"+e._s(e._f("time")(t.operdate)))])]):e._e()])}),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.morePage,expression:"morePage"}],staticClass:"text-center",staticStyle:{margin:"20px 0"}},[i("el-button",{attrs:{size:"small",loading:e.moreLoading},on:{click:function(t){e.getOrderTrail(1)}}},[e._v("点击加载更多")])],1)],2)]),e._v(" "),i("form",{staticClass:"orderTrailSide_ft box",on:{submit:function(t){t.preventDefault(),e.trail(t)}}},[i("div",{staticClass:"box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"},{name:"focus",rawName:"v-focus",value:e.inputFocus,expression:"inputFocus"}],staticClass:"flex",attrs:{type:"text"},domProps:{value:e._s(e.content)},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),e._v(" "),i("button",{staticClass:"el-button el-button--info",attrs:{type:"submit"}},[e._v("发送")])])])])},staticRenderFns:[]}},33:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"showOrderTrailSide",class:[e.showOrderTrailSide?"on":""]},[e._m(0),e._v(" "),i("orderTrail",{class:[e.showOrderTrailSide?"on":""],on:{closeOrderTrailSide:e.handleCloseOrderTrailSide}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-header"},[i("h2",[e._v("催收")])])}]}}});