(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n(116)},116:function(e,t,n){var r=n(22),a=r(n(1)),l=r(n(23));n(120);var i=r(n(122));l.default.render(a.default.createElement(i.default,null),document.getElementById("root"))},120:function(e,t,n){},122:function(e,t,n){(function(e){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=n(202),d=a(n(152)),m=a(n(174)),y=a(n(181)),p=a(n(90)),w=a(n(199)),v=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return c.default.createElement(h.MemoryRouter,null,c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(h.Route,{path:"/",exact:!0,component:d.default}),c.default.createElement(h.Route,{path:"/supplier",exact:!0,component:m.default}),c.default.createElement(h.Route,{path:"/qrscanner",exact:!0,component:y.default}),c.default.createElement(h.Route,{path:"/qrcode",exact:!0,component:p.default}),c.default.createElement(h.Route,{path:"/tracker",exact:!0,component:w.default})))}}]),t}(c.Component),g=function(){return function(){return v}};"web"===f.Platform.OS&&(g=n(200).hot);var E=g(e)(v);t.default=E}).call(this,n(70)(e))},152:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=n(51),d=n(52),m=n(53),y=d.HOST,p=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={email:"",name:"",show:"busy"},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;m.autoLogin().then(function(t){e.setState({show:"form"}),t&&e.props.history.push("/supplier")}).catch(function(t){d.alert("db error"),e.setState({show:"form"})})}},{key:"nextPage",value:function(){}},{key:"onClickTracker",value:function(){this.props.history.push("/tracker")}},{key:"onClickLogin",value:function(){var e=this;this.setState({show:"busy"});var t=this.state.email,n=this.state.name;this.getSupplier(t).then(function(r){if(!r)return e.postSupplier(t,n).then(function(){return e.getSupplier(t)});if(r.name!==n){var a={msg:"Email and name mismatch!"};throw a}return r}).then(function(e){if(!e){var n={msg:"Connection error!"};throw n}return m.login(t,e)}).then(function(t){e.setState({show:"form"}),e.props.history.push("/supplier")}).catch(function(t){t&&t.msg&&d.alert(t.msg),e.setState({show:"form"})})}},{key:"getSupplier",value:function(e){var t=y+"/api/Supplier/"+encodeURIComponent(e);return new Promise(function(e,n){h.get(t).then(function(t){e(t.data)}).catch(function(t){console.error(t),e(null)})})}},{key:"postSupplier",value:function(e,t){var n=y+"/api/Supplier";return new Promise(function(r,a){h.post(n,{$class:"com.altermyth.mynetwork.Supplier",email:e,name:t}).then(function(e){r()}).catch(function(e){r()})})}},{key:"render",value:function(){var e=this;if("busy"===this.state.show)return c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.ActivityIndicator,null));var t=0===this.state.email.length;return c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.View,{style:{flex:1,padding:10,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.Text,{style:{textAlign:"center"}},"FISH NETWORK")),c.default.createElement(f.View,{style:{padding:20}},c.default.createElement(f.View,{style:{flexDirection:"row",alignItems:"center"}},c.default.createElement(f.Text,{style:{flex:1}},"Name: "),c.default.createElement(f.TextInput,{style:{flex:3,height:40,borderColor:"gray",borderWidth:1},onChangeText:function(t){return e.setState({name:t})},value:this.state.name})),c.default.createElement(f.View,{style:{height:10}}),c.default.createElement(f.View,{style:{flexDirection:"row",alignItems:"center"}},c.default.createElement(f.Text,{style:{flex:1}},"Email: "),c.default.createElement(f.TextInput,{style:{flex:3,height:40,borderColor:"gray",borderWidth:1},onChangeText:function(t){return e.setState({email:t})},value:this.state.email})),c.default.createElement(f.View,{style:{height:20}}),c.default.createElement(f.Button,{disabled:t,title:"LOGIN AS SUPPLIER".toUpperCase(),onPress:function(){return e.onClickLogin()}}),c.default.createElement(f.View,{style:{height:20}}),c.default.createElement(f.View,{style:{alignItems:"center"}},c.default.createElement(f.Text,null,"or")),c.default.createElement(f.View,{style:{height:20}}),c.default.createElement(f.Button,{title:"OPEN FISH TRACKER",onPress:function(){return e.onClickTracker()}})))}}]),t}(c.Component);t.default=p},174:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=a(n(88)),d=a(n(89)),m=a(n(90)),y=n(51),p=n(95),w=n(52),v=n(53),g=w.HOST,E=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={show:"list",email:"",weight:"",grade:"A",species:"TUNA",rows:[]},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;v.getProfile().then(function(t){return e.setState({email:t.email}),e.refreshList(t.email)}).then(function(){e.setState({show:"list"}),e._tick=setInterval(function(){return e.refresh()},1e3)})}},{key:"componentWillUnmount",value:function(){this._tick&&clearInterval(this._tick),this._busyRefresh&&(this._busyRefresh=null)}},{key:"refresh",value:function(){var e=this;this._busyRefresh||(this._busyRefresh=!0,this.refreshList().then(function(){e._busyRefresh=!1}))}},{key:"refreshList",value:function(e){var t=this;return e||(e=this.state.email),this.getSelectFishesByOwner(e).then(function(e){if(e){e.sort(function(e,t){return e.ownTime<t.ownTime?1:e.ownTime>t.ownTime?-1:0});for(var n=[],r=0;r<e.length;r++){var a=e[r],l=a.fishCode,i=a.species,o=a.grade,s=a.weight,u=a.ownTime;n.push({id:l,row1:l,row2:i+" "+s+o,row3:p(u).format("DD MMM YYYY, HH:mm:ss"),obj:a})}t.setState({rows:n})}})}},{key:"onClickAddFish",value:function(){var e=this,t=this.state.species,n=this.state.grade,r=Number(this.state.weight),a=this.state.email;return this.setState({show:"busyAdd"}),this.postNewFish(t,n,r,a).then(function(t){t?w.alert("Transaction success"):w.alert("Transaction fail"),e.setState({show:"list"})})}},{key:"showQrCode",value:function(e){this.props.history.push({pathname:"/qrcode",state:{fishCode:e.fishCode,email:this.state.email}})}},{key:"onClickOpenWebCam",value:function(){this.props.history.push({pathname:"/qrscanner",state:{email:this.state.email}})}},{key:"render",value:function(){var e=this;if("busy"===this.state.show)return c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.ActivityIndicator,null));if("qrcode"===this.state.show){var t=this.state.qrCode;return c.default.createElement(m.default,{show:t,onClickBack:function(){e.setState({show:"list"})}})}var n=this.state.email,r=this.state.rows;return c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(h.default,{title:"SUPPLIER MENU",email:n,history:this.props.history}),c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(d.default,{rows:r,onClickQrCode:function(t){return e.showQrCode(t)},mode:"supplier"})),c.default.createElement(f.View,{style:{paddingHorizontal:5,paddingVertical:20,borderTopWidth:1,flexDirection:"row"}},c.default.createElement(f.View,{style:{flex:1}},this.renderAddFish()),c.default.createElement(f.View,{style:{width:5}}),c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.Text,{style:{fontWeight:"bold",textAlign:"center"}},"Buy fish using qr code scanner!")),c.default.createElement(f.Button,{title:"SCAN",onPress:function(){return e.onClickOpenWebCam()}}))))}},{key:"renderAddFish",value:function(){var e=this;if("busyAdd"===this.state.show){var t=this.state.addFishHeight;return c.default.createElement(f.View,{style:{height:t,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.ActivityIndicator,null))}var n=Number(this.state.weight)>0;return c.default.createElement(f.View,{style:{},onLayout:function(t){var n=t.nativeEvent.layout.height;e.state.addFishHeight||e.setState({addFishHeight:n})}},c.default.createElement(f.View,{style:{flexDirection:"row",alignItems:"center"}},c.default.createElement(f.Text,{style:{flex:1}},"Species: "),c.default.createElement(f.Picker,{style:{height:40},selectedValue:this.state.species,onValueChange:function(t,n){return e.setState({species:t})}},c.default.createElement(f.Picker.Item,{label:"Tuna",value:"TUNA"}),c.default.createElement(f.Picker.Item,{label:"Mix",value:"MIX"}))),c.default.createElement(f.View,{style:{height:10}}),c.default.createElement(f.View,{style:{flexDirection:"row",alignItems:"center"}},c.default.createElement(f.Text,{style:{flex:1}},"Weight: "),c.default.createElement(f.TextInput,{style:{width:100,height:40,borderColor:"gray",borderWidth:1},onChangeText:function(t){return e.setState({weight:t})},value:this.state.weight})),c.default.createElement(f.View,{style:{height:10}}),c.default.createElement(f.View,{style:{flexDirection:"row",alignItems:"center"}},c.default.createElement(f.Text,{style:{flex:1}},"Grade: "),c.default.createElement(f.Picker,{style:{height:40},selectedValue:this.state.grade,onValueChange:function(t,n){return e.setState({grade:t})}},c.default.createElement(f.Picker.Item,{label:"A",value:"A"}),c.default.createElement(f.Picker.Item,{label:"B",value:"B"}),c.default.createElement(f.Picker.Item,{label:"C",value:"C"}))),c.default.createElement(f.View,{style:{height:20}}),c.default.createElement(f.Button,{disabled:!n,title:"ADD NEW FISH",onPress:function(){return e.onClickAddFish()}}))}},{key:"postNewFish",value:function(e,t,n,r){var a=g+"/api/NewFish";return new Promise(function(l,i){y.post(a,{$class:"com.altermyth.mynetwork.NewFish",species:e,grade:t,weight:n,owner:r}).then(function(e){l(!0)}).catch(function(e){console.log(e),l(!1)})})}},{key:"getSelectFishesByOwner",value:function(e){var t=g+"/api/queries/selectFishesByOwner?owner="+encodeURIComponent("resource:com.altermyth.mynetwork.Supplier#"+e);return new Promise(function(e,n){y.get(t).then(function(t){e(t.data)}).catch(function(t){console.log(t),e()})})}}]),t}(c.Component);t.default=E},181:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=a(n(182)),d=n(51),m=n(52),y=m.HOST,p=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={height:0,size:0,data:""},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){}},{key:"onClickSubmit",value:function(){var e=this,t=this.state.data;this.setState({show:"process"}),this.getFish(t).then(function(t){var n=t.owner.split("#")[1],r=e.props.location.state.email;return e.postTrade(t.fishCode,n,r)}).then(function(t){t?m.alert("Transaction success"):m.alert("Transaction fail"),e.onClickBack()})}},{key:"onClickBack",value:function(){this.props.history.goBack()}},{key:"processData",value:function(e){var t=this;e&&(this.setState({data:e}),m.delay(500).then(function(){return t.onClickSubmit()}))}},{key:"renderProcess",value:function(){return c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.ActivityIndicator,null))}},{key:"render",value:function(){var e=this;return 0===this.state.size?c.default.createElement(f.View,{style:{flex:1},onLayout:function(t){var n=t.nativeEvent.layout,r=n.width,a=n.height,l=r;l>a&&(l=a),e.setState({size:l})}}):"process"===this.state.show?this.renderProcess():c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(h.default,{delay:300,onError:console.error,onScan:function(t){return e.processData(t)},style:{width:.8*this.state.size}})),c.default.createElement(f.View,{style:{flexDirection:"row",padding:5,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.TextInput,{style:{flex:1,height:40,borderColor:"gray",borderWidth:1},onChangeText:function(t){return e.setState({data:t})},value:this.state.data}),c.default.createElement(f.View,{style:{width:5}}),c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.Button,{disabled:0===this.state.data.length,title:"SUBMIT",onPress:function(){return e.onClickSubmit()}})),c.default.createElement(f.View,{style:{width:5}}),c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.Button,{title:"CLOSE",onPress:function(){return e.onClickBack()}}))))}},{key:"getFish",value:function(e){var t=y+"/api/SimpleFish/"+encodeURIComponent(e);return new Promise(function(e,n){d.get(t).then(function(t){e(t.data)}).catch(function(t){console.error(t),e(null)})})}},{key:"postTrade",value:function(e,t,n){var r=y+"/api/Trade",a={$class:"com.altermyth.mynetwork.Trade",fish:e,prevSupplier:t,newSupplier:n};return new Promise(function(e,t){d.post(r,a).then(function(t){e(!0)}).catch(function(t){console.error(t),e(!1)})})}}]),t}(c.Component);t.default=p},199:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=a(n(88)),d=a(n(89)),m=n(51),y=n(95),p=n(52),w=p.HOST,v=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={show:"list",fishCode:"",searchTerm:"",rows:[]},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;this._tick=setInterval(function(){return e.refresh()},1e3)}},{key:"componentWillUnmount",value:function(){this._tick&&clearInterval(this._tick),this._busyRefresh&&(this._busyRefresh=null)}},{key:"refresh",value:function(){var e=this;this._busyRefresh||0===this.state.fishCode.length||(this._busyRefresh=!0,this.refreshList().then(function(){e._busyRefresh=!1}))}},{key:"refreshList",value:function(){var e=this,t=this.state.fishCode;return this.getSelectLogsByFish(t).then(function(t){if(t){t.sort(function(e,t){return e.ts<t.ts?1:e.ts>t.ts?-1:0});for(var n=[],r=0;r<t.length;r++){var a=t[r],l=a.action,i=a.prevSupplier.split("#")[1],o=a.newSupplier.split("#")[1],s=a.ts,u=l,c=o;"TRADE"===l&&(c=i+" => "+o);var f=y(s).format("DD MMM YYYY, HH:mm:ss");n.push({id:a.logId,row1:u,row2:c,row3:f,obj:a})}e.setState({rows:n})}})}},{key:"onClickSearch",value:function(){var e=this;this.setState({show:"busy"});var t=this.state.searchTerm;this.getFish(t).then(function(n){n?e.setState({fishCode:t,show:"list"}):(p.alert("Fish not found!"),e.setState({show:"list"}))})}},{key:"render",value:function(){var e,t=this;if("busy"===this.state.show)e=c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.ActivityIndicator,null));else{var n=this.state.rows;e=c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(d.default,{rows:n,onClickQrCode:function(e){return console.log(e)},mode:"tracker"}))}return c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(h.default,{title:"FISH TRACKER",email:"Enter fish code below to track its movement",history:this.props.history}),c.default.createElement(f.View,{style:{paddingHorizontal:5,paddingVertical:10,borderBottomWidth:1,flexDirection:"row"}},c.default.createElement(f.View,{style:{flex:1,flexDirection:"row",alignItems:"center"}},c.default.createElement(f.TextInput,{style:{flex:1,height:40,borderColor:"gray",borderWidth:1},onChangeText:function(e){return t.setState({searchTerm:e})},value:this.state.searchTerm}),c.default.createElement(f.View,{style:{width:10}}),c.default.createElement(f.Button,{disabled:0===this.state.searchTerm.length,title:"SEARCH FISH",onPress:function(){return t.onClickSearch()}}))),e)}},{key:"getFish",value:function(e){var t=w+"/api/SimpleFish/"+encodeURIComponent(e);return new Promise(function(e,n){m.get(t).then(function(t){console.log(t.data),e(t.data)}).catch(function(t){console.error(t),e(null)})})}},{key:"getSelectLogsByFish",value:function(e){var t=w+"/api/queries/selectLogsByFish?fish="+encodeURIComponent("resource:com.altermyth.mynetwork.SimpleFish#"+e);return new Promise(function(e,n){m.get(t).then(function(t){e(t.data)}).catch(function(t){console.log(t),e()})})}}]),t}(c.Component);t.default=v},52:function(e,t,n){var r=n(25);e.exports.delay=function(e){return new Promise(function(t,n){setTimeout(function(){t()},e)})},e.exports.alert=function(e){"web"===r.Platform.OS&&alert(e)},e.exports.HOST="http://192.168.100.7:3000"},53:function(e,t,n){var r=new(n(22)(n(171)).default)("device");function a(e){return new Promise(function(t,n){r.get(e).then(t).catch(function(n){var a={_id:e};r.put(a).then(function(){return r.get(e)}).then(t)})})}e.exports.autoLogin=function(){return a("profile").then(function(e){return e.email&&e.profile?e:null})},e.exports.login=function(e,t){return a("profile").then(function(n){return n.email=e,n.profile=t,r.put(n)})},e.exports.logout=function(){return a("profile").then(function(e){return e.email=null,e.profile=null,r.put(e)})},e.exports.getProfile=function(){return r.get("profile")}},88:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=n(53),d=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"doLogout",value:function(){var e=this;h.logout().then(function(){e.props.history.goBack()})}},{key:"render",value:function(){var e=this;return c.default.createElement(f.View,{style:{flexDirection:"row",paddingHorizontal:5,paddingVertical:10,borderBottomWidth:1}},c.default.createElement(f.View,{style:{flexDirection:"column",flex:1}},c.default.createElement(f.Text,{style:{fontWeight:"bold"}},this.props.title),c.default.createElement(f.Text,null,this.props.email)),c.default.createElement(f.View,null,c.default.createElement(f.Button,{style:{flex:1},title:"EXIT",onPress:function(){return e.doLogout()},color:"gray"})))}}]),t}(c.Component);t.default=d},89:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=n(53),d=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={height:0},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;h.getProfile().then(function(t){e.setState({email:t.email})})}},{key:"renderRows",value:function(e){var t=this,n="SHOW QRCODE";return"supplier"===this.props.mode&&(n="SELL FISH"),c.default.createElement(f.FlatList,{style:{flex:1},data:e,keyExtractor:function(e,t){return""+e.id},ItemSeparatorComponent:function(){return c.default.createElement(f.View,{style:{height:1,backgroundColor:"gainsboro"}})},renderItem:function(e){var r=e.item,a=e.index,l=c.default.createElement(f.View,{style:{alignItems:"center",justifyContent:"center"}},c.default.createElement(f.Button,{title:n,onPress:function(){return t.props.onClickQrCode(r.obj)}}));return"tracker"===t.props.mode&&(l=null),c.default.createElement(f.View,{key:a,style:{paddingHorizontal:5,paddingVertical:10}},c.default.createElement(f.View,{style:{flexDirection:"row"}},c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.Text,null,r.row1),c.default.createElement(f.Text,null,r.row2),c.default.createElement(f.Text,null,r.row3)),l))}})}},{key:"render",value:function(){var e=this;if(0===this.state.height)return c.default.createElement(f.View,{style:{flex:1},onLayout:function(t){var n=t.nativeEvent.layout.height;e.setState({height:n})}});var t=this.state.height,n=this.props.rows;return c.default.createElement(f.View,{style:{height:t,overflow:"hidden"}},this.renderRows(n))}}]),t}(c.Component);t.default=d},90:function(e,t,n){var r=n(28),a=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(29)),i=a(n(30)),o=a(n(31)),s=a(n(32)),u=a(n(33)),c=r(n(1)),f=n(25),h=n(175),d=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,o.default)(this,(0,s.default)(t).call(this))).state={height:0,size:0},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){}},{key:"onClickBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var e=this;if(0===this.state.size)return c.default.createElement(f.View,{style:{flex:1},onLayout:function(t){var n=t.nativeEvent.layout,r=n.width,a=n.height,l=r;l>a&&(l=a),e.setState({size:l})}});var t=Math.floor(.8*this.state.size),n="Code: "+this.props.location.state.fishCode;return c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},c.default.createElement(h,{value:n,renderAs:"svg",size:t})),c.default.createElement(f.View,{style:{flexDirection:"row",padding:5,alignItems:"center",justifyContent:"center"}},c.default.createElement(f.Text,{style:{flex:1}},n),c.default.createElement(f.View,{style:{width:10}}),c.default.createElement(f.View,{style:{flex:1}},c.default.createElement(f.Button,{title:"CLOSE",onPress:function(){return e.onClickBack()}}))))}}]),t}(c.Component);t.default=d}},[[115,2,1]]]);
//# sourceMappingURL=main.c83a9fbe.chunk.js.map