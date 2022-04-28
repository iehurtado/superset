"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8136,3867,1637],{81221:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(18446),o=a.n(r),i=a(67294),s=a(45697),n=a.n(s),l=a(31069),c=a(70707),u=a(54998),d=a.n(u);function p(e,t,a=!0,r={}){if(!e.datasource)return null;const o=new(d())("/"),i=function(e,t="base"){let a="/superset/explore/";return["json","csv","query","results","samples"].includes(t)&&(a="/superset/explore_json/"),a}(0,t),s=o.search(!0);Object.keys(r).forEach((e=>{s[e]=r[e]})),s.form_data=function(e){const t=new Set;return JSON.stringify(e,((e,a)=>{if("object"==typeof a&&null!==a){if(t.has(a))try{return JSON.parse(JSON.stringify(a))}catch(e){return}t.add(a)}return a}))}(e),"standalone"===t&&(s.standalone="true");const n=o.directory(i).search(s).toString();return!a&&n.length>8e3?p({datasource:e.datasource,viz_type:e.viz_type},t,!1,{URL_IS_TOO_LONG_TO_SHARE:null}):n}var g=a(94828),h=a(31221),f=a(14228),m=a(33452),y=a(54448),_=a(3251),v=a(21382),b=a(10357);const x={deck_grid:g.getLayer,deck_screengrid:h.getLayer,deck_path:f.getLayer,deck_hex:m.getLayer,deck_scatter:y.getLayer,deck_geojson:_.getLayer,deck_arc:v.getLayer,deck_polygon:b.getLayer};var C=a(11965);const S={formData:n().object.isRequired,payload:n().object.isRequired,setControlValue:n().func.isRequired,viewport:n().object.isRequired,onAddFilter:n().func,onSelect:n().func},L={onAddFilter(){},onSelect(){}};class k extends i.PureComponent{constructor(e){super(e),this.containerRef=i.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)},this.state={subSlicesLayers:{}},this.onViewportChange=this.onViewportChange.bind(this)}componentDidMount(){const{formData:e,payload:t}=this.props;this.loadLayers(e,t)}UNSAFE_componentWillReceiveProps(e){const{formData:t,payload:a}=e;!o()(this.props.formData.deck_slices,e.formData.deck_slices)&&this.loadLayers(t,a)}onViewportChange(e){this.setState({viewport:e})}loadLayers(e,t,a){this.setState({subSlicesLayers:{},viewport:a}),t.data.slices.forEach((t=>{const a=[...t.form_data.filters||[],...e.filters||[],...e.extra_filters||[]],r={...t,form_data:{...t.form_data,filters:a}};l.Z.get({endpoint:p(r.form_data,"json")}).then((({json:e})=>{const t=x[r.form_data.viz_type](r.form_data,e,this.props.onAddFilter,this.setTooltip,[],this.props.onSelect);this.setState({subSlicesLayers:{...this.state.subSlicesLayers,[r.slice_id]:t}})})).catch((()=>{}))}))}render(){const{payload:e,formData:t,setControlValue:a}=this.props,{subSlicesLayers:r}=this.state,o=Object.values(r);return(0,C.tZ)(c.F,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:this.state.viewport||this.props.viewport,layers:o,mapStyle:t.mapbox_style,setControlValue:a,onViewportChange:this.onViewportChange})}}k.propTypes=S,k.defaultProps=L;const w=k},3251:(e,t,a)=>{a.r(t),a.d(t,{getLayer:()=>_,default:()=>C});var r=a(67294),o=a(45697),i=a.n(o),s=a(21497),n=a(70707),l=a(64106),c=a(21207),u=a(52154),d=a(1740),p=a(11965);const g={fillColor:"fillColor",color:"fillColor",fill:"fillColor","fill-color":"fillColor",strokeColor:"strokeColor","stroke-color":"strokeColor","stroke-width":"strokeWidth"},h=(e,t)=>{const a={};return Object.keys(e).forEach((t=>{t in g?a[g[t]]=e[t]:a[t]=e[t]})),"string"==typeof e.fillColor&&(a.fillColor=(0,l.hexToRGB)(e.fillColor)),"string"==typeof e.strokeColor&&(a.strokeColor=(0,l.hexToRGB)(e.strokeColor)),{...a,...t}};let f;const m=(e,t,a)=>{if(e&&e.features&&e.features.forEach((r=>{m(r,t,e.extraProps||a)})),e&&e.geometry){const r={...e,properties:h(e.properties,t)};r.extraProps||(r.extraProps=a),f.push(r)}};function y(e){return e.object.extraProps&&(0,p.tZ)("div",{className:"deckgl-tooltip"},Object.keys(e.object.extraProps).map(((t,a)=>(0,p.tZ)(d.Z,{key:`prop-${a}`,label:`${t}: `,value:`${e.object.extraProps[t]}`}))))}function _(e,t,a,r){const o=e,i=o.fill_color_picker,n=o.stroke_color_picker,l=[i.r,i.g,i.b,255*i.a],d=[n.r,n.g,n.b,255*n.a],p={};let g;return l[3]>0&&(p.fillColor=l),d[3]>0&&(p.strokeColor=d),f=[],m(t.data,p),o.js_data_mutator&&(g=(0,c.Z)(o.js_data_mutator),f=g(f)),new s.Z({id:`geojson-layer-${o.slice_id}`,filled:o.filled,data:f,stroked:o.stroked,extruded:o.extruded,pointRadiusScale:o.point_radius_scale,...(0,u.N)(o,r,y)})}const v={formData:i().object.isRequired,payload:i().object.isRequired,setControlValue:i().func.isRequired,viewport:i().object.isRequired,onAddFilter:i().func},b={onAddFilter(){}};class x extends r.Component{constructor(...e){super(...e),this.containerRef=r.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)}}render(){const{formData:e,payload:t,setControlValue:a,onAddFilter:r,viewport:o}=this.props,i=_(e,t,0,this.setTooltip);return(0,p.tZ)(n.F,{ref:this.containerRef,mapboxApiAccessToken:t.data.mapboxApiKey,viewport:o,layers:[i],mapStyle:e.mapbox_style,setControlValue:a})}}x.propTypes=v,x.defaultProps=b;const C=x},94828:(e,t,a)=>{a.r(t),a.d(t,{getLayer:()=>d,default:()=>p});var r=a(99396),o=(a(67294),a(61988)),i=a(52154),s=a(21207),n=a(26331),l=a(1740),c=a(11965);function u(e){return(0,c.tZ)("div",{className:"deckgl-tooltip"},(0,c.tZ)(l.Z,{label:`${(0,o.t)("Longitude and Latitude")}: `,value:`${e.coordinate[0]}, ${e.coordinate[1]}`}),(0,c.tZ)(l.Z,{label:`${(0,o.t)("Height")}: `,value:`${e.object.elevationValue}`}))}function d(e,t,a,o){const n=e,l=n.color_picker;let c=t.data.features.map((e=>({...e,color:[l.r,l.g,l.b,255*l.a]})));n.js_data_mutator&&(c=(0,s.Z)(n.js_data_mutator)(c));const d=(0,i.Z)(n.js_agg_function,(e=>e.weight));return new r.Z({id:`grid-layer-${n.slice_id}`,data:c,pickable:!0,cellSize:n.grid_size,minColor:[0,0,0,0],extruded:n.extruded,maxColor:[l.r,l.g,l.b,255*l.a],outline:!1,getElevationValue:d,getColorValue:d,...(0,i.N)(n,o,u)})}const p=(0,n.G)(d,(function(e){return e.map((e=>e.position))}))},33452:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L,getLayer:()=>S});var r=a(80744),o=a(15103),i=a(4516),s=Math.PI/3,n=[0,s,2*s,3*s,4*s,5*s];function l(e){return e[0]}function c(e){return e[1]}var u=a(38550),d=a(73728),p=a(63295);function g(){}const h={colorDomain:null,colorRange:i.K,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",value:0,min:0,max:100},upperPercentile:{type:"number",value:100,min:0,max:100},colorScaleType:"quantize",onSetColorDomain:g,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",value:0,min:0,max:100},elevationUpperPercentile:{type:"number",value:100,min:0,max:100},elevationScale:{type:"number",min:0,value:1},elevationScaleType:"linear",onSetElevationDomain:g,radius:{type:"number",value:1e3,min:1},coverage:{type:"number",min:0,max:1,value:1},extruded:!1,hexagonAggregator:function(e,t){const{data:a,radius:o}=e,{viewport:i,attributes:d}=t,p=a.length?function(e,t){const{attributes:a}=t,r=a.positions.value,{size:o}=a.positions.getAccessor();let i,s=1/0,n=1/0,l=-1/0,c=-1/0;for(i=0;i<o*e.length;i+=o){const e=r[i],t=r[i+1];Number.isFinite(e)&&Number.isFinite(t)&&(s=Math.min(e,s),l=Math.max(e,l),n=Math.min(t,n),c=Math.max(t,c))}return[s,n,l,c].every(Number.isFinite)?[(s+l)/2,(n+c)/2]:null}(a,t):null,g=function(e,t,a){const{unitsPerMeter:r}=t.getDistanceScales(a);return e*r[0]}(o,i,p),h=[],{iterable:f,objectInfo:m}=(0,u.jB)(a),y=d.positions.value,{size:_}=d.positions.getAccessor();for(const e of f){m.index++;const t=m.index*_,a=[y[t],y[t+1]];Number.isFinite(a[0])&&Number.isFinite(a[1])?h.push({screenCoord:i.projectFlat(a),source:e,index:m.index}):r.Z.warn("HexagonLayer: invalid position")()}const v=function(){var e,t,a,r=0,o=0,i=1,u=1,d=l,p=c;function g(e){var r,o={},i=[],s=e.length;for(r=0;r<s;++r)if(!isNaN(l=+d.call(null,n=e[r],r,e))&&!isNaN(c=+p.call(null,n,r,e))){var n,l,c,u=Math.round(c/=a),g=Math.round(l=l/t-(1&u)/2),h=c-u;if(3*Math.abs(h)>1){var f=l-g,m=g+(l<g?-1:1)/2,y=u+(c<u?-1:1),_=l-m,v=c-y;f*f+h*h>_*_+v*v&&(g=m+(1&u?1:-1)/2,u=y)}var b=g+"-"+u,x=o[b];x?x.push(n):(i.push(x=o[b]=[n]),x.x=(g+(1&u)/2)*t,x.y=u*a)}return i}function h(e){var t=0,a=0;return n.map((function(r){var o=Math.sin(r)*e,i=-Math.cos(r)*e,s=o-t,n=i-a;return t=o,a=i,[s,n]}))}return g.hexagon=function(t){return"m"+h(null==t?e:+t).join("l")+"z"},g.centers=function(){for(var s=[],n=Math.round(o/a),l=Math.round(r/t),c=n*a;c<u+e;c+=a,++n)for(var d=l*t+(1&n)*t/2;d<i+t/2;d+=t)s.push([d,c]);return s},g.mesh=function(){var t=h(e).slice(0,4).join("l");return g.centers().map((function(e){return"M"+e+"m"+t})).join("")},g.x=function(e){return arguments.length?(d=e,g):d},g.y=function(e){return arguments.length?(p=e,g):p},g.radius=function(r){return arguments.length?(t=2*(e=+r)*Math.sin(s),a=1.5*e,g):e},g.size=function(e){return arguments.length?(r=o=0,i=+e[0],u=+e[1],g):[i-r,u-o]},g.extent=function(e){return arguments.length?(r=+e[0][0],o=+e[0][1],i=+e[1][0],u=+e[1][1],g):[[r,o],[i,u]]},g.radius(1)}().radius(g).x((e=>e.screenCoord[0])).y((e=>e.screenCoord[1]));return{hexagons:v(h).map(((e,t)=>({position:i.unprojectFlat([e.x,e.y]),points:e,index:t}))),radiusCommon:g}},getPosition:{type:"accessor",value:e=>e.position},material:!0,_filterData:{type:"function",value:null,optional:!0}};class f extends p.Z{shouldUpdateState({changeFlags:e}){return e.somethingChanged}initializeState(){const e=new d.Z({getAggregator:e=>e.hexagonAggregator,getCellSize:e=>e.radius});this.state={cpuAggregator:e,aggregatorState:e.state,hexagonVertices:null},this.getAttributeManager().add({positions:{size:3,accessor:"getPosition"}})}updateState(e){super.updateState(e);const{cpuAggregator:t,hexagonVertices:a}=this.state;e.changeFlags.propsOrDataChanged&&this.setState({aggregatorState:t.updateState(e,{viewport:this.context.viewport,attributes:this.getAttributes()})});const{hexagonVertices:r}=t.state.layerData||{};if(r&&a!==r){const e=this.convertLatLngToMeterOffset(r);e&&this.setState({hexagonVertices:r,vertices:e})}else this.updateRadiusAngle()}updateRadiusAngle(e){const{viewport:t}=this.context,{unitsPerMeter:a}=t.getDistanceScales(),{cpuAggregator:r}=this.state;if(r.state.layerData&&r.state.layerData.radiusCommon){const{radiusCommon:e}=r.state.layerData,t=e/a[0];this.setState({angle:90,radius:t})}}convertLatLngToMeterOffset(e){const{viewport:t}=this.context;if(Array.isArray(e)&&6===e.length){const a=e[0],r=e[3],o=[(a[0]+r[0])/2,(a[1]+r[1])/2],i=t.projectFlat(o),{metersPerUnit:s}=t.getDistanceScales(o);return e.map((e=>{const a=t.projectFlat(e);return[(a[0]-i[0])*s[0],(a[1]-i[1])*s[1]]}))}return r.Z.error("HexagonLayer: hexagonVertices needs to be an array of 6 points")(),null}getPickingInfo({info:e}){return this.state.cpuAggregator.getPickingInfo({info:e})}_onGetSublayerColor(e){return this.state.cpuAggregator.getAccessor("fillColor")(e)}_onGetSublayerElevation(e){return this.state.cpuAggregator.getAccessor("elevation")(e)}_getSublayerUpdateTriggers(){return this.state.cpuAggregator.getUpdateTriggers(this.props)}renderLayers(){const{elevationScale:e,extruded:t,coverage:a,material:r,transitions:i}=this.props,{angle:s,radius:n,cpuAggregator:l,vertices:c}=this.state,u=this.getSubLayerClass("hexagon-cell",o.Z),d=this._getSublayerUpdateTriggers();return new u({...c&&c.length?{vertices:c,radius:1}:{radius:n,angle:s},diskResolution:6,elevationScale:e,extruded:t,coverage:a,material:r,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:i&&{getFillColor:i.getColorValue||i.getColorWeight,getElevation:i.getElevationValue||i.getElevationWeight}},this.getSubLayerProps({id:"hexagon-cell",updateTriggers:d}),{data:l.state.layerData.data})}}f.layerName="HexagonLayer",f.defaultProps=h,a(67294);var m=a(61988),y=a(52154),_=a(21207),v=a(26331),b=a(1740),x=a(11965);function C(e){return(0,x.tZ)("div",{className:"deckgl-tooltip"},(0,x.tZ)(b.Z,{label:`${(0,m.t)("Centroid (Longitude and Latitude)")}: `,value:`(${e.coordinate[0]}, ${e.coordinate[1]})`}),(0,x.tZ)(b.Z,{label:`${(0,m.t)("Height")}: `,value:`${e.object.elevationValue}`}))}function S(e,t,a,r){const o=e,i=o.color_picker;let s=t.data.features.map((e=>({...e,color:[i.r,i.g,i.b,255*i.a]})));o.js_data_mutator&&(s=(0,_.Z)(o.js_data_mutator)(s));const n=(0,y.Z)(o.js_agg_function,(e=>e.weight));return new f({id:`hex-layer-${o.slice_id}`,data:s,pickable:!0,radius:o.grid_size,minColor:[0,0,0,0],extruded:o.extruded,maxColor:[i.r,i.g,i.b,255*i.a],outline:!1,getElevationValue:n,getColorValue:n,...(0,y.N)(o,r,C)})}const L=(0,v.G)(S,(function(e){return e.map((e=>e.position))}))},14228:(e,t,a)=>{a.r(t),a.d(t,{getLayer:()=>u,default:()=>d});var r=a(62112),o=(a(67294),a(52154)),i=a(21207),s=a(26331),n=a(1740),l=a(11965);function c(e){return e.object.extraProps&&(0,l.tZ)("div",{className:"deckgl-tooltip"},Object.keys(e.object.extraProps).map(((t,a)=>(0,l.tZ)(n.Z,{key:`prop-${a}`,label:`${t}: `,value:`${e.object.extraProps[t]}`}))))}function u(e,t,a,s){const n=e,l=n.color_picker,u=[l.r,l.g,l.b,255*l.a];let d=t.data.features.map((e=>({...e,path:e.path,width:n.line_width,color:u})));return n.js_data_mutator&&(d=(0,i.Z)(n.js_data_mutator)(d)),new r.Z({id:`path-layer-${n.slice_id}`,getColor:e=>e.color,getPath:e=>e.path,getWidth:e=>e.width,data:d,rounded:!0,widthScale:1,...(0,o.N)(n,s,c)})}const d=(0,s.G)(u,(function(e){let t=[];return e.forEach((e=>{t=t.concat(e.path)})),t}))},10357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V,getLayer:()=>F});var r=a(67294),o=a(45697),i=a.n(o),s=a(78918),n=a(80744),l=a(38550),c=a(71435),u=a(62112),d=a(99890),p=a(98452);const g=[0,0,0,255],h={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:"accessor",value:e=>e.polygon},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:g},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0};class f extends s.Z{initializeState(){this.state={paths:[]},this.props.getLineDashArray&&n.Z.removed("getLineDashArray","PathStyleExtension")()}updateState({oldProps:e,props:t,changeFlags:a}){const r=a.dataChanged||a.updateTriggersChanged&&(a.updateTriggersChanged.all||a.updateTriggersChanged.getPolygon);if(r&&Array.isArray(a.dataChanged)){const e=this.state.paths.slice(),t=a.dataChanged.map((t=>(0,p.b)({data:e,getIndex:e=>e.__source.index,dataRange:t,replace:this._getPaths(t)})));this.setState({paths:e,pathsDiff:t})}else r&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){const{data:t,getPolygon:a,positionFormat:r,_normalize:o}=this.props,i=[],s="XY"===r?2:3,{startRow:n,endRow:c}=e,{iterable:u,objectInfo:p}=(0,l.jB)(t,n,c);for(const e of u){p.index++;let t=a(e,p);o&&(t=d.F(t,s));const{holeIndices:r}=t,n=t.positions||t;if(r)for(let t=0;t<=r.length;t++){const a=n.slice(r[t-1]||0,r[t]||n.length);i.push(this.getSubLayerRow({path:a},e,p.index))}else i.push(this.getSubLayerRow({path:n},e,p.index))}return i}renderLayers(){const{data:e,_dataDiff:t,stroked:a,filled:r,extruded:o,wireframe:i,_normalize:s,_windingOrder:n,elevationScale:l,transitions:d,positionFormat:p}=this.props,{lineWidthUnits:h,lineWidthScale:f,lineWidthMinPixels:m,lineWidthMaxPixels:y,lineJointRounded:_,lineMiterLimit:v,lineDashJustified:b}=this.props,{getFillColor:x,getLineColor:C,getLineWidth:S,getLineDashArray:L,getElevation:k,getPolygon:w,updateTriggers:j,material:P}=this.props,{paths:Z,pathsDiff:A}=this.state,R=this.getSubLayerClass("fill",c.Z),F=this.getSubLayerClass("stroke",u.Z),D=this.shouldRenderSubLayer("fill",Z)&&new R({_dataDiff:t,extruded:o,elevationScale:l,filled:r,wireframe:i,_normalize:s,_windingOrder:n,getElevation:k,getFillColor:x,getLineColor:o&&i?C:g,material:P,transitions:d},this.getSubLayerProps({id:"fill",updateTriggers:{getPolygon:j.getPolygon,getElevation:j.getElevation,getFillColor:j.getFillColor,lineColors:o&&i,getLineColor:j.getLineColor}}),{data:e,positionFormat:p,getPolygon:w});return[!o&&D,!o&&a&&this.shouldRenderSubLayer("stroke",Z)&&new F({_dataDiff:A&&(()=>A),widthUnits:h,widthScale:f,widthMinPixels:m,widthMaxPixels:y,jointRounded:_,miterLimit:v,dashJustified:b,_pathType:"loop",transitions:d&&{getWidth:d.getLineWidth,getColor:d.getLineColor,getPath:d.getPolygon},getColor:this.getSubLayerAccessor(C),getWidth:this.getSubLayerAccessor(S),getDashArray:this.getSubLayerAccessor(L)},this.getSubLayerProps({id:"stroke",updateTriggers:{getWidth:j.getLineWidth,getColor:j.getLineColor,getDashArray:j.getLineDashArray}}),{data:Z,positionFormat:p,getPath:e=>e.path}),o&&D]}}f.layerName="PolygonLayer",f.defaultProps=h;var m=a(78345),y=a(92686),_=a(1740),v=a(4065),b=a(39828),x=a(2995),C=a(45511),S=a(64106);function L({break_points:e,num_buckets:t},a,r){if(!a)return[];if(void 0===e||0===e.length){const e=t?parseInt(t,10):10,[o,i]=(0,v.extent)(a,r);if(void 0===o)return[];const s=(i-o)/e,n=0===s?0:Math.max(0,Math.ceil(Math.log10(1/s))),l=i>i.toFixed(n)?1:0;return new Array(e+1+l).fill().map(((e,t)=>(o+t*s).toFixed(n)))}return e.sort(((e,t)=>parseFloat(e)-parseFloat(t)))}function k({break_points:e,num_buckets:t,linear_color_scheme:a,opacity:r},o,i){const s=e||t?L({break_points:e,num_buckets:t},o,i):null,n=Array.isArray(a)?new x.Z({colors:a,id:"custom"}):(0,C.Z)().get(a);let l,c;if(null!==s){const e=s.length-1,t=e>1?n.getColors(e):[n.colors[n.colors.length-1]],a=t[0],r=t[t.length-1];t.unshift(a),t.push(r);const o=s.map((e=>parseFloat(e)));l=(0,b.Z)().domain(o).range(t),c=t=>t>s[e]||t<s[0]}else l=n.createLinearScale((0,v.extent)(o,i)),c=()=>!1;return e=>{const t=i(e),a=(0,S.hexToRGB)(l(t));return c(t)?a[3]=0:a[3]=r/100*255,a}}var w=a(52154),j=a(66911),P=a(21207);function Z(e){return"geometry"in e.polygon?e.polygon.geometry.coordinates[0]:e.polygon}var A=a(40461),R=a(11965);function F(e,t,a,r,o,i,s){const n=e,l=n.fill_color_picker,c=n.stroke_color_picker;let u=[...t.data.features];if(null!=s&&s.forEach((e=>{u=u.filter((t=>e(t)))})),n.js_data_mutator){const e=(0,P.Z)(n.js_data_mutator);u=e(u)}const d=n.metric?n.metric.label||n.metric:null,p=null===n.metric?()=>[l.r,l.g,l.b,255*l.a]:k(n,u,(e=>e[d])),g=e=>{const t=p(e);return o.length>0&&!o.includes(e[n.line_column])&&(t[3]/=2),t},h=n.line_column&&n.metric&&["json","geohash","zipcode"].includes(n.line_type)?function(e){return t=>{const a=e.metric.label||e.metric;return(0,R.tZ)("div",{className:"deckgl-tooltip"},t.object.name&&(0,R.tZ)(_.Z,{label:"name: ",value:`${t.object.name}`}),t.object[e.line_column]&&(0,R.tZ)(_.Z,{label:`${e.line_column}: `,value:`${t.object[e.line_column]}`}),e.metric&&(0,R.tZ)(_.Z,{label:`${a}: `,value:`${t.object[a]}`}))}}(n):void 0;return new f({id:`path-layer-${n.slice_id}`,data:u,pickable:!0,filled:n.filled,stroked:n.stroked,getPolygon:Z,getFillColor:g,getLineColor:[c.r,c.g,c.b,255*c.a],getLineWidth:n.line_width,extruded:n.extruded,getElevation:e=>function(e,t){return 0===t(e)[3]?0:e.elevation}(e,g),elevationScale:n.multiplier,fp64:!0,...(0,w.N)(n,r,h,i)})}const D={formData:i().object.isRequired,payload:i().object.isRequired,setControlValue:i().func.isRequired,viewport:i().object.isRequired,onAddFilter:i().func,width:i().number.isRequired,height:i().number.isRequired},M={onAddFilter(){}};class T extends r.Component{constructor(e){super(e),this.containerRef=r.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)},this.state=T.getDerivedStateFromProps(e),this.getLayers=this.getLayers.bind(this),this.onSelect=this.onSelect.bind(this),this.onValuesChange=this.onValuesChange.bind(this)}static getDerivedStateFromProps(e,t){const{width:a,height:r,formData:o,payload:i}=e;if(t&&i.form_data===t.formData)return null;const s=i.data.features||[],n=s.map((e=>e.__timestamp)),l=i.form_data.time_grain_sqla||i.form_data.granularity||"P1D",{start:c,end:u,getStep:d,values:p,disabled:g}=(0,j.g)(n,l);let{viewport:h}=e;return o.autozoom&&(h=(0,A.Z)(h,{width:a,height:r,points:s.flatMap(Z)})),{start:c,end:u,getStep:d,values:p,disabled:g,viewport:h,selected:[],lastClick:0,formData:i.form_data}}onSelect(e){const{formData:t,onAddFilter:a}=this.props,r=new Date,o=r-this.state.lastClick<=250,i=[...this.state.selected];if(o)i.splice(0,i.length,e);else if(t.toggle_polygons){const t=i.indexOf(e);-1===t?i.push(e):i.splice(t,1)}else i.splice(0,1,e);this.setState({selected:i,lastClick:r}),t.table_filter&&a(t.line_column,i,!1,!0)}onValuesChange(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}getLayers(e){if(void 0===this.props.payload.data.features)return[];const t=[];return e[0]===e[1]||e[1]===this.end?t.push((t=>t.__timestamp>=e[0]&&t.__timestamp<=e[1])):t.push((t=>t.__timestamp>=e[0]&&t.__timestamp<e[1])),[F(this.props.formData,this.props.payload,this.props.onAddFilter,this.setTooltip,this.state.selected,this.onSelect,t)]}render(){const{payload:e,formData:t,setControlValue:a}=this.props,{start:r,end:o,getStep:i,values:s,disabled:n,viewport:l}=this.state,c=t,u=c.metric?c.metric.label||c.metric:null,d=function(e,t,a){const r=L(e,t,a),o=k(e,t,a),i={};return r.slice(1).forEach(((t,a)=>{const s=`${r[a]} - ${r[a+1]}`,n=.5*(parseFloat(r[a])+parseFloat(r[a+1])),l=e.metric?e.metric.label||e.metric:null;i[s]={color:o({[l||e.metric]:n}),enabled:!0}})),i}(t,e.data.features,(e=>e[u]));return(0,R.tZ)("div",{style:{position:"relative"}},(0,R.tZ)(m.Z,{ref:this.containerRef,aggregation:!0,getLayers:this.getLayers,start:r,end:o,getStep:i,values:s,disabled:n,viewport:l,width:this.props.width,height:this.props.height,mapboxApiAccessToken:e.data.mapboxApiKey,mapStyle:t.mapbox_style,setControlValue:a,onValuesChange:this.onValuesChange,onViewportChange:this.onViewportChange},null!==t.metric&&(0,R.tZ)(y.Z,{categories:d,position:t.legend_position,format:t.legend_format})))}}T.propTypes=D,T.defaultProps=M;const V=T},54448:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g,getLayer:()=>p});var r=a(28569),o=(a(67294),a(56652)),i=a(61988),s=a(52154),n=a(26331),l=a(1740);const c=1609.34;var u=a(11965);function d(e,t){return a=>{var r;const s=(null==t?void 0:t[e.point_radius_fixed.value])||(0,o.Z)(null==(r=e.point_radius_fixed)?void 0:r.value);return(0,u.tZ)("div",{className:"deckgl-tooltip"},(0,u.tZ)(l.Z,{label:`${(0,i.t)("Longitude and Latitude")}: `,value:`${a.object.position[0]}, ${a.object.position[1]}`}),a.object.cat_color&&(0,u.tZ)(l.Z,{label:`${(0,i.t)("Category")}: `,value:`${a.object.cat_color}`}),a.object.metric&&(0,u.tZ)(l.Z,{label:`${s}: `,value:`${a.object.metric}`}))}}function p(e,t,a,o,i){const n=e,l=t.data.features.map((e=>{let t=(a=n.point_unit,r=e.radius,("square_m"===a?Math.sqrt(r/Math.PI):"radius_m"===a?r:"radius_km"===a?1e3*r:"radius_miles"===a?r*c:"square_km"===a?1e3*Math.sqrt(r/Math.PI):"square_miles"===a?Math.sqrt(r/Math.PI)*c:null)||10);var a,r;if(n.multiplier&&(t*=n.multiplier),e.color)return{...e,radius:t};const o=n.color_picker||{r:0,g:0,b:0,a:1},i=[o.r,o.g,o.b,255*o.a];return{...e,radius:t,color:i}}));return new r.Z({id:`scatter-layer-${n.slice_id}`,data:l,fp64:!0,getFillColor:e=>e.color,getRadius:e=>e.radius,radiusMinPixels:n.min_radius||null,radiusMaxPixels:n.max_radius||null,stroked:!1,...(0,s.N)(n,o,d(n,null==i?void 0:i.verboseMap))})}const g=(0,n.B)(p,(function(e){return e.map((e=>e.position))}))}}]);