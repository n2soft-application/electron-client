"use strict";(self.webpackChunkthe_next=self.webpackChunkthe_next||[]).push([[103],{"./src/stories/components/loading/Loading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loading_stories});var react=__webpack_require__("./node_modules/react/index.js"),logo_white=__webpack_require__("./src/assets/images/logo/logo-white.svg"),logo=__webpack_require__("./src/assets/images/logo/logo.png"),useDarkMode=__webpack_require__("./src/hooks/layout/useDarkMode.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),es=__webpack_require__("./node_modules/recoil/es/index.js");let Loading_stories={title:"Components/Loading",component:function Loading(){let[isDark]=(0,useDarkMode.A)(),[isAuth,setAuth]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center app_height",children:[!isAuth&&(0,jsx_runtime.jsx)("div",{className:"mb-3",children:(0,jsx_runtime.jsx)("img",{src:isDark?logo_white.A:logo,alt:"Logo"})}),(0,jsx_runtime.jsxs)("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 ".concat(isAuth?"h-6 w-6":"h-12 w-12"," "),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,jsx_runtime.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,jsx_runtime.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),isAuth&&(0,jsx_runtime.jsxs)("span",{className:"inline-block mt-1 text-sm font-medium ",children:[" ","Loading ..."]})]})},parameters:{layout:"centered",componentSubtitle:"로딩",docs:{description:{component:"사용자가 어떤 작업이 진행 중임을 알리거나 기다릴 때 사용됩니다."}}},tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)(es.bi,{children:(0,jsx_runtime.jsx)(Story,{})})]},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/assets/images/logo/logo-white.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");let __WEBPACK_DEFAULT_EXPORT__=__webpack_require__.p+"static/media/logo-white.7f998df765819f748056b03b98d965bb.svg"},"./src/hooks/layout/useDarkMode.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_state_layout_layoutAtom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/state/layout/layoutAtom.ts");let __WEBPACK_DEFAULT_EXPORT__=()=>{let[isDark,setDarkMode]=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.L4)(_state_layout_layoutAtom__WEBPACK_IMPORTED_MODULE_2__.ne);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let body=window.document.body,classNames={dark:"dark",light:"light"};isDark?(body.classList.add(classNames.dark),body.classList.remove(classNames.light)):(body.classList.add(classNames.light),body.classList.remove(classNames.dark))},[isDark]),[isDark,setDarkMode]}},"./src/state/layout/layoutAtom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ne:()=>darkModeState,bo:()=>footerTypeState,Vy:()=>mobileMenuTypeState,j5:()=>monoChromeState,CS:()=>navbarTypeState,gE:()=>rtlState,Rm:()=>semiDarkModeState,Oq:()=>sidebarState,jf:()=>skinState,A:()=>typeState});var es=__webpack_require__("./node_modules/recoil/es/index.js");let{persistAtom}=function(){let config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof window)return{persistAtom:()=>{}};let{key="recoil-persist",storage=localStorage,converter=JSON}=config,updateState=(newValue,state,key,isReset)=>{isReset?delete state[key]:state[key]=newValue,setState(state)},getState=()=>{let toParse=storage.getItem(key);return null==toParse?{}:"string"==typeof toParse?parseState(toParse):"function"==typeof toParse.then?toParse.then(parseState):{}},parseState=state=>{if(null===state)return{};try{return converter.parse(state)}catch(e){return console.error(e),{}}},setState=state=>{try{"function"==typeof storage.mergeItem?storage.mergeItem(key,converter.stringify(state)):storage.setItem(key,converter.stringify(state))}catch(e){console.error(e)}};return{persistAtom:_ref=>{let{onSet,node,trigger,setSelf}=_ref;if("get"===trigger){let state=getState();"function"==typeof state.then&&state.then(s=>{s.hasOwnProperty(node.key)&&setSelf(s[node.key])}),state.hasOwnProperty(node.key)&&setSelf(state[node.key])}onSet(async(newValue,_,isReset)=>{let state=getState();"function"==typeof state.then?state.then(s=>updateState(newValue,s,node.key,isReset)):updateState(newValue,state,node.key,isReset)})}}}(),sidebarState=(0,es.eU)({key:"sidebarState",default:!1}),navbarTypeState=(0,es.eU)({key:"naverTypState",default:"sticky",effects_UNSTABLE:[persistAtom]}),skinState=(0,es.eU)({key:"skinState",default:"default",effects_UNSTABLE:[persistAtom]}),rtlState=(0,es.eU)({key:"rtlState",default:!1,effects_UNSTABLE:[persistAtom]}),typeState=(0,es.eU)({key:"typeState",default:"vertical",effects_UNSTABLE:[persistAtom]}),footerTypeState=(0,es.eU)({key:"footerTypeState",default:"hidden",effects_UNSTABLE:[persistAtom]}),darkModeState=(0,es.eU)({key:"darkModeState",default:!1,effects_UNSTABLE:[persistAtom]}),semiDarkModeState=(0,es.eU)({key:"semiDarkModeState",default:!1,effects_UNSTABLE:[persistAtom]});(0,es.eU)({key:"contentWidthState",default:"full",effects_UNSTABLE:[persistAtom]});let monoChromeState=(0,es.eU)({key:"monoChromeState",default:!1,effects_UNSTABLE:[persistAtom]});(0,es.eU)({key:"menuTypeState",default:{isCollapsed:!1,isHidden:!1},effects_UNSTABLE:[persistAtom]});let mobileMenuTypeState=(0,es.eU)({key:"mobileMenuTypeState",default:!1,effects_UNSTABLE:[persistAtom]});(0,es.eU)({key:"customizerTypeState",default:!1,effects_UNSTABLE:[persistAtom]})},"./src/assets/images/logo/logo.png":module=>{module.exports="data:image/png;base64,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"}}]);