webpackJsonp([0],{0:function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clublist"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"media-list"},t._l(t.clubs,function(e){return a("li",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"media-object",attrs:{src:e.urlToImage}})])]),t._v(" "),a("div",{staticClass:"media-body"},[a("h4",{staticClass:"media-heading"},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),a("h5",[a("i",[t._v("Address:  "+t._s(e.address))])]),t._v(" "),a("h5",[t._v("Charge: "+t._s(e.charge))]),t._v(" "),a("h5",[t._v("Tel: "),a("a",{attrs:{href:"tel:"+e.telephone}},[t._v(t._s(e.telephone))])])])])}))])])},staticRenderFns:[]};var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"locationselection"},[a("div",[a("div",{staticClass:"jumbotron"},[t._m(0),t._v(" "),a("h4",[t._v("Select Location")]),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.locationChanged}},[a("option",{attrs:{value:""}},[t._v("Please select location ...")]),t._v(" "),t._l(t.locations,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticClass:"glyphicon glyphicon-list-alt"}),this._v(" Badminton Club List")])}]};var i={name:"budgetselection",data:function(){return{budgets:[{text:"$1000",value:1e3},{text:"$500",value:500},{text:"$800",value:800}],budget:"",from:null,to:null}},methods:{budgetChanged:function(t){for(var e=0;e<this.budgets.length;e++)this.budgets[e].value==t.target.value&&(this.budget=this.budgets[e]);console.log(this.budget.value),this.$emit("budgetChanged",t.target.value)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"budgetselection"},[a("div",{staticClass:"jumbotron"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("h3",[this.budget.value?a("span",[this.from?a("span",[this.to?a("span",[a("span",{staticClass:"glyphicon glyphicon-heart"}),t._v("\n               Bear wiht me, you vocation from "+t._s(this.from)+" to "+t._s(this.to)+" within "+t._s(this.budget.text)+" is being taken care of ...\n          ")]):t._e()]):t._e()]):t._e()])]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("I want to get away From")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("To")])])],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-date-picker",{attrs:{color:"green lighten-1"},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-date-picker",{attrs:{color:"red lighten-1"},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"jumbotron"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("I have ... ")]),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.budgetChanged}},[a("option",{attrs:{value:""}},[t._v("Please select budget ...")]),t._v(" "),t._l(t.budgets,function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.text))])})],2)])],1)],1)])},staticRenderFns:[]},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[a("v-layout",{attrs:{row:"",wrap:""}},[t._v(" --\x3e\n        "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[t._v("I have ... ")]),t._v(" "),a("select",{staticClass:"form-control",on:{change:t.sourceChanged}},[a("option",{attrs:{value:"1000"}},[t._v("$1000")]),t._v(" "),a("option",{attrs:{value:"800"}},[t._v("$800")]),t._v(" "),a("option",{attrs:{value:"500"}},[t._v("$500")]),t._v(" "),a("option",{attrs:{value:"2000"}},[t._v("$2000")])])])],1)],1)},staticRenderFns:[]},c={name:"app",components:{Clublist:a("VU/8")({name:"clublist",props:["location"],data:function(){return{clubs:[]}},methods:{updateLocation:function(t){"Scarborough"===t?this.clubs=[{url:"http://www.badmintonto.com/",urlToImage:"http://www.badmintonto.com/image/lining.png",title:"Progress Badminton Club",address:"291 PROGRESS AVE, SCARBOROUGH 1P M2Z2",charge:"$16-18/hr",telephone:"416-297-6522"},{url:"http://cmdbadminton.com/#/",urlToImage:"http://www.cmdbadminton.com/Content/images/Logo2.jpg",title:"Ji You Badminton Club",address:"115 Commander Blvd., Unit 3, Scarborough, ON, M1S 3M7",charge:"$16/hr",telephone:"416-291-8821"},{url:"http://www.agincourtopen.com/",urlToImage:"http://www.agincourtopen.com/pb/images/gtext24115994b7bb872e5.jpg",title:"AOBC Sports",address:"1510 Birchmount Rd",charge:"$16/hr",telephone:"416-759-8100"},{url:"http://www.epicsportstoronto.com/",urlToImage:"http://52.20.157.125/epicsports/images/epicsports_logo.jpg",title:"EPIC Sports",address:"39 Bertrand Avenue, Scarborough",charge:"$14-20/hr",telephone:"416-288-8333"}]:"Markham"===t?this.clubs=[{url:"https://subadmintonclub.com/",urlToImage:"http://www.subadmintonclub.com/wp-content/uploads/2016/11/bg1_slide.jpg",title:"Su Badminton Club",address:"170 Shields Court, Unit 1, Markham, ON L3R 9T5",charge:"$16-19/hr + $3/guest",telephone:"905-752-6857"},{url:"http://thebadmintoncoaching.ca/badminton-club/",urlToImage:"http://thebadmintoncoaching.ca/wp-content/uploads/2013/06/door.jpg",title:"C2 Badminton Club",address:"1300 Rodick Road, Markham, Ontario, Canada",charge:"$14-20/hr + $3/guest",telephone:"289-818-2327"},{url:"https://www.leesbadminton.ca/",urlToImage:"//cdn.shopify.com/s/files/1/0003/2086/4292/files/Logo_450x.gif?v=1519828665",title:"Lees Bamdinton",address:"80D Centurian Drive, Unit 3-9, Markham, Ontario, L3R 8C1",charge:"$13.2-20 + tax/hr",telephone:"905-940-0703"},{url:"https://www.rwbadmintonclub.com/",urlToImage:"https://www.rwbadmintonclub.com/wp-content/themes/rwbadmintonclub2018/icons/RW_Logo.svg",title:"Raymond Wang Bamdinton",address:"7880 Woodbine Avenue, Unit D, Markham, L3R2N7",charge:"$14-18/hr + $2/guest",telephone:"905-513-7388"},{url:"http://www.iplaybadminton.ca/",urlToImage:"https://static1.squarespace.com/static/53751b73e4b0d7a46b30904e/t/5702c2795559868c7500c827/1459801916945/?format=750w",title:"IPlay Badminton",address:"351 FERRIER ST. UNIT 7, MARKHAM ON. L3R5Z2",charge:"$17-19/hr",telephone:"905-604-6058"}]:"Richmond Hill"===t?this.clubs=[{url:"https://www.kcbadmintonclub.com",urlToImage:"https://www.kcbadmintonclub.com/uploads/3/4/3/2/34328130/img-3390_orig.png",title:"K.C. Badminton Club",address:"Unit 3, 30 Vogell Rd, Richmond Hill L4B 3K6/Unit 3-8, 2680 14th Avenue , Markham L3R 5B2",charge:"$22/hr",telephone:"905-918-1318/905-766-4561/647-866-6645"},{url:"https://www.facebook.com/pages/Flying-Dragon-Badminton-Club/155323281168622?nr",urlToImage:"https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-1/p200x200/13631572_496507357208514_2434968315457473985_n.jpg?_nc_cat=0&oh=1b8c9ea8197cac0261091c03f15ef0cf&oe=5C1197E2",title:"Flying Dragon Badminton Club",address:"30 Vogell Rd., Unit 2 & 3, Richmond Hill, Ontario L4B 3K6",charge:"$20 per hour per court",telephone:"905-918-1318"}]:"Mississauga"===t&&(this.clubs=[{url:"http://www.4ubadminton.com/",urlToImage:"http://4ubadminton.com/wp-content/uploads/2015/02/mmexport1403846976315-300x225.jpg",title:"4 U Badminton",address:"1303C Aerowood Drive , Mississauga, ON L4W 2P6",charge:"$20/hr",telephone:"416-800-7448"},{url:"https://www.leesbadminton.ca/",urlToImage:"//cdn.shopify.com/s/files/1/0003/2086/4292/files/Logo_450x.gif?v=1519828665",title:"Lees Badminton",address:"6597 Kitimat Rd #1, Mississauga, Ontario, L5N 4J4",charge:"$13.2-20 + tax/hr",telephone:"905-819-8018"},{url:"https://subadmintonclub.com/",urlToImage:"http://www.subadmintonclub.com/wp-content/uploads/2016/11/bg1_slide.jpg",title:"Su Badminton Club",address:"#6, 4140B Sladeview Crt., Mississauga, ON L5L 6A1",charge:"$16-19/hr + $3/guest",telephone:"905-615-9996"}])}},created:function(){this.updateLocation(this.location)},watch:{location:function(t){this.updateLocation(t)}}},n,!1,function(t){a("g0ev")},"data-v-cab4de18",null).exports,LocationSelection:a("VU/8")({name:"locationselection",data:function(){return{locations:[{id:"Markham",name:"Markham"},{id:"Richmond Hill",name:"Richmond Hill"},{id:"Scarborough",name:"Scarborough"},{id:"Mississauga",name:"Mississauga"}],location:""}},methods:{locationChanged:function(t){for(var e=0;e<this.location.length;e++)this.locations[e].id==t.target.value&&(this.location=this.locations[e]);this.$emit("locationChanged",t.target.value)}}},s,!1,function(t){a("Pn3g")},"data-v-4b9a5f7e",null).exports,BudgetSelection:a("VU/8")(i,l,!1,null,null,null).exports,Budget:a("VU/8")({data:function(){return{picker:null,picker2:null}}},r,!1,null,null,null).exports},data:function(){return{location:"Scarborough",budget:""}},methods:{locationChanged:function(t){this.location=t},budgetChanged:function(t){this.budget=t}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("LocationSelection",{on:{locationChanged:t.locationChanged}}),t._v(" "),a("Clublist",{attrs:{location:t.location}}),t._v(" "),a("div",{staticClass:"footer"},[a("p",[t._v("© "),a("a",{attrs:{href:"mailto:jionghui_wu@hotmail.com"}},[t._v("炯")]),t._v(" | "),a("a",{attrs:{href:"mailto:jionghui_wu@hotmail.com"}},[t._v("印")])])])],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(t){a("x3e1")},null,null).exports,h=a("8+8L"),m=a("3EgV"),g=a.n(m);a("7zck");o.default.use(g.a),o.default.use(h.a),o.default.config.productionTip=!1,new o.default({el:"#app",components:{App:d},template:"<App/>"})},Pn3g:function(t,e){},g0ev:function(t,e){},x3e1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9b2b4d98304de0c39248.js.map