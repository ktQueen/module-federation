import { importShared } from './__federation_fn_import-BnSFGIKg.js';
import { j as check_default, s as success_filled_default, i as info_filled_default, w as warning_filled_default, c as circle_close_filled_default, R as mouse_default } from './index-B_xNha0r.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "remote-button" };
const _hoisted_2 = { class: "card-header" };
const _hoisted_3 = { class: "button-demo" };

const {ref} = await importShared('vue');
const {ElMessage} = await importShared('element-plus');


const _sfc_main = {
  __name: 'Button',
  setup(__props) {

const message = ref("");

const handleClick = () => {
  message.value = "按钮被点击了！这是来自远程模块的组件。";
  ElMessage.success("远程按钮组件工作正常！");
  setTimeout(() => {
    message.value = "";
  }, 3000);
};

return (_ctx, _cache) => {
  const _component_el_icon = _resolveComponent("el-icon");
  const _component_el_button = _resolveComponent("el-button");
  const _component_el_space = _resolveComponent("el-space");
  const _component_el_divider = _resolveComponent("el-divider");
  const _component_el_alert = _resolveComponent("el-alert");
  const _component_el_card = _resolveComponent("el-card");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_el_card, { shadow: "hover" }, {
      header: _withCtx(() => [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_icon, null, {
            default: _withCtx(() => [
              _createVNode(_unref(mouse_default))
            ]),
            _: 1
          }),
          _cache[0] || (_cache[0] = _createElementVNode("span", null, "远程按钮组件", -1))
        ])
      ]),
      default: _withCtx(() => [
        _createElementVNode("div", _hoisted_3, [
          _createVNode(_component_el_space, { wrap: "" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: handleClick
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(check_default))
                    ]),
                    _: 1
                  }),
                  _cache[1] || (_cache[1] = _createTextVNode(" 主要按钮 ", -1))
                ]),
                _: 1
              }),
              _createVNode(_component_el_button, {
                type: "success",
                onClick: handleClick
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(success_filled_default))
                    ]),
                    _: 1
                  }),
                  _cache[2] || (_cache[2] = _createTextVNode(" 成功按钮 ", -1))
                ]),
                _: 1
              }),
              _createVNode(_component_el_button, {
                type: "info",
                onClick: handleClick
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(info_filled_default))
                    ]),
                    _: 1
                  }),
                  _cache[3] || (_cache[3] = _createTextVNode(" 信息按钮 ", -1))
                ]),
                _: 1
              }),
              _createVNode(_component_el_button, {
                type: "warning",
                onClick: handleClick
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(warning_filled_default))
                    ]),
                    _: 1
                  }),
                  _cache[4] || (_cache[4] = _createTextVNode(" 警告按钮 ", -1))
                ]),
                _: 1
              }),
              _createVNode(_component_el_button, {
                type: "danger",
                onClick: handleClick
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(circle_close_filled_default))
                    ]),
                    _: 1
                  }),
                  _cache[5] || (_cache[5] = _createTextVNode(" 危险按钮 ", -1))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _createVNode(_component_el_divider),
        (message.value)
          ? (_openBlock(), _createBlock(_component_el_alert, {
              key: 0,
              title: message.value,
              type: "success",
              closable: false,
              "show-icon": ""
            }, null, 8, ["title"]))
          : _createCommentVNode("", true)
      ]),
      _: 1
    })
  ]))
}
}

};
const Button = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-cfc55541"]]);

export { Button as default };
