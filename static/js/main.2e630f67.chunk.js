(this["webpackJsonpkor-dic-react"]=this["webpackJsonpkor-dic-react"]||[]).push([[0],{13:function(e,n,c){},15:function(e,n,c){"use strict";c.r(n);var t=c(1),s=c.n(t),a=c(7),r=c.n(a),o=(c(12),c(2)),i=c(3),l=c(5),d=c(4),j=(c(13),c(0));var u=function(e){var n=e.seq,c=e.keyword,t=e.link,s=e.hanja,a=e.word_class,r=e.meaning;return Object(j.jsxs)("div",{className:"item move-up",children:[Object(j.jsxs)("div",{className:"word",children:[c,Object(j.jsx)("sup",{children:n}),Object(j.jsx)("p",{className:"hanja",children:s})," ",Object(j.jsx)("a",{href:t,children:"\ub354 \ubcf4\uae30  \xbb"})]}),Object(j.jsxs)("p",{className:"description",children:[Object(j.jsx)("span",{children:a})," ",r]})]})},h=function(e){Object(l.a)(c,e);var n=Object(d.a)(c);function c(){return Object(o.a)(this,c),n.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"searchInner",children:[Object(j.jsx)("div",{className:"col-3 selectArea",children:Object(j.jsxs)("select",{name:"select",className:"form-control",id:"select",children:[Object(j.jsx)("option",{value:"none",selected:!0,children:"\uc804\uccb4"}),Object(j.jsx)("option",{id:"word",value:"word",children:"\ub2e8\uc5b4"}),Object(j.jsx)("option",{id:"mean",value:"mean",children:"\uc758\ubbf8"}),Object(j.jsx)("option",{id:"wordclass",value:"wordclass",children:"\ud488\uc0ac"})]})}),Object(j.jsx)("div",{className:"col-6 inputArea",children:Object(j.jsx)("input",{type:"text",placeholder:"\ub2e8\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"",id:"search",value:"",className:"form-control"})}),Object(j.jsx)("div",{className:"col-3 buttonArea",children:Object(j.jsx)("input",{type:"submit",className:"form-control",name:"",id:"submit",value:"\uac80\uc0c9"})})]})}}]),c}(t.Component),m=h,b=function(e){Object(l.a)(c,e);var n=Object(d.a)(c);function c(e){var t;return Object(o.a)(this,c),console.log("constructor"),(t=n.call(this,e)).changeName=function(){t.setState({name:"name changed"})},t.state={loading:!0,words:[]},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;console.log("mount"),console.log("-----------------"),fetch("https://dictionary-search-haeng.herokuapp.com/api/words").then((function(e){return e.json()})).then((function(n){console.log(n);var c=n.words;e.setState({loading:!1,words:c})}))}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e=this.state,n=e.loading,c=e.words;return n?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"loading..."})}):Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"searchArea",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(m,{})})})}),Object(j.jsx)("div",{className:"resultArea",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"resultInner",id:"result",children:c.map((function(e){return Object(j.jsx)(u,{seq:e.seq,keyword:e.keyword,link:e.link,hanja:e.hanja,word_class:e.word_class,meaning:e.meaning},e._id)}))})})})})]})}}]),c}(t.Component),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(n){var c=n.getCLS,t=n.getFID,s=n.getFCP,a=n.getLCP,r=n.getTTFB;c(e),t(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.2e630f67.chunk.js.map