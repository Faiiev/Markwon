(window.webpackJsonp=window.webpackJsonp||[]).push([[16,13],{202:function(a,t,e){"use strict";e.r(t);var n={name:"MavenBadges",components:{MavenBadge:e(88).default}},r=e(0),i=Object(r.a)(n,function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("MavenBadge",{attrs:{artifact:"markwon"}}),this._v(" "),t("MavenBadge",{attrs:{artifact:"markwon-image-loader"}}),this._v(" "),t("MavenBadge",{attrs:{artifact:"markwon-syntax-highlight"}}),this._v(" "),t("MavenBadge",{attrs:{artifact:"markwon-view"}})],1)},[],!1,null,null,null);i.options.__file="MavenBadges.vue";t.default=i.exports},88:function(a,t,e){"use strict";e.r(t);var n={name:"MavenBadge",props:["artifact","label"],methods:{mavenSearchUrl:function(){return"http://search.maven.org/#search|ga|1|g%3A%22ru.noties.markwon%22%20AND%20a%3A%22".concat(this.artifact,"%22")},shieldImgageUrl:function(){return"https://img.shields.io/maven-central/v/ru.noties.markwon/".concat(this.artifact,".svg?label=").concat(this.displayLabel)}},computed:{displayLabel:function(){return this.label||this.artifact}}},r=e(0),i=Object(r.a)(n,function(){var a=this.$createElement,t=this._self._c||a;return t("a",{attrs:{href:this.mavenSearchUrl()}},[t("img",{attrs:{src:this.shieldImgageUrl(),alt:this.displayLabel}})])},[],!1,null,null,null);i.options.__file="MavenBadge.vue";t.default=i.exports}}]);