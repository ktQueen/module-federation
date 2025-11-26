<template>
  <div class="remote-button">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><Mouse /></el-icon>
          <span>远程按钮组件</span>
        </div>
      </template>

      <div class="button-demo">
        <el-space wrap>
          <el-button type="primary" @click="handleClick">
            <el-icon><Check /></el-icon>
            主要按钮
          </el-button>
          <el-button type="success" @click="handleClick">
            <el-icon><SuccessFilled /></el-icon>
            成功按钮
          </el-button>
          <el-button type="info" @click="handleClick">
            <el-icon><InfoFilled /></el-icon>
            信息按钮
          </el-button>
          <el-button type="warning" @click="handleClick">
            <el-icon><WarningFilled /></el-icon>
            警告按钮
          </el-button>
          <el-button type="danger" @click="handleClick">
            <el-icon><CircleCloseFilled /></el-icon>
            危险按钮
          </el-button>
        </el-space>
      </div>

      <el-divider />

      <el-alert
        v-if="message"
        :title="message"
        type="success"
        :closable="false"
        show-icon
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Mouse,
  Check,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";

const message = ref("");

const handleClick = () => {
  message.value = "按钮被点击了！这是来自远程模块的组件。";
  ElMessage.success("远程按钮组件工作正常！");
  setTimeout(() => {
    message.value = "";
  }, 3000);
};
</script>

<style scoped>
.remote-button {
  width: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.button-demo {
  padding: 20px 0;
}
</style>
