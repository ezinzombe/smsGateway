(function(){var l=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments)},ca=Date.now||
function(){return+new Date},da=function(a,b){function c(){}c.prototype=b.prototype;a.Ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ga=function(a,c,e){for(var d=Array(arguments.length-2),f=2;f<arguments.length;f++)d[f-2]=arguments[f];return b.prototype[c].apply(a,d)}};var p=(new Date).getTime();var r=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ea=function(a){a=parseInt(a,10);return isNaN(a)?-1:a},fa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ga=function(a,b){return a?(a=a.match(fa))?a[0]:b:b};var ha=ea("100"),ia=ea("3"),ja=r("0.0"),ka=r("0.10"),la=r("0.05"),ma=r("0.05"),na=r("0.1"),oa=r("0.02"),pa=r("0.02"),qa=r("0"),
ra=r("0.0001"),sa=r("0.1"),ta=r("0.001");var ua=function(){return"r20170206"},va=/^true$/.test("false")?!0:!1,wa=/^true$/.test("false")?!0:!1,xa=/^true$/.test("false")?!0:!1,ya=xa||!wa;var t=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ga=function(a){if(!za.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Aa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ba,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ca,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Da,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ea,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Fa,"&#0;"));return a},Aa=/&/g,Ba=/</g,Ca=/>/g,Da=/"/g,Ea=/'/g,Fa=/\x00/g,za=/[\x00&<>"']/,
Ha={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ia={"'":"\\'"},Ja=function(a,b){return a<b?-1:a>b?1:0};var u=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f="string"==typeof a?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},Ka=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};var La="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ma=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<La.length;e++)c=La[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var v;a:{var Na=l.navigator;if(Na){var Oa=Na.userAgent;if(Oa){v=Oa;break a}}v=""}var y=function(a){return-1!=v.indexOf(a)};var Pa=function(a){Pa[" "](a);return a};Pa[" "]=function(){};var Ra=function(a,b){var c=Qa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var Sa=y("Opera"),B=y("Trident")||y("MSIE"),Ta=y("Edge"),C=y("Gecko")&&!(-1!=v.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),Ua=-1!=v.toLowerCase().indexOf("webkit")&&!y("Edge"),Va=function(){var a=l.document;return a?a.documentMode:void 0},Wa;
a:{var Xa="",Ya=function(){var a=v;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ta)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ua)return/WebKit\/(\S+)/.exec(a);if(Sa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ya&&(Xa=Ya?Ya[1]:"");if(B){var Za=Va();if(null!=Za&&Za>parseFloat(Xa)){Wa=String(Za);break a}}Wa=Xa}
var $a=Wa,Qa={},ab=function(a){Ra(a,function(){for(var b=0,c=t(String($a)).split("."),d=t(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ja(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ja(0==g[2].length,0==h[2].length)||Ja(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},bb;var cb=l.document;
bb=cb&&B?Va()||("CSS1Compat"==cb.compatMode?parseInt($a,10):5):void 0;var db;if(!(db=!C&&!B)){var eb;if(eb=B)eb=9<=Number(bb);db=eb}db||C&&ab("1.9.1");B&&ab("9");var D=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Pa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},fb=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},gb=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},hb=function(a,b,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)},ib=function(a){var b=a.length;if(0==b)return 0;for(var c=
305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},jb=/^([0-9.]+)px$/,kb=function(a){return(a=jb.exec(a))?+a[1]:null};var lb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});l.addEventListener("test",null,b)}catch(c){}return a}(),mb=function(a,b){a.addEventListener?a.addEventListener("load",b,lb?void 0:!1):a.attachEvent&&a.attachEvent("onload",b)};var nb=function(a,b,c,d,f){this.C=c||4E3;this.s=a||"&";this.D=b||",$";this.u=void 0!==d?d:"trn";this.G=f||null;this.v=!1;this.m={};this.F=0;this.j=[]},ob=function(a,b){var c={};c[a]=b;return[c]},G=function(a,b,c,d){a.j.push(b);a.m[b]=ob(c,d)},rb=function(a,b,c,d){b=b+"//"+c+d;var f=pb(a)-d.length-0;if(0>f)return"";a.j.sort(function(a,b){return a-b});d=null;c="";for(var e=0;e<a.j.length;e++)for(var g=a.j[e],h=a.m[g],k=0;k<h.length;k++){if(!f){d=null==d?g:d;break}var m=qb(h[k],a.s,a.D);if(m){m=c+m;
if(f>=m.length){f-=m.length;b+=m;c=a.s;break}else a.v&&(c=f,m[c-1]==a.s&&--c,b+=m.substr(0,c),c=a.s,f=0);d=null==d?g:d}}e="";a.u&&null!=d&&(e=c+a.u+"="+(a.G||d));return b+e+""},pb=function(a){if(!a.u)return a.C;var b=1,c;for(c in a.m)b=c.length>b?c.length:b;return a.C-a.u.length-b-a.s.length-1},qb=function(a,b,c,d,f){var e=[];hb(a,function(a,h){(a=sb(a,b,c,d,f))&&e.push(h+"="+a)});return e.join(b)},sb=function(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof
Array){if(d=d||0,d<c.length){for(var e=[],g=0;g<a.length;g++)e.push(sb(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(qb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))};var ub=function(a,b,c,d){if(Math.random()<(d||a.j))try{var f;c instanceof nb?f=c:(f=new nb,hb(c,function(a,b){var c=f,d=c.F++;a=ob(b,a);c.j.push(d);c.m[d]=a}));var e=rb(f,a.u,a.m,a.s+b+"&");e&&tb(e)}catch(g){}},tb=function(a){l.google_image_requests||(l.google_image_requests=[]);var b=l.document.createElement("img");b.src=a;l.google_image_requests.push(b)};var vb=document,H=window,wb=null,xb=vb.getElementsByTagName("script");xb&&xb.length&&(wb=xb[xb.length-1]);var yb=wb;var zb=Object.prototype.hasOwnProperty,Ab=function(a,b){for(var c in a)zb.call(a,c)&&b.call(void 0,a[c],c,a)},Bb=function(a){return!(!a||!a.call)&&"function"===typeof a},Cb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},I=function(a,b){if(a.indexOf)return a=a.indexOf(b),0<a||0===a;for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Db=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,mb(a,function(){a.google_onload_fired=!0}))},Eb=function(a){a=a.google_unique_id;
return"number"===typeof a?a:0},Fb=!!window.google_async_iframe_id,J=Fb&&window.parent||window,Gb=function(a){return va&&a.google_top_window||a.top};var Hb=function(a,b){this.start=a<b?a:b;this.j=a<b?b:a};var Ib=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*gb(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Jb=!1;var Kb=y("Safari")&&!((y("Chrome")||y("CriOS"))&&!y("Edge")||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))&&!(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"));var Lb=null,Mb=null,Nb=C||Ua&&!Kb||Sa||"function"==typeof l.btoa,Ob=function(a,b){var c;if(Nb&&!b)c=l.btoa(a);else{c=[];for(var d=0,f=0;f<a.length;f++){for(var e=a.charCodeAt(f);255<e;)c[d++]=e&255,e>>=8;c[d++]=e}if(!Lb)for(Lb={},Mb={},a=0;65>a;a++)Lb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Mb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);b=b?Mb:Lb;a=[];for(d=0;d<c.length;d+=3){var g=c[d],h=(f=d+1<c.length)?c[d+1]:0,k=(e=
d+2<c.length)?c[d+2]:0,m=g>>2,g=(g&3)<<4|h>>4,h=(h&15)<<2|k>>6,k=k&63;e||(k=64,f||(h=64));a.push(b[m],b[g],b[h],b[k])}c=a.join("")}return c};var Qb=function(a,b,c){var d=Pb();this.label=a;this.type=b;this.eventId=c;this.value=d;this.duration=0};var Rb=function(a,b){this.events=[];this.v={};this.j={};this.s=b||l;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue);this.m=null!=this.s.google_measure_js_timing?this.s.google_measure_js_timing:Math.random()<a},Pb=function(){var a=l.performance;return a&&a.now?a.now():ca()},K=function(a){return"goog_"+a.label+"_"+a.type+"_"+a.eventId},Sb=function(a,b){a=a.s;a.performance&&a.performance.mark&&a.performance.mark(b)},Ub=function(){var a=Tb;u(a.events,
a.u,a);hb(a.j,function(a){u(a,this.u,this)},a);a.j={};a.events.length=0;a.m=!1};Rb.prototype.u=function(a){a=K(a);var b=this.s.performance;b&&b.clearMarks&&(b.clearMarks(a+"_start"),b.clearMarks(a+"_end"))};Rb.prototype.start=function(a,b){if(!this.m)return null;var c=(this.v[a]||0)+1;this.v[a]=c;c=new Qb(a,b,c);a=a+"_"+b;this.j[a]?this.j[a].push(c):this.j[a]=[c];Sb(this,K(c)+"_start");return c};
var Vb=function(a,b){if(a.m){b+="_3";var c=a.j[b];c&&c.length&&(b=a.j[b].pop(),b.duration=Pb()-b.value,Sb(a,K(b)+"_end"),a.events.push(b))}},Wb=function(a,b,c){if(!a.m)return c();var d=a.start(b,3),f;try{f=c()}catch(g){var e=a.j[b+"_3"]||[];u(e,function(a,b){K(a)===K(d)&&(this.u(d),e.splice(b,1))},a);throw g;}Vb(a,b);return f},Xb=function(a,b,c){return n(function(){for(var d=[],f=0;f<arguments.length;++f)d[f]=arguments[f];return Wb(this,a,function(){return b.apply(c,d)})},Tb)};var Yb=function(a,b){this.j=a;this.m=b},Zb=function(a,b,c){this.url=a;this.j=b;this.N=!!c;this.depth=null};var $b=function(a,b,c){this.u=a;this.C=b;this.s=c;this.m=null;this.v=this.j},ac=function(a,b,c){this.s=a;this.j=b||"";this.m=c||-1},cc=function(a,b,c,d,f,e){var g;try{g=c()}catch(m){var h=a.s;try{var k=bc(m),h=(e||a.v).call(a,b,k,void 0,d)}catch(q){a.j("pAR",q)}if(!h)throw m;}finally{if(f)try{f()}catch(m){}}return g},dc=function(a,b,c,d,f,e,g){return function(){for(var h=[],k=0;k<arguments.length;++k)h[k]=arguments[k];return cc(a,b,function(){return c.apply(d,h)},f,e,g)}};
$b.prototype.j=function(a,b,c,d,f){try{var e=f||this.C,g=new nb;g.v=!0;G(g,1,"context",a);b instanceof ac||(b=bc(b));G(g,2,"msg",b.s.substring(0,512));b.j&&G(g,3,"file",b.j);0<b.m&&G(g,4,"line",b.m.toString());b={};if(this.m)try{this.m(b)}catch(A){}if(d)try{d(b)}catch(A){}d=[b];g.j.push(5);g.m[5]=d;var h;f=l;d=[];var k,m=null;do{b=f;D(b)?(k=b.location.href,m=b.document&&b.document.referrer||null):(k=m,m=null);d.push(new Zb(k||"",b));try{f=b.parent}catch(A){f=null}}while(f&&b!=f);k=0;for(var q=d.length-
1;k<=q;++k)d[k].depth=q-k;b=l;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var w=d[k];w.url||(w.url=b.location.ancestorOrigins[k-1]||"",w.N=!0)}for(var z=new Zb(l.location.href,l,!1),E=d.length-1,q=E;0<=q;--q){var x=d[q];if(x.url&&!x.N){z=x;break}}var x=null,F=d.length&&d[E].url;0!=z.depth&&F&&(x=d[E]);h=new Yb(z,x);h.m&&G(g,6,"top",h.m.url||"");G(g,7,"url",h.j.url||"");ub(this.u,e,g,c)}catch(A){try{ub(this.u,e,{context:"ecmserr",
rctx:a,msg:ec(A),url:h.j.url},c)}catch(Mc){}}return this.s};var bc=function(a){return new ac(ec(a),a.fileName,a.lineNumber)},ec=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var L,M;if(Fb&&!D(J)){var fc="."+vb.domain;try{for(;2<fc.split(".").length&&!D(J);)vb.domain=fc=fc.substr(fc.indexOf(".")+1),J=window.parent}catch(a){}D(J)||(J=window)}M=J;var Tb=new Rb(1,M),gc=function(a){null!=a&&(M.google_measure_js_timing=a);M.google_measure_js_timing||Ub()};L=new $b(new function(){this.u="http:"===H.location.protocol?"http:":"https:";this.m="pagead2.googlesyndication.com";this.s="/pagead/gen_204?id=";this.j=.01},"jserror",!0);
"complete"==M.document.readyState?gc():Tb.m&&mb(M,function(){gc()});var hc=function(a,b,c,d,f,e){a=a.toString();return dc(L,a,Xb(a,b,c),c,d,f,e)},ic=L.j;var jc=null,kc=function(){if(!jc){for(var a=l,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,D(a))b=a;else break;jc=b}return jc};var lc={l:"368226001",A:"368226002",B:"368226003"},mc={l:"10583695",o:"10583696"},nc={l:"10573695",o:"10573696"},oc={l:"4089030",o:"4089031"},pc={l:"4089035",o:"4089036"},qc={I:"20040067",l:"20040068"},N={l:"62710010",VIEWPORT:"62710011",H:"62710012"},O={w:{l:"368226011",A:"368226012",B:"368226013"},da:{},Ea:{l:"453848104",o:"453848105"},Da:{l:"137237720",o:"137237721"},la:{l:"24819308",o:"24819309",aa:"24819320",fa:"24819321"},ka:{l:"24819330",o:"24819331"},ha:{l:"86724438",o:"86724439"},ea:{l:"26835105",
o:"26835106"},U:{l:"20040000",o:"20040001"},ba:{l:"20040016",o:"20040017"},ca:{Z:"314159230",ja:"314159231"},ia:{sa:"27285692",ua:"27285712",ta:"27285713"},oa:{l:"27415010",o:"27415011"},J:{l:"62710000",o:"62710001"},K:{l:"62710002",o:"62710003"},pa:{l:"20040060",na:"20040061",ga:"20040062"},qa:{Ba:389613E3,Ca:389613001,za:389613002,Aa:389613003,xa:389613004,ya:389613005,va:389613006,wa:389613007},$:{l:"20040063",o:"20040064"},Fa:{l:"20040065",o:"20040066"},V:{l:"20040076",o:"20040077"},ra:{l:"21060104",
o:"21060105"},ma:{l:111541703,o:111541704},L:{l:"21060140",o:"21060141"}},Jb=!1;var rc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,tc=function(){},vc=function(a,b,c){switch(typeof b){case "string":uc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=
b.length&&b.splice){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),vc(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),uc(f,c),c.push(":"),vc(a,e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},uc=function(a,b){b.push('"');b.push(a.replace(sc,function(a){if(a in rc)return rc[a];var b=a.charCodeAt(0),c="\\u";16>b?c+="000":256>b?c+="00":4096>b&&(c+="0");return rc[a]=
c+b.toString(16)}));b.push('"')};var wc="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_content_recommendation_columns_num google_content_recommendation_rows_num google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_full_width_responsive_allowed google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_native_settings_key google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_pucrd google_referrer_url google_region google_responsive_formats google_responsive_auto_format google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
xc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},yc=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},zc=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];
return null},Cc=function(a){var b;try{a:{var c=a.document.getElementsByTagName("script"),d=a.navigator&&a.navigator.userAgent||"",f;if(!(f=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))){var e;if(e=/i(phone|pad|pod)/i.test(d)){var g;if(g=/applewebkit/i.test(d)&&!/version|safari/i.test(d)){var h;try{h=!(!H.navigator.Y&&!Gb(H).navigator.Y)}catch(z){h=!1}g=!h}e=g}f=e}for(var d=f?yc:zc,
k=c.length-1;0<=k;k--){var m=c[k];if(!m.google_parsed_script){m.google_parsed_script=!0;var q=d(m);if(q){b=q;break a}}}b=null}}catch(z){return!1}if(!b)return!1;try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,k={},w;w=c.exec(b);)k[w[1]]=Ac(w[2]);Bc(k,a)}catch(z){return!1}return!!a.google_ad_client},Dc=function(a){try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var b,c,d=function(){return this};Object.prototype.hasOwnProperty("toJSON")&&(b=Object.prototype.toJSON,
Object.prototype.toJSON=d);Array.prototype.hasOwnProperty("toJSON")&&(c=Array.prototype.toJSON,Array.prototype.toJSON=d);var f=window.encodeURIComponent(window.JSON.stringify(a)),e;try{e=Ob(f)}catch(g){e="#"+Ob(f,!0)}b&&(Object.prototype.toJSON=b);c&&(Array.prototype.toJSON=c);return e}}catch(g){L.j("sblob".toString(),g,void 0,void 0)}return""},Ec=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];Ab(a,function(a,d){if(null!=a){var c;try{var e=[];vc(new tc,a,e);
c=e.join("")}catch(g){}c&&(c=c.replace(/\//g,"\\$&"),Cb(b,d,"=",c,";"))}});return b.join("")},Fc=function(a){for(var b=0,c=wc.length;b<c;b++){var d=wc[b];xc[d]||(a[d]=null)}},Ac=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Bc=function(a,b){for(var c=0;c<wc.length;c++){var d=
wc[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var P=function(a){return(a=a.google_ad_modifications)?a.eids||[]:[]},Q=function(a,b){a=a.google_ad_modifications;return I(a?a.loeids||[]:[],b)},Gc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Hc={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",pse:"google_pstate_expt"};L.s=!va;var Ic=new function(){this.j=new Hb(100,199)};var R=function(a,b){b&&a.push(b)},S=function(a,b,c){for(var d=0;d<c.length;d++)if(a.location&&a.location.hash=="#google_plle_"+c[d])return c[d];var f;a:{try{var e=l.top.location.hash;if(e){var g=e.match(/\bdeid=([\d,]+)/);f=g&&g[1]||"";break a}}catch(h){}f=""}if(a=(a=f.match(new RegExp("\\b("+c.join("|")+")\\b")))&&a[0]||null)b=a;else if(Jb)b=null;else a:{if(!(1E-4>Math.random())&&(a=Math.random(),a<b)){a=gb(l);b=c[Math.floor(a*c.length)];break a}b=null}return b};var Jc=function(a,b,c){c||(c=ya?"https":"http");H.location&&"https:"==H.location.protocol&&"http"==c&&(c="https");return[c,"://",a,b].join("")};var T=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var Kc=function(a){this.name="TagError";this.message=a?"adsbygoogle.push() error: "+a:"";Error.captureStackTrace?Error.captureStackTrace(this,Kc):this.stack=Error().stack||""};da(Kc,Error);var U=function(a,b){this.s=a;this.m=b};U.prototype.minWidth=function(){return this.s};U.prototype.height=function(){return this.m};U.prototype.j=function(a){return 300<a&&300<this.m?this.s:Math.min(1200,Math.round(a))};var V=function(a,b,c){U.call(this,a,b);this.W=c};da(V,U);var Lc=function(a){return function(b){return!!(b.W&a)}},Nc=function(a,b){U.call(this,a,b)};da(Nc,U);Nc.prototype.j=function(){return this.minWidth()};
var W=[new V(970,90,2),new V(728,90,2),new V(468,60,2),new V(336,280,1),new V(320,100,2),new V(320,50,2),new V(300,600,4),new V(300,250,1),new V(250,250,1),new V(234,60,2),new V(200,200,1),new V(180,150,1),new V(160,600,4),new V(125,125,1),new V(120,600,4),new V(120,240,4)],Oc=[W[6],W[12],W[3],W[0],W[7],W[14],W[1],W[8],W[10],W[4],W[15],W[2],W[11],W[5],W[13],W[9]];var Pc=function(a,b){do{var c=fb(a,b);if(c&&"fixed"==c.position)return!1}while(a=a.parentElement);return!0};var Qc=function(a,b,c){if(a.style){var d=kb(a.style[c]);if(d)return d}if(a=fb(a,b))if(d=kb(a[c]))return d;return null},Rc=function(a){return function(b){return b.minWidth()<=a}},Tc=function(a,b,c){var d=a&&Sc(c,b);return function(a){return!(d&&250<=a.height())}},Sc=function(a,b){var c;try{var d=b.document.documentElement.getBoundingClientRect(),f=a.getBoundingClientRect();c={x:f.left-d.left,y:f.top-d.top}}catch(e){c=null}return(c?c.y:0)<T(b).clientHeight-100},Uc=function(a,b){var c=Infinity;do{var d=
Qc(b,a,"height");d&&(c=Math.min(c,d));(d=Qc(b,a,"maxHeight"))&&(c=Math.min(c,d))}while((b=b.parentElement)&&"HTML"!=b.tagName);return c};var Vc=function(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}},Wc=function(a,b,c){for(var d=a.length,f=null,e=0;e<d;++e){var g=a[e];if(b(g)){if(!c||c(g))return g;null===f&&(f=g)}}return f};var Xc=function(a){this.j=a};var Yc=function(a,b,c,d){if(!Q(b,O.w.A)&&!Q(b,O.w.B)&&!Q(b,O.w.l))return a;d.google_full_width_responsive_allowed=!1;if(!(488>T(b).clientWidth&&b.innerHeight>=b.innerWidth))return a;var f=T(b).clientWidth,e=f-a;if(!f||5>e||.3<e/f||Gb(b)!=b)return a;var g;g=c;for(var h=0,k=0;100>k&&g;k++)h+=g.offsetLeft+g.clientLeft-g.scrollLeft,g=g.offsetParent;g=h;if(.25>Math.min(g/e,(f-a-g)/e))return a;d.google_full_width_responsive_allowed=!0;if(!Q(b,O.w.A)&&!Q(b,O.w.B))return a;c.style.marginLeft=-1*g+"px";c.style.width=
f+"px";c.style.zIndex=30;return f},$c=function(a,b,c){var d;d=d||{};var f=a;a=Yc(a,b,c,d);var f=f!=a,e=.25>=a/Math.min(1200,T(b).clientWidth)?4:3;d.google_responsive_formats=e;d=!(y("iPad")||y("Android")&&!y("Mobile")||y("Silk"))&&(y("iPod")||y("iPhone")||y("Android")||y("IEMobile"))&&!Sc(c,b)&&(d.google_safe_for_responsive_override=Pc(c,b));var g=(d?Oc:W).slice(0),h=488>T(b).clientWidth,e=[Rc(a),Zc(h),Tc(h,b,c),Lc(e)],h=[];if(d){var k=Uc(b,c);h.push(function(a){return a.height()<=k})}d=Wc(g,Vc(e),
Vc(h));if(!d)throw new Kc("No slot size for availableWidth="+a);if(f)if(Q(b,O.w.A))d=new Nc(a,d.height());else if(Q(b,O.w.B))d=new Nc(a,Sc(c,b)?d.height():Math.round(a/1.2));else throw Error("Slot was expanded without experiment");return new Xc(d)},Zc=function(a){return function(b){return!(320==b.minWidth()&&(a&&50==b.height()||!a&&100==b.height()))}};var ad=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:n(this.u,this)});this.s=a.google_iframe_oncopy},bd=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};ad.prototype.set=function(a,b){this.s.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",n(this.m,this,a),!1)};
ad.prototype.m=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};ad.prototype.u=function(a,b){var c=bd("rx",a);a:{if(a&&(a=a.match("dt=([^&]+)"))&&2==a.length){a=a[1];break a}a=""}a=(new Date).getTime()-a;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=a?"M":0<=a?a:"-M"));this.set(b,c);return c};var cd=Ga("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var dd=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};C||Ua||B&&ab(11);var ed=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i;var fd=null;var gd={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var X=function(a){this.u=[];this.m=a||window;this.j=0;this.s=null;this.F=0},Y,hd=function(a){try{return a.sz()}catch(b){return!1}},id=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&hd(a)&&Bb(a.nq)&&Bb(a.nqa)&&Bb(a.al)&&Bb(a.rl)},jd=function(){if(Y&&hd(Y))return Y;var a=kc(),b=a.google_jobrunner;return id(b)?Y=b:a.google_jobrunner=Y=new X(a)},kd=function(a,b){jd().nq(a,b)},ld=function(a,b){jd().nqa(a,b)};
X.prototype.G=function(a,b){0!=this.j||0!=this.u.length||b&&b!=window?this.v(a,b):(this.j=2,this.D(new md(a,window)))};X.prototype.v=function(a,b){this.u.push(new md(a,b||this.m));nd(this)};X.prototype.P=function(a){this.j=1;if(a){var b=hc(188,n(this.C,this,!0));this.s=this.m.setTimeout(b,a)}};X.prototype.C=function(a){a&&++this.F;1==this.j&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.j=0);nd(this)};X.prototype.R=function(){return!(!window||!Array)};X.prototype.O=function(){return this.F};
var nd=function(a){var b=hc(189,n(a.T,a));a.m.setTimeout(b,0)};X.prototype.T=function(){if(0==this.j&&this.u.length){var a=this.u.shift();this.j=2;var b=hc(190,n(this.D,this,a));a.j.setTimeout(b,0);nd(this)}};X.prototype.D=function(a){this.j=0;a.m()};X.prototype.nq=X.prototype.G;X.prototype.nqa=X.prototype.v;X.prototype.al=X.prototype.P;X.prototype.rl=X.prototype.C;X.prototype.sz=X.prototype.R;X.prototype.tc=X.prototype.O;var md=function(a,b){this.m=a;this.j=b};var Z=Pa("script"),od=Fb?1==Eb(H):!Eb(H),pd=function(a){a=void 0===a?"/show_ads_impl.js":a;var b=xa?"https":"http",c;a:{if(va)try{var d=H.google_cafe_host||H.top.google_cafe_host;if(d){c=d;break a}}catch(f){}c=ga("","pagead2.googlesyndication.com")}return["<",Z,' src="',Jc(c,["/pagead/js/",ua(),"/r20170110",a,""].join(""),b),'"></',Z,">"].join("")},
qd=function(a,b,c,d){return function(){var f=!1;d&&jd().al(3E4);try{var e=a.document.getElementById(b).contentWindow;if(D(e)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(/Firefox/.test(navigator.userAgent)?h.open("text/html","replace"):h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var k=a.document.getElementById(b).contentWindow,e=c,e=String(e),g=['"'],h=0;h<e.length;h++){var m=e.charAt(h),q=m.charCodeAt(0),w=h+1,z;if(!(z=Ha[m])){var E;
if(31<q&&127>q)E=m;else{var x=void 0,F=m;if(F in Ia)E=Ia[F];else if(F in Ha)E=Ia[F]=Ha[F];else{var A=F.charCodeAt(0);if(31<A&&127>A)x=F;else{if(256>A){if(x="\\x",16>A||256<A)x+="0"}else x="\\u",4096>A&&(x+="0");x+=A.toString(16).toUpperCase()}E=Ia[F]=x}}z=E}g[w]=z}g.push('"');k.location.replace("javascript:"+g.join(""))}f=!0}catch(Mc){k=kc().google_jobrunner,id(k)&&k.rl()}f&&(f=bd("google_async_rrc",c),(new ad(a)).set(b,qd(a,b,f,!1)))}},rd=function(a){var b=["<iframe"];Ab(a,function(a,d){null!=a&&
b.push(" "+d+'="'+Ga(a)+'"')});b.push("></iframe>");return b.join("")},sd=function(a){if(!fd)a:{for(var b=[l.top],c=[],d=0,f;f=b[d++];){c.push(f);try{if(f.frames)for(var e=f.frames.length,g=0;g<e&&1024>b.length;++g)b.push(f.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){fd=h;break a}}catch(k){}fd=null}if(!fd){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=dd(a);c.id="google_esf";c.name="google_esf";a=Jc(ga("",
"googleads.g.doubleclick.net"),["/pagead/html/",ua(),"/r20170110/zrt_lookup.html"].join(""));c.src=a;return rd(c)}return""},td=function(a){var b=O.L;Q(a,b.o)?(b="<"+Z+">window.parent.google_sa_impl.call(this, window, document, location);</"+Z+">",a.google_sa_queue=a.google_sa_queue||[],a.google_sa_impl||(b=pd("/show_ads_impl_single_load.js")+b,a.google_sa_impl=function(b){a.google_sa_queue.push(b)},a.google_process_slots=function(){u(a.google_sa_queue,
function(b){a.google_sa_impl.call(b,b,b.document,b.location)});a.google_sa_queue.length=0})):b=Q(a,b.l)?pd("/show_ads_impl_single_load_control.js"):pd();return b},ud=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!gd[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d&&c?d=d.toLowerCase():d="";b.google_ad_format=d;if("number"!=typeof b.google_reactive_sra_index||
!b.google_ad_unit_key){for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],f=0,e=yb.parentElement;e&&25>f;e=e.parentNode,++f)c.push(9!==e.nodeType&&e.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=ib(d.join(":")).toString();d=yb;c=[];for(f=0;d&&25>f;++f){var e=(e=9!==d.nodeType&&d.id)?"/"+e:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,m=0;m<h.length;++m){var q=
h[m];if(q.nodeName&&q.nodeName.toString().toLowerCase()===g){if(d===q){g="."+k;break a}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+e+g);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var w=a.parent,f=0;w&&w!==a&&25>f;++f){for(var z=w.frames,e=0;e<z.length;++e)if(a===z[e]){c.push(e);break}a=w;w=a.parent}}catch(E){}b.google_ad_dom_fingerprint=ib(d+c.join()).toString()}};(function(a){L.m=function(b){u(a,function(a){a(b)})}})([function(a){a.shv=ua()},function(a){hb(Hc,function(b,c){try{null!=l[b]&&(a[c]=l[b])}catch(d){}})},function(a){try{var b=l.google_ad_modifications;if(null!=b){var c=Ka(b.eids,b.loeids);null!=c&&0<c.length&&(a.eid=c.join(","))}}catch(d){}}]);
hc(158,function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.eids=b.eids||[],b=b.loeids=b.loeids||[],d,f,e;d=O.w;a:{f=[d.l,d.A,d.B];for(var g=0;g<f.length;g++)if(a.location&&a.location.hash=="#google_plle_"+f[g]){f=f[g];break a}var g=new Hb(ha,ha+ia-1),h;(h=0>=ia||ia%f.length)||(h=Ic.j,h=!(h.start<=g.start&&h.j>=g.j));h?f=null:(h=Ib(a),f=null!==h&&g.start<=h&&g.j>=h?f[(h-ha)%f.length]:null)}R(b,f);f==d.l?e=lc.l:f==d.A?e=lc.A:f==d.B?e=lc.B:
e="";R(c,e);d=mc;R(c,S(a,la,[d.l,d.o]));d=nc;R(c,S(a,ma,[d.l,d.o]));d=oc;R(c,S(a,ja,[d.l,d.o]));d=pc;R(c,S(a,ka,[d.l,d.o]));vb.body||(d=O.U,R(b,S(a,na,[d.l,d.o])));d=O.J;f=S(a,oa,[d.l,d.o]);R(b,f);d=O.K;f=S(a,pa,[d.l,d.o]);R(b,f);t("")&&R(b,"");d=N;f=S(a,qa,[d.l,d.VIEWPORT,d.H]);R(c,f);d=O.V;f=S(a,sa,[d.l,d.o]);R(b,f);d=O.L;f=S(a,ta,[d.l,d.o]);R(b,f);d=qc;f=S(a,ra,[d.I,d.l]);R(c,f)}gc(I(P(a),qc.I));b=a.google_ad_slot;c=a.google_ad_modifications;
!c||Gc(c.ad_whitelist,b,void 0)?c=null:(e=c.space_collapsing||"none",c=(b=Gc(c.ad_blacklist,b))?{M:!0,X:b.space_collapsing||e}:c.remove_ads_by_default?{M:!0,X:e}:null);if(c&&c.M)Fc(a);else if(Db(a),H&&"js"==H.google_ad_output&&H.google_ad_client&&(c={},Q(H,O.J.o)&&Ma(c,{4205305285:!0,1042763955:!0,3202442099:!0,1772659378:!0,3117125756:!0,3960366076:!0}),Q(H,O.K.o)&&Ma(c,{501375110:!0,2224063286:!0,1112148586:!0,767199973:!0,684876463:!0,2445232635:!0,3317641609:!0,2744329720:!0,3556408148:!0,3889123709:!0,
2447753775:!0,1214537777:!0,3296662202:!0,988327342:!0,2885006503:!0,3455244557:!0,1530933988:!0,3542933741:!0,730553449:!0,2766273409:!0,1579777665:!0,285871146:!0,2557095315:!0}),c[ib(H.google_ad_client)]&&(H.google_enable_async=!0)),!1===window.google_enable_async||ed.test(navigator.userAgent)||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output&&("js"!=window.google_ad_output||!0!==window.google_enable_async))a.google_loader_used="sb",a.google_start_time=p,ud(a,
a),document.write(sd(a.google_ad_client)+pd());else{od&&(e=a.google_ad_client,c=navigator,a&&e&&c&&(c=a.document,b=dd(e),/[^a-z0-9-]/.test(b)||((d=t("r20160913"))&&(d+="/"),e=c.createElement("script"),e.src=Jc("pagead2.googlesyndication.com","/pub-config/"+d+b+".js"),(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(e,c))));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;c={};null==a.google_ad_client&&Cc(a)&&(c.google_loader_features_used=
2048);Bc(a,c);c.google_loader_used="sa";Fc(a);if(I(P(a),N.l)||I(P(a),N.VIEWPORT)||I(P(a),N.H)&&a.document&&a.document.body){e=a.document;if(e.currentScript)e=e.currentScript.parentElement;else if(e=e.getElementsByTagName("script"),e=e[e.length-1].parentElement,!e)throw new Kc("show_ads.js script not included in document.body");b=c.google_ad_width;a:{d=Gb(a);if(d=D(d)?d:null){d=T(d).clientWidth;f=a.document.body.currentStyle?a.document.body.currentStyle.direction:a.getComputedStyle?a.getComputedStyle(a.document.body).getPropertyValue("direction"):
"";if("ltr"===f&&d){d=Math.floor(Math.min(1200,d-e.getBoundingClientRect().left));break a}if("rtl"===f&&d){f=a.document.body.getBoundingClientRect().right-e.getBoundingClientRect().right;d=Math.floor(Math.min(1200,d-f-Math.floor((d-a.document.body.clientWidth)/2)));break a}}d=-1}0<=d&&b>d&&(I(P(a),N.VIEWPORT)?(c.google_ad_resize=1,c.google_ad_width=d):I(P(a),N.H)?(c.google_ad_resize=2,e=$c(d,a,e).j,c.google_ad_width=e.j(d),c.google_ad_height=e.height(),c.google_ad_format=e.j(d)+"x"+e.height()):I(P(a),
N.l)&&(c.google_ad_resize=0))}e={};b=c.google_ad_height;e.width='"'+c.google_ad_width+'"';e.height='"'+b+'"';e.frameborder='"0"';e.marginwidth='"0"';e.marginheight='"0"';e.vspace='"0"';e.hspace='"0"';e.allowtransparency='"true"';e.scrolling='"no"';e.allowfullscreen='"true"';e.onload='"'+cd+'"';b=a.document;d=e.id;for(f=0;!d||b.getElementById(d);)d="aswift_"+f++;e.id=d;e.name=d;f=c.google_ad_width;g=c.google_ad_height;d=["<iframe"];for(var k in e)e.hasOwnProperty(k)&&Cb(d,k+"="+e[k]);d.push('style="left:0;position:absolute;top:0;"');
d.push("></iframe>");k=e.id;f="border:none;height:"+g+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+f+"px;background-color:transparent";b.write(['<ins id="',k+"_expand",'" style="display:inline-table;',f,'"><ins id="',k+"_anchor",'" style="display:block;',f,'">',d.join(" "),"</ins></ins>"].join(""));k=e.id;ud(a,c);e=Ec(c);b=Dc(c);c=sd(c.google_ad_client);d=(new Date).getTime();c=["<!doctype html><html><body>",c,"<",Z,">",e,"google_show_ads_impl=true;google_unique_id=",Eb(a),
';google_async_iframe_id="',k,'";google_start_time=',p,";",b?'google_pub_vars = "'+b+'";':"","google_bpp=",d>p?d-p:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",Z,">",td(a),"</body></html>"].join("");(a.document.getElementById(k)?kd:ld)(qd(a,k,c,!0))}},void 0,void 0,void 0,ic)();}).call(this);
