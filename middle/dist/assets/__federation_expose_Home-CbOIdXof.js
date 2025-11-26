import { importShared } from './__federation_fn_import-CL7rlRCr.js';
import { R as connection_default, S as box_default, T as grid_default } from './index-DCN_g8T9.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,createVNode:_createVNode,createTextVNode:_createTextVNode,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,unref:_unref,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "home" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "card-header" };
const _hoisted_4 = { class: "card-header" };
const _hoisted_5 = { class: "card-header" };

const {ref,watch} = await importShared('vue');

const {useRouter,useRoute} = await importShared('vue-router');


const _sfc_main = {
  __name: 'Home',
  setup(__props) {

const router = useRouter();
const route = useRoute();
const activeTab = ref("button");

// 监听 tab 变化，同步路由（路由模式）
const handleTabChange = (tabName) => {
  if (router && tabName) {
    router.push(`/${tabName}`).catch(() => {
      // 忽略重复导航错误
    });
  }
};

// 监听路由变化，同步 tab
watch(
  () => route.path,
  (path) => {
    if (path === "/button" || path.startsWith("/button")) {
      activeTab.value = "button";
    } else if (path === "/card" || path.startsWith("/card")) {
      activeTab.value = "card";
    } else if (path === "/table" || path.startsWith("/table")) {
      activeTab.value = "table";
    }
  },
  { immediate: true }
);

return (_ctx, _cache) => {
  const _component_el_alert = _resolveComponent("el-alert");
  const _component_el_divider = _resolveComponent("el-divider");
  const _component_el_menu_item = _resolveComponent("el-menu-item");
  const _component_el_menu = _resolveComponent("el-menu");
  const _component_router_view = _resolveComponent("router-view");
  const _component_el_skeleton = _resolveComponent("el-skeleton");
  const _component_el_tab_pane = _resolveComponent("el-tab-pane");
  const _component_el_tabs = _resolveComponent("el-tabs");
  const _component_el_icon = _resolveComponent("el-icon");
  const _component_el_card = _resolveComponent("el-card");
  const _component_el_col = _resolveComponent("el-col");
  const _component_el_row = _resolveComponent("el-row");
  const _component_el_step = _resolveComponent("el-step");
  const _component_el_steps = _resolveComponent("el-steps");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_el_card, { class: "welcome-card" }, {
      header: _withCtx(() => [...(_cache[1] || (_cache[1] = [
        _createElementVNode("div", { class: "card-header" }, [
          _createElementVNode("span", null, "欢迎使用 Module Federation")
        ], -1)
      ]))]),
      default: _withCtx(() => [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_alert, {
            title: "中间层模块（Middle Module）",
            type: "success",
            closable: false,
            "show-icon": ""
          }, {
            default: _withCtx(() => [...(_cache[2] || (_cache[2] = [
              _createElementVNode("p", null, " 这是中间层模块，既是 remote（暴露给第三级）又是 host（加载第一级 remote）。 ", -1),
              _createElementVNode("p", null, [
                _createElementVNode("strong", null, "使用路由模式加载远程组件")
              ], -1)
            ]))]),
            _: 1
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_alert, {
            title: "加载第一级 Remote 组件（路由模式）",
            type: "info",
            closable: false,
            "show-icon": "",
            style: {"margin-bottom":"20px"}
          }, {
            default: _withCtx(() => [...(_cache[3] || (_cache[3] = [
              _createElementVNode("p", null, "下面展示从第一级 remote 模块通过路由方式加载的组件：", -1)
            ]))]),
            _: 1
          }),
          _createVNode(_component_el_menu, {
            "default-active": _ctx.activeIndex,
            class: "header-menu",
            mode: "horizontal",
            router: ""
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_menu_item, { index: "/" }, {
                default: _withCtx(() => [...(_cache[4] || (_cache[4] = [
                  _createTextVNode("首页", -1)
                ]))]),
                _: 1
              }),
              _createVNode(_component_el_menu_item, { index: "/button" }, {
                default: _withCtx(() => [...(_cache[5] || (_cache[5] = [
                  _createTextVNode("远程按钮", -1)
                ]))]),
                _: 1
              }),
              _createVNode(_component_el_menu_item, { index: "/card" }, {
                default: _withCtx(() => [...(_cache[6] || (_cache[6] = [
                  _createTextVNode("远程卡片", -1)
                ]))]),
                _: 1
              }),
              _createVNode(_component_el_menu_item, { index: "/table" }, {
                default: _withCtx(() => [...(_cache[7] || (_cache[7] = [
                  _createTextVNode("远程表格", -1)
                ]))]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["default-active"]),
          _createVNode(_component_el_tabs, {
            modelValue: activeTab.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((activeTab).value = $event)),
            onTabChange: handleTabChange
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tab_pane, {
                label: "远程按钮",
                name: "button"
              }, {
                default: _withCtx(() => [
                  (_openBlock(), _createBlock(_Suspense, null, {
                    default: _withCtx(() => [
                      (activeTab.value === 'button')
                        ? (_openBlock(), _createBlock(_component_router_view, { key: 0 }))
                        : _createCommentVNode("", true)
                    ]),
                    fallback: _withCtx(() => [
                      _createVNode(_component_el_skeleton, {
                        rows: 5,
                        animated: ""
                      })
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              _createVNode(_component_el_tab_pane, {
                label: "远程卡片",
                name: "card"
              }, {
                default: _withCtx(() => [
                  (_openBlock(), _createBlock(_Suspense, null, {
                    default: _withCtx(() => [
                      (activeTab.value === 'card')
                        ? (_openBlock(), _createBlock(_component_router_view, { key: 0 }))
                        : _createCommentVNode("", true)
                    ]),
                    fallback: _withCtx(() => [
                      _createVNode(_component_el_skeleton, {
                        rows: 5,
                        animated: ""
                      })
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              _createVNode(_component_el_tab_pane, {
                label: "远程表格",
                name: "table"
              }, {
                default: _withCtx(() => [
                  (_openBlock(), _createBlock(_Suspense, null, {
                    default: _withCtx(() => [
                      (activeTab.value === 'table')
                        ? (_openBlock(), _createBlock(_component_router_view, { key: 0 }))
                        : _createCommentVNode("", true)
                    ]),
                    fallback: _withCtx(() => [
                      _createVNode(_component_el_skeleton, {
                        rows: 5,
                        animated: ""
                      })
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_row, { gutter: 20 }, {
            default: _withCtx(() => [
              _createVNode(_component_el_col, { span: 8 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_card, { shadow: "hover" }, {
                    header: _withCtx(() => [
                      _createElementVNode("div", _hoisted_3, [
                        _createVNode(_component_el_icon, null, {
                          default: _withCtx(() => [
                            _createVNode(_unref(connection_default))
                          ]),
                          _: 1
                        }),
                        _cache[8] || (_cache[8] = _createElementVNode("span", null, "模块联邦", -1))
                      ])
                    ]),
                    default: _withCtx(() => [
                      _cache[9] || (_cache[9] = _createElementVNode("p", null, "使用 Module Federation 实现微前端架构", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _createVNode(_component_el_col, { span: 8 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_card, { shadow: "hover" }, {
                    header: _withCtx(() => [
                      _createElementVNode("div", _hoisted_4, [
                        _createVNode(_component_el_icon, null, {
                          default: _withCtx(() => [
                            _createVNode(_unref(box_default))
                          ]),
                          _: 1
                        }),
                        _cache[10] || (_cache[10] = _createElementVNode("span", null, "Vue 3", -1))
                      ])
                    ]),
                    default: _withCtx(() => [
                      _cache[11] || (_cache[11] = _createElementVNode("p", null, "基于 Vue 3 Composition API 构建", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _createVNode(_component_el_col, { span: 8 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_card, { shadow: "hover" }, {
                    header: _withCtx(() => [
                      _createElementVNode("div", _hoisted_5, [
                        _createVNode(_component_el_icon, null, {
                          default: _withCtx(() => [
                            _createVNode(_unref(grid_default))
                          ]),
                          _: 1
                        }),
                        _cache[12] || (_cache[12] = _createElementVNode("span", null, "路由模式", -1))
                      ])
                    ]),
                    default: _withCtx(() => [
                      _cache[13] || (_cache[13] = _createElementVNode("p", null, "统一使用路由模式加载远程组件", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_steps, {
            active: 2,
            "finish-status": "success"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_step, { title: "创建项目" }),
              _createVNode(_component_el_step, { title: "配置 Module Federation" }),
              _createVNode(_component_el_step, { title: "路由模式加载远程模块" })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    })
  ]))
}
}

};
const Home = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-9d96f8cd"]]);

export { _export_sfc as _, Home as default };
