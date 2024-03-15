"use strict";(self.webpackChunkthe_next=self.webpackChunkthe_next||[]).push([[663],{"./src/stories/components/dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_dropdown__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/dropdown/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",component:_components_dropdown__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered",componentSubtitle:"드롭다운",docs:{description:{component:""}}},tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})]},Default={name:"Default",storyName:"",args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"menu1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"menu2"})]}),classMenuItems:"",label:"dropdown"},parameters:{docs:{canvas:{sourceState:"shown"},description:{story:"기본 드롭다운입니다"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Default",\n  storyName: "",\n  args: {\n    children: <div>\n        <p>menu1</p>\n        <p>menu2</p>\n      </div>,\n    classMenuItems: "",\n    label: "dropdown"\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "shown"\n      },\n      description: {\n        story: "기본 드롭다운입니다"\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/menu/menu.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_icons_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/icons/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label="Dropdown",wrapperClass="inline-block",labelClass="label-class-custom",children,classMenuItems="mt-2 w-[220px]",items=[{label:"Action",link:"#"},{label:"Another action",link:"#"},{label:"Something else here",link:"#"}],classItem="px-4 py-2",className=""}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"relative ".concat(wrapperClass),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.W,{as:"div",className:"block w-full ".concat(className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.W.Button,{className:"block w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:labelClass,children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.e,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.W.Items,{className:"absolute ltr:right-0 rtl:left-0 origin-top-right  border border-slate-100\n            rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]\n            ".concat(classMenuItems,"\n            "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:children||(null==items?void 0:items.map((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.W.Item,{children:_ref2=>{let{active}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"".concat(active?"bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50":"text-slate-600 dark:text-slate-300"," block     ").concat(item.hasDivider?"border-t border-slate-100 dark:border-slate-700":""),children:item.link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.k2,{to:item.link,className:"block ".concat(classItem),children:item.icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{icon:item.icon})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block text-sm",children:item.label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block text-sm",children:item.label})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"block cursor-pointer ".concat(classItem),children:item.icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{icon:item.icon})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block text-sm",children:item.label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block text-sm",children:item.label})})})}},index)))})})})]})})};try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{label:{defaultValue:{value:"Dropdown"},description:"",name:"label",required:!1,type:{name:"ReactNode"}},wrapperClass:{defaultValue:{value:"inline-block"},description:"",name:"wrapperClass",required:!1,type:{name:"string"}},labelClass:{defaultValue:{value:"label-class-custom"},description:"",name:"labelClass",required:!1,type:{name:"string"}},classMenuItems:{defaultValue:{value:"mt-2 w-[220px]"},description:"",name:"classMenuItems",required:!1,type:{name:"string"}},items:{defaultValue:{value:'[\n    {\n      label: "Action",\n      link: "#",\n    },\n    {\n      label: "Another action",\n      link: "#",\n    },\n    {\n      label: "Something else here",\n      link: "#",\n    },\n  ]'},description:"",name:"items",required:!1,type:{name:"{ label: string; link: string; hasDivider?: boolean; icon?: string; }[] | undefined"}},classItem:{defaultValue:{value:"px-4 py-2"},description:"",name:"classItem",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/index.tsx#dropdown"]={docgenInfo:dropdown.__docgenInfo,name:"dropdown",path:"src/components/dropdown/index.tsx#dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/icons/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _iconify_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@iconify/react/dist/iconify.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Icon(_ref){let{width,rotate,hFlip,icon,className,vFlip}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.In,{width:width,rotate:rotate,hFlip:hFlip,icon:icon,className:className,vFlip:vFlip})}let __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},rotate:{defaultValue:null,description:"",name:"rotate",required:!1,type:{name:"number"}},hFlip:{defaultValue:null,description:"",name:"hFlip",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | IconifyIcon"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},vFlip:{defaultValue:null,description:"",name:"vFlip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/icons/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);