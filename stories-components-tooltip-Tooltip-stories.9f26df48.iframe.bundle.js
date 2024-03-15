"use strict";(self.webpackChunkthe_next=self.webpackChunkthe_next||[]).push([[544],{"./src/stories/components/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,allTypes:()=>allTypes,default:()=>Tooltip_stories});var tippy_react_esm=__webpack_require__("./node_modules/@tippyjs/react/dist/tippy-react.esm.js");__webpack_require__("./node_modules/tippy.js/animations/perspective-extreme.css"),__webpack_require__("./node_modules/tippy.js/animations/perspective-subtle.css"),__webpack_require__("./node_modules/tippy.js/animations/perspective.css"),__webpack_require__("./node_modules/tippy.js/animations/scale-extreme.css"),__webpack_require__("./node_modules/tippy.js/animations/scale-subtle.css"),__webpack_require__("./node_modules/tippy.js/animations/scale.css"),__webpack_require__("./node_modules/tippy.js/animations/shift-away-extreme.css"),__webpack_require__("./node_modules/tippy.js/animations/shift-away-subtle.css"),__webpack_require__("./node_modules/tippy.js/animations/shift-away.css"),__webpack_require__("./node_modules/tippy.js/animations/shift-toward-extreme.css"),__webpack_require__("./node_modules/tippy.js/animations/shift-toward-subtle.css"),__webpack_require__("./node_modules/tippy.js/animations/shift-toward.css"),__webpack_require__("./node_modules/tippy.js/dist/tippy.css"),__webpack_require__("./node_modules/tippy.js/themes/light-border.css"),__webpack_require__("./node_modules/tippy.js/themes/light.css");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Tooltip(_ref){let{children,content="content",title,className="btn btn-dark",placement="top",arrow=!0,theme="dark",animation="shift-away",trigger="mouseenter focus",interactive=!1,allowHTML=!1,maxWidth=300,duration=200}=_ref;return(0,jsx_runtime.jsx)("div",{className:"custom-tippy",children:(0,jsx_runtime.jsx)(tippy_react_esm.Ay,{content:content,placement:placement,arrow:arrow,theme:theme,animation:animation,trigger:trigger,interactive:interactive,allowHTML:allowHTML,maxWidth:maxWidth,duration:duration,children:children||(0,jsx_runtime.jsx)("button",{className:className,children:title})})})}let tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:{value:"content"},description:"",name:"content",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:{value:"btn btn-dark"},description:"",name:"className",required:!1,type:{name:"string"}},trigger:{defaultValue:{value:"mouseenter focus"},description:"",name:"trigger",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"dark"},description:"",name:"theme",required:!1,type:{name:"string"}},animation:{defaultValue:{value:"shift-away"},description:"",name:"animation",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"any"}},arrow:{defaultValue:{value:"true"},description:"",name:"arrow",required:!1,type:{name:"boolean"}},allowHTML:{defaultValue:{value:"false"},description:"",name:"allowHTML",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"",name:"interactive",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"300"},description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},duration:{defaultValue:{value:"200"},description:"",name:"duration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}let Tooltip_stories={title:"Components/Tooltip",component:tooltip_Tooltip,parameters:{layout:"centered",componentSubtitle:"툴팁",docs:{description:{component:""}}},tags:["autodocs"],argTypes:{title:{description:"타이틀"},arrow:{description:"툴팁 꼬리"},placement:{description:"툴팁 방향"},className:{description:"스타일"}},decorators:[Story=>(0,jsx_runtime.jsx)(Story,{})]},Default={name:"Default",storyName:"",args:{title:"hover",content:"tooltip"}},allTypes=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,jsx_runtime.jsx)(tooltip_Tooltip,{...Default.args,title:"tooltip top",placement:"top",arrow:!0}),(0,jsx_runtime.jsx)(tooltip_Tooltip,{...Default.args,title:"tooltip bottom",placement:"bottom",arrow:!0}),(0,jsx_runtime.jsx)(tooltip_Tooltip,{...Default.args,title:"tooltip left",placement:"left",arrow:!0}),(0,jsx_runtime.jsx)(tooltip_Tooltip,{...Default.args,title:"tooltip right",placement:"right",arrow:!0}),(0,jsx_runtime.jsx)(tooltip_Tooltip,{...Default.args,title:"tooltip not arrow",placement:"bottom",arrow:!1})]});allTypes.args={...allTypes.args},allTypes.parameters={docs:{description:{story:"기본 툴팁입니다"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Default",\n  storyName: "",\n  args: {\n    title: "hover",\n    content: "tooltip"\n  }\n}',...Default.parameters?.docs?.source}}},allTypes.parameters={...allTypes.parameters,docs:{...allTypes.parameters?.docs,source:{originalSource:'() => <div className="flex flex-col items-center gap-4">\n    <Tooltip {...Default.args} title="tooltip top" placement="top" arrow />\n    <Tooltip {...Default.args} title="tooltip bottom" placement="bottom" arrow />\n    <Tooltip {...Default.args} title="tooltip left" placement="left" arrow />\n    <Tooltip {...Default.args} title="tooltip right" placement="right" arrow />\n\n    <Tooltip {...Default.args} title="tooltip not arrow" placement="bottom" arrow={false} />\n  </div>',...allTypes.parameters?.docs?.source}}};let __namedExportsOrder=["Default","allTypes"]}}]);