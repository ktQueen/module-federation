import { importShared } from './__federation_fn_import-CL7rlRCr.js';
import { E as ElementPlusIconsVue } from './index-DCN_g8T9.js';
import Home, { _ as _export_sfc } from './__federation_expose_Home-CbOIdXof.js';

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

// 使用路由模式，通过 router-view 渲染组件

return (_ctx, _cache) => {
  const _component_el_header = _resolveComponent("el-header");
  const _component_router_view = _resolveComponent("router-view");
  const _component_el_main = _resolveComponent("el-main");
  const _component_el_container = _resolveComponent("el-container");

  return (_openBlock(), _createBlock(_component_el_container, { class: "app-container" }, {
    default: _withCtx(() => [
      _createVNode(_component_el_header, { class: "app-header" }, {
        default: _withCtx(() => [...(_cache[0] || (_cache[0] = [
          _createElementVNode("h1", null, "Module Federation - Middle 中间层模块", -1)
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
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-e90ee124"]]);

const remotesMap = {
'remote':{url:'http://localhost:5173/assets/remoteEntry.js?v=1',format:'esm',from:'vite'}
};
                const currentImports = {};

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'vue':{'undefined':{get:()=>get(new URL('__federation_shared_vue-BYFLC1rq.js', import.meta.url).href), loaded:1}},'vue-router':{'undefined':{get:()=>get(new URL('__federation_shared_vue-router-DQY3G5yB.js', import.meta.url).href), loaded:1}},'element-plus':{'undefined':{get:()=>get(new URL('__federation_shared_element-plus-d2VsKo0O.js', import.meta.url).href), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule();
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_wrapDefault(module, need) {
                    if (!module?.default && need) {
                        let obj = Object.create(null);
                        obj.default = module;
                        obj.__esModule = true;
                        return obj;
                    }
                    return module;
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const {createRouter,createWebHistory} = await importShared('vue-router');

const {defineAsyncComponent} = await importShared('vue');

// 路由模式：Middle 直接全屏渲染第一级 remote 组件（和 Shell 一样）
const ButtonPage = defineAsyncComponent(() =>
  __federation_method_getRemote("remote" , "./Button").then(module=>__federation_method_wrapDefault(module, true)).catch((err) => {
    console.error("加载远程按钮组件失败:", err);
    throw err;
  })
);

const CardPage = defineAsyncComponent(() =>
  __federation_method_getRemote("remote" , "./Card").then(module=>__federation_method_wrapDefault(module, true)).catch((err) => {
    console.error("加载远程卡片组件失败:", err);
    throw err;
  })
);

const TablePage = defineAsyncComponent(() =>
  __federation_method_getRemote("remote" , "./Table").then(module=>__federation_method_wrapDefault(module, true)).catch((err) => {
    console.error("加载远程表格组件失败:", err);
    throw err;
  })
);

const routes = [
  // 默认重定向到按钮页（保持和 remote 独立运行时体验类似）
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/",
  //   redirect: "/button",
  // },
  {
    path: "/button",
    name: "Button",
    component: ButtonPage,
  },
  {
    path: "/card",
    name: "Card",
    component: CardPage,
  },
  {
    path: "/table",
    name: "Table",
    component: TablePage,
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
