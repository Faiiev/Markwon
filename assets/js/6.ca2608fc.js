(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12],{171:function(e,s,t){},181:function(e,s,t){"use strict";var n=t(171);t.n(n).a},208:function(e,s,t){"use strict";t.r(s);var n={name:"AwesomeGroup",props:["apps"],components:{Link:t(89).default}},o=(t(181),t(0)),a=Object(o.a)(n,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"awesome-group"},e._l(e.apps,function(s){return t("div",{staticClass:"awesome-app"},[t("a",{staticClass:"awesome-app-name",attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(s.name)+" "),t("OutboundLink")],1),e._v(" "),t("img",{staticClass:"awesome-app-image",attrs:{src:s.image}}),e._v(" "),s.description?t("span",{staticClass:"awesome-app-description"},[e._v(e._s(s.description))]):e._e()])}))},[],!1,null,"6bf8bc8b",null);a.options.__file="AwesomeGroup.vue";s.default=a.exports},89:function(e,s,t){"use strict";t.r(s);t(50);var n={"commonmark-spec":{displayName:"commonmark spec",href:"https://spec.commonmark.org/0.28/"},"commonmark-spec#inline":{href:"https://spec.commonmark.org/0.28/#raw-html"},"commonmark-spec#block":{href:"https://spec.commonmark.org/0.28/#html-blocks"},"commonmark-spec#soft-break":{href:"https://spec.commonmark.org/0.28/#soft-line-breaks"},"commonmark-dingus":{displayName:"commonmark dingus",href:"https://spec.commonmark.org/dingus/"},"html-inlines":{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements"},"html-blocks":{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements"},jsoup:{displayName:"Jsoup",href:"https://github.com/jhy/jsoup/"},"markwon-jsoup":{href:"https://github.com/noties/Markwon/tree/master/markwon-html-parser-impl/src/main/java/ru/noties/markwon/html/impl/jsoup"},"commonmark-java":{href:"https://github.com/atlassian/commonmark-java/",displayName:"commonmark-java"}},o={name:"Link",props:["name","displayName","href"],methods:{linkHref:function(){return this.href||n[this.name].href},linkText:function(){return this.displayName||n[this.name].displayName}}},a=t(0),r=Object(a.a)(o,function(){var e=this.$createElement,s=this._self._c||e;return s("a",{attrs:{href:this.linkHref(),target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.linkText())+"\n  "),s("OutboundLink")],1)},[],!1,null,null,null);r.options.__file="Link.vue";s.default=r.exports}}]);