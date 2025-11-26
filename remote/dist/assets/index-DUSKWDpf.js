const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/__federation_expose_Button-CMx0cU4y.js","assets/__federation_fn_import-BnSFGIKg.js","assets/index-B_xNha0r.js","assets/_plugin-vue_export-helper-pcqpp-6-.js","assets/__federation_expose_Card-D17yoDD8.js","assets/__federation_expose_Table-8bYCucu8.js"])))=>i.map(i=>d[i]);
import { importShared } from './__federation_fn_import-BnSFGIKg.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import { E as ElementPlusIconsVue } from './index-B_xNha0r.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const {createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,createVNode:_createVNode,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');



const _sfc_main = {
  __name: 'App',
  setup(__props) {

// 这里暂时不需要脚本逻辑，模板已满足编译要求

return (_ctx, _cache) => {
  const _component_el_header = _resolveComponent("el-header");
  const _component_router_view = _resolveComponent("router-view");
  const _component_el_main = _resolveComponent("el-main");
  const _component_el_container = _resolveComponent("el-container");

  return (_openBlock(), _createBlock(_component_el_container, { class: "app-container" }, {
    default: _withCtx(() => [
      _createVNode(_component_el_header, { class: "app-header" }, {
        default: _withCtx(() => [...(_cache[0] || (_cache[0] = [
          _createElementVNode("h1", null, "Module Federation - Remote 远程模块", -1)
        ]))]),
        _: 1
      }),
      _createVNode(_component_el_main, { class: "app-main" }, {
        default: _withCtx(() => [
          _createVNode(_component_router_view)
        ]),
        _: 1
      })
    ]),
    _: 1
  }))
}
}

};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-c66d56df"]]);

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "http://localhost:5173/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

const {createRouter,createWebHistory} = await importShared('vue-router');

const {defineAsyncComponent} = await importShared('vue');


// 路由模式：独立运行时的路由配置
const routes = [
  {
    path: "/",
    redirect: "/button",
  },
  {
    path: "/button",
    name: "Button",
    component: () => __vitePreload(() => import('./__federation_expose_Button-CMx0cU4y.js'),true?__vite__mapDeps([0,1,2,3]):void 0),
  },
  {
    path: "/card",
    name: "Card",
    component: () => __vitePreload(() => import('./__federation_expose_Card-D17yoDD8.js'),true?__vite__mapDeps([4,1,3]):void 0),
  },
  {
    path: "/table",
    name: "Table",
    component: () => __vitePreload(() => import('./__federation_expose_Table-8bYCucu8.js'),true?__vite__mapDeps([5,1,2,3]):void 0),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const {createApp} = await importShared('vue');

const ElementPlus = await importShared('element-plus');

const app = createApp(App);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(router);
app.mount("#app");
