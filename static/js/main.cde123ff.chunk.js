(this["webpackJsonpkor-dic-react"]=this["webpackJsonpkor-dic-react"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(7),a=n.n(r),i=(n(18),n(8)),o=n(9),l=n(12),d=n(11),u=(n(19),n(0));var j=function(e){var t=e.seq,n=e.keyword,s=e.link,c=e.hanja,r=e.word_class,a=e.meaning;return Object(u.jsxs)("div",{className:"item move-up",children:[Object(u.jsxs)("div",{className:"word",children:[n,Object(u.jsx)("sup",{children:t}),Object(u.jsx)("p",{className:"hanja",children:c})," ",Object(u.jsx)("a",{href:s,children:"\ub354 \ubcf4\uae30  \xbb"})]}),Object(u.jsxs)("p",{className:"description",children:[Object(u.jsx)("span",{children:r})," ",a]})]})},p=n(4),h=n(3),b=function(e){var t=e.word,n=e.updateText;return Object(u.jsx)("div",{onClick:function(){return n(t)},children:t})},x=function(e){var t,n=function(t){e.updateField("keyword",t,!1),e.updateField("results",[])},s=e.results.results;return console.log(s),s&&(t=s.map((function(e){return Object(u.jsx)(b,{word:e.word,updateText:n})}))),Object(u.jsxs)("div",{className:"col-6 inputArea",children:[Object(u.jsx)("input",{id:"search",className:"form-control",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694",value:e.keyword||"",onChange:function(t){return e.updateField("keyword",t.target.value)},onKeyPress:function(t){return e.onKeyPress(t)}}),Object(u.jsx)("div",{className:"autocomplete-items",ref:e.textInput,children:t})]})},m=[{id:0,word:"\ud559\uad50"},{id:1,word:"\ud559\uc6d0"},{id:2,word:"\uc18c\uc124"},{id:3,word:"\uc218\ud559"},{id:4,word:"\uc5ed\uc0ac"},{id:5,word:"\uac00\ub2e4"},{id:6,word:"\ub098"},{id:7,word:"\uace0\ub9ac"}],O=function(e){var t=Object(h.useState)(m),n=Object(p.a)(t,2),s=n[0],c=(n[1],Object(h.useState)("")),r=Object(p.a)(c,2),a=r[0],i=r[1],o=Object(h.useState)([]),l=Object(p.a)(o,2),d=l[0],j=l[1],b=Object(h.useState)("none"),O=Object(p.a)(b,2),f=O[0],v=O[1],w=Object(h.useRef)(),y=function(e){var t=s.filter((function(t){return!0===g(t.word,e)}));j({results:t})},g=function(e,t){var n=t.length;return e=e.toLowerCase().substring(0,n),""!==t&&e===t.toString().toLowerCase()},N=function(e){return Object(u.jsx)("select",{value:f,name:"select",className:"form-control",id:"select",onChange:function(e){v(e.target.value),console.log(e.target.value)},children:e.options.map((function(t){return Object(u.jsx)("option",{value:t.value,defaultValue:e.defaultValue===t.value,children:t.name},t.value)}))})},k=function(){e.handleInput(a)};return Object(u.jsxs)("div",{className:"searchInner",children:[Object(u.jsx)("div",{className:"col-3 selectArea",children:Object(u.jsx)(N,{options:[{value:"none",name:"\uc804\uccb4"},{value:"word",name:"\ub2e8\uc5b4"},{value:"mean",name:"\uc758\ubbf8"},{value:"wordclass",name:"\ud488\uc0ac"}],defaultValue:"none"})}),Object(u.jsx)(x,{keyword:a,results:d,updateField:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&y(t),"keyword"===e&&i(t),"results"===e&&j(t)},onKeyPress:function(e){return function(e){"Enter"===e.key?k():40===e.keyCode?(console.log("1"),w.current.focus()):38===e.keyCode&&(console.log("2"),w.current.focus())}(e)},textInput:w}),Object(u.jsx)("div",{className:"col-3 buttonArea",children:Object(u.jsx)("input",{type:"submit",className:"form-control",id:"submit",value:"\uac80\uc0c9",onClick:function(){return k()}})})]})},f=n(39);var v=function(e){var t=e.exceptionType;return"num"===t?Object(u.jsxs)("div",{className:"exceptionArea",children:[Object(u.jsx)(f.a,{className:"icon"}),Object(u.jsxs)("p",{children:["\uac80\uc0c9\uc5b4\uc5d0 ",Object(u.jsx)("span",{children:"\uc22b\uc790"}),"\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),Object(u.jsx)("p",{children:"\ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]}):"eng"===t?Object(u.jsxs)("div",{className:"exceptionArea",children:[Object(u.jsx)(f.a,{className:"icon"}),Object(u.jsxs)("p",{children:["\uac80\uc0c9\uc5b4\uc5d0 ",Object(u.jsx)("span",{children:"\uc601\uc5b4"}),"\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),Object(u.jsx)("p",{children:"\ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]}):Object(u.jsxs)("div",{className:"exceptionArea",children:[Object(u.jsx)(f.a,{className:"icon"}),Object(u.jsxs)("p",{children:["\uac80\uc0c9\uc5b4\uc5d0 ",Object(u.jsx)("span",{children:"\ud2b9\uc218\ubb38\uc790"}),"\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),Object(u.jsx)("p",{children:"\ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]})},w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),console.log("constructor"),(s=t.call(this,e)).changeName=function(){s.setState({name:"name changed"})},s.handleInput=function(e){/[a-z]/i.test(e)?s.setState({Query:"",isException:!0,exceptionType:"eng"}):/\d/.test(e)?s.setState({Query:"",isException:!0,exceptionType:"num"}):/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(e)?s.setState({Query:"",isException:!0,exceptionType:"str"}):s.setState({Query:e,isException:!1})},s.state={loading:!0,words:[],Query:"",isException:!1,exceptionType:""},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("mount"),console.log("-----------------"),fetch("https://dictionary-search-haeng.herokuapp.com/api/words").then((function(e){return e.json()})).then((function(t){console.log(t);var n=t.words;e.setState({loading:!1,words:n})}))}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e=this,t=(this.state,this.state.words.filter((function(t){return t.keyword.includes(e.state.Query)})),this.state.words.filter((function(t){return t.meaning.includes(e.state.Query)})),this.state.words.filter((function(t){return t.word_class.includes(e.state.Query)})),this.state.words.filter((function(t){return t.keyword.includes(e.state.Query)||t.meaning.includes(e.state.Query)||t.word_class.includes(e.state.Query)}))),n=this.state,s=n.loading,c=(n.words,n.exceptionType),r=n.isException;return s?Object(u.jsx)("div",{className:"loaderWrapper",children:Object(u.jsx)("div",{className:"loader",children:"loading..."})}):Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("div",{className:"searchArea",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(O,{handleInput:this.handleInput})})})}),Object(u.jsx)("div",{className:"resultArea",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"resultInner",id:"result",children:r?Object(u.jsx)(v,{exceptionType:c}):t.map((function(e){return Object(u.jsx)(j,{seq:e.seq,keyword:e.keyword,link:e.link,hanja:e.hanja,word_class:e.word_class,meaning:e.meaning},e._id)}))})})})})]})}}]),n}(s.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.cde123ff.chunk.js.map