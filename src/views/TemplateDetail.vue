<template>
  <!-- <div class="template-detail">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <a href="/"
            ><img
              alt="Vue logo"
              src="https://oss.imooc-lego.com/editor/img/logo2.cae6ad43.png"
              class="logo-img"
          /></a>
        </div>
        <div class="right-col">
          <div class="user-operation">
            <a-button type="primary" shape="round">创建设计</a-button>
            <a-button type="primary" shape="round">我的作品</a-button>
            <a-dropdown-button @click="handleButtonClick" shape="round">
              用户6080
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">
                    个人设置
                  </a-menu-item>
                  <a-menu-item key="2">
                    登出
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown-button>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0px 50px' }">
        <a-layout
          :style="{ padding: '24px 0px', background: 'rgb(255, 255, 255)' }"
        >
          <a-layout-content
            :style="{
              padding: '0px 24px',
              minHeight: '85vh',
              maxWidth: '1200px',
              margin: '0px auto',
              width: '100%',
            }"
          >
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div> -->

  <div class="work-detail-container">
    <a-row type="flex" justify="center">
      <a-col :span="8" class="cover-img">
        <img :src="template.coverImg" alt="" />
      </a-col>
      <a-col :span="8">
        <h2>{{ template.title }}</h2>
        <p>{{ template.title }}</p>
        <div class="auth">
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          该作品由 <b>{{ template.author }}</b> 创作
        </div>
        <div class="bar-code-area">
          <p>扫一扫，手机预览</p>
          <div title="https://h5.imooc-lego.com/p/7-339e">
            <img
              alt="Scan me!"
              style="display: block;"
              src="data:image/png;base64,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"
            />
          </div>
        </div>
        <div class="use-button">
          <router-link to="/editor"
            ><a-button type="primary" size="large" shape="round"
              >使用模板</a-button
            >
          </router-link>
          <a-button size="large" :style="{ marginLeft: '20px' }" shape="round"
            >下载图片海报</a-button
          >
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import { TemplateProps } from "../store/templates";
export default defineComponent({
  name: "templateDetail",
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const currentId = route.params.id as string;
    const template = computed<TemplateProps>(() =>
      store.getters.getTemplateById(parseInt(currentId))
    );
    return {
      route,
      template,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-title {
    display: flex;
  }
}

.user-operation > * {
  margin-left: 30px !important;
}
.ant-btn-group > .ant-btn:first-child:not(:last-child),
.ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
  border-top-left-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
}
.ant-btn-group > .ant-btn:last-child:not(:first-child),
.ant-btn-group > span:last-child:not(:first-child) > .ant-btn {
  border-top-right-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
}
.work-detail-container {
  margin-top: 50px;
}
.cover-img {
  margin-right: 30px;
  img {
    width: 100%;
  }
  & + .ant-col-8 {
    display: flex;
    flex-direction: column;
    align-items: self-start;
  }
}

.ant-avatar {
  margin-right: 10px;
}

.bar-code-area {
  margin: 20px 0;
}
.ant-btn-primary {
  background-color: #3e7fff;
  border-color: #3e7fff;
}
.ant-btn-primary:focus,
.ant-btn-primary:hover {
  background-color: #669eff;
  border-color: #669eff;
}
</style>
