"use strict";(self.webpackChunkaide_family_github_io=self.webpackChunkaide_family_github_io||[]).push([[8863],{7664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"config/palace-config","title":"\u5e7f\u5bd2\u5bab(Palace)\u914d\u7f6e","description":"","source":"@site/docs/3-config/2-palace-config.md","sourceDirName":"3-config","slug":"/config/palace-config","permalink":"/docs/config/palace-config","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-config/2-palace-config.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u516c\u5171\u914d\u7f6e","permalink":"/docs/config/public-config"},"next":{"title":"\u540e\u88d4(HouYi)\u914d\u7f6e","permalink":"/docs/config/houyi-config"}}');var r=t(4848),a=t(8453);const c={sidebar_position:2},i="\u5e7f\u5bd2\u5bab(Palace)\u914d\u7f6e",s={},g=[];function l(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5e7f\u5bd2\u5babpalace\u914d\u7f6e",children:"\u5e7f\u5bd2\u5bab(Palace)\u914d\u7f6e"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protocol",children:"message Bootstrap {\n  pkg.conf.Server server = 1;\n  pkg.conf.HTTPServer http = 2;\n  pkg.conf.GRPCServer grpc = 3;\n  pkg.conf.JWT jwt = 4;\n  pkg.conf.Cache cache = 6;\n  pkg.conf.Tracer tracer = 7;\n  pkg.conf.Discovery discovery = 8;\n  pkg.conf.Oss oss = 9;\n  Watch watch = 10;\n  OAuth2 oauth2 = 11;\n  pkg.conf.EmailConfig email_config = 12;\n  // \u4e3b\u5e93, \u7528\u4e8e\u7ef4\u62a4\u7cfb\u7edf\u914d\u7f6e\u3001\u7528\u6237\u7b49\n  pkg.conf.Database database = 13;\n  // \u4e1a\u52a1\u6570\u636e\u5e93\uff0c\u591a\u79df\u6237\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u6570\u636e\uff0c \u4e1a\u52a1\u6570\u636e\u91c7\u7528\u5206\u8868\u5b58\u50a8\n  pkg.conf.Database bizDatabase = 14;\n  // \u544a\u8b66\u5386\u53f2\u5b58\u50a8\u4f4d\u7f6e\n  pkg.conf.Database alarmDatabase = 15;\n  // \u73af\u5883\u6807\u8bc6\n  string env = 16;\n  // \u662f\u5426\u4f9d\u8d56HouYi\u670d\u52a1\n  bool dependHouYi = 17;\n  // \u662f\u5426\u4f9d\u8d56Rabbit\u670d\u52a1\n  bool dependRabbit = 18;\n  // metrics\u914d\u7f6e\n  string metricsToken = 19;\n  // log\u914d\u7f6e\n  pkg.conf.Log log = 20;\n}\n\n// \u5fae\u670d\u52a1\u914d\u7f6e\nmessage MicroServer {\n  // \u6708\u5154\u6d88\u606f\u670d\u52a1\n  pkg.conf.MicroServer rabbit_server = 1;\n  // \u540e\u7fbf\u4ee3\u7406\u670d\u52a1\n  pkg.conf.MicroServer hou_yi_server = 2;\n  // \u540e\u7fbf\u670d\u52a1\u591a\u5b9e\u4f8b\u914d\u7f6e\uff08\u6b64\u914d\u7f6e\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5355\u5b9e\u4f8b\u914d\u7f6e\uff09\n  repeated pkg.conf.MicroServer hou_yi_servers = 3;\n}\n\nmessage Watch {\n  message Strategy {\n    // \u8d85\u65f6\u65f6\u95f4\n    google.protobuf.Duration timeout = 1;\n    // \u6267\u884c\u9891\u7387 cron \u8868\u8fbe\u5f0f\n    string interval = 2;\n  }\n  message AlertEvent {\n    // \u8d85\u65f6\u65f6\u95f4\n    google.protobuf.Duration timeout = 1;\n    // \u6267\u884c\u9891\u7387\n    google.protobuf.Duration interval = 2;\n  }\n  Strategy strategy = 1;\n  AlertEvent alertEvent = 2;\n}\n\nmessage OAuth2 {\n  message Config {\n    string client_id = 1;\n    string client_secret = 2;\n    string callback_uri = 3;\n    repeated string scopes = 5;\n  }\n  string redirect_uri = 1;\n  Config github = 2;\n  Config gitee = 3;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(6540);const r={},a=o.createContext(r);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);