import { importShared } from './__federation_fn_import-BnSFGIKg.js';
import { S as list_default } from './index-B_xNha0r.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,createElementVNode:_createElementVNode,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "remote-table" };
const _hoisted_2 = { class: "card-header" };

const {ref} = await importShared('vue');
const {ElMessage,ElMessageBox} = await importShared('element-plus');


const _sfc_main = {
  __name: 'Table',
  setup(__props) {

const tableData = ref([
  {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    role: "管理员",
    status: true,
  },
  {
    id: 2,
    name: "李四",
    email: "lisi@example.com",
    role: "编辑",
    status: true,
  },
  {
    id: 3,
    name: "王五",
    email: "wangwu@example.com",
    role: "用户",
    status: false,
  },
  {
    id: 4,
    name: "赵六",
    email: "zhaoliu@example.com",
    role: "管理员",
    status: true,
  },
  {
    id: 5,
    name: "钱七",
    email: "qianqi@example.com",
    role: "编辑",
    status: true,
  },
]);

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(5);

const getRoleType = (role) => {
  const roleMap = {
    管理员: "danger",
    编辑: "warning",
    用户: "info",
  };
  return roleMap[role] || "info";
};

const handleStatusChange = (row) => {
  ElMessage.success(`${row.name} 的状态已${row.status ? "启用" : "禁用"}`);
};

const handleEdit = (row) => {
  ElMessage.info(`编辑 ${row.name}`);
};

const handleDelete = (row) => {
  ElMessageBox.confirm(`确定要删除 ${row.name} 吗？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      const index = tableData.value.findIndex((item) => item.id === row.id);
      if (index > -1) {
        tableData.value.splice(index, 1);
        total.value--;
        ElMessage.success("删除成功");
      }
    })
    .catch(() => {
      ElMessage.info("已取消删除");
    });
};

const handleSizeChange = (val) => {
  ElMessage.info(`每页显示 ${val} 条`);
};

const handleCurrentChange = (val) => {
  ElMessage.info(`当前页: ${val}`);
};

return (_ctx, _cache) => {
  const _component_el_icon = _resolveComponent("el-icon");
  const _component_el_table_column = _resolveComponent("el-table-column");
  const _component_el_tag = _resolveComponent("el-tag");
  const _component_el_switch = _resolveComponent("el-switch");
  const _component_el_button = _resolveComponent("el-button");
  const _component_el_table = _resolveComponent("el-table");
  const _component_el_divider = _resolveComponent("el-divider");
  const _component_el_pagination = _resolveComponent("el-pagination");
  const _component_el_card = _resolveComponent("el-card");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_el_card, { shadow: "hover" }, {
      header: _withCtx(() => [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_icon, null, {
            default: _withCtx(() => [
              _createVNode(_unref(list_default))
            ]),
            _: 1
          }),
          _cache[2] || (_cache[2] = _createElementVNode("span", null, "远程表格组件", -1))
        ])
      ]),
      default: _withCtx(() => [
        _createVNode(_component_el_table, {
          data: tableData.value,
          stripe: "",
          style: {"width":"100%"}
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "80"
            }),
            _createVNode(_component_el_table_column, {
              prop: "name",
              label: "姓名",
              width: "120"
            }),
            _createVNode(_component_el_table_column, {
              prop: "email",
              label: "邮箱",
              width: "200"
            }),
            _createVNode(_component_el_table_column, {
              prop: "role",
              label: "角色",
              width: "120"
            }, {
              default: _withCtx((scope) => [
                (scope && scope.row)
                  ? (_openBlock(), _createBlock(_component_el_tag, {
                      key: 0,
                      type: getRoleType(scope.row.role)
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(_toDisplayString(scope.row.role), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"]))
                  : _createCommentVNode("", true)
              ]),
              _: 1
            }),
            _createVNode(_component_el_table_column, {
              prop: "status",
              label: "状态",
              width: "100"
            }, {
              default: _withCtx((scope) => [
                (scope && scope.row)
                  ? (_openBlock(), _createBlock(_component_el_switch, {
                      key: 0,
                      modelValue: scope.row.status,
                      "onUpdate:modelValue": $event => ((scope.row.status) = $event),
                      "active-text": "启用",
                      "inactive-text": "禁用",
                      onChange: $event => (handleStatusChange(scope.row))
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]))
                  : _createCommentVNode("", true)
              ]),
              _: 1
            }),
            _createVNode(_component_el_table_column, {
              label: "操作",
              width: "180"
            }, {
              default: _withCtx((scope) => [
                (scope && scope.row)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                      _createVNode(_component_el_button, {
                        size: "small",
                        onClick: $event => (handleEdit(scope.row))
                      }, {
                        default: _withCtx(() => [...(_cache[3] || (_cache[3] = [
                          _createTextVNode(" 编辑 ", -1)
                        ]))]),
                        _: 1
                      }, 8, ["onClick"]),
                      _createVNode(_component_el_button, {
                        size: "small",
                        type: "danger",
                        onClick: $event => (handleDelete(scope.row))
                      }, {
                        default: _withCtx(() => [...(_cache[4] || (_cache[4] = [
                          _createTextVNode(" 删除 ", -1)
                        ]))]),
                        _: 1
                      }, 8, ["onClick"])
                    ], 64))
                  : _createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"]),
        _createVNode(_component_el_divider),
        _createVNode(_component_el_pagination, {
          "current-page": currentPage.value,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => ((currentPage).value = $event)),
          "page-size": pageSize.value,
          "onUpdate:pageSize": _cache[1] || (_cache[1] = $event => ((pageSize).value = $event)),
          "page-sizes": [10, 20, 50, 100],
          total: total.value,
          layout: "total, sizes, prev, pager, next, jumper",
          onSizeChange: handleSizeChange,
          onCurrentChange: handleCurrentChange
        }, null, 8, ["current-page", "page-size", "total"])
      ]),
      _: 1
    })
  ]))
}
}

};
const Table = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-70762436"]]);

export { Table as default };
