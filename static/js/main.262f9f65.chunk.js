(this["webpackJsonpimage-map-editor"]=this["webpackJsonpimage-map-editor"]||[]).push([[0],{29:function(n,e,t){},39:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a=t(0),l=t.n(a),s=t(9),d=t.n(s),p=(t(29),t(3)),u=t(4),x=Object(u.a)(c||(c=Object(p.a)(["\n*{\n    box-sizing: border-box;\n}\n\nbody{\n    margin: 0;\n    font-size: 16px;\n}\n"]))),b=t(2),h=t(7),j=t(12),f=t(1),g=Object(a.createContext)({dump:0,imageResizeRatio:1,rects:[],setImageResizeRatio:function(){},setDump:function(){},addRect:function(){},updateRect:function(){},removeRect:function(){}}),m=function(n){var e=n.children,t=Object(a.useState)(1),c=Object(b.a)(t,2),i=c[0],r=c[1],o=Object(a.useState)(0),l=Object(b.a)(o,2),s=l[0],d=l[1],p=Object(a.useState)([]),u=Object(b.a)(p,2),x=u[0],m=u[1];return Object(f.jsx)(g.Provider,{value:{dump:s,imageResizeRatio:i,rects:x,setImageResizeRatio:r,setDump:d,addRect:function(n){m((function(e){return[].concat(Object(j.a)(e),[Object(h.a)(Object(h.a)({},n),{},{id:s})])})),d((function(n){return n+1}))},updateRect:function(n,e){m((function(t){return t.map((function(t){return t.id===n?Object(h.a)(Object(h.a)({},t),e):t}))}))},removeRect:function(n){m((function(e){return e.filter((function(e){return e.id!==n}))}))}},children:e})},O=g,v=t(24),w=function(n){var e=n.num,t=n.rect,c=Object(a.useContext)(O),i=c.updateRect,r=c.removeRect;return Object(f.jsxs)(v.a,{className:"rect",default:t,bounds:"parent",onDragStop:function(n,e){return i(t.id,{x:e.x,y:e.y})},onResizeStop:function(n,e,c,r,o){return i(t.id,{x:o.x,y:o.y,width:c.offsetWidth,height:c.offsetHeight})},children:[Object(f.jsx)("div",{className:"label",children:e+1}),Object(f.jsx)("button",{className:"remove",onClick:function(n){n.preventDefault(),n.stopPropagation(),r(t.id)},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",children:Object(f.jsx)("path",{d:"M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"})})}),Object(f.jsx)("div",{className:"anchors",children:Object(j.a)(Array(8)).map((function(n,e){return Object(f.jsx)("div",{className:"anchor"},e)}))})]})},C=function(n){var e=n.imageUrl,t=Object(a.useContext)(O),c=t.setImageResizeRatio,i=t.rects,r=t.addRect,o=Object(a.useState)(!1),l=Object(b.a)(o,2),s=l[0],d=l[1],p=Object(a.useState)({x:0,y:0}),u=Object(b.a)(p,2),x=u[0],h=u[1],j=Object(a.useState)({x:0,y:0}),g=Object(b.a)(j,2),m=g[0],v=g[1],C=Object(a.useRef)(null);Object(a.useEffect)((function(){var n=new Image;n.src=e,n.onload=function(){C.current&&c(C.current.width/n.width)}}),[C,e,c]);var y=function(){if(s){var n=Math.abs(m.x-x.x),e=Math.abs(m.y-x.y),t=m.x<x.x?m.x:x.x,c=m.y<x.y?m.y:x.y;r({x:t,y:c,width:n,height:e})}};return Object(f.jsxs)("div",{className:"preview",children:[Object(f.jsx)("img",{ref:C,src:e,alt:"UploadedImage",onMouseDown:function(n){var e,t;C.current&&(n.preventDefault(),n.stopPropagation(),d(!0),h({x:n.clientX-(null===(e=C.current)||void 0===e?void 0:e.x),y:n.clientY-(null===(t=C.current)||void 0===t?void 0:t.y)}))},onMouseUp:function(n){n.preventDefault(),n.stopPropagation(),y(),d(!1)},onMouseMove:function(n){var e,t;C.current&&(n.preventDefault(),n.stopPropagation(),v({x:n.clientX-(null===(e=C.current)||void 0===e?void 0:e.x),y:n.clientY-(null===(t=C.current)||void 0===t?void 0:t.y)}))}}),i.map((function(n,e){return Object(f.jsx)(w,{num:e,rect:n},n.id)}))]})},y=u.b.div(i||(i=Object(p.a)(["\n  width: 433px;\n  height: 792px;\n  background-color: #f4f9fa;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n\n  & .bar {\n    width: 100%;\n    height: 56px;\n    position: relative;\n    background-color: #ebf0f3;\n\n    & .circle {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 27px;\n      margin: auto 0;\n      border-radius: 50%;\n      background-color: #d4dadf;\n    }\n  }\n\n  & .mainPanel {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 48px;\n\n    & .upload {\n      width: 355px;\n      height: 156px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border-radius: 8px;\n      border: solid #dadada 2.5px;\n      background-color: white;\n      color: #aaaaaa;\n      row-gap: 8px;\n      transition: all 0.1s ease-in-out;\n\n      &:hover {\n        cursor: pointer;\n        color: #999999;\n        border: solid #aaaaaa 2.5px;\n      }\n\n      & input {\n        display: none;\n      }\n    }\n\n    & .preview {\n      position: relative;\n\n      & img {\n        display: block;\n        width: 355px;\n        border-radius: 8px;\n      }\n\n      & .rect {\n        border: solid #3388ff 2px;\n        background-color: rgba(255, 255, 255, 0.1);\n        position: relative;\n\n        & .label {\n          position: absolute;\n          top: 4px;\n          left: 4px;\n          width: 1.5rem;\n          height: 1.5rem;\n          text-align: center;\n          background-color: rgba(255, 255, 255, 0.5);\n          border-radius: 50%;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n        }\n\n        & .remove {\n          position: absolute;\n          width: 30px;\n          height: 30px;\n          top: -2px;\n          right: -40px;\n          background-color: white;\n          color: #aaaaaa;\n          border: none;\n          border-radius: 5px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n\n          &:hover {\n            cursor: pointer;\n            color: #999999;\n          }\n        }\n\n        & .anchors {\n          & div {\n            width: 6px;\n            height: 6px;\n            background-color: #3388ff;\n            position: absolute;\n          }\n\n          & :nth-child(1) {\n            top: -4px;\n            left: -4px;\n          }\n\n          & :nth-child(2) {\n            top: -4px;\n            left: calc(50% - 3px);\n          }\n\n          & :nth-child(3) {\n            top: -4px;\n            right: -4px;\n          }\n          & :nth-child(4) {\n            top: calc(50% - 3px);\n            left: -4px;\n          }\n\n          & :nth-child(5) {\n            top: calc(50% - 3px);\n            right: -4px;\n          }\n\n          & :nth-child(6) {\n            bottom: -4px;\n            left: -4px;\n          }\n\n          & :nth-child(7) {\n            bottom: -4px;\n            left: calc(50% - 3px);\n          }\n          & :nth-child(8) {\n            bottom: -4px;\n            right: -4px;\n          }\n        }\n      }\n    }\n  }\n"]))),R=function(){var n=Object(a.useState)(""),e=Object(b.a)(n,2),t=e[0],c=e[1];return Object(f.jsxs)(y,{children:[Object(f.jsx)("div",{className:"bar",children:Object(f.jsx)("span",{className:"circle"})}),Object(f.jsx)("div",{className:"mainPanel",children:""===t?Object(f.jsxs)("label",{className:"upload",htmlFor:"imageInput",children:[Object(f.jsx)("input",{id:"imageInput",type:"file",onChange:function(n){var e;(null===(e=n.target)||void 0===e?void 0:e.files)&&(c(URL.createObjectURL(n.target.files[0])),console.log(URL.createObjectURL(n.target.files[0])))},accept:"image/*"}),Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20px",height:"20px",fill:"currentColor",children:Object(f.jsx)("path",{d:"M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"})}),"Upload image"]}):Object(f.jsx)(C,{imageUrl:t})})]})},M=u.b.div(r||(r=Object(p.a)(["\n  width: 548px;\n  height: 703px;\n  padding: 48px;\n  background-color: #2a3948;\n  border-radius: 4px;\n  overflow: auto;\n\n  & pre {\n    color: white;\n    margin: 0;\n  }\n"]))),z=function(){var n=Object(a.useContext)(O),e=n.imageResizeRatio,t=n.rects.map((function(n){return{x:Math.round(n.x/e),y:Math.round(n.y/e),width:Math.round(n.width/e),height:Math.round(n.height/e)}}));return Object(f.jsx)(M,{children:Object(f.jsx)("pre",{children:JSON.stringify(t).replace("[","[\n  ").replaceAll("{","{\n    ").replaceAll("}","\n  }").replaceAll(',"','\n    "').replaceAll("},{","},\n  {").replace("]","\n]")})})},k=u.b.main(o||(o=Object(p.a)(["\n  padding: 2rem 0;\n  display: flex;\n  justify-content: center;\n  column-gap: 135px;\n"])));var S=function(){return Object(f.jsxs)(m,{children:[Object(f.jsx)(x,{}),Object(f.jsxs)(k,{children:[Object(f.jsx)(R,{}),Object(f.jsx)(z,{})]})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),r(n),o(n)}))};d.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),H()}},[[39,1,2]]]);
//# sourceMappingURL=main.262f9f65.chunk.js.map