"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[706],{237:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return c}});var s=a(7462),i=a(3366),o=(a(7294),a(3905)),r=(a(1839),["components"]),n={sidebar_position:9},d="Data Space Business Models",l={unversionedId:"whitepaper/ds-business-models",id:"whitepaper/ds-business-models",title:"Data Space Business Models",description:"How to price data, services & knowledge?",source:"@site/docs/whitepaper/ds-business-models.md",sourceDirName:"whitepaper",slug:"/whitepaper/ds-business-models",permalink:"/docs/whitepaper/ds-business-models",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/ds-business-models.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"whitepaperSidebar",previous:{title:"Token Model",permalink:"/docs/whitepaper/token-model"},next:{title:"Tokenomics",permalink:"/docs/whitepaper/tokenomics"}},p={},c=[{value:"How to price data, services &amp; knowledge?",id:"how-to-price-data-services--knowledge",level:2},{value:"Introducing: business model templates",id:"introducing-business-model-templates",level:2},{value:"Generic templates description",id:"generic-templates-description",level:2},{value:"Service-based pricing template",id:"service-based-pricing-template",level:3},{value:"Overview",id:"overview",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Data-based pricing template",id:"data-based-pricing-template",level:3},{value:"Parameters",id:"parameters-1",level:4}],h={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-space-business-models"},"Data Space Business Models"),(0,o.kt)("h2",{id:"how-to-price-data-services--knowledge"},"How to price data, services & knowledge?"),(0,o.kt)("p",null,"There is no unique way to price data, services & knowledge. Today, the vast majority of transactions around data happen at a fixed price posted upfront or through long negotiations. These approaches work for now but are very inefficient."),(0,o.kt)("p",null,"These pricing models are usually opaque and its hard to compare datasets with each other, which benefits few large players who have an overview of the data market. The fixed price model also benefits larger players who can derive more value from data than a smaller player due to economies of scale (more data) and economies of scope (more variety of data). Finally, negotiations are very inneficient and create a lot of friction that prevents the data market to be scalable."),(0,o.kt)("p",null,"We envision a world where data (proprietary or not) is readily available for data applications, where knowledge can flow seamlessly from data provider to knowledge consumer. Given the issues mentioned above, it's fair to say that we need new mechanisms for the data economy."),(0,o.kt)("p",null,"At OKP4, we propose generic templates, for both the data sharing and marketplace models, which allow the implementation of different business model templates based on user requirements."),(0,o.kt)("h2",{id:"introducing-business-model-templates"},"Introducing: business model templates"),(0,o.kt)("p",null,"Different data sharing business models can be implemented using generic templates proposed by OKP4. These generic templates are fully customizable according to users needs such as: depth of (non)operating workflow of services considered for rewarding data providers, the importance of datasets for new data creation, the pricing algorithms of the data marketplaces, etc."),(0,o.kt)("h2",{id:"generic-templates-description"},"Generic templates description"),(0,o.kt)("h3",{id:"service-based-pricing-template"},"Service-based pricing template"),(0,o.kt)("h4",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A general and sensible approach to data pricing can be based on the cost of executing the workflow involving the services operating on shared data to create the desired knowledge. Value generated from the knowledge can then be shared among all the providers (data, algo...) involved in the processing."),(0,o.kt)("p",null,"The generic template for service-based pricing considers that the value associated to the new created knowledge is a consequence of the different workflows of services which operate, or happened to operate, on shared data. Therefore, the value of the created knowledge is a function of the cost of executing these workflows. The rewards of the service providers are based on the considered importance (weights) of their shared datasets in these workflows."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This template has the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An offset (","\u03be"," > 0), which allows the computation of the knowledge value, i.e created dataset value, as a function of the cost of the associated workflow of services operating on shared datasets"),(0,o.kt)("li",{parentName:"ul"},"Weights (","\u03b1",(0,o.kt)("sub",null,"in")," >=0), which characterize the importance of each shared dataset in the workflows of services linked to the created dataset"),(0,o.kt)("li",{parentName:"ul"},"A last rewarded rank (N >=0), which allows the computation of rewards for data providers, across the different workflows, up to this rank")),(0,o.kt)("h3",{id:"data-based-pricing-template"},"Data-based pricing template"),(0,o.kt)("p",null,"Another approach to price data is to consider datasets and services as atomic units with their own prices. There is no weights involved. These prices are added up to define the price of a workflow. While services pricing is fixed and defined by the providers (on a time-based basis or per use basis), datasets pricing can be fixed or dynamic as our template allows users to implement different dataset pricing algorithms. Fixed price, first and second price sealed-bid auctions, and price defined as a function of time and number of purchases are proposed among the different algorithms of the template."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("p",null,"This template has the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auction time-interval, which sets the start and end of the auction bidding process"),(0,o.kt)("li",{parentName:"ul"},"Dataset reserved price, which set a price threshold under which a dataset will not be sold"),(0,o.kt)("li",{parentName:"ul"},"Weight parameters (","\u03c8"," and ","\u0278"," > 1), which allows dataset price to be defined as a function of time and number of purchases")))}u.isMDXComponent=!0}}]);