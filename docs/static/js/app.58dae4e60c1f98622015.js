webpackJsonp([0],{0:function(t,e){},"7zck":function(t,e){},"Frn/":function(t,e){},MkqP:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clublist"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"media-list"},t._l(t.clubs,function(e){return a("li",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"media-object",attrs:{src:e.urlToImage}})])]),t._v(" "),a("div",{staticClass:"media-body"},[a("h4",{staticClass:"media-heading"},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),a("h5",[a("i",[t._v("Address:  "+t._s(e.address))])]),t._v(" "),a("h5",[t._v("Charge: "+t._s(e.charge))]),t._v(" "),a("h5",[t._v("Tel: "),a("a",{attrs:{href:e.telephone,target:""}},[t._v(t._s(e.telephone))])]),t._v(" "),a("h5",[t._v("Tel: "),a("a",{attrs:{href:"tel:1-",onclick:"location.href=this.href + club.telephone ;return false;"}},[t._v("\n            "+t._s(e.telephone))])])])])}))])])},staticRenderFns:[]};var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"locationselection"},[a("div",[a("div",{staticClass:"jumbotron"},[t._m(0),t._v(" "),a("h4",[t._v("Select Location")]),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.locationChanged}},[a("option",{attrs:{value:""}},[t._v("Please select location ...")]),t._v(" "),t._l(t.locations,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticClass:"glyphicon glyphicon-list-alt"}),this._v(" Badminton Club List")])}]};var i={name:"budgetselection",data:function(){return{budgets:[{text:"$1000",value:1e3},{text:"$500",value:500},{text:"$800",value:800}],budget:"",from:null,to:null}},methods:{budgetChanged:function(t){for(var e=0;e<this.budgets.length;e++)this.budgets[e].value==t.target.value&&(this.budget=this.budgets[e]);console.log(this.budget.value),this.$emit("budgetChanged",t.target.value)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"budgetselection"},[a("div",{staticClass:"jumbotron"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("h3",[this.budget.value?a("span",[this.from?a("span",[this.to?a("span",[a("span",{staticClass:"glyphicon glyphicon-heart"}),t._v("\n               Bear wiht me, you vocation from "+t._s(this.from)+" to "+t._s(this.to)+" within "+t._s(this.budget.text)+" is being taken care of ...\n          ")]):t._e()]):t._e()]):t._e()])]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("I want to get away From")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("To")])])],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-date-picker",{attrs:{color:"green lighten-1"},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-date-picker",{attrs:{color:"red lighten-1"},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"jumbotron"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("I have ... ")]),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.budgetChanged}},[a("option",{attrs:{value:""}},[t._v("Please select budget ...")]),t._v(" "),t._l(t.budgets,function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.text))])})],2)])],1)],1)])},staticRenderFns:[]},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[a("v-layout",{attrs:{row:"",wrap:""}},[t._v(" --\x3e\n        "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("I have ... ")]),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.sourceChanged}},[a("option",{attrs:{value:"1000"}},[t._v("$1000")]),t._v(" "),a("option",{attrs:{value:"800"}},[t._v("$800")]),t._v(" "),a("option",{attrs:{value:"500"}},[t._v("$500")]),t._v(" "),a("option",{attrs:{value:"2000"}},[t._v("$2000")])])])],1)],1)},staticRenderFns:[]},c={name:"app",components:{Clublist:a("VU/8")({name:"clublist",props:["location"],data:function(){return{clubs:[]}},methods:{updateLocation:function(t){"Scarborough"===t?this.clubs=[{url:"http://www.badmintonto.com/",urlToImage:"http://www.badmintonto.com/image/lining.png",title:"Progress Badminton Club",address:"291 Progress Ave",charge:"$16-18/hr",telephone:"416-297-6522"},{url:"http://cmdbadminton.com/#/",urlToImage:"http://www.cmdbadminton.com/Content/images/Logo2.jpg",title:"Ji You Badminton Club",address:"115 Commander Blvd",charge:"$18/hr",telephone:"416-291-8821"},{url:"http://www.agincourtopen.com/",urlToImage:"http://www.agincourtopen.com/pb/images/gtext24115994b7bb872e5.jpg",title:"AOBC Sports",address:"1510 Birchmount Rd",charge:"$16/hr",telephone:"416-759-8100"},{url:"http://www.iplaybadminton.ca/",urlToImage:"https://static1.squarespace.com/static/53751b73e4b0d7a46b30904e/t/5702c2795559868c7500c827/1459801916945/?format=750w",title:"IPlay Badminton",address:"351 FERRIER ST. UNIT 7, MARKHAM ON. L3R5Z2",charge:"$17-19/hr",telephone:"905-604-6058"}]:"Markham"===t?this.clubs=[{url:"https://subadmintonclub.com/",title:"Su Badminton Club",address:"170 Shields Ct, Markham",charge:"$20 per hour per court"},{url:"http://thebadmintoncoaching.ca/badminton-club/",title:"C2 Badminton Club",address:"1300 Rodick Rd, Markham",charge:"$20 per hour per court"},{url:"https://www.leesbadminton.ca/",title:"Lees Bamdinton",address:"80 Centurian Dr, Markham",charge:"$20 per hour per court"},{url:"https://www.rwbadmintonclub.com/",title:"Lees Bamdinton",address:"7880 Woodbine Avenue,Unit D",charge:"$20 per hour per court"}]:"Richmond Hill"===t&&(this.clubs=[{url:"https://www.kcbadmintonclub.com",title:"K.C. Badminton Club",address:"30 Vogell Rd #3, Richmond Hill Markham",charge:"$20 per hour per court"},{url:"https://www.facebook.com/KCBCRH/?rf=155323281168622",title:"Flying Dragon Badminton Club",address:"Unit3, 30 Vogell Rd",charge:"$20 per hour per court"}])}},created:function(){this.updateLocation(this.location)},watch:{location:function(t){this.updateLocation(t)}}},o,!1,function(t){a("Frn/")},"data-v-3c96fcac",null).exports,LocationSelection:a("VU/8")({name:"locationselection",data:function(){return{locations:[{id:"Markham",name:"Markham"},{id:"Richmond Hill",name:"Richmond Hill"},{id:"Scarborough",name:"Scarborough"}],location:""}},methods:{locationChanged:function(t){for(var e=0;e<this.location.length;e++)this.locations[e].id==t.target.value&&(this.location=this.locations[e]);this.$emit("locationChanged",t.target.value)}}},s,!1,function(t){a("MkqP")},"data-v-0c6b7e59",null).exports,BudgetSelection:a("VU/8")(i,r,!1,null,null,null).exports,Budget:a("VU/8")({data:function(){return{picker:null,picker2:null}}},l,!1,null,null,null).exports},data:function(){return{location:"",budget:""}},methods:{locationChanged:function(t){this.location=t},budgetChanged:function(t){this.budget=t}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("LocationSelection",{on:{locationChanged:this.locationChanged}}),this._v(" "),e("Clublist",{attrs:{location:this.location}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("© "),e("a",{attrs:{href:"https://www.linkedin.com/in/wu-jionghui-28844459/",target:"_blank"}},[this._v("炯")]),this._v(" | "),e("a",{attrs:{href:"https://www.linkedin.com/in/wu-jionghui-28844459/",target:"_blank"}},[this._v("印")])])])}]};var h=a("VU/8")(c,u,!1,function(t){a("gmJY")},null,null).exports,d=a("8+8L"),m=a("3EgV"),v=a.n(m);a("7zck");n.default.use(v.a),n.default.use(d.a),n.default.config.productionTip=!1,new n.default({el:"#app",components:{App:h},template:"<App/>"})},gmJY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.58dae4e60c1f98622015.js.map