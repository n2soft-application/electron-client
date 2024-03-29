"use strict";(self.webpackChunkthe_next=self.webpackChunkthe_next||[]).push([[259],{"./src/stories/components/progressbar/ProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Color:()=>Color,Default:()=>Default,Height:()=>Height,MultipleBar:()=>MultipleBar,Striped:()=>Striped,StripedAnimate:()=>StripedAnimate,Value:()=>Value,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressBar_stories}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Bar=_ref=>{let{value,className,showValue,striped,animate}=_ref;return(0,jsx_runtime.jsx)("div",{className:"flex flex-col text-center whitespace-nowrap justify-center h-full progress-bar ".concat(className," ").concat(striped?"stripes":"","\n      ").concat(animate?"animate-stripes":"","\n      "),style:{width:"".concat(value,"%")},children:showValue&&(0,jsx_runtime.jsx)("span",{className:"text-[10px] text-white font-bold",children:value+"%"})})};try{Bar.displayName="Bar",Bar.__docgenInfo={description:"",displayName:"Bar",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showValue:{defaultValue:null,description:"",name:"showValue",required:!1,type:{name:"boolean"}},striped:{defaultValue:null,description:"",name:"striped",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pregress/Bar.tsx#Bar"]={docgenInfo:Bar.__docgenInfo,name:"Bar",path:"src/components/pregress/Bar.tsx#Bar"})}catch(__react_docgen_typescript_loader_error){}let ProgressBar=_ref=>{let{title,children,value,backClass="rounded-full",className="bg-slate-900 dark:bg-slate-900",titleClass="text-base font-normal",striped=!1,animate=!1,showValue=!1}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"relative",children:[title&&(0,jsx_runtime.jsx)("span",{className:"block text-slate-500 tracking-[0.01em] mb-2 ".concat(titleClass),children:title}),!children&&(0,jsx_runtime.jsx)("div",{className:"progress w-full overflow-hidden bg-opacity-10 h-2 bg-slate-900 dark:bg-slate-700  ".concat(backClass),children:(0,jsx_runtime.jsx)(Bar,{value:value,className:className,striped:striped,animate:animate,showValue:showValue})}),children&&(0,jsx_runtime.jsx)("div",{className:"progress w-full overflow-hidden bg-opacity-10 flex h-2 bg-slate-900 dark:bg-slate-700  ".concat(backClass),children:children})]})};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:{value:"bg-slate-900 dark:bg-slate-900"},description:"",name:"className",required:!1,type:{name:"string"}},backClass:{defaultValue:{value:"rounded-full"},description:"",name:"backClass",required:!1,type:{name:"string"}},titleClass:{defaultValue:{value:"text-base font-normal"},description:"",name:"titleClass",required:!1,type:{name:"string"}},striped:{defaultValue:{value:"false"},description:"",name:"striped",required:!1,type:{name:"boolean"}},animate:{defaultValue:{value:"false"},description:"",name:"animate",required:!1,type:{name:"boolean"}},showValue:{defaultValue:{value:"false"},description:"",name:"showValue",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pregress/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/pregress/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}let ProgressBar_stories={title:"Components/ProgressBar",component:ProgressBar,parameters:{layout:"centered",componentSubtitle:"프로그래스바",docs:{description:{component:"작업의 진행 상황을 시각적으로 표시할 때 사용합니다."}}},argTypes:{title:{description:"제목"},className:{description:"스타일"},animate:{description:"애니메이션 여부"},showValue:{description:"값 표시 여부"},striped:{description:"줄 표시 여부"},value:{description:"비율 (단위: %)"},titleClass:{description:"제목 스타일"}},tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"w-[300px]",children:(0,jsx_runtime.jsx)(Story,{})})]},Default={args:{value:20}},Basic=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)(ProgressBar,{value:30}),(0,jsx_runtime.jsx)(ProgressBar,{value:80}),(0,jsx_runtime.jsx)(ProgressBar,{value:50}),(0,jsx_runtime.jsx)(ProgressBar,{value:70})]});Basic.args={...Basic.args};let Color=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)(ProgressBar,{value:30,className:"bg-primary-500"}),(0,jsx_runtime.jsx)(ProgressBar,{value:80,className:"bg-danger-500"}),(0,jsx_runtime.jsx)(ProgressBar,{value:50,className:"bg-warning-500"}),(0,jsx_runtime.jsx)(ProgressBar,{value:70,className:" bg-info-500"})]});Color.args={...Color.args};let Height=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)(ProgressBar,{value:30,title:"Progress sm"}),(0,jsx_runtime.jsx)(ProgressBar,{value:50,title:"Progress md",backClass:"h-[10px] rounded-[999px]",className:"bg-primary-500"}),(0,jsx_runtime.jsx)(ProgressBar,{value:80,title:"Progress xl",backClass:"h-[14px] rounded-[999px]",className:"bg-danger-500"}),(0,jsx_runtime.jsx)(ProgressBar,{value:70,title:"Progress xl",backClass:"h-4 rounded-[999px]",className:"bg-warning-500"})]});Height.args={...Height.args};let Striped=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)(ProgressBar,{value:30,className:"bg-slate-900 ",striped:!0,backClass:"h-3 rounded-[999px]"}),(0,jsx_runtime.jsx)(ProgressBar,{value:30,className:"bg-primary-500 ",striped:!0,backClass:"h-3 rounded-[999px]"}),(0,jsx_runtime.jsx)(ProgressBar,{value:80,className:"bg-danger-500 ",striped:!0,backClass:"h-3 rounded-[999px]"}),(0,jsx_runtime.jsx)(ProgressBar,{value:50,className:"bg-warning-500 ",striped:!0,backClass:"h-3 rounded-[999px]"}),(0,jsx_runtime.jsx)(ProgressBar,{value:70,className:" bg-info-500",striped:!0,backClass:"h-3 rounded-[999px]"})]});Striped.args={...Striped.args};let StripedAnimate=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)(ProgressBar,{value:30,className:"bg-slate-900",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),(0,jsx_runtime.jsx)(ProgressBar,{value:60,className:"bg-primary-500",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),(0,jsx_runtime.jsx)(ProgressBar,{value:40,className:"bg-danger-500",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),(0,jsx_runtime.jsx)(ProgressBar,{value:50,className:"bg-warning-500",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0}),(0,jsx_runtime.jsx)(ProgressBar,{value:70,className:" bg-info-500",striped:!0,backClass:"h-3 rounded-[999px]",animate:!0})]});StripedAnimate.args={...StripedAnimate.args};let Value=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsx)(ProgressBar,{value:30,className:"bg-slate-900 ",showValue:!0,backClass:"h-3 rounded-[999px]"}),(0,jsx_runtime.jsx)(ProgressBar,{value:60,className:"bg-primary-500 ",backClass:"h-3 rounded-[999px]",showValue:!0}),(0,jsx_runtime.jsx)(ProgressBar,{value:40,className:"bg-danger-500 ",showValue:!0,backClass:"h-3 rounded-[999px]"}),(0,jsx_runtime.jsx)(ProgressBar,{value:50,className:"bg-warning-500 ",backClass:"h-3 rounded-[999px]",showValue:!0}),(0,jsx_runtime.jsx)(ProgressBar,{value:70,className:" bg-info-500",backClass:"h-3 rounded-[999px]",showValue:!0})]});Value.args={...Value.args};let MultipleBar=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,jsx_runtime.jsxs)(ProgressBar,{backClass:"h-3 rounded-[999px]",children:[(0,jsx_runtime.jsx)(Bar,{value:10,className:"bg-primary-500"}),(0,jsx_runtime.jsx)(Bar,{value:20,className:"bg-success-500"}),(0,jsx_runtime.jsx)(Bar,{value:20,className:"bg-danger-500"})]}),(0,jsx_runtime.jsxs)(ProgressBar,{backClass:"h-3 rounded-[999px]",children:[(0,jsx_runtime.jsx)(Bar,{value:12,className:"bg-primary-500",showValue:!0}),(0,jsx_runtime.jsx)(Bar,{value:25,className:"bg-success-500",showValue:!0}),(0,jsx_runtime.jsx)(Bar,{value:25,className:"bg-danger-500",showValue:!0})]}),(0,jsx_runtime.jsxs)(ProgressBar,{backClass:"h-3 rounded-[999px]",children:[(0,jsx_runtime.jsx)(Bar,{value:15,className:"bg-primary-500",striped:!0}),(0,jsx_runtime.jsx)(Bar,{value:30,className:"bg-success-500",striped:!0}),(0,jsx_runtime.jsx)(Bar,{value:30,className:"bg-danger-500",striped:!0})]}),(0,jsx_runtime.jsxs)(ProgressBar,{backClass:"h-3 rounded-[999px]",children:[(0,jsx_runtime.jsx)(Bar,{value:18,className:"bg-primary-500",showValue:!0,striped:!0}),(0,jsx_runtime.jsx)(Bar,{value:33,className:"bg-success-500",showValue:!0,striped:!0}),(0,jsx_runtime.jsx)(Bar,{value:33,className:"bg-danger-500",showValue:!0,striped:!0})]})]});MultipleBar.args={...MultipleBar.args},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 20\n  }\n}",...Default.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar value={30} />\n    <ProgressBar value={80} />\n    <ProgressBar value={50} />\n    <ProgressBar value={70} />\n  </div>',...Basic.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar value={30} className="bg-primary-500" />\n    <ProgressBar value={80} className="bg-danger-500" />\n    <ProgressBar value={50} className="bg-warning-500" />\n    <ProgressBar value={70} className=" bg-info-500" />\n  </div>',...Color.parameters?.docs?.source}}},Height.parameters={...Height.parameters,docs:{...Height.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar value={30} title="Progress sm" />\n    <ProgressBar value={50} title="Progress md" backClass="h-[10px] rounded-[999px]" className="bg-primary-500" />\n    <ProgressBar value={80} title="Progress xl" backClass="h-[14px] rounded-[999px]" className="bg-danger-500" />\n    <ProgressBar value={70} title="Progress xl" backClass="h-4 rounded-[999px]" className="bg-warning-500" />\n  </div>',...Height.parameters?.docs?.source}}},Striped.parameters={...Striped.parameters,docs:{...Striped.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar value={30} className="bg-slate-900 " striped backClass="h-3 rounded-[999px]" />\n    <ProgressBar value={30} className="bg-primary-500 " striped backClass="h-3 rounded-[999px]" />\n    <ProgressBar value={80} className="bg-danger-500 " striped backClass="h-3 rounded-[999px]" />\n    <ProgressBar value={50} className="bg-warning-500 " striped backClass="h-3 rounded-[999px]" />\n    <ProgressBar value={70} className=" bg-info-500" striped backClass="h-3 rounded-[999px]" />\n  </div>',...Striped.parameters?.docs?.source}}},StripedAnimate.parameters={...StripedAnimate.parameters,docs:{...StripedAnimate.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar value={30} className="bg-slate-900" striped backClass="h-3 rounded-[999px]" animate />\n    <ProgressBar value={60} className="bg-primary-500" striped backClass="h-3 rounded-[999px]" animate />\n    <ProgressBar value={40} className="bg-danger-500" striped backClass="h-3 rounded-[999px]" animate />\n    <ProgressBar value={50} className="bg-warning-500" striped backClass="h-3 rounded-[999px]" animate />\n    <ProgressBar value={70} className=" bg-info-500" striped backClass="h-3 rounded-[999px]" animate />\n  </div>',...StripedAnimate.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar value={30} className="bg-slate-900 " showValue backClass="h-3 rounded-[999px]" />\n    <ProgressBar value={60} className="bg-primary-500 " backClass="h-3 rounded-[999px]" showValue />\n    <ProgressBar value={40} className="bg-danger-500 " showValue backClass="h-3 rounded-[999px]" />\n    <ProgressBar value={50} className="bg-warning-500 " backClass="h-3 rounded-[999px]" showValue />\n    <ProgressBar value={70} className=" bg-info-500" backClass="h-3 rounded-[999px]" showValue />\n  </div>',...Value.parameters?.docs?.source}}},MultipleBar.parameters={...MultipleBar.parameters,docs:{...MultipleBar.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col gap-6">\n    <ProgressBar backClass="h-3 rounded-[999px]">\n      <Bar value={10} className="bg-primary-500" />\n      <Bar value={20} className="bg-success-500" />\n      <Bar value={20} className="bg-danger-500" />\n    </ProgressBar>\n    <ProgressBar backClass="h-3 rounded-[999px]">\n      <Bar value={12} className="bg-primary-500" showValue />\n      <Bar value={25} className="bg-success-500" showValue />\n      <Bar value={25} className="bg-danger-500" showValue />\n    </ProgressBar>\n    <ProgressBar backClass="h-3 rounded-[999px]">\n      <Bar value={15} className="bg-primary-500" striped />\n      <Bar value={30} className="bg-success-500" striped />\n      <Bar value={30} className="bg-danger-500" striped />\n    </ProgressBar>\n    <ProgressBar backClass="h-3 rounded-[999px]">\n      <Bar value={18} className="bg-primary-500" showValue striped />\n      <Bar value={33} className="bg-success-500" showValue striped />\n      <Bar value={33} className="bg-danger-500" showValue striped />\n    </ProgressBar>\n  </div>',...MultipleBar.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Basic","Color","Height","Striped","StripedAnimate","Value","MultipleBar"]}}]);