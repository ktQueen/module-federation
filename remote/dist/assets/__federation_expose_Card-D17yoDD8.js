import { importShared } from './__federation_fn_import-BnSFGIKg.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,resolveDynamicComponent:_resolveDynamicComponent,createBlock:_createBlock,resolveComponent:_resolveComponent,withCtx:_withCtx,createVNode:_createVNode,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,createTextVNode:_createTextVNode} = await importShared('vue');


const _hoisted_1 = { class: "remote-card" };
const _hoisted_2 = { class: "card-header" };
const _hoisted_3 = { class: "card-content" };

const {ref} = await importShared('vue');
const {ElMessage} = await importShared('element-plus');


const _sfc_main = {
  __name: 'Card',
  setup(__props) {

const cards = ref([
  {
    title: "用户管理",
    description: "管理用户信息和权限设置",
    tag: "热门",
    tagType: "danger",
    icon: "User",
  },
  {
    title: "商品管理",
    description: "管理商品信息和库存",
    tag: "推荐",
    tagType: "success",
    icon: "ShoppingBag",
  },
  {
    title: "数据分析",
    description: "查看业务数据和分析报告",
    tag: "新功能",
    tagType: "warning",
    icon: "DataAnalysis",
  },
]);

const handleCardClick = (card) => {
  ElMessage.info(`点击了 ${card.title}`);
};

return (_ctx, _cache) => {
  const _component_el_icon = _resolveComponent("el-icon");
  const _component_el_tag = _resolveComponent("el-tag");
  const _component_el_button = _resolveComponent("el-button");
  const _component_el_card = _resolveComponent("el-card");
  const _component_el_col = _resolveComponent("el-col");
  const _component_el_row = _resolveComponent("el-row");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_el_row, { gutter: 20 }, {
      default: _withCtx(() => [
        (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(cards.value, (card, index) => {
          return (_openBlock(), _createBlock(_component_el_col, {
            span: 8,
            key: index
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_card, {
                shadow: "hover",
                class: "card-item"
              }, {
                header: _withCtx(() => [
                  _createElementVNode("div", _hoisted_2, [
                    _createVNode(_component_el_icon, null, {
                      default: _withCtx(() => [
                        (_openBlock(), _createBlock(_resolveDynamicComponent(card.icon)))
                      ]),
                      _: 2
                    }, 1024),
                    _createElementVNode("span", null, _toDisplayString(card.title), 1)
                  ])
                ]),
                footer: _withCtx(() => [
                  _createVNode(_component_el_button, {
                    type: "primary",
                    size: "small",
                    onClick: $event => (handleCardClick(card))
                  }, {
                    default: _withCtx(() => [...(_cache[0] || (_cache[0] = [
                      _createTextVNode(" 查看详情 ", -1)
                    ]))]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_3, [
                    _createElementVNode("p", null, _toDisplayString(card.description), 1),
                    _createVNode(_component_el_tag, {
                      type: card.tagType
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(_toDisplayString(card.tag), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))
        }), 128))
      ]),
      _: 1
    })
  ]))
}
}

};
const Card = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-4c61c45b"]]);

export { Card as default };
