(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,5,6],{260:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("74896f38",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("23331b84",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(260)},268:function(t,e,n){var o=n(27)(!1);o.push([t.i,".new-comment{text-align:center}.new-comment .controls{margin:30px 0}.new-comment .contact-form{max-width:600px;margin:30px auto}",""]),t.exports=o},269:function(t,e,n){"use strict";n(261)},270:function(t,e,n){var o=n(27)(!1);o.push([t.i,".comments{text-align:center;margin:30px}.comment{padding:20px;margin-bottom:20px;background-color:#fff;text-align:center}.comment .name{font-size:24px;color:#5c4de7;margin-bottom:12px}",""]),t.exports=o},275:function(t,e,n){"use strict";n.r(e);var o={name:"Comments",props:{comments:{type:Array,default:null}}},r=(n(269),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"comments"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v(" Comments: ")]),t._v(" "),0==t.comments.length?n("p",[t._v("Comments: 0")]):t._e(),t._v(" "),t._l(t.comments,(function(e){return t.comments?n("div",{key:e.name,staticClass:"comment"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])]):t._e()}))],2)])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("c3907c9a",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n.r(e);var o={name:"Post",props:{post:Object,required:!0}},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post"},[n("div",{staticClass:"container"},[n("div",{staticClass:"post-header"},[n("img",{attrs:{src:t.post.img,alt:t.post.title}}),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v(t._s(t.post.descr))])]),t._v(" "),n("div",{staticClass:"post-body"},[n("p",[t._v(t._s(t.post.content))])])])])}),[],!1,null,"3ec8ce46",null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);n(37),n(29),n(36),n(47),n(30),n(48);var o=n(21);n(38);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"NewComment",props:{postId:{type:String,required:!0}},data:function(){return{message:null,comment:{name:"",text:""}}},methods:{onSubmit:function(){var t=this;this.$store.dispatch("addComment",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({postId:this.postId,publish:!1},this.comment)).then((function(){t.message="Submited!",t.comment.name="",t.comment.text=""})).catch((function(t){console.log(t)})),console.log(this.postId)}}},m=(n(267),n(5)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-comment"},[n("div",{staticClass:"container"},[t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contact-form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("App-input",{model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}},[t._v(" Name: ")]),t._v(" "),n("App-text-area",{model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}},[t._v(" Text: ")]),t._v(" "),n("div",{staticClass:"controls"},[n("app-button",[t._v("Submit!")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){var o=n(2),r=n(183).values;o({target:"Object",stat:!0},{values:function(t){return r(t)}})},291:function(t,e,n){"use strict";n(280)},292:function(t,e,n){var o=n(27)(!1);o.push([t.i,".post{max-width:900px;margin:0 auto}.post-header{text-align:center;margin-bottom:30px}.post-header img{margin-bottom:16px;max-width:400px}.post-header p{color:#999}.post-header .post-body{text-align:left}",""]),t.exports=o},303:function(t,e,n){"use strict";n.r(e);var o=n(16),r=n(8),c=(n(49),n(17),n(31),n(39),n(36),n(290),n(45)),m=n.n(c),l=n(283),d=n(284),f=n(275),v={name:"index",components:{post:l.default,newComment:d.default,comments:f.default},head:function(){var title=this.post.title,t=this.post.descr;return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:img",name:"og:img",content:"".concat(this.post.img)}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([m.a.get("https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/posts/".concat(t.params.id,".json")),m.a.get("https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/comments.json")]);case 2:return n=e.sent,r=Object(o.a)(n,2),c=r[0],l=r[1],d=Object.values(l.data).filter((function(e){return e.postId===t.params.id&&e.publish})),e.abrupt("return",{post:c.data,comments:d});case 8:case"end":return e.stop()}}),e)})))()}},x=(n(291),n(5)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("post",{attrs:{post:t.post}}),t._v(" "),n("comments",{attrs:{comments:t.comments}}),t._v(" "),n("newComment",{attrs:{postId:t.$route.params.id}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Comments:n(275).default})}}]);