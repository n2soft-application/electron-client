"use strict";(self.webpackChunkthe_next=self.webpackChunkthe_next||[]).push([[755],{"./node_modules/@iconify/react/dist/iconify.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let policy;__webpack_require__.d(__webpack_exports__,{In:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let matchIconName=/^[a-z0-9]+(-[a-z0-9]+)*$/,stringToIcon=(value,validate,allowSimpleName,provider="")=>{let colonSeparated=value.split(":");if("@"===value.slice(0,1)){if(colonSeparated.length<2||colonSeparated.length>3)return null;provider=colonSeparated.shift().slice(1)}if(colonSeparated.length>3||!colonSeparated.length)return null;if(colonSeparated.length>1){let name2=colonSeparated.pop(),prefix=colonSeparated.pop(),result={provider:colonSeparated.length>0?colonSeparated[0]:provider,prefix,name:name2};return validate&&!validateIconName(result)?null:result}let name=colonSeparated[0],dashSeparated=name.split("-");if(dashSeparated.length>1){let result={provider,prefix:dashSeparated.shift(),name:dashSeparated.join("-")};return validate&&!validateIconName(result)?null:result}if(allowSimpleName&&""===provider){let result={provider,prefix:"",name};return validate&&!validateIconName(result,allowSimpleName)?null:result}return null},validateIconName=(icon,allowSimpleName)=>!!icon&&!!((""===icon.provider||icon.provider.match(matchIconName))&&(allowSimpleName&&""===icon.prefix||icon.prefix.match(matchIconName))&&icon.name.match(matchIconName)),defaultIconDimensions=Object.freeze({left:0,top:0,width:16,height:16}),defaultIconTransformations=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),defaultIconProps=Object.freeze({...defaultIconDimensions,...defaultIconTransformations}),defaultExtendedIconProps=Object.freeze({...defaultIconProps,body:"",hidden:!1});function mergeIconTransformations(obj1,obj2){let result={};!obj1.hFlip!=!obj2.hFlip&&(result.hFlip=!0),!obj1.vFlip!=!obj2.vFlip&&(result.vFlip=!0);let rotate=((obj1.rotate||0)+(obj2.rotate||0))%4;return rotate&&(result.rotate=rotate),result}function mergeIconData(parent,child){let result=mergeIconTransformations(parent,child);for(let key in defaultExtendedIconProps)key in defaultIconTransformations?key in parent&&!(key in result)&&(result[key]=defaultIconTransformations[key]):key in child?result[key]=child[key]:key in parent&&(result[key]=parent[key]);return result}function getIconsTree(data,names){let icons=data.icons,aliases=data.aliases||Object.create(null),resolved=Object.create(null);function resolve(name){if(icons[name])return resolved[name]=[];if(!(name in resolved)){resolved[name]=null;let parent=aliases[name]&&aliases[name].parent,value=parent&&resolve(parent);value&&(resolved[name]=[parent].concat(value))}return resolved[name]}return(names||Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve),resolved}function internalGetIconData(data,name,tree){let icons=data.icons,aliases=data.aliases||Object.create(null),currentProps={};function parse(name2){currentProps=mergeIconData(icons[name2]||aliases[name2],currentProps)}return parse(name),tree.forEach(parse),mergeIconData(data,currentProps)}function parseIconSet(data,callback){let names=[];if("object"!=typeof data||"object"!=typeof data.icons)return names;data.not_found instanceof Array&&data.not_found.forEach(name=>{callback(name,null),names.push(name)});let tree=getIconsTree(data);for(let name in tree){let item=tree[name];item&&(callback(name,internalGetIconData(data,name,item)),names.push(name))}return names}let optionalPropertyDefaults={provider:"",aliases:{},not_found:{},...defaultIconDimensions};function checkOptionalProps(item,defaults){for(let prop in defaults)if(prop in item&&typeof item[prop]!=typeof defaults[prop])return!1;return!0}function quicklyValidateIconSet(obj){if("object"!=typeof obj||null===obj||"string"!=typeof obj.prefix||!obj.icons||"object"!=typeof obj.icons||!checkOptionalProps(obj,optionalPropertyDefaults))return null;let icons=obj.icons;for(let name in icons){let icon=icons[name];if(!name.match(matchIconName)||"string"!=typeof icon.body||!checkOptionalProps(icon,defaultExtendedIconProps))return null}let aliases=obj.aliases||Object.create(null);for(let name in aliases){let icon=aliases[name],parent=icon.parent;if(!name.match(matchIconName)||"string"!=typeof parent||!icons[parent]&&!aliases[parent]||!checkOptionalProps(icon,defaultExtendedIconProps))return null}return obj}let dataStorage=Object.create(null);function newStorage(provider,prefix){return{provider,prefix,icons:Object.create(null),missing:new Set}}function getStorage(provider,prefix){let providerStorage=dataStorage[provider]||(dataStorage[provider]=Object.create(null));return providerStorage[prefix]||(providerStorage[prefix]=newStorage(provider,prefix))}function addIconSet(storage,data){return quicklyValidateIconSet(data)?parseIconSet(data,(name,icon)=>{icon?storage.icons[name]=icon:storage.missing.add(name)}):[]}function addIconToStorage(storage,name,icon){try{if("string"==typeof icon.body)return storage.icons[name]={...icon},!0}catch(err){}return!1}let simpleNames=!1;function allowSimpleNames(allow){return"boolean"==typeof allow&&(simpleNames=allow),simpleNames}function getIconData(name){let icon="string"==typeof name?stringToIcon(name,!0,simpleNames):name;if(icon){let storage=getStorage(icon.provider,icon.prefix),iconName=icon.name;return storage.icons[iconName]||(storage.missing.has(iconName)?null:void 0)}}function addIcon(name,data){let icon=stringToIcon(name,!0,simpleNames);return!!icon&&addIconToStorage(getStorage(icon.provider,icon.prefix),icon.name,data)}function addCollection(data,provider){if("object"!=typeof data)return!1;if("string"!=typeof provider&&(provider=data.provider||""),simpleNames&&!provider&&!data.prefix){let added=!1;return quicklyValidateIconSet(data)&&(data.prefix="",parseIconSet(data,(name,icon)=>{icon&&addIcon(name,icon)&&(added=!0)})),added}let prefix=data.prefix;return!!validateIconName({provider,prefix,name:"a"})&&!!addIconSet(getStorage(provider,prefix),data)}let defaultIconSizeCustomisations=Object.freeze({width:null,height:null}),defaultIconCustomisations=Object.freeze({...defaultIconSizeCustomisations,...defaultIconTransformations}),unitsSplit=/(-?[0-9.]*[0-9]+[0-9.]*)/g,unitsTest=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function calculateSize(size,ratio,precision){if(1===ratio)return size;if(precision=precision||100,"number"==typeof size)return Math.ceil(size*ratio*precision)/precision;if("string"!=typeof size)return size;let oldParts=size.split(unitsSplit);if(null===oldParts||!oldParts.length)return size;let newParts=[],code=oldParts.shift(),isNumber=unitsTest.test(code);for(;;){if(isNumber){let num=parseFloat(code);isNaN(num)?newParts.push(code):newParts.push(Math.ceil(num*ratio*precision)/precision)}else newParts.push(code);if(void 0===(code=oldParts.shift()))return newParts.join("");isNumber=!isNumber}}let isUnsetKeyword=value=>"unset"===value||"undefined"===value||"none"===value;function iconToSVG(icon,customisations){let width,height;let fullIcon={...defaultIconProps,...icon},fullCustomisations={...defaultIconCustomisations,...customisations},box={left:fullIcon.left,top:fullIcon.top,width:fullIcon.width,height:fullIcon.height},body=fullIcon.body;[fullIcon,fullCustomisations].forEach(props=>{let tempValue;let transformations=[],hFlip=props.hFlip,vFlip=props.vFlip,rotation=props.rotate;switch(hFlip?vFlip?rotation+=2:(transformations.push("translate("+(box.width+box.left).toString()+" "+(0-box.top).toString()+")"),transformations.push("scale(-1 1)"),box.top=box.left=0):vFlip&&(transformations.push("translate("+(0-box.left).toString()+" "+(box.height+box.top).toString()+")"),transformations.push("scale(1 -1)"),box.top=box.left=0),rotation<0&&(rotation-=4*Math.floor(rotation/4)),rotation%=4){case 1:transformations.unshift("rotate(90 "+(tempValue=box.height/2+box.top).toString()+" "+tempValue.toString()+")");break;case 2:transformations.unshift("rotate(180 "+(box.width/2+box.left).toString()+" "+(box.height/2+box.top).toString()+")");break;case 3:transformations.unshift("rotate(-90 "+(tempValue=box.width/2+box.left).toString()+" "+tempValue.toString()+")")}rotation%2==1&&(box.left!==box.top&&(tempValue=box.left,box.left=box.top,box.top=tempValue),box.width!==box.height&&(tempValue=box.width,box.width=box.height,box.height=tempValue)),transformations.length&&(body='<g transform="'+transformations.join(" ")+'">'+body+"</g>")});let customisationsWidth=fullCustomisations.width,customisationsHeight=fullCustomisations.height,boxWidth=box.width,boxHeight=box.height;null===customisationsWidth?width=calculateSize(height=null===customisationsHeight?"1em":"auto"===customisationsHeight?boxHeight:customisationsHeight,boxWidth/boxHeight):(width="auto"===customisationsWidth?boxWidth:customisationsWidth,height=null===customisationsHeight?calculateSize(width,boxHeight/boxWidth):"auto"===customisationsHeight?boxHeight:customisationsHeight);let attributes={},setAttr=(prop,value)=>{isUnsetKeyword(value)||(attributes[prop]=value.toString())};return setAttr("width",width),setAttr("height",height),attributes.viewBox=box.left.toString()+" "+box.top.toString()+" "+boxWidth.toString()+" "+boxHeight.toString(),{attributes,body}}let regex=/\sid="(\S+)"/g,randomPrefix="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),counter=0;function replaceIDs(body,prefix=randomPrefix){let match;let ids=[];for(;match=regex.exec(body);)ids.push(match[1]);if(!ids.length)return body;let suffix="suffix"+(16777216*Math.random()|Date.now()).toString(16);return ids.forEach(id=>{let newID="function"==typeof prefix?prefix(id):prefix+(counter++).toString(),escapedID=id.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");body=body.replace(RegExp('([#;"])('+escapedID+')([")]|\\.[a-z])',"g"),"$1"+newID+suffix+"$3")}),body=body.replace(RegExp(suffix,"g"),"")}let storage=Object.create(null);function setAPIModule(provider,item){storage[provider]=item}function getAPIModule(provider){return storage[provider]||storage[""]}function createAPIConfig(source){let resources;if("string"==typeof source.resources)resources=[source.resources];else if(!((resources=source.resources)instanceof Array)||!resources.length)return null;return{resources,path:source.path||"/",maxURL:source.maxURL||500,rotate:source.rotate||750,timeout:source.timeout||5e3,random:!0===source.random,index:source.index||0,dataAfterTimeout:!1!==source.dataAfterTimeout}}let configStorage=Object.create(null),fallBackAPISources=["https://api.simplesvg.com","https://api.unisvg.com"],fallBackAPI=[];for(;fallBackAPISources.length>0;)1===fallBackAPISources.length?fallBackAPI.push(fallBackAPISources.shift()):Math.random()>.5?fallBackAPI.push(fallBackAPISources.shift()):fallBackAPI.push(fallBackAPISources.pop());function addAPIProvider(provider,customConfig){let config=createAPIConfig(customConfig);return null!==config&&(configStorage[provider]=config,!0)}configStorage[""]=createAPIConfig({resources:["https://api.iconify.design"].concat(fallBackAPI)});let fetchModule=(()=>{let callback;try{if(callback=fetch,"function"==typeof callback)return callback}catch(err){}})();function calculateMaxLength(provider,prefix){let result;let config=configStorage[provider];if(!config)return 0;if(config.maxURL){let maxHostLength=0;config.resources.forEach(item=>{maxHostLength=Math.max(maxHostLength,item.length)}),result=config.maxURL-maxHostLength-config.path.length-(prefix+".json?icons=").length}else result=0;return result}function shouldAbort(status){return 404===status}function getPath(provider){if("string"==typeof provider){let config=configStorage[provider];if(config)return config.path}return"/"}function sortIcons(icons){let result={loaded:[],missing:[],pending:[]},storage=Object.create(null);icons.sort((a,b)=>a.provider!==b.provider?a.provider.localeCompare(b.provider):a.prefix!==b.prefix?a.prefix.localeCompare(b.prefix):a.name.localeCompare(b.name));let lastIcon={provider:"",prefix:"",name:""};return icons.forEach(icon=>{if(lastIcon.name===icon.name&&lastIcon.prefix===icon.prefix&&lastIcon.provider===icon.provider)return;lastIcon=icon;let provider=icon.provider,prefix=icon.prefix,name=icon.name,providerStorage=storage[provider]||(storage[provider]=Object.create(null)),localStorage=providerStorage[prefix]||(providerStorage[prefix]=getStorage(provider,prefix));(name in localStorage.icons?result.loaded:""===prefix||localStorage.missing.has(name)?result.missing:result.pending).push({provider,prefix,name})}),result}function removeCallback(storages,id){storages.forEach(storage=>{let items=storage.loaderCallbacks;items&&(storage.loaderCallbacks=items.filter(row=>row.id!==id))})}function updateCallbacks(storage){storage.pendingCallbacksFlag||(storage.pendingCallbacksFlag=!0,setTimeout(()=>{storage.pendingCallbacksFlag=!1;let items=storage.loaderCallbacks?storage.loaderCallbacks.slice(0):[];if(!items.length)return;let hasPending=!1,provider=storage.provider,prefix=storage.prefix;items.forEach(item=>{let icons=item.icons,oldLength=icons.pending.length;icons.pending=icons.pending.filter(icon=>{if(icon.prefix!==prefix)return!0;let name=icon.name;if(storage.icons[name])icons.loaded.push({provider,prefix,name});else{if(!storage.missing.has(name))return hasPending=!0,!0;icons.missing.push({provider,prefix,name})}return!1}),icons.pending.length!==oldLength&&(hasPending||removeCallback([storage],item.id),item.callback(icons.loaded.slice(0),icons.missing.slice(0),icons.pending.slice(0),item.abort))})}))}let idCounter=0;function storeCallback(callback,icons,pendingSources){let id=idCounter++,abort=removeCallback.bind(null,pendingSources,id);if(!icons.pending.length)return abort;let item={id,icons,callback,abort};return pendingSources.forEach(storage=>{(storage.loaderCallbacks||(storage.loaderCallbacks=[])).push(item)}),abort}function listToIcons(list,validate=!0,simpleNames=!1){let result=[];return list.forEach(item=>{let icon="string"==typeof item?stringToIcon(item,validate,simpleNames):item;icon&&result.push(icon)}),result}var defaultConfig={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sendQuery(config,payload,query,done){let resources,lastError;let resourcesCount=config.resources.length,startIndex=config.random?Math.floor(Math.random()*resourcesCount):config.index;if(config.random){let list=config.resources.slice(0);for(resources=[];list.length>1;){let nextIndex=Math.floor(Math.random()*list.length);resources.push(list[nextIndex]),list=list.slice(0,nextIndex).concat(list.slice(nextIndex+1))}resources=resources.concat(list)}else resources=config.resources.slice(startIndex).concat(config.resources.slice(0,startIndex));let startTime=Date.now(),status="pending",queriesSent=0,timer=null,queue=[],doneCallbacks=[];function resetTimer(){timer&&(clearTimeout(timer),timer=null)}function abort(){"pending"===status&&(status="aborted"),resetTimer(),queue.forEach(item=>{"pending"===item.status&&(item.status="aborted")}),queue=[]}function subscribe(callback,overwrite){overwrite&&(doneCallbacks=[]),"function"==typeof callback&&doneCallbacks.push(callback)}function getQueryStatus(){return{startTime,payload,status,queriesSent,queriesPending:queue.length,subscribe,abort}}function failQuery(){status="failed",doneCallbacks.forEach(callback=>{callback(void 0,lastError)})}function clearQueue(){queue.forEach(item=>{"pending"===item.status&&(item.status="aborted")}),queue=[]}function moduleResponse(item,response,data){let isError="success"!==response;switch(queue=queue.filter(queued=>queued!==item),status){case"pending":break;case"failed":if(isError||!config.dataAfterTimeout)return;break;default:return}if("abort"===response){lastError=data,failQuery();return}if(isError){lastError=data,queue.length||(resources.length?execNext():failQuery());return}if(resetTimer(),clearQueue(),!config.random){let index=config.resources.indexOf(item.resource);-1!==index&&index!==config.index&&(config.index=index)}status="completed",doneCallbacks.forEach(callback=>{callback(data)})}function execNext(){if("pending"!==status)return;resetTimer();let resource=resources.shift();if(void 0===resource){if(queue.length){timer=setTimeout(()=>{resetTimer(),"pending"===status&&(clearQueue(),failQuery())},config.timeout);return}failQuery();return}let item={status:"pending",resource,callback:(status2,data)=>{moduleResponse(item,status2,data)}};queue.push(item),queriesSent++,timer=setTimeout(execNext,config.rotate),query(resource,payload,item.callback)}return"function"==typeof done&&doneCallbacks.push(done),setTimeout(execNext),getQueryStatus}function initRedundancy(cfg){let config={...defaultConfig,...cfg},queries=[];function cleanup(){queries=queries.filter(item=>"pending"===item().status)}return{query:function query(payload,queryCallback,doneCallback){let query2=sendQuery(config,payload,queryCallback,(data,error)=>{cleanup(),doneCallback&&doneCallback(data,error)});return queries.push(query2),query2},find:function find(callback){return queries.find(value=>callback(value))||null},setIndex:index=>{config.index=index},getIndex:()=>config.index,cleanup}}function emptyCallback$1(){}let redundancyCache=Object.create(null);function getRedundancyCache(provider){if(!redundancyCache[provider]){let config=configStorage[provider];if(!config)return;let redundancy=initRedundancy(config);redundancyCache[provider]={config,redundancy}}return redundancyCache[provider]}function sendAPIQuery(target,query,callback){let redundancy,send;if("string"==typeof target){let api=getAPIModule(target);if(!api)return callback(void 0,424),emptyCallback$1;send=api.send;let cached=getRedundancyCache(target);cached&&(redundancy=cached.redundancy)}else{let config=createAPIConfig(target);if(config){redundancy=initRedundancy(config);let api=getAPIModule(target.resources?target.resources[0]:"");api&&(send=api.send)}}return redundancy&&send?redundancy.query(query,send,callback)().abort:(callback(void 0,424),emptyCallback$1)}let browserCacheVersion="iconify2",browserCachePrefix="iconify",browserCacheCountKey=browserCachePrefix+"-count",browserCacheVersionKey=browserCachePrefix+"-version";function getStoredItem(func,key){try{return func.getItem(key)}catch(err){}}function setStoredItem(func,key,value){try{return func.setItem(key,value),!0}catch(err){}}function removeStoredItem(func,key){try{func.removeItem(key)}catch(err){}}function setBrowserStorageItemsCount(storage,value){return setStoredItem(storage,browserCacheCountKey,value.toString())}function getBrowserStorageItemsCount(storage){return parseInt(getStoredItem(storage,browserCacheCountKey))||0}let browserStorageConfig={local:!0,session:!0},browserStorageEmptyItems={local:new Set,session:new Set},browserStorageStatus=!1,_window="undefined"==typeof window?{}:window;function getBrowserStorage(key){let attr=key+"Storage";try{if(_window&&_window[attr]&&"number"==typeof _window[attr].length)return _window[attr]}catch(err){}browserStorageConfig[key]=!1}function iterateBrowserStorage(key,callback){let func=getBrowserStorage(key);if(!func)return;let version=getStoredItem(func,browserCacheVersionKey);if(version!==browserCacheVersion){if(version){let total2=getBrowserStorageItemsCount(func);for(let i=0;i<total2;i++)removeStoredItem(func,browserCachePrefix+i.toString())}setStoredItem(func,browserCacheVersionKey,browserCacheVersion),setBrowserStorageItemsCount(func,0);return}let minTime=Math.floor(Date.now()/36e5)-168,parseItem=index=>{let name=browserCachePrefix+index.toString(),item=getStoredItem(func,name);if("string"==typeof item){try{let data=JSON.parse(item);if("object"==typeof data&&"number"==typeof data.cached&&data.cached>minTime&&"string"==typeof data.provider&&"object"==typeof data.data&&"string"==typeof data.data.prefix&&callback(data,index))return!0}catch(err){}removeStoredItem(func,name)}},total=getBrowserStorageItemsCount(func);for(let i=total-1;i>=0;i--)parseItem(i)||(i===total-1?setBrowserStorageItemsCount(func,--total):browserStorageEmptyItems[key].add(i))}function initBrowserStorage(){if(!browserStorageStatus)for(let key in browserStorageStatus=!0,browserStorageConfig)iterateBrowserStorage(key,item=>{let iconSet=item.data,storage=getStorage(item.provider,iconSet.prefix);if(!addIconSet(storage,iconSet).length)return!1;let lastModified=iconSet.lastModified||-1;return storage.lastModifiedCached=storage.lastModifiedCached?Math.min(storage.lastModifiedCached,lastModified):lastModified,!0})}function updateLastModified(storage,lastModified){let lastValue=storage.lastModifiedCached;if(lastValue&&lastValue>=lastModified)return lastValue===lastModified;if(storage.lastModifiedCached=lastModified,lastValue)for(let key in browserStorageConfig)iterateBrowserStorage(key,item=>{let iconSet=item.data;return item.provider!==storage.provider||iconSet.prefix!==storage.prefix||iconSet.lastModified===lastModified});return!0}function storeInBrowserStorage(storage,data){function store(key){let func,index;if(!browserStorageConfig[key]||!(func=getBrowserStorage(key)))return;let set=browserStorageEmptyItems[key];if(set.size)set.delete(index=Array.from(set).shift());else if(index=getBrowserStorageItemsCount(func),!setBrowserStorageItemsCount(func,index+1))return;let item={cached:Math.floor(Date.now()/36e5),provider:storage.provider,data};return setStoredItem(func,browserCachePrefix+index.toString(),JSON.stringify(item))}browserStorageStatus||initBrowserStorage(),(!data.lastModified||updateLastModified(storage,data.lastModified))&&Object.keys(data.icons).length&&(data.not_found&&(data=Object.assign({},data),delete data.not_found),store("local")||store("session"))}function emptyCallback(){}function loadedNewIcons(storage){storage.iconsLoaderFlag||(storage.iconsLoaderFlag=!0,setTimeout(()=>{storage.iconsLoaderFlag=!1,updateCallbacks(storage)}))}function loadNewIcons(storage,icons){storage.iconsToLoad?storage.iconsToLoad=storage.iconsToLoad.concat(icons).sort():storage.iconsToLoad=icons,storage.iconsQueueFlag||(storage.iconsQueueFlag=!0,setTimeout(()=>{let api;storage.iconsQueueFlag=!1;let{provider,prefix}=storage,icons2=storage.iconsToLoad;delete storage.iconsToLoad,icons2&&(api=getAPIModule(provider))&&api.prepare(provider,prefix,icons2).forEach(item=>{sendAPIQuery(provider,item,data=>{if("object"!=typeof data)item.icons.forEach(name=>{storage.missing.add(name)});else try{let parsed=addIconSet(storage,data);if(!parsed.length)return;let pending=storage.pendingIcons;pending&&parsed.forEach(name=>{pending.delete(name)}),storeInBrowserStorage(storage,data)}catch(err){console.error(err)}loadedNewIcons(storage)})})}))}let loadIcons=(icons,callback)=>{let lastProvider,lastPrefix;let sortedIcons=sortIcons(listToIcons(icons,!0,allowSimpleNames()));if(!sortedIcons.pending.length){let callCallback=!0;return callback&&setTimeout(()=>{callCallback&&callback(sortedIcons.loaded,sortedIcons.missing,sortedIcons.pending,emptyCallback)}),()=>{callCallback=!1}}let newIcons=Object.create(null),sources=[];return sortedIcons.pending.forEach(icon=>{let{provider,prefix}=icon;if(prefix===lastPrefix&&provider===lastProvider)return;lastProvider=provider,lastPrefix=prefix,sources.push(getStorage(provider,prefix));let providerNewIcons=newIcons[provider]||(newIcons[provider]=Object.create(null));providerNewIcons[prefix]||(providerNewIcons[prefix]=[])}),sortedIcons.pending.forEach(icon=>{let{provider,prefix,name}=icon,storage=getStorage(provider,prefix),pendingQueue=storage.pendingIcons||(storage.pendingIcons=new Set);pendingQueue.has(name)||(pendingQueue.add(name),newIcons[provider][prefix].push(name))}),sources.forEach(storage=>{let{provider,prefix}=storage;newIcons[provider][prefix].length&&loadNewIcons(storage,newIcons[provider][prefix])}),callback?storeCallback(callback,sortedIcons,sources):emptyCallback};function mergeCustomisations(defaults,item){let result={...defaults};for(let key in item){let value=item[key],valueType=typeof value;key in defaultIconSizeCustomisations?(null===value||value&&("string"===valueType||"number"===valueType))&&(result[key]=value):valueType===typeof result[key]&&(result[key]="rotate"===key?value%4:value)}return result}let separator=/[\s,]+/;function flipFromString(custom,flip){flip.split(separator).forEach(str=>{switch(str.trim()){case"horizontal":custom.hFlip=!0;break;case"vertical":custom.vFlip=!0}})}function rotateFromString(value,defaultValue=0){let units=value.replace(/^-?[0-9.]*/,"");function cleanup(value2){for(;value2<0;)value2+=4;return value2%4}if(""===units){let num=parseInt(value);return isNaN(num)?0:cleanup(num)}if(units!==value){let split=0;switch(units){case"%":split=25;break;case"deg":split=90}if(split){let num=parseFloat(value.slice(0,value.length-units.length));return isNaN(num)?0:(num/=split)%1==0?cleanup(num):0}}return defaultValue}function iconToHTML(body,attributes){let renderAttribsHTML=-1===body.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let attr in attributes)renderAttribsHTML+=" "+attr+'="'+attributes[attr]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+renderAttribsHTML+">"+body+"</svg>"}function encodeSVGforURL(svg){return svg.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function svgToData(svg){return"data:image/svg+xml,"+encodeSVGforURL(svg)}function svgToURL(svg){return'url("'+svgToData(svg)+'")'}function createPolicy(){try{policy=window.trustedTypes.createPolicy("iconify",{createHTML:s=>s})}catch(err){policy=null}}function cleanUpInnerHTML(html){return void 0===policy&&createPolicy(),policy?policy.createHTML(html):html}let defaultExtendedIconCustomisations={...defaultIconCustomisations,inline:!1},svgDefaults={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},commonProps={display:"inline-block"},monotoneProps={backgroundColor:"currentColor"},coloredProps={backgroundColor:"transparent"},propsToAdd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},propsToAddTo={WebkitMask:monotoneProps,mask:monotoneProps,background:coloredProps};for(let prefix in propsToAddTo){let list=propsToAddTo[prefix];for(let prop in propsToAdd)list[prefix+prop]=propsToAdd[prop]}let inlineDefaults={...defaultExtendedIconCustomisations,inline:!0};function fixSize(value){return value+(value.match(/^[-0-9.]+$/)?"px":"")}let render=(icon,props,inline,ref)=>{let defaultProps=inline?inlineDefaults:defaultExtendedIconCustomisations,customisations=mergeCustomisations(defaultProps,props),mode=props.mode||"svg",style={},customStyle=props.style||{},componentProps={..."svg"===mode?svgDefaults:{},ref};for(let key in props){let value=props[key];if(void 0!==value)switch(key){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":customisations[key]=!0===value||"true"===value||1===value;break;case"flip":"string"==typeof value&&flipFromString(customisations,value);break;case"color":style.color=value;break;case"rotate":"string"==typeof value?customisations[key]=rotateFromString(value):"number"==typeof value&&(customisations[key]=value);break;case"ariaHidden":case"aria-hidden":!0!==value&&"true"!==value&&delete componentProps["aria-hidden"];break;default:void 0===defaultProps[key]&&(componentProps[key]=value)}}let item=iconToSVG(icon,customisations),renderAttribs=item.attributes;if(customisations.inline&&(style.verticalAlign="-0.125em"),"svg"===mode){componentProps.style={...style,...customStyle},Object.assign(componentProps,renderAttribs);let localCounter=0,id=props.id;return"string"==typeof id&&(id=id.replace(/-/g,"_")),componentProps.dangerouslySetInnerHTML={__html:cleanUpInnerHTML(replaceIDs(item.body,id?()=>id+"ID"+localCounter++:"iconifyReact"))},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",componentProps)}let{body,width,height}=icon,useMask="mask"===mode||"bg"!==mode&&-1!==body.indexOf("currentColor"),html=iconToHTML(body,{...renderAttribs,width:width+"",height:height+""});return componentProps.style={...style,"--svg":svgToURL(html),width:fixSize(renderAttribs.width),height:fixSize(renderAttribs.height),...commonProps,...useMask?monotoneProps:coloredProps,...customStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",componentProps)};if(allowSimpleNames(!0),setAPIModule("",{prepare:(provider,prefix,icons)=>{let results=[],maxLength=calculateMaxLength(provider,prefix),type="icons",item={type,provider,prefix,icons:[]},length=0;return icons.forEach((name,index)=>{(length+=name.length+1)>=maxLength&&index>0&&(results.push(item),item={type,provider,prefix,icons:[]},length=name.length),item.icons.push(name)}),results.push(item),results},send:(host,params,callback)=>{if(!fetchModule){callback("abort",424);return}let path=getPath(params.provider);switch(params.type){case"icons":path+=params.prefix+".json?"+new URLSearchParams({icons:params.icons.join(",")}).toString();break;case"custom":{let uri=params.uri;path+="/"===uri.slice(0,1)?uri.slice(1):uri;break}default:callback("abort",400);return}let defaultError=503;fetchModule(host+path).then(response=>{let status=response.status;if(200!==status){setTimeout(()=>{callback(shouldAbort(status)?"abort":"next",status)});return}return defaultError=501,response.json()}).then(data=>{if("object"!=typeof data||null===data){setTimeout(()=>{404===data?callback("abort",data):callback("next",defaultError)});return}setTimeout(()=>{callback("success",data)})}).catch(()=>{callback("next",defaultError)})}}),"undefined"!=typeof document&&"undefined"!=typeof window){initBrowserStorage();let _window=window;if(void 0!==_window.IconifyPreload){let preload=_window.IconifyPreload,err="Invalid IconifyPreload syntax.";"object"==typeof preload&&null!==preload&&(preload instanceof Array?preload:[preload]).forEach(item=>{try{("object"!=typeof item||null===item||item instanceof Array||"object"!=typeof item.icons||"string"!=typeof item.prefix||!addCollection(item))&&console.error(err)}catch(e){console.error(err)}})}if(void 0!==_window.IconifyProviders){let providers=_window.IconifyProviders;if("object"==typeof providers&&null!==providers)for(let key in providers){let err="IconifyProviders["+key+"] is invalid.";try{let value=providers[key];if("object"!=typeof value||!value||void 0===value.resources)continue;addAPIProvider(key,value)||console.error(err)}catch(e){console.error(err)}}}}class IconComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(icon){this.state.icon!==icon&&this.setState({icon})}_checkIcon(changed){let iconName;let state=this.state,icon=this.props.icon;if("object"==typeof icon&&null!==icon&&"string"==typeof icon.body){this._icon="",this._abortLoading(),(changed||null===state.icon)&&this._setData({data:icon});return}if("string"!=typeof icon||null===(iconName=stringToIcon(icon,!1,!0))){this._abortLoading(),this._setData(null);return}let data=getIconData(iconName);if(!data){this._loading&&this._loading.name===icon||(this._abortLoading(),this._icon="",this._setData(null),null!==data&&(this._loading={name:icon,abort:loadIcons([iconName],this._checkIcon.bind(this,!1))}));return}if(this._icon!==icon||null===state.icon){this._abortLoading(),this._icon=icon;let classes=["iconify"];""!==iconName.prefix&&classes.push("iconify--"+iconName.prefix),""!==iconName.provider&&classes.push("iconify--"+iconName.provider),this._setData({data,classes}),this.props.onLoad&&this.props.onLoad(icon)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(oldProps){oldProps.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){let props=this.props,icon=this.state.icon;if(null===icon)return props.children?props.children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{});let newProps=props;return icon.classes&&(newProps={...props,className:("string"==typeof props.className?props.className+" ":"")+icon.classes.join(" ")}),render({...defaultIconProps,...icon.data},newProps,props._inline,props._ref)}}let Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Icon(props,ref){let newProps={...props,_ref:ref,_inline:!1};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,newProps)});react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function InlineIcon(props,ref){let newProps={...props,_ref:ref,_inline:!0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,newProps)})}}]);