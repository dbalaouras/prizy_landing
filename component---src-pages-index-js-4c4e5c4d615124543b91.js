(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(142),s=a(147);a(160),a(161),t.default=function(){return i.a.createElement(s.a,null,i.a.createElement("h1",null,"Καλώς ήλθατε στο Prizy!"),i.a.createElement("p",null,"Ελάτε παρέα να δημιουργήσουμε ένα ωραίο website για να στεγάσει το Landing Page του Prizy ως μέρος του Hacktoberfest."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement("img",{src:"https://hacktoberfest.digitalocean.com/assets/hacktoberfest-2018-social-card-c8d2e1489f647f2e0a26e6f598adeb760872818905b34cd437afc7ac2857ceab.png"})),i.a.createElement("p",null,"Projects για το Prizy:",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/Larissa-Developers/prizy_backend",target:"_blank"},"Prizy back-end")," ","|"," ",i.a.createElement("a",{href:"https://trello.com/b/zIPr3q6l/prizy-backend",target:"_blank"},"Trello Board")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/Larissa-Developers/prizy_mobile",target:"_blank"},"Prizy mobile apps")," ","|"," ",i.a.createElement("a",{href:"https://trello.com/b/oCVfuIUL/prize-app",target:"_blank"},"Trello Board")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/Larissa-Developers/prizy_landing",target:"_blank"},"Prizy landing page")," ","(what you see here) |"," ",i.a.createElement("a",{href:"https://trello.com/b/rJL4xrcH/prizy-web",target:"_blank"},"Trello Board"))),i.a.createElement("blockquote",null,"Στα Trello boards μπορείτε επιλέξετε τι θα θέλατε να κάνετε από τα αντίστοιχα tasks.")),i.a.createElement("p",null,"Για την επικοινωνία και τον συντονισμό της όμαδας χρησιμοποιούμε το"," ",i.a.createElement("strong",null,"#prizy")," channel στο Slack. Αν δεν είσαι ακόμη στο Slack κάνε join"," ",i.a.createElement("a",{href:"https://larissadevelopers.slack.com/join/shared_invite/enQtMzc1NjYzODc1MjY1LWI3MTM4YjAwZTBkMzAxYjJmYzY0ZTY1MTE3NmFjY2IzMTVjZDllNDczNjk5ZmE0MTY1Yjk1Zjc0NzJkMGY4YzE",target:"_blank"},"εδώ"),"."),i.a.createElement("p",null,"Για όσους βλέπετε το GitHub για πρώτη φόρα και δεν ξέρετε τι είναι το Pull Request (PR) ώστε να συνεισφέρετε στο Project, μπορείτε να διαβάσετε περισσότερα"," ",i.a.createElement("a",{href:"https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source",target:"_blank"},"εδώ"),"."),i.a.createElement("hr",null),i.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2 (example page)"))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(141),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(143),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(e,t,a){var r;e.exports=(r=a(145))&&r.default||r},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Prizy | Larissa Developers meetup"}}}}},145:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(49),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){},147:function(e,t,a){"use strict";var r=a(144),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(148),c=a.n(o),d=a(142),u=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:"#950104",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(d.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},f=(a(146),function(e){var t=e.children;return n.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})});f.propTypes={children:l.a.node.isRequired};t.a=f},160:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png",srcSet:"/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-0552a.png 75w,\n/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-fc3be.png 150w,\n/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png 300w,\n/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-24f49.png 450w,\n/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5497d.png 600w,\n/prizy_landing/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-483e1.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},161:function(e,t,a){"use strict";var r=a(35);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(48)),l=r(a(150)),o=r(a(151)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,l=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:l,hasNoScript:d,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.fluid,h=e.fixed,g=e.backgroundColor,y=e.Tag,E="boolean"==typeof g?"lightgray":g,v=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),w=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l);if(p){var S=p;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&c.default.createElement(b,{alt:this.state.isVisible?"":a,title:t,src:S.base64,style:v}),S.tracedSVG&&c.default.createElement(b,{alt:this.state.isVisible?"":a,title:t,src:S.tracedSVG,style:v}),E&&c.default.createElement(y,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(b,{alt:a,title:t,src:S.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t},S))}}))}if(h){var z=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete R.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},z.base64&&c.default.createElement(b,{alt:this.state.isVisible?"":a,title:t,src:z.base64,style:v}),z.tracedSVG&&c.default.createElement(b,{alt:this.state.isVisible?"":a,title:t,src:z.tracedSVG,style:v}),E&&c.default.createElement(y,{title:t,style:{backgroundColor:E,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement("source",{srcSet:z.srcSet,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,width:z.width,height:z.height,src:z.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t,width:z.width,height:z.height},z))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-4c4e5c4d615124543b91.js.map