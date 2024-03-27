"use strict";(self.webpackChunkthe_next=self.webpackChunkthe_next||[]).push([[472],{"./src/stories/forms/radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,allTypes:()=>allTypes,default:()=>Radio_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Radio=_ref=>{let{label,id,name,disabled,value,onChange,activeClass="ring-slate-500 dark:ring-slate-400",wrapperClass=" ",labelClass="text-slate-500 dark:text-slate-400 text-sm leading-6",checked,className="h-[18px] w-[18px]"}=_ref;return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{className:"flex items-center ".concat(disabled?" cursor-not-allowed opacity-50":"cursor-pointer ")+""+wrapperClass,htmlFor:id,children:[(0,jsx_runtime.jsx)("input",{type:"radio",className:"hidden",name:name,value:value,checked:checked,onChange:onChange,id:id,disabled:disabled}),(0,jsx_runtime.jsx)("span",{className:" flex-none  bg-white dark:bg-slate-500 rounded-full border inline-flex mr-3 rtl:ml-3 relative transition-all duration-150\n          ".concat(className,"\n          ").concat(checked?activeClass+" ring-[6px]  ring-inset ring-offset-2 dark:ring-offset-slate-600  dark:ring-offset-4 border-slate-700":"border-slate-400 dark:border-slate-600 dark:ring-slate-700","\n          ")}),label&&(0,jsx_runtime.jsx)("span",{className:labelClass,children:label})]})})};try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:{value:"h-[18px] w-[18px]"},description:"",name:"className",required:!1,type:{name:"string"}},activeClass:{defaultValue:{value:"ring-slate-500 dark:ring-slate-400"},description:"",name:"activeClass",required:!1,type:{name:"string"}},wrapperClass:{defaultValue:{value:""},description:"",name:"wrapperClass",required:!1,type:{name:"string"}},labelClass:{defaultValue:{value:"text-slate-500 dark:text-slate-400 text-sm leading-6"},description:"",name:"labelClass",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/form/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}let Radio_stories={title:"Forms/Radio",component:Radio,parameters:{layout:"centered",componentSubtitle:"라디오 버튼",docs:{description:{component:""}}},tags:["autodocs"],argTypes:{label:{description:"라벨"},className:{description:"스타일"}},decorators:[Story=>(0,jsx_runtime.jsx)(Story,{})]},Default={name:"Default",storyName:"",args:{id:"radio",label:"Label",name:"radio",checked:!0}},allTypes=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)(Radio,{onChange:()=>{},...Default.args}),(0,jsx_runtime.jsx)(Radio,{onChange:()=>{},...Default.args,checked:!1}),(0,jsx_runtime.jsx)(Radio,{disabled:!0,onChange:()=>{},...Default.args})]});allTypes.args={...allTypes.args},allTypes.parameters={docs:{description:{story:"기본 라디오입니다"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Default",\n  storyName: "",\n  args: {\n    id: "radio",\n    label: "Label",\n    name: "radio",\n    checked: true\n  }\n}',...Default.parameters?.docs?.source}}},allTypes.parameters={...allTypes.parameters,docs:{...allTypes.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col">\n    <Radio onChange={() => {}} {...Default.args} />\n    <Radio onChange={() => {}} {...Default.args} checked={false} />\n    <Radio disabled onChange={() => {}} {...Default.args} />\n  </div>',...allTypes.parameters?.docs?.source}}};let __namedExportsOrder=["Default","allTypes"]}}]);