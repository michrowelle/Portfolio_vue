import{_ as p,g as u,u as f,r as m,b as s,l as i,d as e,m as c,t as a,o as r,p as h,j as v}from"./index-DlRc12cj.js";const y=t=>(h("data-v-3183d783"),t=t(),v(),t),w={key:0},g={key:1},b={class:"projects"},T={class:"page"},H={class:"visual"},L={key:0},M=["src"],k={key:1},I=["src"],P={key:2},S=["src"],V=["src"],x={class:"infos"},B={class:"year"},D=["innerHTML"],Y=y(()=>e("br",null,null,-1)),j=["innerHTML"],N={class:"german"},C={class:"english"},E=["innerHTML"],R=["innerHTML"],q={__name:"PortfolioDetailView",setup(t){const{portfolioItems:n}=u(),d=f(),_=m(d.params.id),o=n.value.find(l=>l.id==_.value);return(l,z)=>(r(),s("div",null,[i(o)?(r(),s("div",g,[e("div",b,[e("div",T,[e("div",H,[i(o).iframe?(r(),s("div",L,[e("iframe",{src:i(o).iframe,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,M)])):c("",!0),i(o).iframe2?(r(),s("div",k,[e("iframe",{src:i(o).iframe2,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,I)])):c("",!0),i(o).iframe3?(r(),s("div",P,[e("iframe",{src:i(o).iframe3,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,S)])):c("",!0),e("img",{src:i(o).visuals,alt:"",width:"100%"},null,8,V)]),e("div",x,[e("div",B,a(i(o).year),1),e("div",{class:"team",innerHTML:i(o).team},null,8,D),Y,e("div",{class:"displayed",innerHTML:i(o).displayed},null,8,j),e("div",N,a(i(o).german),1),e("div",C,a(i(o).english),1),e("div",{class:"info1",innerHTML:i(o).info1},null,8,E),e("div",{class:"info2",innerHTML:i(o).info2},null,8,R)])])])])):(r(),s("div",w," portfolio item not found "))]))}},F=p(q,[["__scopeId","data-v-3183d783"]]);export{F as default};
