(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(32)},20:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),i=n.n(a),c=(n(20),n(2)),s=n(3),l=n(5),u=n(4),h=n(1),m=n(6),p=function(e){var t=e.name,n=e.onChange,r=e.options;return o.a.createElement("select",{onChange:n,name:t},r.map(function(e){return o.a.createElement("option",{key:e,value:e},"Sort by ",e)}))};p.defaultProps={name:"default",onChange:function(){},options:["no options provied"]};var d=p,f=n(14),v=n.n(f),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=v()(n.props.onChange,300),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.onChange.cancel()}},{key:"render",value:function(){var e=this,t=this.props.placeholder;return o.a.createElement("input",{type:"text",placeholder:t,onChange:function(t){return e.onChange(t.nativeEvent.target.value)}})}}]),t}(r.Component);C.defaultProps={placeholder:"Search an organization's repositories. Now showing HubSpot's",onChange:function(){}};var b=C,g=n(7),E=n.n(g),k=function(e){var t=e.sortDirection,n=e.onClick;return o.a.createElement("button",{onClick:n},function(e){return e?"asc"===e?"\u2b06":"\u2b07":"\u2022"}(t))};k.ropTypes={sortDirection:E.a.oneOf([void 0,"asc","dec"]),onClick:E.a.func.isRequired},k.defaultProps={sortDirection:void 0};var y=k,w=function(e){var t=e.header,n=e.children;return o.a.createElement("div",null,t&&o.a.createElement("header",null,t),n&&o.a.createElement("div",null,n))},S=(n(31),["orgs","users"]),O=["stargazers_count","forks_count","open_issues_count"],j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={repos:[],owner:"hubSpot",ownerChoices:S[0],sortBy:O[0],direction:1,commits:[],commitName:"",repoError:void 0},n.selectOnChange=n.selectOnChange.bind(Object(h.a)(n)),n.selectSortCount=n.selectSortCount.bind(Object(h.a)(n)),n.reverseSort=n.reverseSort.bind(Object(h.a)(n)),n.fetchCommits=n.fetchCommits.bind(Object(h.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"newFetch",value:function(){var e=this,t=this.state,n=t.ownerChoices,r=t.owner;if(r.length<2)return this.setState({repos:[],repoError:!0}),null;fetch("".concat("https://api.github.com","/").concat(n,"/").concat(r,"/repos")).then(function(e){return e.json()}).then(function(t){return e.setState({repos:t,repoError:!1})}).catch(function(){e.setState({repoError:!0})})}},{key:"componentWillMount",value:function(){this.newFetch()}},{key:"handleInputChange",value:function(e){this.setState({owner:e}),this.newFetch()}},{key:"selectOnChange",value:function(e){this.setState({ownerChoices:S[e.nativeEvent.srcElement.selectedIndex]}),this.newFetch()}},{key:"selectSortCount",value:function(e){this.setState({sortBy:O[e.nativeEvent.srcElement.selectedIndex]})}},{key:"reverseSort",value:function(){this.setState({direction:-1*this.state.direction})}},{key:"fetchCommits",value:function(e,t){var n=this;fetch(e).then(function(e){return e.json()}).then(function(e){return n.setState({commits:e,commitName:t})})}},{key:"renderRepoAttributes",value:function(e){var t=this,n=this.state,r=n.commits,a=n.commitName;return n.repoError?o.a.createElement("span",null,"\u2026looks like we ran into a problem"):o.a.createElement("span",null,o.a.createElement("span",null,e.name),",",o.a.createElement("span",{role:"img","aria-labelledby":"star"},"\u2b50"),e.stargazers_count,",",o.a.createElement("span",{role:"img","aria-labelledby":"fork"},"\ud83c\udf74"),e.forks_count,",",o.a.createElement("span",{role:"img","aria-labelledby":"alarm"},"\ud83d\udea8"),e.open_issues_count,",",o.a.createElement("button",{onClick:function(){return t.fetchCommits(e.commits_url.split("{")[0],e.name)}},o.a.createElement("span",{role:"img","aria-labelledby":"commit"},"\ud83d\udc8d"),"commits"),e.name===a&&r.map(function(e){return o.a.createElement("div",null,e.commit.author.name)}),"}")}},{key:"renderSearchControls",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{onChange:this.handleInputChange}),o.a.createElement(d,{onChange:this.selectOnChange,name:"ownerType",options:S}),o.a.createElement(d,{onChange:this.selectSortCount,name:"selectSortOption",options:O}),o.a.createElement(y,{onClick:this.reverseSort}))}},{key:"renderReposList",value:function(){var e=this,t=this.state,n=t.direction,r=t.repos,a=t.sortBy;return o.a.createElement(o.a.Fragment,null,r.length>0&&r.sort(function(e,t){return(e[a]>t[a]?-1:1)*n}).map(function(t){return o.a.createElement("div",{key:t.name,className:"repo-list-item"},e.renderRepoAttributes(t))}))}},{key:"render",value:function(){return o.a.createElement(w,{header:this.renderSearchControls()},this.renderReposList())}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.b107521d.chunk.js.map