(self.webpackChunkphonebook_app_on_react=self.webpackChunkphonebook_app_on_react||[]).push([[994],{3107:function(n,e,t){"use strict";t.d(e,{d:function(){return f}});var r,o,i,a=t(9439),c=t(2791),s=t(168),u=t(225),l=u.Z.div(r||(r=(0,s.Z)(["\n  position: relative;\n  display: flex;\n  height: 100vh;\n  border-radius: 8px;\n  box-shadow: 0 0 6px black;\n  overflow: hidden;\n"]))),d=u.Z.div(o||(o=(0,s.Z)(["\n  position: absolute;\n  width: 110%;\n  height: 110%;\n  background-position: center center;\n  background-size: cover;\n  cursor: all-scroll;\n  transition: transform 300ms linear;\n"]))),p=u.Z.div(i||(i=(0,s.Z)(["\n  position: absolute;\n  right: -60%;\n  bottom: -85%;\n  z-index: 1;\n  width: 110%;\n  height: 110%;\n  font-size: 32px;\n  text-shadow: 2px 2px 4px black;\n  color: white;\n  cursor: all-scroll;\n  transition: transform 300ms linear;\n"]))),h=t(184),f=function(n){var e=n.imgWidth,t=n.imgHeight,r=n.imgUrl,o=n.imgCaption,i="url('".concat(r,"')"),s=(0,c.useState)(""),u=(0,a.Z)(s,2),f=u[0],x=u[1],m=(0,c.useState)(""),b=(0,a.Z)(m,2),g=b[0],v=b[1];return(0,h.jsxs)(l,{style:{width:e,height:t},onMouseMove:function(n){var e=n.pageX/window.innerWidth,t=n.pageY/window.innerHeight;x("translate(-".concat(30*e,"px, -").concat(30*t,"px) scale(1.02)")),v("translate(".concat(60*e,"px, ").concat(60*t,"px)"))},onMouseOut:function(){return x("scale(1.0)")},children:[(0,h.jsx)(d,{style:{backgroundImage:i,transform:f}}),(0,h.jsx)(p,{style:{transform:g},children:o})]})}},4994:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var r,o,i=t(9434),a=t(6895),c=t(2286),s=t(4179),u=t(168),l=t(225),d=t(5705),p=(0,l.Z)(d.l0)(r||(r=(0,u.Z)(["\n  margin-bottom: 20px;\n  padding: 20px;\n  background-color: white;\n  display: block;\n  border-radius: 8px;\n  box-shadow: 1px 1px 4px black;\n"]))),h=t(971),f=t(4554),x=t(3736),m=t(184),b=function(){var n=(0,i.I0)(),e=(0,i.v9)(c.Af);return(0,m.jsx)(d.J9,{initialValues:{name:"",number:""},validate:function(n){var e={};return n.name?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(n.name)||(e.name="Invalid name"):e.name="Required",n.number?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(n.number)||(e.number="Invalid number"):e.number="Required",e},onSubmit:function(t,r){var o,i=r.resetForm;if(function(n){var t=n.name.toLowerCase();return e.some((function(n){return n.name.toLowerCase()===t}))}(t))return o=t.name,void alert("".concat(o," is already in contacts."));n((0,s.uK)(t)),i()},children:(0,m.jsxs)(p,{autoComplete:"off",children:[(0,m.jsxs)(f.Z,{sx:{pb:2,display:"flex",alignItems:"center",gap:"20px"},children:[(0,m.jsx)(d.gN,{component:h.n,name:"name",label:"Name",type:"text",size:"small",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,sx:{bgcolor:"rgb(239 239 239)"}}),(0,m.jsx)(d.gN,{component:h.n,name:"number",label:"Number",type:"tel",size:"small",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,sx:{bgcolor:"rgb(239 239 239)"}})]}),(0,m.jsx)(x.Z,{variant:"contained",size:"medium",sx:{px:2,py:1,textTransform:"none",color:"black",bgcolor:"rgb(239 239 239)",boxShadow:3,":hover":{bgcolor:"white",color:"black"}},type:"submit",children:"Add Contact"})]})})},g=t(2007),v=t.n(g),y=t(2791),Z=l.Z.ul(o||(o=(0,u.Z)(["\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  list-style: none;\n  overflow-y: auto;\n"]))),j=t(890),w=t(9145),k=function(n){var e=n.contact,t=e.name,r=e.number,o=e.id,a=(0,i.I0)();return(0,m.jsxs)("li",{style:{paddingRight:"10px",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"20px"},children:[(0,m.jsx)("a",{href:"tel:".concat(r),style:{padding:"10px 0",textDecoration:"none"},children:(0,m.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center",gap:"20px",color:"black",":hover":{color:"#1565c0",textDecoration:"underline"}},children:[(0,m.jsx)(w.Z,{sx:{":hover":{color:"white",bgcolor:"#1565c0"}}}),(0,m.jsxs)(j.Z,{variant:"body1",component:"span",children:[t,": ",r," "]})]})}),(0,m.jsx)(x.Z,{variant:"contained",size:"small",sx:{px:1,textTransform:"none",color:"black",bgcolor:"rgb(239 239 239)",boxShadow:3,":hover":{bgcolor:"white",color:"black"}},type:"button",onClick:function(){return a((0,s.GK)(o))},children:"Delete"})]})},C=t(3107),_=t(455),I=function(){var n=(0,i.v9)(c.xU),e=(0,i.v9)(c.zh),t=(0,i.v9)(c.hF),r=(0,i.I0)();return(0,y.useEffect)((function(){r((0,s.yF)())}),[r]),(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(j.Z,{variant:"body1",component:"h3",children:"Wait, please. We are loading contacts."}),e&&(0,m.jsx)(j.Z,{variant:"body1",component:"h3",children:e}),!n&&0===t.length&&(0,m.jsx)(j.Z,{variant:"body1",component:"h3",children:"Oops... No contacts found."}),n||0===t.length?"":(0,m.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"},children:[(0,m.jsx)(C.d,{imgWidth:"50%",imgHeight:"45vh",imgUrl:_,imgCaption:"Contacts"}),(0,m.jsx)(f.Z,{height:"45vh",sx:{overflow:"hidden"},children:(0,m.jsx)(Z,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,m.jsx)(k,{contact:n},n.name)}))})})]})]})};k.propTypes={contact:v().shape({name:v().string.isRequired,number:v().string.isRequired,id:v().string.isRequired}).isRequired};var z=t(346),R=function(){var n=(0,i.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("section",{children:[(0,m.jsx)(j.Z,{variant:"h4",component:"h1",sx:{mb:2},children:"Phonebooth"}),(0,m.jsx)(b,{})]}),(0,m.jsx)("section",{children:(0,m.jsxs)(f.Z,{sx:{p:2,bgcolor:"white",borderRadius:"8px",boxShadow:3},children:[(0,m.jsx)(j.Z,{variant:"h5",component:"h2",sx:{mb:2},children:"Contacts"}),(0,m.jsx)(z.Z,{name:"search",label:"Search Name",type:"text",size:"small",onChange:function(e){return n((0,a.a8)(e.currentTarget.value))},sx:{mb:3,bgcolor:"rgb(239 239 239)"}}),(0,m.jsx)(f.Z,{sx:{minHeight:"45vh",bgcolor:"white",display:"block",borderRadius:"8px"},children:(0,m.jsx)(I,{})})]})})]})}},9145:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall");e.Z=a},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return h},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return x},unsupportedProp:function(){return m},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return y.Z}});var r=t(5902),o=t(4036),i=t(8949).Z,a=t(9201),c=t(3199);var s=function(n,e){return function(){return null}},u=t(9103),l=t(8301),d=t(7602);t(7462);var p=function(n,e){return function(){return null}},h=t(2971).Z,f=t(162),x=t(6248).Z;var m=function(n,e,t,r,o){return null},b=t(8744),g=t(9683),v=t(2071),y=t(3031),Z={configure:function(n){r.Z.configure(n)}}},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},455:function(n,e,t){"use strict";n.exports=t.p+"static/media/cat-01.99e1e65cf457ef0f2ef6.jpg"},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=994.e497f2dd.chunk.js.map