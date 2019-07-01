(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{229:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Starting with "),a("Badge",{attrs:{text:"3.0.0"}}),t._v(" there is no need to manually construct a "),a("code",[t._v("MarkwonTheme")]),t._v(".\nInstead a "),a("code",[t._v("Plugin")]),t._v(" should be used:")],1),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("ThemeProperty",{attrs:{name:"linkColor",type:"@ColorInt int",defaults:"Default link color of a context where markdown is displayed <sup>*</sup>"}}),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Starting margin before text content for the:")]),t._v(" "),t._m(7),t._v(" "),a("ThemeProperty",{attrs:{name:"blockMargin",type:"@Px int",defaults:"24dp"}}),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Width of a blockquote stripe")]),t._v(" "),a("ThemeProperty",{attrs:{name:"blockQuoteWidth",type:"@Px int",defaults:"1/4 of the <a href='#block-margin'>block margin</a>"}}),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Color of a blockquote stripe")]),t._v(" "),a("ThemeProperty",{attrs:{name:"blockQuoteColor",type:"@ColorInt int",defaults:"textColor with <code>25</code> (0-255) alpha value"}}),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("Controls the color of a list item. For ordered list: leading number,\nfor unordered list: bullet.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("ThemeProperty",{attrs:{name:"listItemColor",type:"@ColorInt int",defaults:"Text color"}}),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("Border width of a bullet list item (level 2)")]),t._v(" "),t._m(18),t._v(" "),a("ThemeProperty",{attrs:{name:"bulletListItemStrokeWidth",type:"@Px int",defaults:"Stroke width of TextPaint"}}),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("The width of the bullet item")]),t._v(" "),t._m(20),t._v(" "),a("ThemeProperty",{attrs:{name:"bulletWidth",type:"@Px int",defaults:"min(<a href='#block-margin'>blockMargin</a>, lineHeight) / 2"}}),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("ThemeProperty",{attrs:{name:"codeTextColor",type:"@ColorInt int",defaults:"Content text color"}}),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),a("ThemeProperty",{attrs:{name:"codeBackgroundColor",type:"@ColorInt int",defaults:"<a href='#inline-code-text-color'>inline code text color</a> with 25 (0-255) alpha"}}),t._v(" "),t._m(26),t._v(" "),t._m(27),a("ThemeProperty",{attrs:{name:"codeBlockTextColor",type:"@ColorInt int",defaults:"<a href='#inline-code-text-color'>inline code text color</a>"}}),t._v(" "),t._m(28),t._v(" "),t._m(29),a("ThemeProperty",{attrs:{name:"codeBlockBackgroundColor",type:"@ColorInt int",defaults:"<a href='#inline-code-background-color'>inline code background color</a>"}}),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("Leading margin for the block code content")]),t._v(" "),a("ThemeProperty",{attrs:{name:"codeMultilineMargin",type:"@Px int",defaults:"8dip"}}),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("Typeface of code content")]),t._v(" "),a("ThemeProperty",{attrs:{name:"codeTypeface",type:"android.graphics.Typeface",defaults:"Typeface.MONOSPACE"}}),t._v(" "),a("h3",{attrs:{id:"block-code-typeface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-code-typeface","aria-hidden":"true"}},[t._v("#")]),t._v(" Block code typeface "),a("Badge",{attrs:{text:"3.0.0"}})],1),t._v(" "),a("p",[t._v("Typeface of block code content")]),t._v(" "),a("ThemeProperty",{attrs:{name:"codeBlockTypeface",type:"android.graphics.Typeface",defaults:"<code>codeTypeface</code> if set or Typeface.MONOSPACE"}}),t._v(" "),t._m(32),t._v(" "),a("p",[t._v("Text size of code content")]),t._v(" "),a("ThemeProperty",{attrs:{name:"codeTextSize",type:"@Px int",defaults:"(Content text size) * 0.87 if no custom <a href='#code-typeface'>Typeface</a> was set, otherwise (content text size)"}}),t._v(" "),a("h3",{attrs:{id:"block-code-text-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-code-text-size","aria-hidden":"true"}},[t._v("#")]),t._v(" Block code text size "),a("Badge",{attrs:{text:"3.0.0"}})],1),t._v(" "),a("p",[t._v("Text size of block code content")]),t._v(" "),a("ThemeProperty",{attrs:{name:"codeBlockTextSize",type:"@Px int",defaults:"<code>codeTextSize</code> if set or (content text size) * 0.87 if no custom <a href='#code-typeface'>Typeface</a> was set, otherwise (content text size)"}}),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("The height of a brake under H1 & H2")]),t._v(" "),a("ThemeProperty",{attrs:{name:"headingBreakHeight",type:"@Px int",defaults:"Stroke width of context TextPaint"}}),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("The color of a brake under H1 & H2")]),t._v(" "),a("ThemeProperty",{attrs:{name:"headingBreakColor",type:"@ColorInt int",defaults:"(text color) with 75 (0-255) alpha"}}),t._v(" "),a("h3",{attrs:{id:"typeface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeface","aria-hidden":"true"}},[t._v("#")]),t._v(" Typeface "),a("Badge",{attrs:{text:"1.1.0"}})],1),t._v(" "),a("p",[t._v("The typeface of heading elements")]),t._v(" "),a("ThemeProperty",{attrs:{name:"headingTypeface",type:"android.graphics.Typeface",defaults:"default text Typeface"}}),t._v(" "),a("h3",{attrs:{id:"text-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-size","aria-hidden":"true"}},[t._v("#")]),t._v(" Text size "),a("Badge",{attrs:{text:"1.1.0"}})],1),t._v(" "),t._m(36),t._v(" "),a("ThemeProperty",{attrs:{name:"headingTextSizeMultipliers",type:"float[]",defaults:"<code>{2.F, 1.5F, 1.17F, 1.F, .83F, .67F}</code> (HTML spec)"}}),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),a("p",[t._v("Color of a thematic break")]),t._v(" "),a("ThemeProperty",{attrs:{name:"thematicBreakColor",type:"@ColorInt int",defaults:"(text color) with 25 (0-255) alpha"}}),t._v(" "),t._m(39),t._v(" "),a("p",[t._v("Height of a thematic break")]),t._v(" "),a("ThemeProperty",{attrs:{name:"thematicBreakHeight",type:"@Px int",defaults:"Stroke width of context TextPaint"}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[this._v("#")]),this._v(" Theme")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Here is the list of properties that can be configured via "),e("code",[this._v("MarkwonTheme.Builder")]),this._v(" class.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureTheme")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonTheme"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder\n                        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("codeTextColor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLACK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("codeBackgroundColor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GREEN"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"link-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Link color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Controls the color of a "),e("a",{attrs:{href:"#"}},[this._v("link")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("sup",[this._v("*")]),this._v(" "),e("code",[this._v("TextPaint#linkColor")]),this._v(" will be used to determine linkColor of a context")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"block-margin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-margin","aria-hidden":"true"}},[this._v("#")]),this._v(" Block margin")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("lists")]),this._v(" "),e("li",[this._v("blockquotes")]),this._v(" "),e("li",[this._v("task lists")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"block-quote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-quote","aria-hidden":"true"}},[this._v("#")]),this._v(" Block quote")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Customizations for the "),e("code",[this._v("blockquote")]),this._v(" stripe")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Quote")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stripe-width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stripe-width","aria-hidden":"true"}},[this._v("#")]),this._v(" Stripe width")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stripe-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stripe-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Stripe color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list","aria-hidden":"true"}},[this._v("#")]),this._v(" List")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"list-item-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-item-color","aria-hidden":"true"}},[this._v("#")]),this._v(" List item color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("UL")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("OL")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bullet-item-stroke-width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bullet-item-stroke-width","aria-hidden":"true"}},[this._v("#")]),this._v(" Bullet item stroke width")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("First")]),this._v(" "),e("li",[e("ul",[e("li",[this._v("Second")])])]),this._v(" "),e("li",[e("ul",[e("li",[e("ul",[e("li",[this._v("Third")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bullet-width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bullet-width","aria-hidden":"true"}},[this._v("#")]),this._v(" Bullet width")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("First\n"),e("ul",[e("li",[this._v("Second\n"),e("ul",[e("li",[this._v("Third")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[this._v("#")]),this._v(" Code")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"inline-code-text-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inline-code-text-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Inline code text color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The color of the "),e("code",[this._v("code")]),this._v(" content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"inline-code-background-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inline-code-background-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Inline code background color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The color of "),e("code",[this._v("background")]),this._v(" of a code content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"block-code-text-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-code-text-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Block code text color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("The color of code block text\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"block-code-background-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-code-background-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Block code background color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("The color of background of code block text\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"block-code-leading-margin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-code-leading-margin","aria-hidden":"true"}},[this._v("#")]),this._v(" Block code leading margin")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"code-typeface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-typeface","aria-hidden":"true"}},[this._v("#")]),this._v(" Code typeface")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"code-text-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-text-size","aria-hidden":"true"}},[this._v("#")]),this._v(" Code text size")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"heading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heading","aria-hidden":"true"}},[this._v("#")]),this._v(" Heading")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"break-height"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#break-height","aria-hidden":"true"}},[this._v("#")]),this._v(" Break height")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"break-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#break-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Break color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Array of heading text sizes "),e("em",[this._v("ratio")]),this._v(" that is applied to text size")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thematic-break"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thematic-break","aria-hidden":"true"}},[this._v("#")]),this._v(" Thematic break")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color","aria-hidden":"true"}},[this._v("#")]),this._v(" Color")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"height"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#height","aria-hidden":"true"}},[this._v("#")]),this._v(" Height")])}],!1,null,null,null);s.options.__file="theme.md";e.default=s.exports}}]);