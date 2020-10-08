/*
 * BestInPlace (for jQuery)
 * version: 3.0.0.alpha (2014)
 *
 * By Bernat Farrero based on the work of Jan Varwig.
 * Examples at http://bernatfarrero.com
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @requires jQuery
 *
 * Usage:
 *
 * Attention.
 * The format of the JSON object given to the select inputs is the following:
 * [["key", "value"],["key", "value"]]
 * The format of the JSON object given to the checkbox inputs is the following:
 * ["falseValue", "trueValue"]

 */
/*!
    Autosize v1.18.9 - 2014-05-27
    Automatically adjust textarea height based on user input.
    (c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
    license: http://www.opensource.org/licenses/mit-license.php
*/

!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var a={exports:{}};t(a,a.exports),e.jqueryDatepicker=a.exports}}(this,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(b){var r;function e(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},b.extend(this._defaults,this.regional[""]),this.regional.en=b.extend(!0,{},this.regional[""]),this.regional["en-US"]=b.extend(!0,{},this.regional.en),this.dpDiv=a(b("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",t,function(){b(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&b(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&b(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",t,n)}function n(){b.datepicker._isDisabledDatepicker(r.inline?r.dpDiv.parent()[0]:r.input[0])||(b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),b(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&b(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&b(this).addClass("ui-datepicker-next-hover"))}function h(e,t){for(var a in b.extend(e,t),t)null==t[a]&&(e[a]=t[a]);return e}return b.extend(b.ui,{datepicker:{version:"1.12.1"}}),b.extend(e.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return h(this._defaults,e||{}),this},_attachDatepicker:function(e,t){var a,i,s;i="div"===(a=e.nodeName.toLowerCase())||"span"===a,e.id||(this.uuid+=1,e.id="dp"+this.uuid),(s=this._newInst(b(e),i)).settings=b.extend({},t||{}),"input"===a?this._connectDatepicker(e,s):i&&this._inlineDatepicker(e,s)},_newInst:function(e,t){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?a(b("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,t){var a=b(e);t.append=b([]),t.trigger=b([]),a.hasClass(this.markerClassName)||(this._attachments(a,t),a.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(t),b.data(e,"datepicker",t),t.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,t){var a,i,s,r=this._get(t,"appendText"),n=this._get(t,"isRTL");t.append&&t.append.remove(),r&&(t.append=b("<span class='"+this._appendClass+"'>"+r+"</span>"),e[n?"before":"after"](t.append)),e.off("focus",this._showDatepicker),t.trigger&&t.trigger.remove(),"focus"!==(a=this._get(t,"showOn"))&&"both"!==a||e.on("focus",this._showDatepicker),"button"!==a&&"both"!==a||(i=this._get(t,"buttonText"),s=this._get(t,"buttonImage"),t.trigger=b(this._get(t,"buttonImageOnly")?b("<img/>").addClass(this._triggerClass).attr({src:s,alt:i,title:i}):b("<button type='button'></button>").addClass(this._triggerClass).html(s?b("<img/>").attr({src:s,alt:i,title:i}):i)),e[n?"before":"after"](t.trigger),t.trigger.on("click",function(){return b.datepicker._datepickerShowing&&b.datepicker._lastInput===e[0]?b.datepicker._hideDatepicker():(b.datepicker._datepickerShowing&&b.datepicker._lastInput!==e[0]&&b.datepicker._hideDatepicker(),b.datepicker._showDatepicker(e[0])),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,a,i,s,r=new Date(2009,11,20),n=this._get(e,"dateFormat");n.match(/[DM]/)&&(t=function(e){for(s=i=a=0;s<e.length;s++)e[s].length>a&&(a=e[s].length,i=s);return i},r.setMonth(t(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),r.setDate(t(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-r.getDay())),e.input.attr("size",this._formatDate(e,r).length)}},_inlineDatepicker:function(e,t){var a=b(e);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(t.dpDiv),b.data(e,"datepicker",t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block"))},_dialogDatepicker:function(e,t,a,i,s){var r,n,d,o,c,l=this._dialogInst;return l||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=b("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),b("body").append(this._dialogInput),(l=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},b.data(this._dialogInput[0],"datepicker",l)),h(l.settings,i||{}),t=t&&t.constructor===Date?this._formatDate(l,t):t,this._dialogInput.val(t),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,this._pos||(n=document.documentElement.clientWidth,d=document.documentElement.clientHeight,o=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[n/2-100+o,d/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),l.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),b.blockUI&&b.blockUI(this.dpDiv),b.data(this._dialogInput[0],"datepicker",l),this},_destroyDatepicker:function(e){var t,a=b(e),i=b.data(e,"datepicker");a.hasClass(this.markerClassName)&&(t=e.nodeName.toLowerCase(),b.removeData(e,"datepicker"),"input"===t?(i.append.remove(),i.trigger.remove(),a.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==t&&"span"!==t||a.removeClass(this.markerClassName).empty(),r===i&&(r=null))},_enableDatepicker:function(t){var e,a,i=b(t),s=b.data(t,"datepicker");i.hasClass(this.markerClassName)&&("input"===(e=t.nodeName.toLowerCase())?(t.disabled=!1,s.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==e&&"span"!==e||((a=i.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=b.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var e,a,i=b(t),s=b.data(t,"datepicker");i.hasClass(this.markerClassName)&&("input"===(e=t.nodeName.toLowerCase())?(t.disabled=!0,s.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==e&&"span"!==e||((a=i.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=b.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(e){try{return b.data(e,"datepicker")}catch(e){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,a){var i,s,r,n,d=this._getInst(e);if(2===arguments.length&&"string"==typeof t)return"defaults"===t?b.extend({},b.datepicker._defaults):d?"all"===t?b.extend({},d.settings):this._get(d,t):null;i=t||{},"string"==typeof t&&((i={})[t]=a),d&&(this._curInst===d&&this._hideDatepicker(),s=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(d,"min"),n=this._getMinMaxDate(d,"max"),h(d.settings,i),null!==r&&void 0!==i.dateFormat&&void 0===i.minDate&&(d.settings.minDate=this._formatDate(d,r)),null!==n&&void 0!==i.dateFormat&&void 0===i.maxDate&&(d.settings.maxDate=this._formatDate(d,n)),"disabled"in i&&(i.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(b(e),d),this._autoSize(d),this._setDate(d,s),this._updateAlternate(d),this._updateDatepicker(d))},_changeDatepicker:function(e,t,a){this._optionDatepicker(e,t,a)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var a=this._getInst(e);a&&(this._setDate(a,t),this._updateDatepicker(a),this._updateAlternate(a))},_getDateDatepicker:function(e,t){var a=this._getInst(e);return a&&!a.inline&&this._setDateFromField(a,t),a?this._getDate(a):null},_doKeyDown:function(e){var t,a,i,s=b.datepicker._getInst(e.target),r=!0,n=s.dpDiv.is(".ui-datepicker-rtl");if(s._keyEvent=!0,b.datepicker._datepickerShowing)switch(e.keyCode){case 9:b.datepicker._hideDatepicker(),r=!1;break;case 13:return(i=b("td."+b.datepicker._dayOverClass+":not(."+b.datepicker._currentClass+")",s.dpDiv))[0]&&b.datepicker._selectDay(e.target,s.selectedMonth,s.selectedYear,i[0]),(t=b.datepicker._get(s,"onSelect"))?(a=b.datepicker._formatDate(s),t.apply(s.input?s.input[0]:null,[a,s])):b.datepicker._hideDatepicker(),!1;case 27:b.datepicker._hideDatepicker();break;case 33:b.datepicker._adjustDate(e.target,e.ctrlKey?-b.datepicker._get(s,"stepBigMonths"):-b.datepicker._get(s,"stepMonths"),"M");break;case 34:b.datepicker._adjustDate(e.target,e.ctrlKey?+b.datepicker._get(s,"stepBigMonths"):+b.datepicker._get(s,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&b.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&b.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&b.datepicker._adjustDate(e.target,n?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&b.datepicker._adjustDate(e.target,e.ctrlKey?-b.datepicker._get(s,"stepBigMonths"):-b.datepicker._get(s,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&b.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&b.datepicker._adjustDate(e.target,n?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&b.datepicker._adjustDate(e.target,e.ctrlKey?+b.datepicker._get(s,"stepBigMonths"):+b.datepicker._get(s,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&b.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?b.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t,a,i=b.datepicker._getInst(e.target);if(b.datepicker._get(i,"constrainInput"))return t=b.datepicker._possibleChars(b.datepicker._get(i,"dateFormat")),a=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||a<" "||!t||-1<t.indexOf(a)},_doKeyUp:function(e){var t=b.datepicker._getInst(e.target);if(t.input.val()!==t.lastVal)try{b.datepicker.parseDate(b.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,b.datepicker._getFormatConfig(t))&&(b.datepicker._setDateFromField(t),b.datepicker._updateAlternate(t),b.datepicker._updateDatepicker(t))}catch(e){}return!0},_showDatepicker:function(e){var t,a,i,s,r,n,d;("input"!==(e=e.target||e).nodeName.toLowerCase()&&(e=b("input",e.parentNode)[0]),b.datepicker._isDisabledDatepicker(e)||b.datepicker._lastInput===e)||(t=b.datepicker._getInst(e),b.datepicker._curInst&&b.datepicker._curInst!==t&&(b.datepicker._curInst.dpDiv.stop(!0,!0),t&&b.datepicker._datepickerShowing&&b.datepicker._hideDatepicker(b.datepicker._curInst.input[0])),!1!==(i=(a=b.datepicker._get(t,"beforeShow"))?a.apply(e,[e,t]):{})&&(h(t.settings,i),t.lastVal=null,b.datepicker._lastInput=e,b.datepicker._setDateFromField(t),b.datepicker._inDialog&&(e.value=""),b.datepicker._pos||(b.datepicker._pos=b.datepicker._findPos(e),b.datepicker._pos[1]+=e.offsetHeight),s=!1,b(e).parents().each(function(){return!(s|="fixed"===b(this).css("position"))}),r={left:b.datepicker._pos[0],top:b.datepicker._pos[1]},b.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),b.datepicker._updateDatepicker(t),r=b.datepicker._checkOffset(t,r,s),t.dpDiv.css({position:b.datepicker._inDialog&&b.blockUI?"static":s?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),t.inline||(n=b.datepicker._get(t,"showAnim"),d=b.datepicker._get(t,"duration"),t.dpDiv.css("z-index",function(e){for(var t,a;e.length&&e[0]!==document;){if(("absolute"===(t=e.css("position"))||"relative"===t||"fixed"===t)&&(a=parseInt(e.css("zIndex"),10),!isNaN(a)&&0!==a))return a;e=e.parent()}return 0}(b(e))+1),b.datepicker._datepickerShowing=!0,b.effects&&b.effects.effect[n]?t.dpDiv.show(n,b.datepicker._get(t,"showOptions"),d):t.dpDiv[n||"show"](n?d:null),b.datepicker._shouldFocusInput(t)&&t.input.trigger("focus"),b.datepicker._curInst=t)))},_updateDatepicker:function(e){this.maxRows=4,(r=e).dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var t,a=this._getNumberOfMonths(e),i=a[1],s=e.dpDiv.find("."+this._dayOverClass+" a");0<s.length&&n.apply(s.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),1<i&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",17*i+"em"),e.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===b.datepicker._curInst&&b.datepicker._datepickerShowing&&b.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(t=e.yearshtml,setTimeout(function(){t===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),t=e.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(e,t,a){var i=e.dpDiv.outerWidth(),s=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,n=e.input?e.input.outerHeight():0,d=document.documentElement.clientWidth+(a?0:b(document).scrollLeft()),o=document.documentElement.clientHeight+(a?0:b(document).scrollTop());return t.left-=this._get(e,"isRTL")?i-r:0,t.left-=a&&t.left===e.input.offset().left?b(document).scrollLeft():0,t.top-=a&&t.top===e.input.offset().top+n?b(document).scrollTop():0,t.left-=Math.min(t.left,t.left+i>d&&i<d?Math.abs(t.left+i-d):0),t.top-=Math.min(t.top,t.top+s>o&&s<o?Math.abs(s+n):0),t},_findPos:function(e){for(var t,a=this._getInst(e),i=this._get(a,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||b.expr.filters.hidden(e));)e=e[i?"previousSibling":"nextSibling"];return[(t=b(e).offset()).left,t.top]},_hideDatepicker:function(e){var t,a,i,s,r=this._curInst;!r||e&&r!==b.data(e,"datepicker")||this._datepickerShowing&&(t=this._get(r,"showAnim"),a=this._get(r,"duration"),i=function(){b.datepicker._tidyDialog(r)},b.effects&&(b.effects.effect[t]||b.effects[t])?r.dpDiv.hide(t,b.datepicker._get(r,"showOptions"),a,i):r.dpDiv["slideDown"===t?"slideUp":"fadeIn"===t?"fadeOut":"hide"](t?a:null,i),t||i(),this._datepickerShowing=!1,(s=this._get(r,"onClose"))&&s.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),b.blockUI&&(b.unblockUI(),b("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(b.datepicker._curInst){var t=b(e.target),a=b.datepicker._getInst(t[0]);(t[0].id===b.datepicker._mainDivId||0!==t.parents("#"+b.datepicker._mainDivId).length||t.hasClass(b.datepicker.markerClassName)||t.closest("."+b.datepicker._triggerClass).length||!b.datepicker._datepickerShowing||b.datepicker._inDialog&&b.blockUI)&&(!t.hasClass(b.datepicker.markerClassName)||b.datepicker._curInst===a)||b.datepicker._hideDatepicker()}},_adjustDate:function(e,t,a){var i=b(e),s=this._getInst(i[0]);this._isDisabledDatepicker(i[0])||(this._adjustInstDate(s,t,a),this._updateDatepicker(s))},_gotoToday:function(e){var t,a=b(e),i=this._getInst(a[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(t=new Date,i.selectedDay=t.getDate(),i.drawMonth=i.selectedMonth=t.getMonth(),i.drawYear=i.selectedYear=t.getFullYear()),this._notifyChange(i),this._adjustDate(a)},_selectMonthYear:function(e,t,a){var i=b(e),s=this._getInst(i[0]);s["selected"+("M"===a?"Month":"Year")]=s["draw"+("M"===a?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(i)},_selectDay:function(e,t,a,i){var s,r=b(e);b(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||((s=this._getInst(r[0])).selectedDay=s.currentDay=b("a",i).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=a,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear)))},_clearDate:function(e){var t=b(e);this._selectDate(t,"")},_selectDate:function(e,t){var a,i=b(e),s=this._getInst(i[0]);t=null!=t?t:this._formatDate(s),s.input&&s.input.val(t),this._updateAlternate(s),(a=this._get(s,"onSelect"))?a.apply(s.input?s.input[0]:null,[t,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],"object"!=typeof s.input[0]&&s.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var t,a,i,s=this._get(e,"altField");s&&(t=this._get(e,"altFormat")||this._get(e,"dateFormat"),a=this._getDate(e),i=this.formatDate(t,a,this._getFormatConfig(e)),b(s).val(i))},noWeekends:function(e){var t=e.getDay();return[0<t&&t<6,""]},iso8601Week:function(e){var t,a=new Date(e.getTime());return a.setDate(a.getDate()+4-(a.getDay()||7)),t=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((t-a)/864e5)/7)+1},parseDate:function(a,r,e){if(null==a||null==r)throw"Invalid arguments";if(""===(r="object"==typeof r?r.toString():r+""))return null;var i,t,s,n,d=0,o=(e?e.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof o?o:(new Date).getFullYear()%100+parseInt(o,10),l=(e?e.dayNamesShort:null)||this._defaults.dayNamesShort,h=(e?e.dayNames:null)||this._defaults.dayNames,u=(e?e.monthNamesShort:null)||this._defaults.monthNamesShort,p=(e?e.monthNames:null)||this._defaults.monthNames,g=-1,_=-1,f=-1,k=-1,D=!1,m=function(e){var t=i+1<a.length&&a.charAt(i+1)===e;return t&&i++,t},y=function(e){var t=m(e),a="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,i=new RegExp("^\\d{"+("y"===e?a:1)+","+a+"}"),s=r.substring(d).match(i);if(!s)throw"Missing number at position "+d;return d+=s[0].length,parseInt(s[0],10)},v=function(e,t,a){var i=-1,s=b.map(m(e)?a:t,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(b.each(s,function(e,t){var a=t[1];if(r.substr(d,a.length).toLowerCase()===a.toLowerCase())return i=t[0],d+=a.length,!1}),-1!==i)return i+1;throw"Unknown name at position "+d},M=function(){if(r.charAt(d)!==a.charAt(i))throw"Unexpected literal at position "+d;d++};for(i=0;i<a.length;i++)if(D)"'"!==a.charAt(i)||m("'")?M():D=!1;else switch(a.charAt(i)){case"d":f=y("d");break;case"D":v("D",l,h);break;case"o":k=y("o");break;case"m":_=y("m");break;case"M":_=v("M",u,p);break;case"y":g=y("y");break;case"@":g=(n=new Date(y("@"))).getFullYear(),_=n.getMonth()+1,f=n.getDate();break;case"!":g=(n=new Date((y("!")-this._ticksTo1970)/1e4)).getFullYear(),_=n.getMonth()+1,f=n.getDate();break;case"'":m("'")?M():D=!0;break;default:M()}if(d<r.length&&(s=r.substr(d),!/^\s+/.test(s)))throw"Extra/unparsed characters found in date: "+s;if(-1===g?g=(new Date).getFullYear():g<100&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(g<=c?0:-100)),-1<k)for(_=1,f=k;;){if(f<=(t=this._getDaysInMonth(g,_-1)))break;_++,f-=t}if((n=this._daylightSavingAdjust(new Date(g,_-1,f))).getFullYear()!==g||n.getMonth()+1!==_||n.getDate()!==f)throw"Invalid date";return n},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,e,t){if(!e)return"";var i,s=(t?t.dayNamesShort:null)||this._defaults.dayNamesShort,r=(t?t.dayNames:null)||this._defaults.dayNames,n=(t?t.monthNamesShort:null)||this._defaults.monthNamesShort,d=(t?t.monthNames:null)||this._defaults.monthNames,o=function(e){var t=i+1<a.length&&a.charAt(i+1)===e;return t&&i++,t},c=function(e,t,a){var i=""+t;if(o(e))for(;i.length<a;)i="0"+i;return i},l=function(e,t,a,i){return o(e)?i[t]:a[t]},h="",u=!1;if(e)for(i=0;i<a.length;i++)if(u)"'"!==a.charAt(i)||o("'")?h+=a.charAt(i):u=!1;else switch(a.charAt(i)){case"d":h+=c("d",e.getDate(),2);break;case"D":h+=l("D",e.getDay(),s,r);break;case"o":h+=c("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=c("m",e.getMonth()+1,2);break;case"M":h+=l("M",e.getMonth(),n,d);break;case"y":h+=o("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":h+=e.getTime();break;case"!":h+=1e4*e.getTime()+this._ticksTo1970;break;case"'":o("'")?h+="'":u=!0;break;default:h+=a.charAt(i)}return h},_possibleChars:function(a){var i,e="",t=!1,s=function(e){var t=i+1<a.length&&a.charAt(i+1)===e;return t&&i++,t};for(i=0;i<a.length;i++)if(t)"'"!==a.charAt(i)||s("'")?e+=a.charAt(i):t=!1;else switch(a.charAt(i)){case"d":case"m":case"y":case"@":e+="0123456789";break;case"D":case"M":return null;case"'":s("'")?e+="'":t=!0;break;default:e+=a.charAt(i)}return e},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var a=this._get(e,"dateFormat"),i=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),r=s,n=this._getFormatConfig(e);try{r=this.parseDate(a,i,n)||s}catch(e){i=t?"":i}e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),e.currentDay=i?r.getDate():0,e.currentMonth=i?r.getMonth():0,e.currentYear=i?r.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(d,e,t){var a,i,s=null==e||""===e?t:"string"==typeof e?function(e){try{return b.datepicker.parseDate(b.datepicker._get(d,"dateFormat"),e,b.datepicker._getFormatConfig(d))}catch(e){}for(var t=(e.toLowerCase().match(/^c/)?b.datepicker._getDate(d):null)||new Date,a=t.getFullYear(),i=t.getMonth(),s=t.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,n=r.exec(e);n;){switch(n[2]||"d"){case"d":case"D":s+=parseInt(n[1],10);break;case"w":case"W":s+=7*parseInt(n[1],10);break;case"m":case"M":i+=parseInt(n[1],10),s=Math.min(s,b.datepicker._getDaysInMonth(a,i));break;case"y":case"Y":a+=parseInt(n[1],10),s=Math.min(s,b.datepicker._getDaysInMonth(a,i))}n=r.exec(e)}return new Date(a,i,s)}(e):"number"==typeof e?isNaN(e)?t:(a=e,(i=new Date).setDate(i.getDate()+a),i):new Date(e.getTime());return(s=s&&"Invalid Date"===s.toString()?t:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(12<e.getHours()?e.getHours()+2:0),e):null},_setDate:function(e,t,a){var i=!t,s=e.selectedMonth,r=e.selectedYear,n=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=n.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=n.getMonth(),e.drawYear=e.selectedYear=e.currentYear=n.getFullYear(),s===e.selectedMonth&&r===e.selectedYear||a||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(i?"":this._formatDate(e))},_getDate:function(e){return!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),a="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){b.datepicker._adjustDate(a,-t,"M")},next:function(){b.datepicker._adjustDate(a,+t,"M")},hide:function(){b.datepicker._hideDatepicker()},today:function(){b.datepicker._gotoToday(a)},selectDay:function(){return b.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return b.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return b.datepicker._selectMonthYear(a,this,"Y"),!1}};b(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,a,i,s,r,n,d,o,c,l,h,u,p,g,_,f,k,D,m,y,v,M,b,w,C,I,x,Y,S,F,N,T,A,K,j,O,R,L,W,E=new Date,H=this._daylightSavingAdjust(new Date(E.getFullYear(),E.getMonth(),E.getDate())),P=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),z=this._get(e,"hideIfNoPrevNext"),B=this._get(e,"navigationAsDateFormat"),J=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),X=1!==J[0]||1!==J[1],Z=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),G=this._getMinMaxDate(e,"max"),Q=e.drawMonth-V,ee=e.drawYear;if(Q<0&&(Q+=12,ee--),G)for(t=this._daylightSavingAdjust(new Date(G.getFullYear(),G.getMonth()-J[0]*J[1]+1,G.getDate())),t=$&&t<$?$:t;this._daylightSavingAdjust(new Date(ee,Q,1))>t;)--Q<0&&(Q=11,ee--);for(e.drawMonth=Q,e.drawYear=ee,a=this._get(e,"prevText"),a=B?this.formatDate(a,this._daylightSavingAdjust(new Date(ee,Q-q,1)),this._getFormatConfig(e)):a,i=this._canAdjustMonth(e,-1,ee,Q)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+a+"'><span class='ui-icon ui-icon-circle-triangle-"+(P?"e":"w")+"'>"+a+"</span></a>":z?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+a+"'><span class='ui-icon ui-icon-circle-triangle-"+(P?"e":"w")+"'>"+a+"</span></a>",s=this._get(e,"nextText"),s=B?this.formatDate(s,this._daylightSavingAdjust(new Date(ee,Q+q,1)),this._getFormatConfig(e)):s,r=this._canAdjustMonth(e,1,ee,Q)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(P?"w":"e")+"'>"+s+"</span></a>":z?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(P?"w":"e")+"'>"+s+"</span></a>",n=this._get(e,"currentText"),d=this._get(e,"gotoCurrent")&&e.currentDay?Z:H,n=B?this.formatDate(n,d,this._getFormatConfig(e)):n,o=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(P?o:"")+(this._isInRange(e,d)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+n+"</button>":"")+(P?"":o)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,h=this._get(e,"showWeek"),u=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),_=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),k=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),m=this._getDefaultDate(e),y="",M=0;M<J[0];M++){for(b="",this.maxRows=4,w=0;w<J[1];w++){if(C=this._daylightSavingAdjust(new Date(ee,Q,e.selectedDay)),I=" ui-corner-all",x="",X){if(x+="<div class='ui-datepicker-group",1<J[1])switch(w){case 0:x+=" ui-datepicker-group-first",I=" ui-corner-"+(P?"right":"left");break;case J[1]-1:x+=" ui-datepicker-group-last",I=" ui-corner-"+(P?"left":"right");break;default:x+=" ui-datepicker-group-middle",I=""}x+="'>"}for(x+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===M?P?r:i:"")+(/all|right/.test(I)&&0===M?P?i:r:"")+this._generateMonthYearHeader(e,Q,ee,$,G,0<M||0<w,g,_)+"</div><table class='ui-datepicker-calendar'><thead><tr>",Y=h?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",v=0;v<7;v++)Y+="<th scope='col'"+(5<=(v+l+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+u[S=(v+l)%7]+"'>"+p[S]+"</span></th>";for(x+=Y+"</tr></thead><tbody>",F=this._getDaysInMonth(ee,Q),ee===e.selectedYear&&Q===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,F)),N=(this._getFirstDayOfMonth(ee,Q)-l+7)%7,T=Math.ceil((N+F)/7),A=X&&this.maxRows>T?this.maxRows:T,this.maxRows=A,K=this._daylightSavingAdjust(new Date(ee,Q,1-N)),j=0;j<A;j++){for(x+="<tr>",O=h?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(K)+"</td>":"",v=0;v<7;v++)R=f?f.apply(e.input?e.input[0]:null,[K]):[!0,""],W=(L=K.getMonth()!==Q)&&!D||!R[0]||$&&K<$||G&&G<K,O+="<td class='"+(5<=(v+l+6)%7?" ui-datepicker-week-end":"")+(L?" ui-datepicker-other-month":"")+(K.getTime()===C.getTime()&&Q===e.selectedMonth&&e._keyEvent||m.getTime()===K.getTime()&&m.getTime()===C.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(L&&!k?"":" "+R[1]+(K.getTime()===Z.getTime()?" "+this._currentClass:"")+(K.getTime()===H.getTime()?" ui-datepicker-today":""))+"'"+(L&&!k||!R[2]?"":" title='"+R[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+K.getMonth()+"' data-year='"+K.getFullYear()+"'")+">"+(L&&!k?"&#xa0;":W?"<span class='ui-state-default'>"+K.getDate()+"</span>":"<a class='ui-state-default"+(K.getTime()===H.getTime()?" ui-state-highlight":"")+(K.getTime()===Z.getTime()?" ui-state-active":"")+(L?" ui-priority-secondary":"")+"' href='#'>"+K.getDate()+"</a>")+"</td>",K.setDate(K.getDate()+1),K=this._daylightSavingAdjust(K);x+=O+"</tr>"}11<++Q&&(Q=0,ee++),b+=x+="</tbody></table>"+(X?"</div>"+(0<J[0]&&w===J[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}y+=b}return y+=c,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,a,i,s,r,n,d){var o,c,l,h,u,p,g,_,f=this._get(e,"changeMonth"),k=this._get(e,"changeYear"),D=this._get(e,"showMonthAfterYear"),m="<div class='ui-datepicker-title'>",y="";if(r||!f)y+="<span class='ui-datepicker-month'>"+n[t]+"</span>";else{for(o=i&&i.getFullYear()===a,c=s&&s.getFullYear()===a,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",l=0;l<12;l++)(!o||l>=i.getMonth())&&(!c||l<=s.getMonth())&&(y+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+d[l]+"</option>");y+="</select>"}if(D||(m+=y+(!r&&f&&k?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",r||!k)m+="<span class='ui-datepicker-year'>"+a+"</span>";else{for(h=this._get(e,"yearRange").split(":"),u=(new Date).getFullYear(),g=(p=function(e){var t=e.match(/c[+\-].*/)?a+parseInt(e.substring(1),10):e.match(/[+\-].*/)?u+parseInt(e,10):parseInt(e,10);return isNaN(t)?u:t})(h[0]),_=Math.max(g,p(h[1]||"")),g=i?Math.max(g,i.getFullYear()):g,_=s?Math.min(_,s.getFullYear()):_,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g<=_;g++)e.yearshtml+="<option value='"+g+"'"+(g===a?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",m+=e.yearshtml,e.yearshtml=null}return m+=this._get(e,"yearSuffix"),D&&(m+=(!r&&f&&k?"":"&#xa0;")+y),m+="</div>"},_adjustInstDate:function(e,t,a){var i=e.selectedYear+("Y"===a?t:0),s=e.selectedMonth+("M"===a?t:0),r=Math.min(e.selectedDay,this._getDaysInMonth(i,s))+("D"===a?t:0),n=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(i,s,r)));e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),"M"!==a&&"Y"!==a||this._notifyChange(e)},_restrictMinMax:function(e,t){var a=this._getMinMaxDate(e,"min"),i=this._getMinMaxDate(e,"max"),s=a&&t<a?a:t;return i&&i<s?i:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,a,i){var s=this._getNumberOfMonths(e),r=this._daylightSavingAdjust(new Date(a,i+(t<0?t:s[0]*s[1]),1));return t<0&&r.setDate(this._getDaysInMonth(r.getFullYear(),r.getMonth())),this._isInRange(e,r)},_isInRange:function(e,t){var a,i,s=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),n=null,d=null,o=this._get(e,"yearRange");return o&&(a=o.split(":"),i=(new Date).getFullYear(),n=parseInt(a[0],10),d=parseInt(a[1],10),a[0].match(/[+\-].*/)&&(n+=i),a[1].match(/[+\-].*/)&&(d+=i)),(!s||t.getTime()>=s.getTime())&&(!r||t.getTime()<=r.getTime())&&(!n||t.getFullYear()>=n)&&(!d||t.getFullYear()<=d)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return{shortYearCutoff:t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,a,i){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(i,a,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),b.fn.datepicker=function(e){if(!this.length)return this;b.datepicker.initialized||(b(document).on("mousedown",b.datepicker._checkExternalClick),b.datepicker.initialized=!0),0===b("#"+b.datepicker._mainDivId).length&&b("body").append(b.datepicker.dpDiv);var t=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?b.datepicker["_"+e+"Datepicker"].apply(b.datepicker,[this[0]].concat(t)):this.each(function(){"string"==typeof e?b.datepicker["_"+e+"Datepicker"].apply(b.datepicker,[this].concat(t)):b.datepicker._attachDatepicker(this,e)}):b.datepicker["_"+e+"Datepicker"].apply(b.datepicker,[this[0]].concat(t))},b.datepicker=new e,b.datepicker.initialized=!1,b.datepicker.uuid=(new Date).getTime(),b.datepicker.version="1.12.1",b.datepicker},e.exports=t.default});
// jQuery or jQuery-like library, such as Zepto


function BestInPlaceEditor(e) {
    'use strict';

    this.element = e;
    this.initOptions();
    this.bindForm();
    this.initPlaceHolder();
    jQuery(this.activator).bind('click', {
        editor: this
    }, this.clickHandler);
}

BestInPlaceEditor.prototype = {
    // Public Interface Functions //////////////////////////////////////////////
    activate: function activate() {
        'use strict';

        var to_display;

        if (this.isPlaceHolder()) {
            to_display = "";
        } else if (this.original_content) {
            to_display = this.original_content;
        } else {
            switch (this.formType) {
                case 'input':
                case 'textarea':
                    if (this.display_raw) {
                        to_display = this.element.html().replace(/&amp;/gi, '&');
                    } else {
                        var value = this.element.data('bipValue');

                        if (typeof value === 'undefined') {
                            to_display = '';
                        } else if (typeof value === 'string') {
                            to_display = this.element.data('bipValue').replace(/&amp;/gi, '&');
                        } else {
                            to_display = this.element.data('bipValue');
                        }
                    }

                    break;

                case 'select':
                    to_display = this.element.html();
            }
        }

        this.oldValue = this.isPlaceHolder() ? "" : this.element.html();
        this.display_value = to_display;
        jQuery(this.activator).unbind("click", this.clickHandler);
        this.activateForm();
        this.element.trigger(jQuery.Event("best_in_place:activate"));
    },
    abort: function abort() {
        'use strict';

        this.activateText(this.oldValue);
        jQuery(this.activator).bind('click', {
            editor: this
        }, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:abort"));
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));
    },
    abortIfConfirm: function abortIfConfirm() {
        'use strict';

        if (!this.useConfirm) {
            this.abort();
            return;
        }

        if (confirm(BestInPlaceEditor.defaults.locales[''].confirmMessage)) {
            this.abort();
        }
    },
    update: function update() {
        'use strict';

        this.element.trigger(jQuery.Event("best_in_place:before-update"));
        var editor = this,
            value = this.getValue(); // Avoid request if no change is made

        if (this.formType in {
                "input": 1,
                "textarea": 1
            } && value === this.oldValue) {
            this.abort();
            return true;
        }

        editor.ajax({
            "type": this.requestMethod(),
            "dataType": BestInPlaceEditor.defaults.ajaxDataType,
            "data": editor.requestData(),
            "success": function success(data, status, xhr) {
                editor.loadSuccessCallback(data, status, xhr);
            },
            "error": function error(request, _error) {
                editor.loadErrorCallback(request, _error);
            }
        });

        switch (this.formType) {
            case "select":
                this.previousCollectionValue = value; // search for the text for the span

                $.each(this.values, function(index, arr) {
                    if (String(arr[0]) === String(value)) editor.element.html(arr[1]);
                });
                break;

            case "checkbox":
                $.each(this.values, function(index, arr) {
                    if (String(arr[0]) === String(value)) editor.element.html(arr[1]);
                });
                break;

            default:
                if (value !== "") {
                    if (this.display_raw) {
                        editor.element.html(value);
                    } else {
                        editor.element.text(value);
                    }
                } else {
                    editor.element.html(this.placeHolder);
                }

        }

        editor.element.data('bipValue', value);
        editor.element.attr('data-bip-value', value);
        editor.element.trigger(jQuery.Event("best_in_place:update"));
    },
    activateForm: function activateForm() {
        'use strict';

        alert(BestInPlaceEditor.defaults.locales[''].uninitializedForm);
    },
    activateText: function activateText(value) {
        'use strict';

        this.element.html(value);

        if (this.isPlaceHolder()) {
            this.element.html(this.placeHolder);
        }
    },
    // Helper Functions ////////////////////////////////////////////////////////
    initOptions: function initOptions() {
        // Try parent supplied info
        'use strict';

        var self = this;
        self.element.parents().each(function() {
            var $parent = jQuery(this);
            self.url = self.url || $parent.data("bipUrl");
            self.activator = self.activator || $parent.data("bipActivator");
            self.okButton = self.okButton || $parent.data("bipOkButton");
            self.okButtonClass = self.okButtonClass || $parent.data("bipOkButtonClass");
            self.cancelButton = self.cancelButton || $parent.data("bipCancelButton");
            self.cancelButtonClass = self.cancelButtonClass || $parent.data("bipCancelButtonClass");
            self.skipBlur = self.skipBlur || $parent.data("bipSkipBlur");
        }); // Load own attributes (overrides all others)

        self.url = self.element.data("bipUrl") || self.url || document.location.pathname;
        self.collection = self.element.data("bipCollection") || self.collection;
        self.formType = self.element.data("bipType") || "input";
        self.objectName = self.element.data("bipObject") || self.objectName;
        self.attributeName = self.element.data("bipAttribute") || self.attributeName;
        self.activator = self.element.data("bipActivator") || self.element;
        self.okButton = self.element.data("bipOkButton") || self.okButton;
        self.okButtonClass = self.element.data("bipOkButtonClass") || self.okButtonClass || BestInPlaceEditor.defaults.okButtonClass;
        self.cancelButton = self.element.data("bipCancelButton") || self.cancelButton;
        self.cancelButtonClass = self.element.data("bipCancelButtonClass") || self.cancelButtonClass || BestInPlaceEditor.defaults.cancelButtonClass;
        self.skipBlur = self.element.data("bipSkipBlur") || self.skipBlur || BestInPlaceEditor.defaults.skipBlur;
        self.isNewObject = self.element.data("bipNewObject");
        self.dataExtraPayload = self.element.data("bipExtraPayload"); // Fix for default values of 0

        if (self.element.data("bipPlaceholder") == null) {
            self.placeHolder = BestInPlaceEditor.defaults.locales[''].placeHolder;
        } else {
            self.placeHolder = self.element.data("bipPlaceholder");
        }

        self.inner_class = self.element.data("bipInnerClass");
        self.html_attrs = self.element.data("bipHtmlAttrs");
        self.original_content = self.element.data("bipOriginalContent") || self.original_content; // if set the input won't be satinized

        self.display_raw = self.element.data("bip-raw");
        self.useConfirm = self.element.data("bip-confirm");

        if (self.formType === "select" || self.formType === "checkbox") {
            self.values = self.collection;
            self.collectionValue = self.element.data("bipValue") || self.collectionValue;
        }
    },
    bindForm: function bindForm() {
        'use strict';

        this.activateForm = BestInPlaceEditor.forms[this.formType].activateForm;
        this.getValue = BestInPlaceEditor.forms[this.formType].getValue;
    },
    initPlaceHolder: function initPlaceHolder() {
        'use strict'; // TODO add placeholder for select and checkbox

        if (this.element.html() === "") {
            this.element.addClass('bip-placeholder');
            this.element.html(this.placeHolder);
        }
    },
    isPlaceHolder: function isPlaceHolder() {
        'use strict'; // TODO: It only work when form is deactivated.
        // Condition will fail when form is activated

        return this.element.html() === "" || this.element.html() === this.placeHolder;
    },
    getValue: function getValue() {
        'use strict';

        alert(BestInPlaceEditor.defaults.locales[''].uninitializedForm);
    },
    // Trim and Strips HTML from text
    sanitizeValue: function sanitizeValue(s) {
        'use strict';

        return jQuery.trim(s);
    },
    requestMethod: function requestMethod() {
        'use strict';

        return this.isNewObject ? 'post' : BestInPlaceEditor.defaults.ajaxMethod;
    },

    /* Generate the data sent in the POST request */
    requestData: function requestData() {
        'use strict'; // To prevent xss attacks, a csrf token must be defined as a meta attribute

        var csrf_token = jQuery('meta[name=csrf-token]').attr('content'),
            csrf_param = jQuery('meta[name=csrf-param]').attr('content');
        var data = {};
        data['_method'] = this.requestMethod();
        data[this.objectName] = this.dataExtraPayload || {};
        data[this.objectName][this.attributeName] = this.getValue();

        if (csrf_param !== undefined && csrf_token !== undefined) {
            data[csrf_param] = csrf_token;
        }

        return jQuery.param(data);
    },
    ajax: function ajax(options) {
        'use strict';

        options.url = this.url;

        options.beforeSend = function(xhr) {
            xhr.setRequestHeader("Accept", "application/json");
        };

        return jQuery.ajax(options);
    },
    // Handlers ////////////////////////////////////////////////////////////////
    loadSuccessCallback: function loadSuccessCallback(data, status, xhr) {
        'use strict';

        data = jQuery.trim(data); //Update original content with current text.

        if (this.display_raw) {
            this.original_content = this.element.html();
        } else {
            this.original_content = this.element.text();
        }

        if (data && data !== "") {
            var response = jQuery.parseJSON(data);

            if (response !== null && response.hasOwnProperty("display_as")) {
                this.element.data('bip-original-content', this.element.text());
                this.element.html(response.display_as);
            }

            if (this.isNewObject && response && response[this.objectName]) {
                if (response[this.objectName]["id"]) {
                    this.isNewObject = false;
                    this.url += "/" + response[this.objectName]["id"]; // in REST a POST /thing url should become PUT /thing/123
                }
            }
        }

        this.element.toggleClass('bip-placeholder', this.isPlaceHolder());
        this.element.trigger(jQuery.Event("best_in_place:success"), [data, status, xhr]);
        this.element.trigger(jQuery.Event("ajax:success"), [data, status, xhr]); // Binding back after being clicked

        jQuery(this.activator).bind('click', {
            editor: this
        }, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));

        if (this.collectionValue !== null && this.formType === "select") {
            this.collectionValue = this.previousCollectionValue;
            this.previousCollectionValue = null;
        }
    },
    loadErrorCallback: function loadErrorCallback(request, error) {
        'use strict';

        this.activateText(this.oldValue);
        this.element.trigger(jQuery.Event("best_in_place:error"), [request, error]);
        this.element.trigger(jQuery.Event("ajax:error"), request, error); // Binding back after being clicked

        jQuery(this.activator).bind('click', {
            editor: this
        }, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));
    },
    clickHandler: function clickHandler(event) {
        'use strict';

        event.preventDefault();
        event.data.editor.activate();
    },
    setHtmlAttributes: function setHtmlAttributes() {
        'use strict';

        var formField = this.element.find(this.formType);

        if (this.html_attrs) {
            var attrs = this.html_attrs;
            $.each(attrs, function(key, val) {
                formField.attr(key, val);
            });
        }
    },
    placeButtons: function placeButtons(output, field) {
        'use strict';

        if (field.okButton) {
            output.append(jQuery(document.createElement('input')).attr('type', 'submit').attr('class', field.okButtonClass).attr('value', field.okButton));
        }

        if (field.cancelButton) {
            output.append(jQuery(document.createElement('input')).attr('type', 'button').attr('class', field.cancelButtonClass).attr('value', field.cancelButton));
        }
    }
}; // Button cases:
// If no buttons, then blur saves, ESC cancels
// If just Cancel button, then blur saves, ESC or clicking Cancel cancels (careful of blur event!)
// If just OK button, then clicking OK saves (careful of blur event!), ESC or blur cancels
// If both buttons, then clicking OK saves, ESC or clicking Cancel or blur cancels

BestInPlaceEditor.forms = {
    "input": {
        activateForm: function activateForm() {
            'use strict';

            var output = jQuery(document.createElement('form')).addClass('form_in_place').attr('action', 'javascript:void(0);').attr('style', 'display:inline');
            var input_elt = jQuery(document.createElement('input')).attr('type', 'text').attr('name', this.attributeName).val(this.display_value); // Add class to form input

            if (this.inner_class) {
                input_elt.addClass(this.inner_class);
            }

            output.append(input_elt);
            this.placeButtons(output, this);
            this.element.html(output);
            this.setHtmlAttributes();
            this.element.find("input[type='text']")[0].select();
            this.element.find("form").bind('submit', {
                editor: this
            }, BestInPlaceEditor.forms.input.submitHandler);

            if (this.cancelButton) {
                this.element.find("input[type='button']").bind('click', {
                    editor: this
                }, BestInPlaceEditor.forms.input.cancelButtonHandler);
            }

            if (!this.okButton) {
                this.element.find("input[type='text']").bind('blur', {
                    editor: this
                }, BestInPlaceEditor.forms.input.inputBlurHandler);
            }

            this.element.find("input[type='text']").bind('keyup', {
                editor: this
            }, BestInPlaceEditor.forms.input.keyupHandler);
            this.blurTimer = null;
            this.userClicked = false;
        },
        getValue: function getValue() {
            'use strict';

            return this.sanitizeValue(this.element.find("input").val());
        },
        // When buttons are present, use a timer on the blur event to give precedence to clicks
        inputBlurHandler: function inputBlurHandler(event) {
            'use strict';

            if (event.data.editor.okButton) {
                event.data.editor.blurTimer = setTimeout(function() {
                    if (!event.data.editor.userClicked) {
                        event.data.editor.abort();
                    }
                }, 500);
            } else {
                if (event.data.editor.cancelButton) {
                    event.data.editor.blurTimer = setTimeout(function() {
                        if (!event.data.editor.userClicked) {
                            event.data.editor.update();
                        }
                    }, 500);
                } else {
                    event.data.editor.update();
                }
            }
        },
        submitHandler: function submitHandler(event) {
            'use strict';

            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.update();
        },
        cancelButtonHandler: function cancelButtonHandler(event) {
            'use strict';

            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.abort();
            event.stopPropagation(); // Without this, click isn't handled
        },
        keyupHandler: function keyupHandler(event) {
            'use strict';

            if (event.keyCode === 27) {
                event.data.editor.abort();
                event.stopImmediatePropagation();
            }
        }
    },
    "select": {
        activateForm: function activateForm() {
            'use strict';

            var output = jQuery(document.createElement('form')).attr('action', 'javascript:void(0)').attr('style', 'display:inline'),
                selected = '',
                select_elt = jQuery(document.createElement('select')).attr('class', this.inner_class !== null ? this.inner_class : ''),
                currentCollectionValue = this.collectionValue,
                key,
                value,
                a = this.values;
            $.each(a, function(index, arr) {
                key = arr[0];
                value = arr[1];
                var option_elt = jQuery(document.createElement('option')).val(key).html(value);

                if (currentCollectionValue) {
                    if (String(key) === String(currentCollectionValue)) option_elt.attr('selected', 'selected');
                }

                select_elt.append(option_elt);
            });
            output.append(select_elt);
            this.element.html(output);
            this.setHtmlAttributes();
            this.element.find("select").bind('change', {
                editor: this
            }, BestInPlaceEditor.forms.select.blurHandler);
            this.element.find("select").bind('blur', {
                editor: this
            }, BestInPlaceEditor.forms.select.blurHandler);
            this.element.find("select").bind('keyup', {
                editor: this
            }, BestInPlaceEditor.forms.select.keyupHandler);
            this.element.find("select")[0].focus(); // automatically click on the select so you
            // don't have to click twice

            try {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                this.element.find("select")[0].dispatchEvent(e);
            } catch (e) { // browser doesn't support this, e.g. IE8
            }
        },
        getValue: function getValue() {
            'use strict';

            return this.sanitizeValue(this.element.find("select").val());
        },
        blurHandler: function blurHandler(event) {
            'use strict';

            event.data.editor.update();
        },
        keyupHandler: function keyupHandler(event) {
            'use strict';

            if (event.keyCode === 27) {
                event.data.editor.abort();
            }
        }
    },
    "checkbox": {
        activateForm: function activateForm() {
            'use strict';

            this.collectionValue = !this.getValue();
            this.setHtmlAttributes();
            this.update();
        },
        getValue: function getValue() {
            'use strict';

            return this.collectionValue;
        }
    },
    "textarea": {
        activateForm: function activateForm() {
            'use strict'; // grab width and height of text

            var width = this.element.css('width');
            var height = this.element.css('height'); // construct form

            var output = jQuery(document.createElement('form')).addClass('form_in_place').attr('action', 'javascript:void(0);').attr('style', 'display:inline');
            var textarea_elt = jQuery(document.createElement('textarea')).attr('name', this.attributeName).val(this.sanitizeValue(this.display_value));

            if (this.inner_class !== null) {
                textarea_elt.addClass(this.inner_class);
            }

            output.append(textarea_elt);
            this.placeButtons(output, this);
            this.element.html(output);
            this.setHtmlAttributes(); // set width and height of textarea

            jQuery(this.element.find("textarea")[0]).css({
                'min-width': width,
                'min-height': height
            });
            jQuery(this.element.find("textarea")[0]).autosize();
            this.element.find("textarea")[0].focus();
            this.element.find("form").bind('submit', {
                editor: this
            }, BestInPlaceEditor.forms.textarea.submitHandler);

            if (this.cancelButton) {
                this.element.find("input[type='button']").bind('click', {
                    editor: this
                }, BestInPlaceEditor.forms.textarea.cancelButtonHandler);
            }

            if (!this.skipBlur) {
                this.element.find("textarea").bind('blur', {
                    editor: this
                }, BestInPlaceEditor.forms.textarea.blurHandler);
            }

            this.element.find("textarea").bind('keyup', {
                editor: this
            }, BestInPlaceEditor.forms.textarea.keyupHandler);
            this.blurTimer = null;
            this.userClicked = false;
        },
        getValue: function getValue() {
            'use strict';

            return this.sanitizeValue(this.element.find("textarea").val());
        },
        // When buttons are present, use a timer on the blur event to give precedence to clicks
        blurHandler: function blurHandler(event) {
            'use strict';

            if (event.data.editor.okButton) {
                event.data.editor.blurTimer = setTimeout(function() {
                    if (!event.data.editor.userClicked) {
                        event.data.editor.abortIfConfirm();
                    }
                }, 500);
            } else {
                if (event.data.editor.cancelButton) {
                    event.data.editor.blurTimer = setTimeout(function() {
                        if (!event.data.editor.userClicked) {
                            event.data.editor.update();
                        }
                    }, 500);
                } else {
                    event.data.editor.update();
                }
            }
        },
        submitHandler: function submitHandler(event) {
            'use strict';

            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.update();
        },
        cancelButtonHandler: function cancelButtonHandler(event) {
            'use strict';

            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.abortIfConfirm();
            event.stopPropagation(); // Without this, click isn't handled
        },
        keyupHandler: function keyupHandler(event) {
            'use strict';

            if (event.keyCode === 27) {
                event.data.editor.abortIfConfirm();
            }
        }
    }
};
BestInPlaceEditor.defaults = {
    locales: {},
    ajaxMethod: "put",
    //TODO Change to patch when support to 3.2 is dropped
    ajaxDataType: 'text',
    okButtonClass: '',
    cancelButtonClass: '',
    skipBlur: false
}; // Default locale

BestInPlaceEditor.defaults.locales[''] = {
    confirmMessage: "Are you sure you want to discard your changes?",
    uninitializedForm: "The form was not properly initialized. getValue is unbound",
    placeHolder: '-'
};

jQuery.fn.best_in_place = function() {
    'use strict';

    function setBestInPlace(element) {
        if (!element.data('bestInPlaceEditor')) {
            element.data('bestInPlaceEditor', new BestInPlaceEditor(element));
            return true;
        }
    }

    jQuery(this.context).delegate(this.selector, 'click', function() {
        var el = jQuery(this);

        if (setBestInPlace(el)) {
            el.click();
        }
    });
    this.each(function() {
        setBestInPlace(jQuery(this));
    });
    return this;
};



/*
 * BestInPlace 3.0.0.alpha (2014)
 *
 * Depends:
 *  best_in_place.js
 *  jquery.ui.datepicker.js
 */

/*global BestInPlaceEditor */
BestInPlaceEditor.forms.date = {
    activateForm: function activateForm() {
        'use strict';

        var that = this,
            output = jQuery(document.createElement('form')).addClass('form_in_place').attr('action', 'javascript:void(0);').attr('style', 'display:inline'),
            input_elt = jQuery(document.createElement('input')).attr('type', 'text').attr('name', this.attributeName).attr('value', this.sanitizeValue(this.display_value));

        if (this.inner_class !== null) {
            input_elt.addClass(this.inner_class);
        }

        output.append(input_elt);
        this.element.html(output);
        this.setHtmlAttributes();
        this.element.find('input')[0].select();
        this.element.find("form").bind('submit', {
            editor: this
        }, BestInPlaceEditor.forms.input.submitHandler);
        this.element.find("input").bind('keyup', {
            editor: this
        }, BestInPlaceEditor.forms.input.keyupHandler);
        this.element.find('input').datepicker({
            onClose: function onClose() {
                that.update();
            }
        }).datepicker('show');
    },
    getValue: function getValue() {
        'use strict';

        return this.sanitizeValue(this.element.find("input").val());
    },
    submitHandler: function submitHandler(event) {
        'use strict';

        event.data.editor.update();
    },
    keyupHandler: function keyupHandler(event) {
        'use strict';

        if (event.keyCode === 27) {
            event.data.editor.abort();
        }
    }
};

BestInPlaceEditor.defaults.purrErrorContainer = "<span class='bip-flash-error'></span>";
jQuery(document).on('best_in_place:error', function(event, request, error) {
    'use strict'; // Display all error messages from server side validation

    jQuery.each(jQuery.parseJSON(request.responseText), function(index, value) {
        if (_typeof(value) === "object") {
            value = index + " " + value.toString();
        }

        var container = jQuery(BestInPlaceEditor.defaults.purrErrorContainer).html(value);
        container.purr();
    });
});


BestInPlaceEditor.forms.date = {
    activateForm: function () {
        'use strict';
        var that = this,
            output = jQuery(document.createElement('form'))
                .addClass('form_in_place')
                .attr('action', 'javascript:void(0);')
                .attr('style', 'display:inline'),
            input_elt = jQuery(document.createElement('input'))
                .attr('type', 'text')
                .attr('name', this.attributeName)
                .attr('value', this.sanitizeValue(this.display_value));
                
        if (this.inner_class !== null) {
            input_elt.addClass(this.inner_class);
        }
        output.append(input_elt);

        this.element.html(output);
        this.setHtmlAttributes();
        this.element.find('input')[0].select();
        this.element.find("form").bind('submit', {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
        this.element.find("input").bind('keyup', {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);

        this.element.find('input')
            .datepicker({
                onClose: function () {
                    that.update();
                }
            })
            .datepicker('show');
    },

    getValue: function () {
        'use strict';
        return this.sanitizeValue(this.element.find("input").val());
    },

    submitHandler: function (event) {
        'use strict';
        event.data.editor.update();
    },

    keyupHandler: function (event) {
        'use strict';
        if (event.keyCode === 27) {
            event.data.editor.abort();
        }
    }
}


BestInPlaceEditor.defaults.purrErrorContainer =  "<span class='bip-flash-error'></span>";

jQuery(document).on('best_in_place:error', function (event, request, error) {
    'use strict';
    // Display all error messages from server side validation
    jQuery.each(jQuery.parseJSON(request.responseText), function (index, value) {
        if (typeof value === "object") {value = index + " " + value.toString(); }
        var container = jQuery(BestInPlaceEditor.defaults.purrErrorContainer).html(value);
        container.purr();
    });
});
