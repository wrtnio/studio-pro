(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4490],{7869:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tech-specs/marketplace/preface",function(){return a(5800)}])},5800:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return h},default:function(){return m}});var n=a(5893),c=a(2673),r=a(2169),o=a(2069);a(9488);var s=a(2643),i={src:"/studio-pro/_next/static/media/marketplace_schema_index.be549eea.png",height:1464,width:2142,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAbklEQVR4nDWMUQ7CMAxD3S5t7386kFD5gHGJKYnxOk35iJU8v/KeH0Y6xtiQSUQEat1A5T4ay/PxIhmwdgFkomiU0JqAff/yOGI1iNTRFpgZ6L2zzDnpfgOUvgLa0gpehh/DHbKqlTCz9TwtyvwD2kRULJb+jHwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},d=a(8757);let h=[{depth:2,value:"OpenAPI Marketplace",id:"openapi-marketplace"},{depth:2,value:"Marketplace Schema",id:"marketplace-schema"},{depth:2,value:"Pricing Model",id:"pricing-model"},{depth:2,value:"Application Creator",id:"application-creator"},{depth:2,value:"Example Projects",id:"example-projects"}];function p(e){let t=Object.assign({h2:"h2",p:"p",a:"a",img:"img",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul",li:"li"},(0,s.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"openapi-marketplace",children:"OpenAPI Marketplace"}),"\n",(0,n.jsx)(d.G,{chart:'flowchart\n  subgraph "OpenAPI Specification"\n    v20(Swagger v2.0) --upgrades--> emended[["OpenAPI v3.1 (emended)"]]\n    v30(OpenAPI v3.0) --upgrades--> emended\n    v31(OpenAPI v3.1) --emends--> emended\n  end\n  subgraph "Ecosystem"\n    emended --normalizes--> migration[["Migration Schema"]]\n    migration --downgrades--> lfc{{"LLM Function Calling Schema"}}\n    migration --metadata--> compiler{{"Workflow Compiler"}}\n    emended --sales--> marketplace{{"<b><u>API Marketplace</u></b>"}}\n  end\n  subgraph "Artificial Intelligence"\n    lfc --executor--> meta[("Meta LLM (A.I. Chatbot)")]\n    compiler --provider--> meta\n    marketplace -.supplier.-> meta\n    meta --storyline--> swl(["SWL Language"])\n    swl --compiles--> program[/"Re-usable Workflow Program"\\]\n  end'}),"\n",(0,n.jsx)(t.p,{children:"Marketplace of OpenAPI documents for Meta LLM."}),"\n",(0,n.jsxs)(t.p,{children:['"Wrtn Studio Pro" operates an "OpenAPI Marketplace" to provide ',(0,n.jsx)(t.a,{href:"/tech-specs/openapi/preface",children:"OpenAPI documents"})," for the ",(0,n.jsx)(t.a,{href:"/tech-specs/meta/preface",children:'"Meta LLM (A.I. Chatbot)"'}),' from the market. Participants of the "OpenAPI Marketplace" can trade the OpenAPI document, so that customers can obtain functions to call by LLM (Large Language Model). And the providers can earn money by selling the OpenAPI documents.']}),"\n",(0,n.jsxs)(t.p,{children:['For reference, when seller uploads an OpenAPI document, "Wrtn Studio Pro" converts it to the ',(0,n.jsx)(t.a,{href:"/tech-specs/openapi/preface",children:"OpenAPI v3.1 (emended) format"}),". It is to unify the OpenAPI document to the latest version, and make the specification more concise by emendation. The emended OpenAPI v3.1 document would be utilized for ",(0,n.jsx)(t.a,{href:"/tech-specs/meta/preface",children:"LLM function calling"})," bypass the ",(0,n.jsx)(t.a,{href:"/tech-specs/meta/migrate",children:"migration process"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"marketplace-schema",children:"Marketplace Schema"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Marketplace Schema Index",placeholder:"blur",src:i})}),"\n",(0,n.jsx)(t.p,{children:"Descrition of the marketplace schema."}),"\n",(0,n.jsx)(t.p,{children:"Here is the summary of some entities written in the marketplace schema chapter."}),"\n",(0,n.jsxs)(t.p,{children:["The schema of marketplace sale has defined SKU (Stock Keepting Unit) structured OpenAPI produces. It starts from the ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sales",children:(0,n.jsx)(t.code,{children:"hub_sales"})})," (or ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshots",children:(0,n.jsx)(t.code,{children:"hub_sale_snapshots"})}),") entity, and its final goal is to reaching to the target ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stocks",children:(0,n.jsx)(t.code,{children:"stock"})})," by configuring each ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_option_candidates",children:(0,n.jsx)(t.code,{children:"candidate value"})})," for each ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_options",children:(0,n.jsx)(t.code,{children:"option"})})," of each ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_units",children:(0,n.jsx)(t.code,{children:"unit"})}),". After reaching to the target ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stocks",children:(0,n.jsx)(t.code,{children:"stock"})})," record, the customer may purchase the product with ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stock_prices",children:(0,n.jsx)(t.code,{children:"price model"})})," specification."]}),"\n",(0,n.jsxs)(t.p,{children:["When customer wants to buy a sale from the marketplace, he or she may specify the stocks from the sale and put them into the cart as a ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_cart_commodities",children:(0,n.jsx)(t.code,{children:"commodity"})}),". After that, customer can proceed the ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_orders",children:(0,n.jsx)(t.code,{children:"order"})})," from the prepared cart. When the cart is submitted as an order, its children commodities are changed to ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_order_goods",children:(0,n.jsx)(t.code,{children:"goods"})}),". When customer wants to complete the order as a formal contract, the order be ",(0,n.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_order_good_publishes",children:(0,n.jsx)(t.code,{children:"published"})}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"pricing-model",children:"Pricing Model"}),"\n",(0,n.jsx)(t.p,{children:"Step pricing model with fixed/variable const combinations."}),"\n",(0,n.jsx)(t.p,{children:'"Wrtn Studio Pro" has adopted step pricing model for the marketplace with fixed/variable cost combinations.'}),"\n",(0,n.jsx)(t.p,{children:"It means that there are many fixed and variable combinated costs into a product (especially into a stock). For example, let's imagine that there is a stock that has 4 steps of pricing model as below. As you can see, if you pay $500 fixed cost, you can call 100 times of the API without any additional cost. However, if the number of API calls overs the 100, you should pay $10 per a call for the rest."}),"\n",(0,n.jsx)(t.p,{children:'Such stepping but fixed/variable separated pricing model is what "Wrtn Stdio Pro" has adopted. Also, the fixed and variable costs are inversely proportional. If a customer selects a higher fixed cost, the variable cost will be lower. Otherwise a customer selects a lower fixed cost, the variable cost would be higher. Of course, the quantity that can be used without additional charges is proportional to the fixed cost.'}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No"}),(0,n.jsx)(t.th,{children:"Fixed Cost"}),(0,n.jsx)(t.th,{children:"Variable cost"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"$500 for 100 calls"}),(0,n.jsx)(t.td,{children:"$10 per a call for the rest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"$1,000 for 250 calls"}),(0,n.jsx)(t.td,{children:"$5 per a call for the rest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"$1,500 for 600 calls"}),(0,n.jsx)(t.td,{children:"$2 per a call for the rest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"$2,000 for 900 calls"}),(0,n.jsx)(t.td,{children:"$1 per a call for the rest"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"application-creator",children:"Application Creator"}),"\n",(0,n.jsx)("img",{src:"../../../images/tech-specs/marketplace_application_creator_gear.png",alt:"Ecosystem Gear Diagram",width:"720px"}),"\n",(0,n.jsx)(t.p,{children:"Make A.I. Chatbot superfast from the API marketplace."}),"\n",(0,n.jsx)(t.p,{children:'"Wrtn Studio Pro" provides an Application Creator, which can make a custom A.I. Chatbot performing the LLM function calling that is obtained by the API Marketplace. The A.I. Chatbot can be embedded to the user\'s website or application, so that it is the superfast way to make an A.I. Chatbot.'}),"\n",(0,n.jsx)(t.p,{children:'This is the agenda of the "Application Creator":'}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The days of creating full page applications that took a long time and effort are over. It's the age of A.I. Chatbot. When user inputs a conversation to an A.I. Chatbot, A.I. Chatbot will do everything."}),"\n",(0,n.jsx)(t.p,{children:'And if you come to our "Wrtn Studio Pro", you can create that A.I. Chatbot with just a few mouse clicks. Visit our API Marketplace, select the features you want, and click the "Launch my A.I. App" button. An A.I. Chatbot Application that can be ported immediately will be created.'}),"\n",(0,n.jsx)(t.p,{children:'Through "Application Creator" of "Wrtn Studio Pro", you can turn your business into a product and launch it faster than anyone else. We will make your bright idea come true right now.'}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-projects",children:"Example Projects"}),"\n",(0,n.jsx)(t.p,{children:'"Wrtn Studio Pro" provides some example OpenAPI projects/products.'}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"connector"}),' is an example project made by "Wrtn Studio Pro" team. It is a representative and default OpenAPI product in the marketplace. If a new customer has not purchased anything in the API marketplace, only the ',(0,n.jsx)(t.code,{children:"connector"})," belonged API functions would be utilized in the ",(0,n.jsx)(t.a,{href:"/tech-specs/meta/llm",children:'"Meta LLM (A.I. Chatbot)"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Also, the ",(0,n.jsx)(t.code,{children:"connector"})," is a good example to learn how to make a well-structured OpenAPI based project disclosured in the Github repository with open source license. The ",(0,n.jsx)(t.code,{children:"connector"})," has been  developed with NestJS framework, and its Restful API functions are always 100% synchronized with the OpenAPI document without any type error."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Github Repository: ",(0,n.jsx)(t.a,{href:"https://github.com/wrtnio/connectors",children:"https://github.com/wrtnio/connectors"})]}),"\n",(0,n.jsxs)(t.li,{children:["Swagger UI: ",(0,n.jsx)(t.a,{href:"https://wrtnio.github.io/connectors/swagger/",children:"https://wrtnio.github.io/connectors/swagger/"})]}),"\n"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/tech-specs/marketplace/preface.mdx",route:"/tech-specs/marketplace/preface",timestamp:1730343707e3,pageMap:[{kind:"Meta",data:{index:{title:"Project Outline",type:"page",hidden:!0,display:"hidden"},docs:{title:"\uD83D\uDCD6 Guide Documentation",type:"page",layout:"raw"},"tech-specs":{title:"\uD83D\uDEE0️ Technical Specifications",type:"page"}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{"-- features":{type:"separator",title:"\uD83D\uDCD6 Introduction"},index:"Overview","core-elements":"Core Elements","getting-started":"Getting Started","use-cases":"Use Cases"}},{kind:"MdxPage",name:"core-elements",route:"/docs/core-elements"},{kind:"MdxPage",name:"getting-started",route:"/docs/getting-started"},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"MdxPage",name:"use-cases",route:"/docs/use-cases"}]},{kind:"Folder",name:"tech-specs",route:"/tech-specs",children:[{kind:"Meta",data:{index:"Outline",openapi:"OpenAPI Specification",meta:"Meta LLM (A.I. Chatbot)",marketplace:"API Marketplace",workflow:"Workflow Engine",swl:"SWL Language",appendix:"Appendix"}},{kind:"Folder",name:"appendix",route:"/tech-specs/appendix",children:[{kind:"Meta",data:{api:{title:"⇲ API Documents",href:"/studio-pro/api/",newWindow:!0},swagger:{title:"⇲ Swagger UI",href:"/studio-pro/swagger/",newWindow:!0}}}]},{kind:"MdxPage",name:"index",route:"/tech-specs"},{kind:"Folder",name:"marketplace",route:"/tech-specs/marketplace",children:[{kind:"Meta",data:{preface:"Preface",schema:"Marketplace Schema",price:"Pricing Model",application:"Application Creator",examples:"Example Projects"}},{kind:"MdxPage",name:"application",route:"/tech-specs/marketplace/application"},{kind:"MdxPage",name:"examples",route:"/tech-specs/marketplace/examples"},{kind:"MdxPage",name:"preface",route:"/tech-specs/marketplace/preface"},{kind:"MdxPage",name:"price",route:"/tech-specs/marketplace/price"},{kind:"MdxPage",name:"schema",route:"/tech-specs/marketplace/schema"}]},{kind:"Folder",name:"meta",route:"/tech-specs/meta",children:[{kind:"Meta",data:{preface:"Preface",migrate:"Migration Schema",schema:"LLM Function Schema",websocket:"WebSocket RPC",execution:"Function Call Execution"}},{kind:"MdxPage",name:"execution",route:"/tech-specs/meta/execution"},{kind:"MdxPage",name:"migrate",route:"/tech-specs/meta/migrate"},{kind:"MdxPage",name:"preface",route:"/tech-specs/meta/preface"},{kind:"MdxPage",name:"schema",route:"/tech-specs/meta/schema"},{kind:"MdxPage",name:"websocket",route:"/tech-specs/meta/websocket"}]},{kind:"Folder",name:"openapi",route:"/tech-specs/openapi",children:[{kind:"Meta",data:{preface:"Preface",json:"JSON Schema",document:"Document Schema",plugin:"Plugin Properties",convert:"How to convert"}},{kind:"MdxPage",name:"convert",route:"/tech-specs/openapi/convert"},{kind:"MdxPage",name:"document",route:"/tech-specs/openapi/document"},{kind:"MdxPage",name:"json",route:"/tech-specs/openapi/json"},{kind:"MdxPage",name:"plugin",route:"/tech-specs/openapi/plugin"},{kind:"MdxPage",name:"preface",route:"/tech-specs/openapi/preface"}]},{kind:"Folder",name:"swl",route:"/tech-specs/swl",children:[{kind:"Meta",data:{preface:"Preface"}},{kind:"MdxPage",name:"preface",route:"/tech-specs/swl/preface"}]},{kind:"Folder",name:"workflow",route:"/tech-specs/workflow",children:[{kind:"Meta",data:{preface:"Preface",schema:"Workflow Schema",backend:"Compiler Backend",editor:"Workflow Editor",inspector:"JSON Schema Renderer"}},{kind:"MdxPage",name:"backend",route:"/tech-specs/workflow/backend"},{kind:"MdxPage",name:"editor",route:"/tech-specs/workflow/editor"},{kind:"MdxPage",name:"inspector",route:"/tech-specs/workflow/inspector"},{kind:"MdxPage",name:"preface",route:"/tech-specs/workflow/preface"},{kind:"MdxPage",name:"schema",route:"/tech-specs/workflow/schema"}]}]}],flexsearch:{codeblocks:!0},title:"Preface",headings:h},pageNextRoute:"/tech-specs/marketplace/preface",nextraLayout:r.ZP,themeConfig:o.Z};var m=(0,c.j)(l)},2069:function(e,t,a){"use strict";var n=a(5893);a(7294),t.Z={logo:()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/studio-pro/favicon/android-chrome-180x180.png",width:32,height:32}),(0,n.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.2rem",paddingLeft:10,paddingRight:10},children:"Studio Pro"})]}),footer:{text:()=>(0,n.jsxs)("span",{children:["Made by"," ",(0,n.jsx)("a",{href:"https://wrtn.ai",target:"_blank",style:{color:"blue"},children:(0,n.jsx)("u",{children:" Wrtn Technologies "})})]})},docsRepositoryBase:"https://github.com/wrtnio/studio-pro",useNextSeoProps:()=>({defaultTitle:"Studio Documents",titleTemplate:"Studio Documents - %s",additionalLinkTags:[{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"},{rel:"manifest",href:"/favicon/site.webmanifest"},...[16,32].map(e=>({rel:"icon",type:"image/png",sizes:"".concat(e,"x").concat(e),href:"/favicon/favicon-".concat(e,"x").concat(e,".png")}))],additionalMetaTags:[{property:"og:image",content:"https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg"},{property:"og:type",content:"website"},{property:"og:title",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:description",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:site_name",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:url",content:"https://wrtn.ai/studio"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:"https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg"},{name:"twitter:title",content:"Wrtn Technologies Studio Pro Documents"},{name:"twitter:description",content:"Wrtn Technologies Studio Pro Documents"}]})}},5789:function(){}},function(e){e.O(0,[5083,7942,9856,2888,9774,179],function(){return e(e.s=7869)}),_N_E=e.O()}]);