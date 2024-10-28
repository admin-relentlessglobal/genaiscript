import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CYKuTkqU.js";import{o as p,c as o,k as t,e as s,l as a,m as n,A as e,q as g,s as f,B as k}from"./modules/vue-DbbOcb5G.js";import{I as y}from"./slidev/default-BuIWBFO_.js";import{u as m,f as u}from"./slidev/context-B8zMCZ9y.js";import"./modules/unplugin-icons-DQDYzNEB.js";import"./index-CkZH9Rf3.js";import"./modules/shiki-DLUXL2qD.js";const j={__name:"system-scripts.md__slidev_5",setup(A){const{$slidev:c,$nav:B,$clicksContext:h,$clicks:C,$page:D,$renderContext:v,$frontmatter:r}=m();return h.setup(),(x,i)=>{const l=d;return p(),o(y,g(f(k(u)(k(r),4))),{default:t(()=>[i[2]||(i[2]=s("h1",null,"System Scripts and Microformats",-1)),i[3]||(i[3]=s("p",null,"Teach the LLM how to format response for files, special formats, register tools …",-1)),i[4]||(i[4]=s("ul",null,[s("li",null,[s("code",null,"system.files.genai.js")])],-1)),a(l,n({},{ranges:[]}),{default:t(()=>i[0]||(i[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"system"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," title"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"File generation"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"$"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"When generating or updating files you will use the following syntax:"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"...")])])],-1)])),_:1},16),i[5]||(i[5]=s("ul",null,[s("li",null,[s("code",null,"system.diff.genai.js")])],-1)),a(l,n({},{ranges:[]}),{default:t(()=>i[1]||(i[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"system"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," title"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Diff generation"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," lineNumbers"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," true"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",})")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"$"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"The DIFF format should be used to generate diff changes on files: ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"- added lines MUST start with +")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"- deleted lines MUST start with -")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"- deleted lines MUST exist in the original file (do not invent deleted lines)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"- added lines MUST not exist in the original file")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"...")])])],-1)])),_:1},16)]),_:1},16)}}};export{j as default};
