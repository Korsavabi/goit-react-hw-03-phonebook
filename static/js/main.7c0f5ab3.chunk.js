(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(9),i=n.n(s),o=n(2),u=n(3),l=n(6),j=n(5),m=n(4),b=n(7),d=n(10),h=(n(17),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).formInitalState={name:"",number:""},t.state={name:"",number:""},t.submitHandler=function(e){e.preventDefault();var n=t.state,a={name:n.name,number:n.number};t.props.addTask(a),t.setState(Object(b.a)({},t.formInitalState))},t.inputHandler=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(m.a)({},c,a))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(a.jsx)("p",{className:"form__text",children:"Name / Surname"}),Object(a.jsx)("input",{className:"input__form",placeholder:"Name",type:"text",name:"name",value:e,onChange:this.inputHandler}),Object(a.jsx)("p",{className:"form__text",children:"Number"}),Object(a.jsx)("input",{className:"input__form",placeholder:"Number",type:"number",name:"number",onChange:this.inputHandler,value:n}),Object(a.jsx)("button",{type:"submit",className:"form__btn",children:"Add contact"})]})}}]),n}(c.Component)),f=(n(18),function(t){var e=t.deleteTask,n=t.contacts;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"todo__text",children:[t.name,": ",t.number]}),Object(a.jsx)("button",{onClick:function(){return e(t.id)},children:"DELETE"})]})},t.id)}))})}),p=function(t){var e=t.filter,n=t.inputHandler;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",placeholder:"Search",name:"filter",value:e,onChange:n,className:"input__form"})})},O=n(21),v=(n(19),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addTask=function(e){var n=e.name;t.state.contacts.every((function(t){return!t.name.includes(n)}))?t.setState((function(t){return{contacts:[].concat(Object(d.a)(t.contacts),[Object(b.a)(Object(b.a)({},e),{},{id:Object(O.a)()})])}})):alert("".concat(n," is already in contacts"))},t.deleteTask=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.searchItem=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.inputHandler=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(m.a)({},c,a))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(a.jsxs)("div",{className:"box__form",children:[Object(a.jsxs)("div",{className:"form__user-phone",children:[Object(a.jsx)("h2",{className:"title",children:"Phonebook:"}),Object(a.jsx)(h,{addTask:this.addTask})]}),Object(a.jsx)("h2",{className:"title",children:"Contacts:"}),Object(a.jsx)(p,{filter:n,inputHandler:this.inputHandler}),Object(a.jsx)(f,{deleteTask:this.deleteTask,contacts:n?this.searchItem():e})]})}}]),n}(c.Component)),x=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v,{})})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7c0f5ab3.chunk.js.map