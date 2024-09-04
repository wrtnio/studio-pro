(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9830],{1108:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tech-specs/marketplace/price",function(){return n(6573)}])},6573:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var s=n(5893),a=n(2673),o=n(2169),i=n(2069);n(9488);var r=n(2643),c=n(8757);let d=[{depth:2,value:"Step Pricing Model",id:"step-pricing-model"},{depth:2,value:"Price on the Stock",id:"price-on-the-stock"},{depth:2,value:"Predication",id:"predication"}];function l(e){let t=Object.assign({h2:"h2",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",strong:"strong",blockquote:"blockquote",code:"code",ul:"ul",li:"li"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"step-pricing-model",children:"Step Pricing Model"}),"\n",(0,s.jsx)(t.p,{children:"Step pricing model with fixed/variable const combinations."}),"\n",(0,s.jsx)(t.p,{children:'"Wrtn Studio Pro" has adopted step pricing model for the marketplace with fixed/variable cost combinations.'}),"\n",(0,s.jsx)(t.p,{children:"It means that there are many fixed and variable combinated costs into a product (especially into a stock). For example, let's imagine that there is a stock that has 4 steps of pricing model as below. As you can see, if you pay $500 fixed cost, you can call 100 times of the API without any additional cost. However, if the number of API calls overs the 100, you should pay $10 per a call for the rest."}),"\n",(0,s.jsx)(t.p,{children:'Such stepping but fixed/variable separated pricing model is what "Wrtn Stdio Pro" has adopted. Also, the fixed and variable costs are inversely proportional. If a customer selects a higher fixed cost, the variable cost will be lower. Otherwise a customer selects a lower fixed cost, the variable cost would be higher. Of course, the quantity that can be used without additional charges is proportional to the fixed cost.'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"No"}),(0,s.jsx)(t.th,{children:"Fixed Cost"}),(0,s.jsx)(t.th,{children:"Variable cost"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"$500 for 100 calls"}),(0,s.jsx)(t.td,{children:"$10 per a call for the rest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"$1,000 for 250 calls"}),(0,s.jsx)(t.td,{children:"$5 per a call for the rest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"$1,500 for 600 calls"}),(0,s.jsx)(t.td,{children:"$2 per a call for the rest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"$2,000 for 900 calls"}),(0,s.jsx)(t.td,{children:"$1 per a call for the rest"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"price-on-the-stock",children:"Price on the Stock"}),"\n",(0,s.jsx)(c.G,{chart:'erDiagram\n"hub_sales" {\n  String id PK\n  String hub_section_id FK\n  String hub_customer_id FK\n  DateTime created_at\n  DateTime opened_at "nullable"\n  DateTime closed_at "nullable"\n  DateTime paused_at "nullable"\n  DateTime suspended_at "nullable"\n}\n"hub_sale_snapshots" {\n  String id PK\n  String hub_sale_id FK\n  String version\n  String version_description\n  DateTime created_at\n  DateTime activated_at "nullable"\n  DateTime expired_at "nullable"\n}\n"hub_sale_snapshot_units" {\n  String id PK\n  String hub_sale_snapshot_id FK\n  String studio_repository_release_id FK "nullable"\n  String parent_id "nullable"\n  String name\n  String host_real\n  String host_dev "nullable"\n  Json swagger\n  Boolean primary\n  Boolean required\n  Int sequence\n}\n"hub_sale_snapshot_unit_options" {\n  String id PK\n  String hub_sale_snapshot_unit_id FK\n  String name\n  String type\n  Boolean variable\n  Int sequence\n}\n"hub_sale_snapshot_unit_option_candidates" {\n  String id PK\n  String hub_sale_snapshot_unit_option_id FK\n  String name\n  Int sequence\n}\n"hub_sale_snapshot_unit_stocks" {\n  String id PK\n  String hub_sale_snapshot_unit_id FK\n  String name\n  Int sequence\n}\n"hub_sale_snapshot_unit_stock_choices" {\n  String id PK\n  String hub_sale_snapshot_unit_stock_id FK\n  String hub_sale_snapshot_unit_option_candidate_id FK\n  Int sequence\n}\n"hub_sale_snapshot_unit_stock_prices" {\n  String id PK\n  String hub_sale_snapshot_unit_stock_id FK\n  Int threshold\n  Float fixed\n  Float variable\n}\n"hub_sale_snapshot_contents" {\n  String id PK\n  String hub_sale_snapshot_id FK\n  String title\n  String summary "nullable"\n  String format\n  String body\n}\n"hub_sale_snapshots" }|--|| "hub_sales" : sale\n"hub_sale_snapshot_units" }|--|| "hub_sale_snapshots" : snapshot\n"hub_sale_snapshot_unit_options" }o--|| "hub_sale_snapshot_units" : unit\n"hub_sale_snapshot_unit_option_candidates" }o--|| "hub_sale_snapshot_unit_options" : option\n"hub_sale_snapshot_unit_stocks" }|--|| "hub_sale_snapshot_units" : unit\n"hub_sale_snapshot_unit_stock_choices" }o--|| "hub_sale_snapshot_unit_stocks" : stock\n"hub_sale_snapshot_unit_stock_choices" }o--|| "hub_sale_snapshot_unit_option_candidates" : candidate\n"hub_sale_snapshot_unit_stock_prices" }|--|| "hub_sale_snapshot_unit_stocks" : stock\n"hub_sale_snapshot_contents" |o--|| "hub_sale_snapshots" : snapshot'}),"\n",(0,s.jsx)(t.p,{children:"The stepping pricing model is defined in the stock level."}),"\n",(0,s.jsxs)(t.p,{children:['Do you remember? "API Marketplace" supports the SKU (Stock Keeping Unit) concept, so that the final good to purchase by the customer is the stock. Here is the concept of the stock in the "API Marketplace". If you have not read the previous ',(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema",children:(0,s.jsx)(t.strong,{children:"Marketplace Schema"})})," chapter or have forgotten it, read the below summarized paragraph."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["As you can see, the schema of the marketplace starts from the ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#sales",children:(0,s.jsx)(t.strong,{children:"Marketplace Schema > Sales"})})," section. In the ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#sales",children:(0,s.jsx)(t.strong,{children:"Marketplace Schema > Sales"})})," section, it has defined SKU (Stock Keeping Unit) structured OpenAPI products. It starts from the ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sales",children:(0,s.jsx)(t.code,{children:"hub_sales"})})," (or ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshots",children:(0,s.jsx)(t.code,{children:"hub_sale_snapshots"})}),") entity, and its final goal is to reaching to the target ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stocks",children:(0,s.jsx)(t.code,{children:"stock"})})," by configuring each ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_option_candidates",children:(0,s.jsx)(t.code,{children:"candidate value"})})," for each ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_options",children:(0,s.jsx)(t.code,{children:"option"})})," of each ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_units",children:(0,s.jsx)(t.code,{children:"unit"})}),". After reaching to the target ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stocks",children:(0,s.jsx)(t.code,{children:"stock"})})," record, the customer may purchase the product with ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stock_prices",children:(0,s.jsx)(t.code,{children:"price model"})})," specification."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Also, the stepping pricing model is defined in the stock level. It means that a ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_units",children:"sale unit"})," can have multiple stepping pricing models per each ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stocks",children:(0,s.jsx)(t.code,{children:"stock"})}),". Each ",(0,s.jsx)(t.a,{href:"/tech-specs/marketplace/schema/#hub_sale_snapshot_unit_stocks",children:(0,s.jsx)(t.code,{children:"stock"})})," can have different pricing models, even though they are in the same sale unit with the same OpenAPI document."]}),"\n",(0,s.jsx)(t.p,{children:"The represenative example case of multiple stocks in a sale unit (in a same OpenAPI document) is the different device environments. Let's imagine that there is a sale unit that has (CPU, GPU, RAM) options like below. Every customeres who has purchased the sale unit may have the same API specification, but the price of the API call must be different according to the device environments."}),"\n",(0,s.jsx)(t.p,{children:'High-end stock buyers pay more, that\'s the pricing model of the "API Marketplace".'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"CPU: (i5, i7, i9)"}),"\n",(0,s.jsx)(t.li,{children:"GPU: (GTX 2050, GTX 3060, GTX 4070)"}),"\n",(0,s.jsx)(t.li,{children:"RAM: (8GB, 16GB, 32GB)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"predication",children:"Predication"}),"\n",(0,s.jsx)(c.G,{chart:'flowchart\n  client["Client (API buyer)"]--requests-->proxy["Marketplace Proxy"]\n  proxy--intermediates-->server["Server (API seller)"]\n  server--responses-->proxy\n  proxy--intermediates-->client'}),"\n",(0,s.jsx)(t.p,{children:"Only 2xx status codes are valid and will be payed."}),"\n",(0,s.jsx)(t.p,{children:"When a seller uploads an OpenAPI product, and customer buys it and calls the API, the marketplace proxy server intermediates the request and response between the client and the server. In the intermediation process, the proxy server checks the status code of the response."}),"\n",(0,s.jsx)(t.p,{children:"If the status code is not 2xx, the proxy server will not count the API call and will not charge from the customer. Only the 2xx status code responses are valid and will be payed. By the way, do not abuse the 2xx status code. If a seller abuses the 2xx status code even when the actual error case, the seller will be punished by the marketplace."})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/tech-specs/marketplace/price.mdx",route:"/tech-specs/marketplace/price",timestamp:1725254185e3,pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"marketplace",route:"/docs/marketplace",children:[{kind:"MdxPage",name:"application",route:"/docs/marketplace/application"},{kind:"MdxPage",name:"community",route:"/docs/marketplace/community"},{kind:"MdxPage",name:"concepts",route:"/docs/marketplace/concepts"},{kind:"MdxPage",name:"purchase",route:"/docs/marketplace/purchase"},{kind:"MdxPage",name:"seller",route:"/docs/marketplace/seller"},{kind:"Meta",data:{concepts:"Market Concepts",purchase:"How to Purchase",application:"Application Creator",seller:"Participate as a Seller",community:"Market Community"}}]},{kind:"Folder",name:"membership",route:"/docs/membership",children:[{kind:"MdxPage",name:"account",route:"/docs/membership/account"},{kind:"MdxPage",name:"enterprise",route:"/docs/membership/enterprise"},{kind:"MdxPage",name:"join",route:"/docs/membership/join"},{kind:"MdxPage",name:"seller",route:"/docs/membership/seller"},{kind:"Meta",data:{join:"Membership Joining",account:"Personal Account",enterprise:"Enterprise Accont",seller:"Marketplace Seller"}}]},{kind:"Folder",name:"repository",route:"/docs/repository",children:[{kind:"MdxPage",name:"bucket",route:"/docs/repository/bucket"},{kind:"MdxPage",name:"concepts",route:"/docs/repository/concepts"},{kind:"MdxPage",name:"release",route:"/docs/repository/release"},{kind:"MdxPage",name:"settings",route:"/docs/repository/settings"},{kind:"Meta",data:{concepts:"Repository Concepts",bucket:"Repository File Tree",release:"Repository Release",settings:"Repository Settings"}}]},{kind:"Folder",name:"workflow",route:"/docs/workflow",children:[{kind:"MdxPage",name:"concepts",route:"/docs/workflow/concepts"},{kind:"MdxPage",name:"editor",route:"/docs/workflow/editor"},{kind:"MdxPage",name:"examples",route:"/docs/workflow/examples"},{kind:"MdxPage",name:"execution",route:"/docs/workflow/execution"},{kind:"Meta",data:{concepts:"Workflow Concepts",editor:"Workflow Editor",execution:"Workflow Execution",examples:"Learn from Examples"}}]},{kind:"Meta",data:{index:"\uD83D\uDE4B\uD83C\uDFFB‍♂️ Introduction","-- features":{type:"separator",title:"\uD83D\uDCD6 Features"},membership:"Membership",meta:"Meta LLM (A.I. Chat)",marketplace:"API Marketplace",workflow:"Workflow",repository:"Repository","-- appendix":{type:"separator",title:"\uD83D\uDD17 Appendix"}}}]},{kind:"Folder",name:"tech-specs",route:"/tech-specs",children:[{kind:"Folder",name:"appendix",route:"/tech-specs/appendix",children:[{kind:"Meta",data:{api:{title:"⇲ API Documents",href:"/studio-pro/api/",newWindow:!0},swagger:{title:"⇲ Swagger UI",href:"/studio-pro/swagger/",newWindow:!0}}}]},{kind:"MdxPage",name:"index",route:"/tech-specs"},{kind:"Folder",name:"marketplace",route:"/tech-specs/marketplace",children:[{kind:"MdxPage",name:"application",route:"/tech-specs/marketplace/application"},{kind:"MdxPage",name:"examples",route:"/tech-specs/marketplace/examples"},{kind:"MdxPage",name:"preface",route:"/tech-specs/marketplace/preface"},{kind:"MdxPage",name:"price",route:"/tech-specs/marketplace/price"},{kind:"MdxPage",name:"schema",route:"/tech-specs/marketplace/schema"},{kind:"Meta",data:{preface:"Preface",schema:"Marketplace Schema",price:"Pricing Model",application:"Application Creator",examples:"Example Projects"}}]},{kind:"Folder",name:"meta",route:"/tech-specs/meta",children:[{kind:"MdxPage",name:"execution",route:"/tech-specs/meta/execution"},{kind:"MdxPage",name:"migrate",route:"/tech-specs/meta/migrate"},{kind:"MdxPage",name:"preface",route:"/tech-specs/meta/preface"},{kind:"MdxPage",name:"schema",route:"/tech-specs/meta/schema"},{kind:"MdxPage",name:"websocket",route:"/tech-specs/meta/websocket"},{kind:"Meta",data:{preface:"Preface",migrate:"Migration Schema",schema:"LLM Function Schema",websocket:"WebSocket RPC",execution:"Function Call Execution"}}]},{kind:"Folder",name:"openapi",route:"/tech-specs/openapi",children:[{kind:"MdxPage",name:"convert",route:"/tech-specs/openapi/convert"},{kind:"MdxPage",name:"document",route:"/tech-specs/openapi/document"},{kind:"MdxPage",name:"json",route:"/tech-specs/openapi/json"},{kind:"MdxPage",name:"plugin",route:"/tech-specs/openapi/plugin"},{kind:"MdxPage",name:"preface",route:"/tech-specs/openapi/preface"},{kind:"Meta",data:{preface:"Preface",json:"JSON Schema",document:"Document Schema",plugin:"Plugin Properties",convert:"How to convert"}}]},{kind:"Folder",name:"swl",route:"/tech-specs/swl",children:[{kind:"MdxPage",name:"preface",route:"/tech-specs/swl/preface"},{kind:"Meta",data:{preface:"Preface"}}]},{kind:"Folder",name:"workflow",route:"/tech-specs/workflow",children:[{kind:"MdxPage",name:"backend",route:"/tech-specs/workflow/backend"},{kind:"MdxPage",name:"editor",route:"/tech-specs/workflow/editor"},{kind:"MdxPage",name:"inspector",route:"/tech-specs/workflow/inspector"},{kind:"MdxPage",name:"preface",route:"/tech-specs/workflow/preface"},{kind:"MdxPage",name:"schema",route:"/tech-specs/workflow/schema"},{kind:"Meta",data:{preface:"Preface",schema:"Workflow Schema",backend:"Compiler Backend",editor:"Workflow Editor",inspector:"JSON Schema Renderer"}}]},{kind:"Meta",data:{index:"Outline",openapi:"OpenAPI Specification",meta:"Meta LLM (A.I. Chatbot)",marketplace:"API Marketplace",workflow:"Workflow Engine",swl:"SWL Language",appendix:"Appendix"}}]},{kind:"Meta",data:{index:{title:"Project Outline",type:"page",hidden:!0,display:"hidden"},docs:{title:"\uD83D\uDCD6 Guide Documents",type:"page"},"tech-specs":{title:"\uD83D\uDEE0️ Technical Specifications",type:"page"}}}],flexsearch:{codeblocks:!0},title:"Price",headings:d},pageNextRoute:"/tech-specs/marketplace/price",nextraLayout:o.ZP,themeConfig:i.Z};t.default=(0,a.j)(h)},2069:function(e,t,n){"use strict";var s=n(5893);n(7294),t.Z={logo:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/studio-pro/favicon/android-chrome-180x180.png",width:32,height:32}),(0,s.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.2rem",paddingLeft:10,paddingRight:10},children:"Wrtn Technologies"}),(0,s.jsx)("span",{children:"Studio Pro Documents"})]}),footer:{text:()=>(0,s.jsxs)("span",{children:["Made by"," ",(0,s.jsx)("a",{href:"https://wrtn.ai",target:"_blank",style:{color:"blue"},children:(0,s.jsx)("u",{children:" Wrtn Technologies "})})]})},docsRepositoryBase:"https://github.com/wrtnio/studio-pro",useNextSeoProps:()=>({defaultTitle:"Studio Documents",titleTemplate:"Studio Documents - %s",additionalLinkTags:[{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"},{rel:"manifest",href:"/favicon/site.webmanifest"},...[16,32].map(e=>({rel:"icon",type:"image/png",sizes:"".concat(e,"x").concat(e),href:"/favicon/favicon-".concat(e,"x").concat(e,".png")}))],additionalMetaTags:[{property:"og:image",content:"https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg"},{property:"og:type",content:"website"},{property:"og:title",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:description",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:site_name",content:"Wrtn Technologies Studio Pro Documents"},{property:"og:url",content:"https://wrtn.ai/studio"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:"https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg"},{name:"twitter:title",content:"Wrtn Technologies Studio Pro Documents"},{name:"twitter:description",content:"Wrtn Technologies Studio Pro Documents"}]})}},5789:function(){}},function(e){e.O(0,[5083,7942,9856,2888,9774,179],function(){return e(e.s=1108)}),_N_E=e.O()}]);