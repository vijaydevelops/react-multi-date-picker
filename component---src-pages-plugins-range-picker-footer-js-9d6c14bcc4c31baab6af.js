(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[350],{8256:function(e,t,n){"use strict";var r=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(n(7378));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".rmdp-range-picker-footer {\r\n  text-align: left;\r\n  padding: 10px;\r\n}\r\n\r\n.rtl.rmdp-range-picker-footer {\r\n  direction: rtl;\r\n  text-align: right;\r\n}\r\n\r\n.rmdp-range-picker-footer h6 {\r\n  margin: 0;\r\n  white-space: nowrap;\r\n  font-size: 16px;\r\n}\r\n\r\n.right.rmdp-range-picker-footer h6,\r\n.left.rmdp-range-picker-footer h6 {\r\n  width: 100%;\r\n  flex-direction: row;\r\n  padding-top: 5px;\r\n}\r\n\r\n.rmdp-cancel {\r\n  display: inline-block;\r\n  background-color: #bdbcbc;\r\n  border-radius: 50%;\r\n  width: 17px;\r\n  height: 17px;\r\n  line-height: 19px;\r\n  text-align: center;\r\n  transform: rotate(45deg);\r\n  color: white;\r\n  cursor: pointer;\r\n  margin: auto 0;\r\n  margin-right: 7px;\r\n  font-size: 16px;\r\n  font-family: Arial !important;\r\n}\r\n\r\n.rtl .rmdp-cancel {\r\n  margin-right: unset;\r\n  margin-left: 7px;\r\n}\r\n\r\n.rmdp-range-picker-footer span {\r\n  margin-top: auto;\r\n  font-size: 16px;\r\n}\r\n"),t.Z=function(e){var t,n,a,o,c=e.state,i=e.handleChange;e.calendarProps;var s=e.position,d=e.direction,u=void 0===d?["fa","ar"].includes(c.locale)?"rtl":"ltr":d,m=e.format,p=void 0===m?"rtl"===u?"DD MMMM":"MMMM DD":m,f=e.names,g=e.DatePicker,D=c.selectedDate,b=c.locale,h=null===(t=D[0])||void 0===t||null===(n=t.format)||void 0===n?void 0:n.call(t,p),E=null===(a=D[1])||void 0===a||null===(o=a.format)||void 0===o?void 0:o.call(a,p),y=["bottom","top"].includes(s),k={en:{selectedDates:"Selected Dates"+(y?":":""),from:"From:",to:"To:",selectDate:"Select Date",close:"Close",separator:"-"},fa:{selectedDates:"تاریخ انتخابی شما"+(y?":":""),from:"از:",to:"تا:",selectDate:"انتخاب کنید",close:"بستن",separator:"-"}},M=f||k[b]||k.en;return r.default.createElement("div",{className:"rmdp-range-picker-footer ".concat(u," ").concat(s),style:{display:y?"block":"grid",gridTemplateRows:"auto 1fr"}},r.default.createElement("h6",{className:"rmdp-week-day"},M.selectedDates),r.default.createElement("div",{style:{display:y?"flex":"grid",gridTemplateRows:"1fr auto"}},r.default.createElement("div",{className:"rmdp-header-values",style:{flex:"1",display:y?"":"grid"}},r.default.createElement("div",{style:{display:"inline-block"}},r.default.createElement("i",{className:"rmdp-cancel",onClick:function(){return v(0)}},"+"),r.default.createElement("span",null,M.from," ",null!=h?h:M.selectDate)),y&&r.default.createElement("span",{style:{padding:"0px 10px"}},M.separator),r.default.createElement("div",{style:{display:"inline-block"}},r.default.createElement("i",{className:"rmdp-cancel",onClick:function(){return v(1)}},"+"),r.default.createElement("span",null,M.to," ",null!=E?E:M.selectDate))),g&&r.default.createElement("button",{className:"rmdp-button",onClick:function(){return g.closeCalendar()}},M.close)));function v(e){Array.isArray(D)&&(D.splice(e,1),i(D,l(l({},c),{},{selectedDate:D})))}}},3290:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7378),a=n(316),l=n(7821),o=n(8256);function c(e,t,n){var a=(0,r.useState)([new l.NT({calendar:"en"===t?"gregorian":"persian",locale:t}).setDay(15),new l.NT({calendar:"en"===t?"gregorian":"persian",locale:t}).add(1,"month").setDay(15)]),c=a[0],i=a[1];return[{title:"Descriptions",description:"range_picker_footer"},{title:"Props",description:r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,e("Prop")),r.createElement("th",null,e("Type")),r.createElement("th",null,e("Default")))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"format"),r.createElement("td",null,"String"),r.createElement("td",null,'Farsi & Arabic locale : "DD MMMM" ',r.createElement("br",null),'English & Indian locale : "MMMM DD"')),r.createElement("tr",null,r.createElement("td",null,"names"),r.createElement("td",null,"Object"),r.createElement("td",null,"English locale"," ",r.createElement("pre",{className:"language-jsx"},r.createElement("code",null,'\n{\n  selectedDates: "Selected Dates:",\n  from: "From:",\n  to: "To:",\n  selectDate: "Select Date",\n  close: "Close",\n  separator: "-",\n}')),r.createElement("br",null),"Farsi locale",r.createElement("pre",{className:"language-jsx"},r.createElement("code",null," ",'\n{\n  selectedDates: "تاریخ انتخابی شما:",\n  from: "از:",\n  to: "تا:",\n  selectDate: "انتخاب کنید",\n  close: "بستن",\n  separator: "-",\n}'))))))},{title:"Default Range Picker Footer",code:'import React, { useState } from "react";\nimport DatePicker, { DateObject } from "react-multi-date-picker";\nimport Footer from "react-multi-date-picker/plugins/range_picker_footer";\n.\n.\n.\nconst [value, setValue] = useState([\n  new DateObject('+("en"===t?"":'{\n    calendar: "persian",\n    locale: "fa"\n  }')+").setDay(15),\n  new DateObject("+("en"===t?"":'{\n    calendar: "persian",\n    locale: "fa"\n}')+').add(1, "month").setDay(15),\n]);\n.\n.\n.\n<DatePicker\n  value={value}\n  onChange={setValue}\n  range\n  numberOfMonths={2}\n  plugins={[\n    <Footer position="bottom" />\n  ]}\n/>',jsx:r.createElement(l.ZP,Object.assign({value:c,onChange:i,range:!0,numberOfMonths:2,plugins:[r.createElement(o.Z,{position:"bottom"})]},n))},{title:"Custom Names",code:'import React from "react";\nimport { Calendar } from "react-multi-date-picker";\nimport Footer from "react-multi-date-picker/plugins/range_picker_footer";\n.\n.\n.\n<Calendar\n  range\n  numberOfMonths={2}\n  plugins={[\n    <Footer\n      position="bottom"\n      format="'+("en"===t?"MMM DD":"dddd DD MMMM")+'"\n      names={{\n        selectedDates: "'+("en"===t?"Flight information:":"اطلاعات پرواز")+'",\n        from: "'+("en"===t?"Departure date:":"تاریخ رفت")+'",\n        to: "'+("en"===t?"Return date:":"تاریخ برگشت")+'",\n        selectDate: "'+("en"===t?"select":"انتخاب نشده")+'",\n        close: "'+("en"===t?"Close":"بستن")+'",\n        separator: "'+("en"===t?",":"،")+'",\n      }}\n    />,\n  ]}\n/>',jsx:r.createElement(l.f,Object.assign({range:!0,numberOfMonths:2,plugins:[r.createElement(o.Z,{position:"bottom",format:"en"===t?"MMM DD":"dddd DD MMMM",names:{selectedDates:"en"===t?"Flight information:":"اطلاعات پرواز",from:"en"===t?"Departure date:":"تاریخ رفت",to:"en"===t?"Return date:":"تاریخ برگشت",selectDate:"en"===t?"select":"انتخاب نشده",close:"en"===t?"Close":"بستن",separator:"en"===t?",":"،"}})]},n))}]}function i(e){var t=e.pageContext.language||"en";return r.createElement(a.Z,{language:t,doc:c,section:"plugins"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-range-picker-footer-js-9d6c14bcc4c31baab6af.js.map