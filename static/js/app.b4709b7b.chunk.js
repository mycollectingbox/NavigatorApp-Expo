(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{281:function(e,t,n){e.exports=n(399)},398:function(e){e.exports=JSON.parse("{}")},399:function(e,t,n){"use strict";n.r(t);var r=n(408),o=n(36),i=n(129),a=Object(i.b)({name:"info",initialState:{instructions:{},instructionTexts:{},floor:-10,index:-1,reply:null,message:null,dialogMessages:[]},reducers:{setInstructions:function(e,t){e.instructions=t.payload},setInstructionTexts:function(e,t){e.instructionTexts=t.payload},setIndex:function(e,t){e.index=t.payload},setReply:function(e,t){e.reply=t.payload},setMessage:function(e,t){e.message=t.payload},setFloor:function(e,t){e.floor=t.payload},setDialogMessages:function(e,t){e.dialogMessages=t.payload}}}),s=a.actions,c=s.setInstructions,l=s.setInstructionTexts,u=s.setIndex,d=(s.setReply,s.setMessage,s.setFloor),g=s.setDialogMessages,f=function(e){return e.info.instructions},j=function(e){return e.info.instructionTexts},h=function(e){return e.info.index},b=function(e){return e.info.dialogMessages},m=a.reducer,x=Object(i.b)({name:"map",initialState:{mapFloor:-100,floorArray:null,floorIndex:-1},reducers:{setMapFloor:function(e,t){console.log("\u5730\u5716\u7684\u6a13\u5c64\u8a2d\u5b9a\u70ba\u7b2c "+t.payload+" \u6a13"),e.mapFloor=t.payload},setFloorArray:function(e,t){e.floorArray=t.payload,t.payload.length>0&&console.log("\u5730\u5716\u7684\u6a13\u5c64\u6307\u5f15\u4f9d\u5e8f\u70ba "+t.payload)},setFloorIndex:function(e,t){e.floorIndex=t.payload}}}),p=function(e){return e.map.mapFloor},y=function(e){return e.map.floorArray},O=function(e){return e.map.floorIndex},S=x.actions,w=S.setMapFloor,v=S.setFloorArray,T=S.setFloorIndex,C=x.reducer,k=Object(i.a)({reducer:{info:m,map:C}}),_=n(406),R=n(407),L=n(7),A=n.n(L),H=n(9),D=n.n(H),z=n(0),M=n(11),E=n(8),B=n(92),P=n(15),I=n(112),V=n(28),N=n(48),X=n(160),W=n(72),J={primary:"#003153",white:"#fff",black:"#000",searchIcon:"#999",searchText:"#444",searchBackground:"#f0f0f0",title:"#000",subTitle:"#555",storyBorder:"#00f",description:"#9f9f9f",inputBackground:"#f0f0f0",inputText:"#000",messageBackground:"#1B5583",danger:"#df4759",success:"#4b0",light:"#ccc",halfOpacitySecondary:"rgba(240, 149, 17, 0.5)",halfOpacityPrimary:"rgba(0, 132, 255, 0.5)",storyBorder:"#00f"},F=n(277),G=n(57),Y=n(6),U=M.a.create({onlineStatusContainer:{flexDirection:"row",paddingHorizontal:20},onlineStatus:{color:J.white,fontSize:16},statusImage:{height:5,width:5,borderRadius:32.5,alignSelf:"center",margin:3}}),Z=function(e){return e.onlineStatus?Object(Y.jsxs)(E.a,{style:U.onlineStatusContainer,children:[Object(Y.jsx)(V.a,{style:U.onlineStatus,children:"Online"}),Object(Y.jsx)(G.a,{style:U.statusImage,source:{uri:"https://miro.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png"}})]}):Object(Y.jsxs)(E.a,{style:U.onlineStatusContainer,children:[Object(Y.jsx)(V.a,{style:U.onlineStatus,children:"Offline"}),Object(Y.jsx)(G.a,{style:U.statusImage,source:{uri:"https://pngimage.net/wp-content/uploads/2018/06/rec-icon-png-5.png"}})]})},K=n(76),$="iasl.asia.edu.tw",q=function(){var e=new Date,t=e.getHours(),n=e.getMinutes();return t<10&&(t="0"+t.toString()),n<10&&(n="0"+n.toString()),[t,n]},Q=function(e){var t="M";try{e.forEach((function(e,n){t+=0===n?e[0]+","+e[1]:"L"+e[0]+","+e[1]}))}catch(n){throw n}return t},ee=function(e,t){return{x:t.x-e.x,y:t.y-e.y}},te=function(e,t){return 180*Math.atan2(t,e)/Math.PI},ne=function(e,t){var n=t*Math.PI/180;return{x:e.x*Math.cos(n)-e.y*Math.sin(n),y:e.x*Math.sin(n)+e.y*Math.cos(n)}};X.a.ignoreLogs(["Non-serializable values were found in the navigation state"]);var re=M.a.create({container:{flexDirection:"row",backgroundColor:J.primary,paddingTop:25,paddingBottom:10},backButton:{alignSelf:"center",paddingHorizontal:10},profileOptions:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10},profile:{flexDirection:"row",alignItems:"center",borderColor:"#fff",flex:4},image:{height:65,width:65,borderRadius:32.5},usernameAndOnlineStatus:{flexDirection:"row",justifyContent:"center",paddingHorizontal:10},usernameAndLocationName:{flexDirection:"column",paddingHorizontal:10},username:{color:J.white,fontSize:18,fontWeight:"bold"},locationName:{color:J.white,fontWeight:"bold",fontSize:16,paddingHorizontal:10},buttonsViewStyle:{flexDirection:"row"},options:{paddingHorizontal:6,paddingVertical:10,borderRadius:5,backgroundColor:"#68a0cf",marginHorizontal:5},mapButton:{color:"white"}}),oe=function(e){var t=e.botname,n=e.locationName,r=e.onlineStatus,i=e.sendJsonMessage,a=Object(K.k)(),s=Object(o.b)();return Object(Y.jsxs)(F.a,{colors:["#C33764","#1D2671","#192f6a"],style:re.container,children:[Object(Y.jsx)(N.a,{style:re.backButton,children:Object(Y.jsx)(W.a,{name:"angle-left",size:30,color:J.white})}),Object(Y.jsxs)(E.a,{style:re.profileOptions,children:[Object(Y.jsx)(N.a,{style:re.profile,children:Object(Y.jsxs)(E.a,{style:re.usernameAndLocationName,children:[Object(Y.jsxs)(E.a,{style:re.usernameAndOnlineStatus,children:[Object(Y.jsx)(V.a,{style:re.username,children:t}),Object(Y.jsx)(Z,{onlineStatus:r})]}),Object(Y.jsx)(E.a,{children:Object(Y.jsx)(V.a,{style:re.locationName,children:n})})]})}),Object(Y.jsxs)(E.a,{style:re.buttonsViewStyle,children:[Object(Y.jsx)(N.a,{style:re.options,onPress:function(){return function(){var e=q(),t=D()(e,2),n=t[0],r=t[1];i({author:"user",type:"text",message:"/done",time:n+":"+r}),s(g([])),s(l({})),s(w(-100)),s(v([]))}()},children:Object(Y.jsx)(V.a,{style:re.mapButton,children:"\u91cd\u65b0\u5c0d\u8a71"})}),Object(Y.jsx)(N.a,{style:re.options,onPress:function(){return a.navigate("MapNavigation",{sendJsonMessage:i})},children:Object(Y.jsx)(V.a,{style:re.mapButton,children:"\u5730\u5716\u6a21\u5f0f"})})]})]})]})},ie=n(116),ae=n(191),se=n(58),ce=n.n(se),le=M.a.create({container:{borderColor:"#9879e0",borderBottomWidth:1.5,flex:.6},messageView:{backgroundColor:"transparent",maxWidth:"100%"},Imagemessage:{alignSelf:"center"}}),ue=function(){var e=Object(z.useState)("https://"+$+":809/static/image/03.jpeg"),t=D()(e,2),n=t[0],r=t[1],i=Object(z.useState)("M 0 0 L 0 0"),a=D()(i,2),s=a[0],c=a[1],l=Object(o.c)(f),u=Object(o.c)(p),d=Object(o.c)(h);return Object(z.useEffect)((function(){if(u>-100&&d>=0){var e=l[u.toString()];d>0&&(e=e.slice(d)),c(Q(e)),r("https://"+$+":809/static/image/0"+u+".jpeg")}else c("M 0 0 L 0 0"),r("https://"+$+":809/static/image/iFG-cover.jpg")}),[u,d]),Object(Y.jsx)(E.a,{style:le.container,children:Object(Y.jsx)(ae.a,{maxZoom:3,minZoom:1,zoomStep:.5,initialZoom:1,bindToBorders:!0,style:le.messageView,children:Object(Y.jsx)(ie.a,{source:{uri:n},style:[le.Imagemessage,{width:409.6,height:222.8}],children:Object(Y.jsxs)(ce.a,{width:409.6,height:222.8,viewBox:"0 0 1024 557",children:[Object(Y.jsxs)(se.Defs,{children:[Object(Y.jsx)(se.Marker,{id:"Triangle",viewBox:"0 0 10 10",refX:"0",refY:"5",markerUnits:"strokeWidth",markerWidth:"3",markerHeight:"3",orient:"auto",children:Object(Y.jsx)(se.Path,{d:"M 0 0 L 10 5 L 0 10 z",fill:"black",stroke:"red",strokeWidth:"1"})}),Object(Y.jsx)(se.Marker,{id:"startPoint",viewBox:"0 0 10 10",refX:"5",refY:"5",markerUnits:"strokeWidth",markerWidth:"3",markerHeight:"3",orient:"auto",children:Object(Y.jsx)(se.Circle,{cx:"5",cy:"5",r:"5",fill:"green"})}),Object(Y.jsx)(se.Marker,{id:"midPoint",viewBox:"0 0 10 10",refX:"5",refY:"5",markerUnits:"strokeWidth",markerWidth:"2",markerHeight:"2",orient:"auto",children:Object(Y.jsx)(se.Circle,{cx:"5",cy:"5",r:"5",fill:"grey"})})]}),Object(Y.jsx)(se.Path,{d:s,fill:"none",stroke:"black",strokeWidth:"10",markerStart:"url(#startPoint)",markerMid:"url(#midPoint)",markerEnd:"url(#Triangle)"})]})})})})},de=n(18),ge=n.n(de),fe=n(99),je=n(98),he=n(189),be=n(118),me=M.a.create({modalContainer:{backgroundColor:"white",paddingHorizontal:20,paddingVertical:20},modalHeader:{flexDirection:"row",alignItems:"center",marginBottom:12},modalPromptTextStyle:{marginLeft:10,marginRight:50},modalButtonStyle:{borderColor:"#dddddf",borderWidth:2,borderRadius:8,paddingVertical:10,paddingHorizontal:15},modalResultTextStyle:{color:"#2596be",fontSize:18}}),xe=function(e){var t=e.webSpeechMiddleResult,n=e.stopRecording;return Object(Y.jsxs)(E.a,{style:me.modalContainer,children:[Object(Y.jsxs)(E.a,{style:me.modalHeader,children:[Object(Y.jsx)(W.a,{name:"microphone",size:32,color:J.danger}),Object(Y.jsx)(V.a,{style:me.modalPromptTextStyle,children:"\u8fa8\u8b58\u4e2d\uff0c\u8acb\u8aaa\u8a71"}),Object(Y.jsx)(be.a,{style:me.modalButtonStyle,onPress:function(){return n()},children:Object(Y.jsx)(V.a,{children:"\u95dc\u9589"})})]}),Object(Y.jsx)(E.a,{children:Object(Y.jsx)(V.a,{style:me.modalResultTextStyle,children:t})})]})};function pe(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Oe=M.a.create({container:{justifyContent:"center",backgroundColor:J.white,position:"relative"},innerContainer:{paddingHorizontal:10,marginHorizontal:13,bottom:2,justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingVertical:1,height:70},inputAndMicrophone:{flexDirection:"row",backgroundColor:J.inputBackground,flex:3,marginRight:10,paddingVertical:"ios"===P.a.OS?10:0,borderRadius:30,alignItems:"center",justifyContent:"space-between"},input:{backgroundColor:"transparent",paddingLeft:20,margin:3,color:J.inputText,flex:2,fontSize:15,height:35,alignSelf:"center",justifyContent:"center"},rightIconButtonStyle:{justifyContent:"center",alignItems:"center",paddingRight:20,paddingLeft:10,borderLeftWidth:1,borderLeftColor:"#fff"},swipeToCancelView:{flexDirection:"row",alignItems:"center",marginRight:30},swipeText:{color:J.description,fontSize:15},emoticonButton:{justifyContent:"center",alignItems:"center",paddingLeft:10},recordingActive:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:10},recordingTime:{color:J.description,fontSize:20,marginLeft:5},microphoneAndLock:{alignItems:"center",justifyContent:"flex-end"},lockView:{backgroundColor:"#eee",width:60,alignItems:"center",borderTopLeftRadius:30,borderTopRightRadius:30,height:130,paddingTop:20},sendButton:{backgroundColor:J.primary,borderRadius:40,height:40,width:40,alignItems:"center",justifyContent:"center",paddingRight:2}}),Se=function(e){var t=e.online,n=e.sendJsonMessage,r=Object(o.b)(),i=Object(o.c)(b),a=Object(z.useState)(""),s=D()(a,2),c=s[0],u=s[1],d=Object(z.useState)(J.description),f=D()(d,2),j=f[0],h=f[1],m=Object(z.useState)(!1),x=D()(m,2),p=x[0],y=x[1],O=Object(z.useState)(""),S=D()(O,2),T=S[0],C=S[1],k=Object(z.useRef)(void 0),_=Object(z.useRef)("");Object(z.useEffect)((function(){"web"===P.a.OS&&("SpeechRecognition"in window||"webkitSpeechRecognition"in window?(console.log("speech recognition API supported"),k.current=new window.webkitSpeechRecognition,k.current.continuous=!0,k.current.interimResults=!0,k.current.lang="cmn-Hant-TW",k.current.onstart=function(){y(!0),h(J.danger),_.current=c},k.current.onend=function(){y(!1),h(J.description)},k.current.onresult=function(e){for(var t,n="",r="",o=pe(e.results);!(t=o()).done;){var i=t.value;i[0].confidence<1e-6||(i.isFinal?r+=i[0].transcript:n+=i[0].transcript)}C(n),u(_.current+r)},k.current.onerror=function(e){"not-allowed"===e.error&&(console.log("webkitSpeechRecognition event: onerror"),console.log(e))}):console.log("speech recognition API not supported"))}),[]);return Object(Y.jsx)(je.a,{behavior:"ios"===P.a.OS?"padding":"height",style:Oe.container,children:Object(Y.jsxs)(E.a,{style:Oe.innerContainer,children:[Object(Y.jsxs)(E.a,{style:Oe.inputAndMicrophone,children:[Object(Y.jsx)(fe.a,{multiline:!0,placeholder:"Type something...",style:Oe.input,value:c,onChangeText:function(e){return u(e)}}),Object(Y.jsx)(N.a,{style:Oe.rightIconButtonStyle,onPress:function(){return ge.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:"web"===P.a.OS&&k.current.start();case 1:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(Y.jsx)(W.a,{name:"microphone",size:23,color:j})})]}),Object(Y.jsx)(N.a,{style:Oe.sendButton,disabled:!t,onPress:function(){if(""!==c){var e=q(),t=D()(e,2),o=t[0],a=t[1],s={author:"user",type:"text",message:c,time:o+":"+a};n(s),"/done"!==c?r(g(i.concat(s))):(r(g([])),r(w(-100)),r(l({})),r(v([]))),u("")}},children:Object(Y.jsx)(W.a,{name:"send",size:23,color:J.white})}),Object(Y.jsx)(he.a,{isVisible:p,useNativeDriver:!0,backdropOpacity:.5,children:Object(Y.jsx)(xe,{webSpeechMiddleResult:T,stopRecording:function(){return ge.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:"web"===P.a.OS&&k.current.stop();case 1:case"end":return e.stop()}}),null,null,null,Promise)}})})]})})},we=n(69),ve=n(33),Te=n(127),Ce=n(38),ke=M.a.create({messageView:{backgroundColor:"transparent",maxWidth:"80%"},Textmessage:{color:"white",alignSelf:"flex-start",fontSize:15}}),_e=function(e){var t=e.messageContent,n=e.isOnLeft,r=e.messageType,o=e.isComplete;return Object(Y.jsx)(E.a,{style:ke.messageView,children:Object(Y.jsx)(V.a,{style:[ke.Textmessage,n(r),o?{color:"#d1d2de"}:{}],children:t})})},Re=n(136),Le=M.a.create({container:{paddingVertical:10,marginVertical:5},startText:{},messageContainer:{backgroundColor:"#1D2671",maxWidth:"90%",alignSelf:"flex-end",flexDirection:"row",borderRadius:15,paddingHorizontal:10,marginHorizontal:10,paddingTop:8,paddingBottom:8,shadowColor:"grey",shadowOpacity:.3,shadowOffset:{width:0,height:3},elevation:5},startmessageContainer:{maxWidth:"90%",alignSelf:"flex-end",flexDirection:"row",borderRadius:15,paddingHorizontal:10,marginHorizontal:10,paddingTop:8,paddingBottom:8,shadowColor:"grey",shadowOpacity:.3,shadowOffset:{width:0,height:3},elevation:5},timeView:{backgroundColor:"transparent",justifyContent:"flex-end",paddingLeft:10},time:{color:"lightgray",fontSize:10},iconContainer:{justifyContent:"center",alignItems:"center",fontSize:30},rightIconButtonStyle:{justifyContent:"center",alignItems:"center",paddingRight:20,paddingLeft:5},messageView:{backgroundColor:"transparent",maxWidth:"80%"},Textmessage:{color:"white",alignSelf:"flex-start",fontSize:15}}),Ae=function(e){var t=e.index,n=e.message,r=e.isOnLeft,i=e.floor,a=e.messageType,s=e.time,c=e.isLeft,l=Object(o.b)(),g=Object(o.c)(y),f=Object(o.c)(h),j=g.indexOf(Number(i)),b=Object(o.c)(O),m=Ce.default.createAnimatedComponent(W.a),x=Object(Ce.useSharedValue)(0),p=Object(Ce.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateX:x.value}]}};return e._closure={x:x},e.asString="function _f(){const{x}=jsThis._closure;{return{transform:[{translateX:x.value}]};}}",e.__workletHash=5278836605383,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.InnerBox.jsx (36:33)",e.__optimalization=3,e}()),S=.2*-ve.a.get("window").width,v=Object(Ce.useAnimatedGestureHandler)({onActive:function(){var e=function(e,t){c&&(x.value=e.translationX)};return e._closure={isLeft:c,x:x},e.asString="function _f(event,ctx){const{isLeft,x}=jsThis._closure;{if(isLeft){x.value=event.translationX;}}}",e.__workletHash=8564512488414,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.InnerBox.jsx (45:12)",e}(),onEnd:function(){var e=function(e,t){x.value<S&&Object(Ce.runOnJS)(Re.a)(n),x.value=Object(Ce.withTiming)(0)};return e._closure={x:x,TRANSLATE_X_THRESHOLD:S,runOnJS:Ce.runOnJS,Speech:{speak:Re.a},message:n,withTiming:Ce.withTiming},e.asString="function _f(event,ctx){const{x,TRANSLATE_X_THRESHOLD,runOnJS,Speech,message,withTiming}=jsThis._closure;{const shouldBeDismissed=x.value<TRANSLATE_X_THRESHOLD;if(shouldBeDismissed){runOnJS(Speech.speak)(message);}x.value=withTiming(0);}}",e.__workletHash=0xa80562bef85,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.InnerBox.jsx (50:9)",e}()}),C=Object(Ce.useAnimatedStyle)(function(){var e=function(){return{opacity:Object(Ce.withTiming)((x.value,1))}};return e._closure={withTiming:Ce.withTiming,x:x,TRANSLATE_X_THRESHOLD:S},e.asString="function _f(){const{withTiming,x,TRANSLATE_X_THRESHOLD}=jsThis._closure;{const opacity=withTiming(x.value<TRANSLATE_X_THRESHOLD?1:1);return{opacity:opacity};}}",e.__workletHash=6006327755949,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.InnerBox.jsx (60:37)",e.__optimalization=2,e}());return Object(Y.jsx)(E.a,{style:[Le.container],children:Object(Y.jsx)(Te.b,{onGestureEvent:v,onHandlerStateChange:function(e){e.nativeEvent.translationX>40&&(l(u(t)),l(d(i)),l(T(j)),l(w(i)),console.log("complete floor index, index and floor : ",j,t,i))},children:Object(Y.jsxs)(Ce.default.View,{style:[Le.messageContainer,r("messageContainer"),p],children:[Object(Y.jsx)(_e,{messageContent:n,isOnLeft:r,messageType:a,isComplete:j<b||j==b&&t<f}),Object(Y.jsx)(E.a,{style:Le.timeView,children:Object(Y.jsx)(V.a,{style:[Le.time,r("time")],children:s})}),Object(Y.jsxs)(Ce.default.View,{style:[Le.iconContainer,C],children:[Object(Y.jsx)(m,{name:"volume-up",color:J.description,style:{left:30}}),Object(Y.jsx)(m,{name:"long-arrow-left",color:J.description,style:{left:30}})]})]})})})},He=M.a.create({container:{paddingVertical:10,marginVertical:5},startText:{},messageContainer:{backgroundColor:"#1D2671",maxWidth:"90%",alignSelf:"flex-end",flexDirection:"row",borderRadius:15,paddingHorizontal:10,marginHorizontal:10,paddingTop:8,paddingBottom:8,shadowColor:"grey",shadowOpacity:.3,shadowOffset:{width:0,height:3},elevation:5},startmessageContainer:{maxWidth:"90%",alignSelf:"flex-end",flexDirection:"row",borderRadius:15,paddingHorizontal:10,marginHorizontal:10,paddingTop:8,paddingBottom:8,shadowColor:"grey",shadowOpacity:.3,shadowOffset:{width:0,height:3},elevation:5},timeView:{backgroundColor:"transparent",justifyContent:"flex-end",paddingLeft:10},time:{color:"lightgray",fontSize:10},iconContainer:{justifyContent:"center",alignItems:"center",fontSize:30},rightIconButtonStyle:{justifyContent:"center",alignItems:"center",paddingRight:20,paddingLeft:5},messageView:{backgroundColor:"transparent",maxWidth:"80%"},Textmessage:{color:"white",alignSelf:"flex-start",fontSize:15}}),De=function(e){var t=e.messageContent,n=e.isOnLeft,r=e.messageType,o=e.time,i=e.isLeft,a=e.floor,s=Object(z.useState)(!1),c=D()(s,2),l=c[0],u=c[1],d=Object(Ce.useSharedValue)(0),g=t[0].subCategory,f=Object(Ce.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateX:d.value}]}};return e._closure={x:d},e.asString="function _f(){const{x}=jsThis._closure;{return{transform:[{translateX:x.value}]};}}",e.__workletHash=5278836605383,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.Expandable.jsx (18:33)",e.__optimalization=3,e}());ve.a.get("window").width;return Object(Y.jsxs)(E.a,{children:[Object(Y.jsx)(N.a,{onPress:function(){return u((function(e){return!e}))},children:Object(Y.jsx)(E.a,{style:[He.container],children:Object(Y.jsx)(Ce.default.View,{style:f,children:Object(Y.jsx)(E.a,{style:[He.messageContainer,n("messageContainer")],children:Object(Y.jsxs)(V.a,{style:He.HeadText,children:[t[0].categoryName+"\u4e4b\u6307\u793a ",Object(Y.jsx)(W.a,{name:l?"arrow-up":"arrow-down",color:J.description,style:[{left:30}]})]})})})})}),l&&g.map((function(e,t){return Object(Y.jsx)(Ae,{index:e.index,message:e.name,isOnLeft:n,floor:a,messageType:r,time:o,isLeft:i},t)}))]})},ze=n(85),Me=M.a.create({container:{flex:1,width:"100%"},tinyLogo:{width:20,height:20,margin:"auto",marginVertical:3,marginHorizontal:3,overflow:"hidden"},flatli:{backgroundColor:"white"},item:{backgroundColor:"#48b8e8",padding:10,borderRadius:15,marginVertical:10,marginHorizontal:6,display:"flex",flexDirection:"column"},title:{alignContent:"center",alignSelf:"center",justifyContent:"center",fontSize:20},titleView:{display:"flex",flexDirection:"row"}}),Ee=function(e){var t=e.messageContent,n=e.isOnLeft,r=e.messageType,i=e.sendJsonMessage,a=e.optionRefDec,s=Object(o.b)(),c=Object(o.c)(b),l=function(e){var t=e.item,n=e.index;return Object(Y.jsx)(N.a,{onPress:function(){return function(e){var t=q(),n=D()(t,2),o=n[0],a=n[1],l="";switch(r){case"option-START":l="\u6211\u5728";break;case"option-END":l="\u6211\u8981\u53bb";break;case"option-ask":l="\u6211\u7684\u5c0d\u9762\u662f"}var u=e,d={author:"user",message:u,time:o+":"+a,type:"text"};s(g(c.concat(d))),i(d={author:"user",message:u=l+u,time:o+":"+a,type:"text"})}(t)},style:[Me.item],children:Object(Y.jsxs)(E.a,{children:[Object(Y.jsxs)(E.a,{style:[Me.titleView],children:["option-options"!=r?Object(Y.jsx)(G.a,{style:Me.tinyLogo,source:{uri:"https://appapi-tc.fg-retail.com.tw//Image/Upload/20210926/eee83edf-904a-471b-a421-4a37aa58cd52.jpg"}}):null,Object(Y.jsx)(V.a,{style:Me.title,children:t})]}),void 0==a?null:Object(Y.jsx)(V.a,{style:Me.title,children:a[n]})]})})};return Object(Y.jsx)(E.a,{style:[Me.container,n("messageContainer")],children:Object(Y.jsx)(ze.a,{style:Me.flatli,extraData:a,data:t,keyExtractor:function(e){return e},renderItem:function(e,t){return l(e)},horizontal:!0})})},Be=M.a.create({container:{paddingVertical:10,marginVertical:5},messageContainer:{backgroundColor:"#1D2671",maxWidth:"90%",alignSelf:"flex-end",flexDirection:"row",borderRadius:15,paddingHorizontal:10,marginHorizontal:10,paddingTop:8,paddingBottom:8,shadowColor:"grey",shadowOpacity:.3,shadowOffset:{width:0,height:3},elevation:5},rightIconButtonStyle:{justifyContent:"center",alignItems:"center",paddingRight:20,paddingLeft:5}}),Pe=function(e){var t=e.isOnLeft,n=e.sendJsonMessage,r=Object(o.c)(j);return Object(Y.jsx)(E.a,{style:[Be.container],children:Object(Y.jsx)(E.a,{style:[Be.messageContainer,t("startmessageContainer")],children:Object(Y.jsx)(N.a,{style:Be.rightIconButtonStyle,onPress:function(){if(!(Object.keys(r).length>0)){n({author:"user",message:"<:START:>",type:"text"})}},children:Object(Y.jsxs)(V.a,{style:{color:"white"},children:["START",Object(Y.jsx)(W.a,{name:"play",size:15,color:"white"})]})})})})},Ie=M.a.create({container:{paddingVertical:10,marginVertical:5},messageContainer:{backgroundColor:"#1D2671",maxWidth:"90%",alignSelf:"flex-end",flexDirection:"row",borderRadius:15,paddingHorizontal:10,marginHorizontal:10,paddingTop:8,paddingBottom:8,shadowColor:"grey",shadowOpacity:.3,shadowOffset:{width:0,height:3},elevation:5},timeView:{backgroundColor:"transparent",justifyContent:"flex-end",paddingLeft:10},time:{color:"lightgray",fontSize:10},iconContainer:{justifyContent:"center",alignItems:"center",fontSize:30}}),Ve=function(e){var t=e.time,n=e.isLeft,r=e.message,o=e.messageType,i=e.floor,a=(e.index,e.optionRefDec),s=(e.setScrollState,e.sendJsonMessage),c=Object(Ce.useSharedValue)(0),l=Object(Ce.useSharedValue)(12),u=Ce.default.createAnimatedComponent(W.a),d=.2*-ve.a.get("window").width,g=function(e){return n&&"messageContainer"===e?{alignSelf:"flex-start",backgroundColor:"#f0f0f0",borderTopLeftRadius:0}:n&&"startmessageContainer"===e?{alignSelf:"flex-start",backgroundColor:"#1B17E6",borderTopLeftRadius:0}:n&&"text"===e||n&&"instructiontext"===e?{color:"#000"}:n&&"time"===e?{color:"darkgray"}:{borderTopRightRadius:0}},f=Object(Ce.useAnimatedGestureHandler)({onActive:function(){var e=function(e,t){n&&e.translationX<0&&(c.value=e.translationX,l.value=e.translationX)};return e._closure={isLeft:n,x:c,largerscale:l},e.asString="function _f(event,ctx){const{isLeft,x,largerscale}=jsThis._closure;{if(isLeft&&event.translationX<0){x.value=event.translationX;largerscale.value=event.translationX;}}}",e.__workletHash=0xd95d7ca07bd,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.Main.jsx (68:12)",e}(),onEnd:function(){var e=function(e,t){c.value<d&&Object(Ce.runOnJS)(Re.a)(r),c.value=Object(Ce.withTiming)(0),l.value=Object(Ce.withTiming)(0)};return e._closure={x:c,TRANSLATE_X_THRESHOLD:d,runOnJS:Ce.runOnJS,Speech:{speak:Re.a},message:r,withTiming:Ce.withTiming,largerscale:l},e.asString="function _f(event,ctx){const{x,TRANSLATE_X_THRESHOLD,runOnJS,Speech,message,withTiming,largerscale}=jsThis._closure;{const shouldBeDismissed=x.value<TRANSLATE_X_THRESHOLD;if(shouldBeDismissed){runOnJS(Speech.speak)(message);}x.value=withTiming(0);largerscale.value=withTiming(0);}}",e.__workletHash=3111948069289,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.Main.jsx (74:9)",e}()}),j=Object(Ce.useAnimatedStyle)(function(){var e=function(){return{opacity:Object(Ce.withTiming)((c.value,1))}};return e._closure={withTiming:Ce.withTiming,x:c,TRANSLATE_X_THRESHOLD:d},e.asString="function _f(){const{withTiming,x,TRANSLATE_X_THRESHOLD}=jsThis._closure;{const opacity=withTiming(x.value<TRANSLATE_X_THRESHOLD?1:1);return{opacity:opacity};}}",e.__workletHash=6006327755949,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.Main.jsx (87:37)",e.__optimalization=2,e}()),h=Object(Ce.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateX:c.value}]}};return e._closure={x:c},e.asString="function _f(){const{x}=jsThis._closure;{return{transform:[{translateX:x.value}]};}}",e.__workletHash=5278836605383,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.Main.jsx (96:30)",e.__optimalization=3,e}()),b=Object(Ce.useAnimatedStyle)(function(){var e=function(){return{fontSize:Object(Ce.withTiming)(l.value<d?20:12)}};return e._closure={withTiming:Ce.withTiming,largerscale:l,TRANSLATE_X_THRESHOLD:d},e.asString="function _f(){const{withTiming,largerscale,TRANSLATE_X_THRESHOLD}=jsThis._closure;{const fontSize=withTiming(largerscale.value<TRANSLATE_X_THRESHOLD?20:12);return{fontSize:fontSize};}}",e.__workletHash=5166484404867,e.__location="D:\\ProgramingProject\\Deploy\\NavigatorApp-Expo\\components\\Message.Main.jsx (102:34)",e.__optimalization=2,e}());switch(o){case"state":return Object(Y.jsx)(Pe,{isOnLeft:g,sendJsonMessage:s});case"option-START":case"option-END":case"option-ASK":return Object(Y.jsx)(Ee,{messageContent:r,isOnLeft:g,messageType:o,sendJsonMessage:s,optionRefDec:a});case"option-options":return Object(Y.jsx)(Ee,{messageContent:r,isOnLeft:g,messageType:o,sendJsonMessage:s});case"instructiontext":return Object(Y.jsx)(De,{messageContent:r,isOnLeft:g,messageType:o,time:t,isLeft:n,floor:i});case"text":return Object(Y.jsx)(E.a,{style:[Ie.container],children:Object(Y.jsx)(Te.b,{onGestureEvent:f,children:Object(Y.jsx)(Ce.default.View,{style:h,children:Object(Y.jsxs)(E.a,{style:[Ie.messageContainer,g("messageContainer")],children:[Object(Y.jsx)(_e,{isOnLeft:g,messageType:o,messageContent:r,isComplete:!1}),Object(Y.jsx)(E.a,{style:Ie.timeView,children:Object(Y.jsx)(V.a,{style:[Ie.time,g("time")],children:t})}),Object(Y.jsxs)(Ce.default.View,{style:[Ie.iconContainer,j],children:[Object(Y.jsx)(u,{name:"volume-up",color:J.description,style:[{left:30},b]}),Object(Y.jsx)(u,{name:"long-arrow-left",color:J.description,style:[{left:30},b]})]})]})})})});case"image":return Object(Y.jsx)(E.a,{})}},Ne=function(e){var t=e.sendJsonMessage,n=Object(z.useRef)("user"),r=Object(z.useRef)(),i=Object(z.useState)(!0),a=D()(i,2),s=a[0],c=a[1],l=Object(o.b)(),d=Object(o.c)(b),g=Object(o.c)(f),j=Object(o.c)(p),h=Object(o.c)(O);return Object(z.useEffect)((function(){for(var e=[],t=0,n=d.length;t<n;++t){var r=d[t];if("image"===r.type){var o=Number(r.floor);e.push(o),-100==j&&(l(w(o)),l(u(0)))}}e.length>0&&-1==h&&l(T(0)),l(v(e))}),[g]),Object(Y.jsx)(we.a,{style:{backgroundColor:J.white,flex:1},ref:r,onContentSizeChange:function(){r.current.scrollToEnd({animated:!0})},scrollEnabled:s,children:Object(Y.jsx)(je.a,{behavior:P.a&&"ios"===P.a.OS?"padding":"height",style:{flex:1},children:Object(Y.jsx)(Te.a,{children:d.map((function(e,r){return void 0!=e.author?Object(Y.jsx)(Ve,{time:e.time,isLeft:e.author!==n.current,message:e.message,messageType:e.type,floor:e.floor,index:e.index,optionRefDec:e.optionRefDec,setScrollState:c,sendJsonMessage:t},r):null}))})})})};function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Je=M.a.create({container:{flex:1}}),Fe=function(e){e.navigation;var t,n=Object(z.useState)("Indoor Navigation"),r=D()(n,2),i=r[0],a=(r[1],Object(z.useState)("wss://"+$+":808/websocket")),s=D()(a,2),u=s[0],d=(s[1],Object(z.useState)(!1)),h=D()(d,2),m=h[0],x=h[1],p=Object(o.b)(),y=Object(o.c)(f),O=Object(o.c)(j),S=Object(o.c)(b),w=Object(I.b)(u,{onOpen:function(){console.log("connected"),x(!0)},onError:function(e){console.log("[CHATBOTIASL][ERROR][WEBSOCKET]:",e)},shouldReconnect:function(e){return!0},reconnectAttempts:30,reconnectInterval:3e3}),v=w.sendJsonMessage,T=w.lastJsonMessage,C=w.readyState,k=(t={},A()(t,I.a.CONNECTING,"Connecting"),A()(t,I.a.OPEN,"Open"),A()(t,I.a.CLOSING,"Closing"),A()(t,I.a.CLOSED,"Closed"),A()(t,I.a.UNINSTANTIATED,"Uninstantiated"),t)[C];return Object(z.useEffect)((function(){x("Open"===k)}),[k]),Object(z.useEffect)((function(){if("web"!=P.a.OS&&console.log("message : ",T),null!==T&&T!=={}){if(void 0!==T.instructions){try{var e=We(We({},y),T.instructions);p(c(e))}catch(n){}if("instructiontext"===T.type){var t=JSON.parse(JSON.stringify(O));t[T.floor]=T.message[0],p(l(t))}}p(g(S.concat(T)))}}),[T]),Object(z.useEffect)((function(){console.log("Your platform :",P.a.OS)}),[]),Object(Y.jsxs)(E.a,{style:Je.container,children:[Object(Y.jsx)(B.a,{backgroundColor:"#b3e6ff",barStyle:"dark-content"}),Object(Y.jsx)(oe,{botname:i,locationName:"\u9060\u96c4\u5ee3\u5834",onlineStatus:m,sendJsonMessage:v}),Object(Y.jsx)(ue,{}),Object(Y.jsx)(Ne,{sendJsonMessage:v}),Object(Y.jsx)(Se,{online:m,sendJsonMessage:v})]})},Ge=n(165),Ye=n(166),Ue=n(279),Ze=M.a.create({crossPlatformContainer:{flex:1,paddingTop:(P.a.OS,0)},headerContainer:{alignSelf:"stretch",flexDirection:"row",justifyContent:"space-between"},bodyContainer:{flexGrow:1,backgroundColor:"#EAF0F2"},bottomContainer:{marginHorizontal:0,backgroundColor:"red"},goBackBotton:{flexGrow:1},calibrationButtonViewStyle:{backgroundColor:"white",flexGrow:1},calibrationButtonTextStyle:{color:"black",textAlign:"center"},stopButtonViewStyle:{backgroundColor:"#e6658c",flexGrow:1,justifyContent:"center"},bgImageStyle:{alignSelf:"center"},guideContainer:{backgroundColor:"#198039",paddingVertical:12,paddingHorizontal:15},mainTextStyle:{color:"white",fontSize:18,fontWeight:"500"},multiColumnContaner:{flexDirection:"row",justifyContent:"space-between"},subKeywordViewContainer:{width:86,backgroundColor:"#eff2d7",paddingVertical:10,paddingHorizontal:15,justifyContent:"center"},subKeywordStyle:{textAlign:"center",fontSize:16},subTextViewContainer:{justifyContent:"center",paddingHorizontal:10,backgroundColor:"#d7f3da",flexGrow:1,flexShrink:1},subTextStyle:{fontSize:15,textAlign:"center"},paginationButtonContainer:{flexGrow:1,backgroundColor:"#0d662e"},buttonTextStyle:{paddingVertical:10,textAlign:"center",fontSize:14,color:"white",fontWeight:"500"},modalViewContainer:{justifyContent:"space-between",backgroundColor:"white",height:120,borderRadius:10,padding:15},modalTextStyle:{fontSize:20,textAlign:"center"},modalYesButtonStyle:{color:"#4584fc",paddingHorizontal:18,fontSize:16},modalNoButtonStyle:{color:"#858585",paddingHorizontal:18,fontSize:16}}),Ke=function(e){var t=e.route,n=e.navigation,r=t.params.sendJsonMessage,i=Object(o.b)(),a=Object(o.c)(f),s=Object(o.c)(p),c=Object(o.c)(j),d=Object(o.c)(h),b=Object(o.c)(y),m=Object(o.c)(O),x=function(e,t,n){if(e<0)return 0==n&&0==t?{flag:!1,result:[]}:0!=n?{flag:!0,result:[{index:n-1}]}:{flag:!0,result:[{floor:t-1},{index:c[b[t-1]].subCategory.length-1}]};var r=c[b[t]].subCategory;return t==b.length-1&&n==r.length-1?{flag:!1,result:[]}:n<r.length-1?{flag:!0,result:[{index:n+1}]}:{flag:!0,result:[{index:0},{floor:t+1}]}},S=function(){return b.length>0&&-1!==d},C=function(e,t){if(!S())return"";var n=x(1,e,t);if(n.flag){var r=e,o=t;return n.result.forEach((function(e){void 0!==e.index?o=e.index:r=e.floor})),c[b[r]].subCategory[o].name}return"(\u5df2\u5b8c\u6210)"},k=Object(z.useState)(C(m,d)),_=D()(k,2),R=_[0],L=_[1],A=function(e){var t=x(e,m,d);if(t.flag){var n=m,r=d;t.result.forEach((function(e){void 0!==e.index?(r=e.index,i(u(e.index))):(n=e.floor,i(T(e.floor)),i(w(b[e.floor])))})),L(C(n,r))}else e>0&&(Re("\u4f60\u5df2\u5b8c\u6210\u5c0e\u822a\u8def\u5f91\uff0c\u78ba\u5b9a\u8981\u7d50\u675f\u55ce?"),Te(!0))},H=Object(z.useState)("https://"+$+":809/static/image/03.jpeg"),M=D()(H,2),B=M[0],P=M[1],I=Object(z.useState)("M 0 0 L 0 0"),X=D()(I,2),W=X[0],J=X[1],F=Object(z.useRef)(),G=Object(z.useRef)(4),U={x:512,y:278.5},Z={x:512,y:378.5},K=Object(z.useRef)(Z),re=Object(z.useState)(0),oe=D()(re,2),le=oe[0],ue=oe[1],de=function(e){return[e.x/2.5*4,e.y/2.5*4]},ge={x:0,y:0},fe=Object(z.useState)({x:0,y:0}),je=D()(fe,2),be=(je[0],je[1],Object(z.useRef)({x:0,y:0})),me=Object(z.useRef)({x:0,y:0}),xe=function(e){var t=e-le,n=function(e,t,n){var r={x:e.x-t.x,y:e.y-t.y},o=ne(r,n);return{x:t.x+o.x,y:t.y+o.y}}(K.current,U,-t);K.current={x:n.x,y:n.y}},pe=function(e,t){var n,r=-(te(t.x-e.x,t.y-e.y)+90);return ue(n=r),xe(n),r},ye=function(e){var t=pe(e[d],e[d+1]),n=ee(K.current,e[d]),r=ne(n,t),o=de(r),i=D()(o,2),a=i[0],s=i[1];F.current.moveBy(a,s),ge=e[d],K.current={x:ge.x,y:ge.y},be.current={x:be.current.x+a,y:be.current.y+s},me.current=be.current},Oe=function(e,t){if(!1!==t||d!=e.length-1)if(4!==G.current)F.current.zoomTo(4),setTimeout((function(){var n={x:-(me.current.x-be.current.x),y:-(me.current.y-be.current.y)};F.current.moveBy(n.x,n.y),G.current=4,me.current=be.current,!1===t&&ye(e)}),1200);else if(me.current!==be.current){var n={x:-(me.current.x-be.current.x),y:-(me.current.y-be.current.y)};F.current.moveBy(n.x,n.y),me.current=be.current,!1===t&&ye(e)}else!1===t&&ye(e);else console.log("\u5230\u6700\u5f8c\u4e00\u9ede\u4e86")};Object(z.useEffect)((function(){if(s>-100&&d>=0){var e=a[s.toString()],t=function(e){var t=[];return e.forEach((function(e){t.push({x:e[0],y:e[1]})})),t}(e);d>0&&(e=e.slice(d)),J(Q(e)),P("https://"+$+":809/static/image/0"+s+".jpeg"),Oe(t,!1)}else J("M 0 0 L 0 0"),P("https://"+$+":809/static/image/iFG-cover.jpg")}),[s,d]);var Se=Object(z.useState)(!1),we=D()(Se,2),ve=we[0],Te=we[1],Ce=Object(z.useState)("\u4f60\u5df2\u5b8c\u6210\u5c0e\u822a\u8def\u5f91\uff0c\u78ba\u5b9a\u8981\u7d50\u675f\u55ce?"),ke=D()(Ce,2),_e=ke[0],Re=ke[1];return Object(Y.jsxs)(Ye.a,{style:Ze.crossPlatformContainer,children:[Object(Y.jsxs)(E.a,{style:Ze.headerContainer,children:[Object(Y.jsx)(Ge.a,{style:Ze.goBackView,title:"\u56de\u5230\u5c0d\u8a71\u6a21\u5f0f",onPress:function(){return n.goBack()}}),Object(Y.jsx)(N.a,{style:Ze.calibrationButtonViewStyle,onPress:function(){Oe(void 0,!0)},children:Object(Y.jsxs)(V.a,{style:Ze.calibrationButtonTextStyle,children:["\u5b9a\u4f4d\u56de\u5c0e\u822a\u9ede",Object(Y.jsx)(Ue.a,{name:"crosshairs-gps",color:"black",size:25})]})}),Object(Y.jsx)(N.a,{style:Ze.stopButtonViewStyle,onPress:function(){return Re("\u4f60\u9084\u672a\u5230\u9054\u76ee\u7684\u5730\uff0c\u78ba\u5b9a\u8981\u7d50\u675f\u55ce?"),void Te(!0)},children:Object(Y.jsx)(V.a,{style:Ze.calibrationButtonTextStyle,children:"\u7d50\u675f"})})]}),Object(Y.jsx)(E.a,{style:Ze.bodyContainer,children:Object(Y.jsx)(ae.a,{maxZoom:10,minZoom:1,zoomStep:.5,initialZoom:4,bindToBorders:!1,onTransform:function(e){G.current=e.zoomLevel,me.current={x:-e.offsetX*e.zoomLevel,y:-e.offsetY*e.zoomLevel}},ref:F,children:Object(Y.jsx)(ie.a,{source:{uri:B},style:[Ze.bgImageStyle,{width:409.6,height:222.8,transform:[{rotate:le+"deg"},{translateX:0}]}],children:Object(Y.jsxs)(ce.a,{width:409.6,height:222.8,viewBox:"0 0 1024 557",children:[Object(Y.jsxs)(se.Defs,{children:[Object(Y.jsx)(se.Marker,{id:"MapModeTriangle",viewBox:"0 0 10 10",refX:"0",refY:"5",markerUnits:"strokeWidth",markerWidth:"3",markerHeight:"3",orient:"auto",children:Object(Y.jsx)(se.Path,{d:"M 0 0 L 10 5 L 0 10 z",fill:"black",stroke:"red",strokeWidth:"1"})}),Object(Y.jsx)(se.Marker,{id:"MapModestartPoint",viewBox:"0 0 10 10",refX:"5",refY:"5",markerUnits:"strokeWidth",markerWidth:"3",markerHeight:"3",orient:"auto",children:Object(Y.jsx)(se.Circle,{cx:"5",cy:"5",r:"8",fill:"green"})}),Object(Y.jsx)(se.Marker,{id:"MapModemidPoint",viewBox:"0 0 10 10",refX:"5",refY:"5",markerUnits:"strokeWidth",markerWidth:"2",markerHeight:"2",orient:"auto",children:Object(Y.jsx)(se.Circle,{cx:"5",cy:"5",r:"8",fill:"grey"})})]}),Object(Y.jsx)(se.Path,{d:W,fill:"none",stroke:"#ff3333",strokeWidth:"5",markerStart:"url(#MapModestartPoint)",markerMid:"url(#MapModemidPoint)",markerEnd:"url(#MapModeTriangle)"})]})})})}),S()?Object(Y.jsxs)(E.a,{style:Ze.bottomContainer,children:[Object(Y.jsx)(E.a,{style:Ze.guideContainer,children:Object(Y.jsx)(V.a,{style:Ze.mainTextStyle,children:c[b[m]].subCategory[d].name})}),Object(Y.jsxs)(E.a,{style:[Ze.multiColumnContaner],children:[Object(Y.jsx)(E.a,{style:Ze.subKeywordViewContainer,children:Object(Y.jsx)(V.a,{style:Ze.subKeywordStyle,children:"\u63a5\u4e0b\u4f86"})}),Object(Y.jsx)(E.a,{style:Ze.subTextViewContainer,children:Object(Y.jsx)(V.a,{style:Ze.subTextStyle,children:R})})]}),Object(Y.jsxs)(E.a,{style:Ze.multiColumnContaner,children:[Object(Y.jsx)(N.a,{style:[Ze.paginationButtonContainer,{borderRightColor:"white",borderRightWidth:.5}],onPress:function(){return A(-1)},children:Object(Y.jsx)(V.a,{style:Ze.buttonTextStyle,children:"\u4e0a\u4e00\u6b65"})}),Object(Y.jsx)(N.a,{style:[Ze.paginationButtonContainer,{borderLeftColor:"white",borderLeftWidth:.5}],onPress:function(){return A(1)},children:Object(Y.jsx)(V.a,{style:Ze.buttonTextStyle,children:"\u4e0b\u4e00\u6b65"})})]})]}):Object(Y.jsx)(E.a,{style:Ze.bottomContainer}),Object(Y.jsx)(he.a,{isVisible:ve,children:Object(Y.jsxs)(E.a,{style:Ze.modalViewContainer,children:[Object(Y.jsx)(V.a,{style:Ze.modalTextStyle,children:_e}),Object(Y.jsxs)(E.a,{style:{flexDirection:"row",justifyContent:"flex-end"},children:[Object(Y.jsx)(N.a,{onPress:function(){Te(!1),n.navigate("ChatBot");var e=q(),t=D()(e,2),o=t[0],a=t[1];r({author:"user",type:"text",message:"/done",time:o+":"+a}),i(g([])),i(l({})),i(w(-100)),i(v([]))},children:Object(Y.jsx)(V.a,{style:Ze.modalYesButtonStyle,children:"\u662f"})}),Object(Y.jsx)(N.a,{onPress:function(){Te(!1)},children:Object(Y.jsx)(V.a,{style:Ze.modalNoButtonStyle,children:"\u5426"})})]})]})})]})},$e=Object(R.a)();function qe(){return Object(Y.jsxs)($e.Navigator,{initialRouteName:"ChatBot",screenOptions:function(e){e.route,e.navigation;return{headerShown:!1,gestureEnabled:!0}},children:[Object(Y.jsx)($e.Screen,{name:"ChatBot",component:Fe}),Object(Y.jsx)($e.Screen,{name:"MapNavigation",component:Ke})]})}n(398);Object(r.a)((function(){return Object(Y.jsx)(o.a,{store:k,children:Object(Y.jsx)(_.a,{children:Object(Y.jsx)(qe,{})})})}))}},[[281,1,2]]]);
//# sourceMappingURL=app.b4709b7b.chunk.js.map