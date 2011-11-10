/*******************************************************************************
 *
 *  Copyright (c)  2011 Toura, LLC.	All Rights Reserved.
 *  http://toura.com
 *
 *  LICENSE: https://github.com/Toura/mulberry/blob/master/LICENSE.txt
 *
 *******************************************************************************/
dojo.provide("client.base");if(!dojo._hasResource["dojo.date"]){dojo._hasResource["dojo.date"]=true;dojo.provide("dojo.date");dojo.getObject("date",true,dojo);dojo.date.getDaysInMonth=function(_1){var _2=_1.getMonth();var _3=[31,28,31,30,31,30,31,31,30,31,30,31];if(_2==1&&dojo.date.isLeapYear(_1)){return 29;}return _3[_2];};dojo.date.isLeapYear=function(_4){var _5=_4.getFullYear();return !(_5%400)||(!(_5%4)&&!!(_5%100));};dojo.date.getTimezoneName=function(_6){var _7=_6.toString();var tz="";var _8;var _9=_7.indexOf("(");if(_9>-1){tz=_7.substring(++_9,_7.indexOf(")"));}else{var _a=/([A-Z\/]+) \d{4}$/;if((_8=_7.match(_a))){tz=_8[1];}else{_7=_6.toLocaleString();_a=/ ([A-Z\/]+)$/;if((_8=_7.match(_a))){tz=_8[1];}}}return (tz=="AM"||tz=="PM")?"":tz;};dojo.date.compare=function(_b,_c,_d){_b=new Date(+_b);_c=new Date(+(_c||new Date()));if(_d=="date"){_b.setHours(0,0,0,0);_c.setHours(0,0,0,0);}else{if(_d=="time"){_b.setFullYear(0,0,0);_c.setFullYear(0,0,0);}}if(_b>_c){return 1;}if(_b<_c){return -1;}return 0;};dojo.date.add=function(_e,_f,_10){var sum=new Date(+_e);var _11=false;var _12="Date";switch(_f){case "day":break;case "weekday":var _13,_14;var mod=_10%5;if(!mod){_13=(_10>0)?5:-5;_14=(_10>0)?((_10-5)/5):((_10+5)/5);}else{_13=mod;_14=parseInt(_10/5);}var _15=_e.getDay();var adj=0;if(_15==6&&_10>0){adj=1;}else{if(_15==0&&_10<0){adj=-1;}}var _16=_15+_13;if(_16==0||_16==6){adj=(_10>0)?2:-2;}_10=(7*_14)+_13+adj;break;case "year":_12="FullYear";_11=true;break;case "week":_10*=7;break;case "quarter":_10*=3;case "month":_11=true;_12="Month";break;default:_12="UTC"+_f.charAt(0).toUpperCase()+_f.substring(1)+"s";}if(_12){sum["set"+_12](sum["get"+_12]()+_10);}if(_11&&(sum.getDate()<_e.getDate())){sum.setDate(0);}return sum;};dojo.date.difference=function(_17,_18,_19){_18=_18||new Date();_19=_19||"day";var _1a=_18.getFullYear()-_17.getFullYear();var _1b=1;switch(_19){case "quarter":var m1=_17.getMonth();var m2=_18.getMonth();var q1=Math.floor(m1/3)+1;var q2=Math.floor(m2/3)+1;q2+=(_1a*4);_1b=q2-q1;break;case "weekday":var _1c=Math.round(dojo.date.difference(_17,_18,"day"));var _1d=parseInt(dojo.date.difference(_17,_18,"week"));var mod=_1c%7;if(mod==0){_1c=_1d*5;}else{var adj=0;var _1e=_17.getDay();var _1f=_18.getDay();_1d=parseInt(_1c/7);mod=_1c%7;var _20=new Date(_17);_20.setDate(_20.getDate()+(_1d*7));var _21=_20.getDay();if(_1c>0){switch(true){case _1e==6:adj=-1;break;case _1e==0:adj=0;break;case _1f==6:adj=-1;break;case _1f==0:adj=-2;break;case (_21+mod)>5:adj=-2;}}else{if(_1c<0){switch(true){case _1e==6:adj=0;break;case _1e==0:adj=1;break;case _1f==6:adj=2;break;case _1f==0:adj=1;break;case (_21+mod)<0:adj=2;}}}_1c+=adj;_1c-=(_1d*2);}_1b=_1c;break;case "year":_1b=_1a;break;case "month":_1b=(_18.getMonth()-_17.getMonth())+(_1a*12);break;case "week":_1b=parseInt(dojo.date.difference(_17,_18,"day")/7);break;case "day":_1b/=24;case "hour":_1b/=60;case "minute":_1b/=60;case "second":_1b/=1000;case "millisecond":_1b*=_18.getTime()-_17.getTime();}return Math.round(_1b);};}if(!dojo._hasResource["dojo.cldr.supplemental"]){dojo._hasResource["dojo.cldr.supplemental"]=true;dojo.provide("dojo.cldr.supplemental");dojo.getObject("cldr.supplemental",true,dojo);dojo.cldr.supplemental.getFirstDayOfWeek=function(_22){var _23={mv:5,ae:6,af:6,bh:6,dj:6,dz:6,eg:6,er:6,et:6,iq:6,ir:6,jo:6,ke:6,kw:6,ly:6,ma:6,om:6,qa:6,sa:6,sd:6,so:6,sy:6,tn:6,ye:6,ar:0,as:0,az:0,bw:0,ca:0,cn:0,fo:0,ge:0,gl:0,gu:0,hk:0,il:0,"in":0,jm:0,jp:0,kg:0,kr:0,la:0,mh:0,mn:0,mo:0,mp:0,mt:0,nz:0,ph:0,pk:0,sg:0,th:0,tt:0,tw:0,um:0,us:0,uz:0,vi:0,zw:0};var _24=dojo.cldr.supplemental._region(_22);var dow=_23[_24];return (dow===undefined)?1:dow;};dojo.cldr.supplemental._region=function(_25){_25=dojo.i18n.normalizeLocale(_25);var _26=_25.split("-");var _27=_26[1];if(!_27){_27={de:"de",en:"us",es:"es",fi:"fi",fr:"fr",he:"il",hu:"hu",it:"it",ja:"jp",ko:"kr",nl:"nl",pt:"br",sv:"se",zh:"cn"}[_26[0]];}else{if(_27.length==4){_27=_26[2];}}return _27;};dojo.cldr.supplemental.getWeekend=function(_28){var _29={"in":0,af:4,dz:4,ir:4,om:4,sa:4,ye:4,ae:5,bh:5,eg:5,il:5,iq:5,jo:5,kw:5,ly:5,ma:5,qa:5,sd:5,sy:5,tn:5};var _2a={af:5,dz:5,ir:5,om:5,sa:5,ye:5,ae:6,bh:5,eg:6,il:6,iq:6,jo:6,kw:6,ly:6,ma:6,qa:6,sd:6,sy:6,tn:6};var _2b=dojo.cldr.supplemental._region(_28);var _2c=_29[_2b];var end=_2a[_2b];if(_2c===undefined){_2c=6;}if(end===undefined){end=0;}return {start:_2c,end:end};};}if(!dojo._hasResource["dojo.regexp"]){dojo._hasResource["dojo.regexp"]=true;dojo.provide("dojo.regexp");dojo.getObject("regexp",true,dojo);dojo.regexp.escapeString=function(str,_2d){return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(ch){if(_2d&&_2d.indexOf(ch)!=-1){return ch;}return "\\"+ch;});};dojo.regexp.buildGroupRE=function(arr,re,_2e){if(!(arr instanceof Array)){return re(arr);}var b=[];for(var i=0;i<arr.length;i++){b.push(re(arr[i]));}return dojo.regexp.group(b.join("|"),_2e);};dojo.regexp.group=function(_2f,_30){return "("+(_30?"?:":"")+_2f+")";};}if(!dojo._hasResource["dojo.date.locale"]){dojo._hasResource["dojo.date.locale"]=true;dojo.provide("dojo.date.locale");dojo.getObject("date.locale",true,dojo);(function(){function _31(_32,_33,_34,_35){return _35.replace(/([a-z])\1*/ig,function(_36){var s,pad,c=_36.charAt(0),l=_36.length,_37=["abbr","wide","narrow"];switch(c){case "G":s=_33[(l<4)?"eraAbbr":"eraNames"][_32.getFullYear()<0?0:1];break;case "y":s=_32.getFullYear();switch(l){case 1:break;case 2:if(!_34.fullYear){s=String(s);s=s.substr(s.length-2);break;}default:pad=true;}break;case "Q":case "q":s=Math.ceil((_32.getMonth()+1)/3);pad=true;break;case "M":var m=_32.getMonth();if(l<3){s=m+1;pad=true;}else{var _38=["months","format",_37[l-3]].join("-");s=_33[_38][m];}break;case "w":var _39=0;s=dojo.date.locale._getWeekOfYear(_32,_39);pad=true;break;case "d":s=_32.getDate();pad=true;break;case "D":s=dojo.date.locale._getDayOfYear(_32);pad=true;break;case "E":var d=_32.getDay();if(l<3){s=d+1;pad=true;}else{var _3a=["days","format",_37[l-3]].join("-");s=_33[_3a][d];}break;case "a":var _3b=(_32.getHours()<12)?"am":"pm";s=_34[_3b]||_33["dayPeriods-format-wide-"+_3b];break;case "h":case "H":case "K":case "k":var h=_32.getHours();switch(c){case "h":s=(h%12)||12;break;case "H":s=h;break;case "K":s=(h%12);break;case "k":s=h||24;break;}pad=true;break;case "m":s=_32.getMinutes();pad=true;break;case "s":s=_32.getSeconds();pad=true;break;case "S":s=Math.round(_32.getMilliseconds()*Math.pow(10,l-3));pad=true;break;case "v":case "z":s=dojo.date.locale._getZone(_32,true,_34);if(s){break;}l=4;case "Z":var _3c=dojo.date.locale._getZone(_32,false,_34);var tz=[(_3c<=0?"+":"-"),dojo.string.pad(Math.floor(Math.abs(_3c)/60),2),dojo.string.pad(Math.abs(_3c)%60,2)];if(l==4){tz.splice(0,0,"GMT");tz.splice(3,0,":");}s=tz.join("");break;default:throw new Error("dojo.date.locale.format: invalid pattern char: "+_35);}if(pad){s=dojo.string.pad(s,l);}return s;});};dojo.date.locale._getZone=function(_3d,_3e,_3f){if(_3e){return dojo.date.getTimezoneName(_3d);}else{return _3d.getTimezoneOffset();}};dojo.date.locale.format=function(_40,_41){_41=_41||{};var _42=dojo.i18n.normalizeLocale(_41.locale),_43=_41.formatLength||"short",_44=dojo.date.locale._getGregorianBundle(_42),str=[],_45=dojo.hitch(this,_31,_40,_44,_41);if(_41.selector=="year"){return _46(_44["dateFormatItem-yyyy"]||"yyyy",_45);}var _47;if(_41.selector!="date"){_47=_41.timePattern||_44["timeFormat-"+_43];if(_47){str.push(_46(_47,_45));}}if(_41.selector!="time"){_47=_41.datePattern||_44["dateFormat-"+_43];if(_47){str.push(_46(_47,_45));}}return str.length==1?str[0]:_44["dateTimeFormat-"+_43].replace(/\{(\d+)\}/g,function(_48,key){return str[key];});};dojo.date.locale.regexp=function(_49){return dojo.date.locale._parseInfo(_49).regexp;};dojo.date.locale._parseInfo=function(_4a){_4a=_4a||{};var _4b=dojo.i18n.normalizeLocale(_4a.locale),_4c=dojo.date.locale._getGregorianBundle(_4b),_4d=_4a.formatLength||"short",_4e=_4a.datePattern||_4c["dateFormat-"+_4d],_4f=_4a.timePattern||_4c["timeFormat-"+_4d],_50;if(_4a.selector=="date"){_50=_4e;}else{if(_4a.selector=="time"){_50=_4f;}else{_50=_4c["dateTimeFormat-"+_4d].replace(/\{(\d+)\}/g,function(_51,key){return [_4f,_4e][key];});}}var _52=[],re=_46(_50,dojo.hitch(this,_53,_52,_4c,_4a));return {regexp:re,tokens:_52,bundle:_4c};};dojo.date.locale.parse=function(_54,_55){var _56=/[\u200E\u200F\u202A\u202E]/g,_57=dojo.date.locale._parseInfo(_55),_58=_57.tokens,_59=_57.bundle,re=new RegExp("^"+_57.regexp.replace(_56,"")+"$",_57.strict?"":"i"),_5a=re.exec(_54&&_54.replace(_56,""));if(!_5a){return null;}var _5b=["abbr","wide","narrow"],_5c=[1970,0,1,0,0,0,0],_5d="",_5e=dojo.every(_5a,function(v,i){if(!i){return true;}var _5f=_58[i-1];var l=_5f.length;switch(_5f.charAt(0)){case "y":if(l!=2&&_55.strict){_5c[0]=v;}else{if(v<100){v=Number(v);var _60=""+new Date().getFullYear(),_61=_60.substring(0,2)*100,_62=Math.min(Number(_60.substring(2,4))+20,99),num=(v<_62)?_61+v:_61-100+v;_5c[0]=num;}else{if(_55.strict){return false;}_5c[0]=v;}}break;case "M":if(l>2){var _63=_59["months-format-"+_5b[l-3]].concat();if(!_55.strict){v=v.replace(".","").toLowerCase();_63=dojo.map(_63,function(s){return s.replace(".","").toLowerCase();});}v=dojo.indexOf(_63,v);if(v==-1){return false;}}else{v--;}_5c[1]=v;break;case "E":case "e":var _64=_59["days-format-"+_5b[l-3]].concat();if(!_55.strict){v=v.toLowerCase();_64=dojo.map(_64,function(d){return d.toLowerCase();});}v=dojo.indexOf(_64,v);if(v==-1){return false;}break;case "D":_5c[1]=0;case "d":_5c[2]=v;break;case "a":var am=_55.am||_59["dayPeriods-format-wide-am"],pm=_55.pm||_59["dayPeriods-format-wide-pm"];if(!_55.strict){var _65=/\./g;v=v.replace(_65,"").toLowerCase();am=am.replace(_65,"").toLowerCase();pm=pm.replace(_65,"").toLowerCase();}if(_55.strict&&v!=am&&v!=pm){return false;}_5d=(v==pm)?"p":(v==am)?"a":"";break;case "K":if(v==24){v=0;}case "h":case "H":case "k":if(v>23){return false;}_5c[3]=v;break;case "m":_5c[4]=v;break;case "s":_5c[5]=v;break;case "S":_5c[6]=v;}return true;});var _66=+_5c[3];if(_5d==="p"&&_66<12){_5c[3]=_66+12;}else{if(_5d==="a"&&_66==12){_5c[3]=0;}}var _67=new Date(_5c[0],_5c[1],_5c[2],_5c[3],_5c[4],_5c[5],_5c[6]);if(_55.strict){_67.setFullYear(_5c[0]);}var _68=_58.join(""),_69=_68.indexOf("d")!=-1,_6a=_68.indexOf("M")!=-1;if(!_5e||(_6a&&_67.getMonth()>_5c[1])||(_69&&_67.getDate()>_5c[2])){return null;}if((_6a&&_67.getMonth()<_5c[1])||(_69&&_67.getDate()<_5c[2])){_67=dojo.date.add(_67,"hour",1);}return _67;};function _46(_6b,_6c,_6d,_6e){var _6f=function(x){return x;};_6c=_6c||_6f;_6d=_6d||_6f;_6e=_6e||_6f;var _70=_6b.match(/(''|[^'])+/g),_71=_6b.charAt(0)=="'";dojo.forEach(_70,function(_72,i){if(!_72){_70[i]="";}else{_70[i]=(_71?_6d:_6c)(_72.replace(/''/g,"'"));_71=!_71;}});return _6e(_70.join(""));};function _53(_73,_74,_75,_76){_76=dojo.regexp.escapeString(_76);if(!_75.strict){_76=_76.replace(" a"," ?a");}return _76.replace(/([a-z])\1*/ig,function(_77){var s,c=_77.charAt(0),l=_77.length,p2="",p3="";if(_75.strict){if(l>1){p2="0"+"{"+(l-1)+"}";}if(l>2){p3="0"+"{"+(l-2)+"}";}}else{p2="0?";p3="0{0,2}";}switch(c){case "y":s="\\d{2,4}";break;case "M":s=(l>2)?"\\S+?":p2+"[1-9]|1[0-2]";break;case "D":s=p2+"[1-9]|"+p3+"[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6]";break;case "d":s="3[01]|[12]\\d|"+p2+"[1-9]";break;case "w":s=p2+"[1-9]|[1-4][0-9]|5[0-3]";break;case "E":s="\\S+";break;case "h":s=p2+"[1-9]|1[0-2]";break;case "k":s=p2+"\\d|1[01]";break;case "H":s=p2+"\\d|1\\d|2[0-3]";break;case "K":s=p2+"[1-9]|1\\d|2[0-4]";break;case "m":case "s":s="[0-5]\\d";break;case "S":s="\\d{"+l+"}";break;case "a":var am=_75.am||_74["dayPeriods-format-wide-am"],pm=_75.pm||_74["dayPeriods-format-wide-pm"];if(_75.strict){s=am+"|"+pm;}else{s=am+"|"+pm;if(am!=am.toLowerCase()){s+="|"+am.toLowerCase();}if(pm!=pm.toLowerCase()){s+="|"+pm.toLowerCase();}if(s.indexOf(".")!=-1){s+="|"+s.replace(/\./g,"");}}s=s.replace(/\./g,"\\.");break;default:s=".*";}if(_73){_73.push(_77);}return "("+s+")";}).replace(/[\xa0 ]/g,"[\\s\\xa0]");};})();(function(){var _78=[];dojo.date.locale.addCustomFormats=function(_79,_7a){_78.push({pkg:_79,name:_7a});};dojo.date.locale._getGregorianBundle=function(_7b){var _7c={};dojo.forEach(_78,function(_7d){var _7e=dojo.i18n.getLocalization(_7d.pkg,_7d.name,_7b);_7c=dojo.mixin(_7c,_7e);},this);return _7c;};})();dojo.date.locale.addCustomFormats("dojo.cldr","gregorian");dojo.date.locale.getNames=function(_7f,_80,_81,_82){var _83,_84=dojo.date.locale._getGregorianBundle(_82),_85=[_7f,_81,_80];if(_81=="standAlone"){var key=_85.join("-");_83=_84[key];if(_83[0]==1){_83=undefined;}}_85[1]="format";return (_83||_84[_85.join("-")]).concat();};dojo.date.locale.isWeekend=function(_86,_87){var _88=dojo.cldr.supplemental.getWeekend(_87),day=(_86||new Date()).getDay();if(_88.end<_88.start){_88.end+=7;if(day<_88.start){day+=7;}}return day>=_88.start&&day<=_88.end;};dojo.date.locale._getDayOfYear=function(_89){return dojo.date.difference(new Date(_89.getFullYear(),0,1,_89.getHours()),_89)+1;};dojo.date.locale._getWeekOfYear=function(_8a,_8b){if(arguments.length==1){_8b=0;}var _8c=new Date(_8a.getFullYear(),0,1).getDay(),adj=(_8c-_8b+7)%7,_8d=Math.floor((dojo.date.locale._getDayOfYear(_8a)+adj-1)/7);if(_8c==_8b){_8d++;}return _8d;};}if(!dojo._hasResource["client.components.Twitter"]){dojo._hasResource["client.components.Twitter"]=true;dojo.provide("client.components.Twitter");mulberry.component("Twitter",{componentTemplate:dojo.cache("client.components","Twitter/Twitter.haml","%ul.component.twitter\n"),tweetTemplate:dojo.cache("client.components","Twitter/Tweet.haml","%li\n  %p= text\n  %p.date\n    %a{ href: link, target: '_blank' }= created_at\n"),init:function(){var _8e=this.baseObj.getData("twitter");$.ajax("http://search.twitter.com/search.json?q="+_8e.term,{dataType:"jsonp",success:$.proxy(this,"_onLoad")});},_onLoad:function(_8f){var _90=_8f.results,tpl=mulberry.haml(this.tweetTemplate),_91=$.map(_90,function(_92){_92.link="http://twitter.com/capitoljs/status/"+_92.id_str;_92.created_at=dojo.date.locale.format(new Date(_92.created_at),{datePattern:"EEE",timePattern:"h:mm a"});_92.text=_92.text.replace(/@(\S+)/g,"<a href='http://twitter.com/#!/$1'>@$1</a>");return tpl(_92);}).join("");this.$domNode.html(_91);this.region.refreshScroller();}});}dojo.i18n._preloadLocalizations("client.nls.base",["ROOT","en","en-us","xx"]);
