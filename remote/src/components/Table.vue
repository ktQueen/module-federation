<template>
  <div class="remote-table">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><List /></el-icon>
          <span>远程表格组件</span>
        </div>
      </template>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="role" label="角色" width="120">
          <template #default="scope">
            <template v-if="scope && scope.row">
              <el-tag :type="getRoleType(scope.row.role)">
                {{ scope.row.role }}
              </el-tag>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="scope">
            <template v-if="scope && scope.row">
              <el-switch
                v-model="scope.row.status"
                active-text="启用"
                inactive-text="禁用"
                @change="handleStatusChange(scope.row)"
              />
            </template>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <template v-if="scope && scope.row">
              <el-button size="small" @click="handleEdit(scope.row)">
                编辑
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.row)"
              >
                删除
              </el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>

      <el-divider />

      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { List } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import "element-plus/dist/index.css";

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
</script>

<style scoped>
.remote-table {
  width: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
</style>
