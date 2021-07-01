<template>
  <div class="editor" id="editor-layout-main">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title" :style="{ color: '#fff' }">
          <router-link path="/">慕课乐高</router-link>
        </div>
      </a-layout-header>
    </a-layout>
    <a-layout>
      <a-layout-sider width="300" style="background:yellow">
        <div class="siderbar-container">组件列表</div>
      </a-layout-sider>
      <a-layout style="padding:0 24px 24px">
        <a-layout-content :style="{ marginTop: '30px' }">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area"></div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background:pure" class="settings">
        组件属性
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  namr: "editor",
});
</script>

<style>
#app {
  height: 100%;
}
.editor {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.editor .ant-layout.ant-layout-has-sider {
  height: 100%;
}
.editor .preview-list {
  width: 300px;
  height: 180px;
  background: #fff;
}
</style>
