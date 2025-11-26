<template>
  <div class="remote-card">
    <el-row :gutter="20">
      <el-col :span="8" v-for="(card, index) in cards" :key="index">
        <el-card shadow="hover" class="card-item">
          <template #header>
            <div class="card-header">
              <el-icon>
                <component :is="card.icon" />
              </el-icon>
              <span>{{ card.title }}</span>
            </div>
          </template>
          <div class="card-content">
            <p>{{ card.description }}</p>
            <el-tag :type="card.tagType">{{ card.tag }}</el-tag>
          </div>
          <template #footer>
            <el-button
              type="primary"
              size="small"
              @click="handleCardClick(card)"
            >
              查看详情
            </el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { User, ShoppingBag, DataAnalysis } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";

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
</script>

<style scoped>
.remote-card {
  width: 100%;
}

.card-item {
  height: 100%;
  transition: transform 0.3s;
}

.card-item:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.card-content {
  min-height: 100px;
}

.card-content p {
  color: #606266;
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>
