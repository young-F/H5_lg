<template>
  <div class="template-list-component">
    <a-row :gutter="16">
      <a-col class="poster-item" :span="6" v-for="item in list" :key="item.id">
        <router-link :to="`/template/${item.id}`">
          <a-card hoverable>
            <template v-slot:cover>
              <img :src="item.coverImg" alt="" />
              <!-- <img src="http://typescript-vue.oss-cn-" alt="" /> -->
              <div class="hover-item">
                <a-button size="large" type="primary" shape="round"
                  >使用该模板创建</a-button
                >
              </div>
            </template>
            <a-card-meta :title="item.title">
              <template v-slot:description>
                <div class="description-detail">
                  <span>作者：{{ item.author }}</span>
                  <span class="user-number">
                    <!-- <a-icon type="user" />使用量：{{ item.copiedCount }} -->
                    使用量：{{ item.copiedCount }}
                  </span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TemplateProps } from "../store/templates";
export default defineComponent({
  name: "template-list",
  props: {
    list: {
      type: Array as PropType<TemplateProps[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.poster-item {
  position: relative;
  margin-bottom: 20px;
  &:hover {
    .hover-item {
      display: flex !important;
    }
    img {
      transform: scale(1.25);
    }
  }
  .ant-card-hoverable {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  }
  .ant-card {
    border-radius: 12px;
  }
  .ant-card-cover {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 390px;
    img {
      width: 100%;
      transition: all 0.2s ease-in;
    }
  }
  .ant-card-body {
    padding: 0;
  }
  .ant-card-meta-title {
    color: #333;
    padding: 10px 12px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 0 !important;
  }
}
.hover-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none !important;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.description-detail {
  display: flex;
  justify-content: space-between;
  padding: 13px 12px;
  color: #999;
}
</style>
