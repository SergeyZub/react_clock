(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),i=n(1),r=n(2),s=n(4),u=n(3),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).tick=function(){a.setState({date:new Date}),console.log(a.state.date.toLocaleTimeString())},a.state={date:new Date},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.state.date.toLocaleTimeString())}}]),n}(c.a.Component)),k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:"clock"},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.setRandomName=function(){e.setState({clockName:"".concat(Math.random())})},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time:"," ",this.state.isClockVisible&&c.a.createElement(m,{name:this.state.clockName})),c.a.createElement("div",null,c.a.createElement("button",{onClick:this.showClock,type:"button"},"Show Clock"),c.a.createElement("button",{onClick:this.hideClock,type:"button"},"Hide Clock"),c.a.createElement("button",{onClick:this.setRandomName,type:"button"},"Set random name"))))}}]),n}(c.a.Component);l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2fd999de.chunk.js.map