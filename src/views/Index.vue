<template>
  <div class="homepage-container">
    <a-layout :style="{ backgroundColor: '#ffff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">慕课乐高</router-link>
        </div>
        <UserProfile :user="userInfo"></UserProfile>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        © 慕课网（imooc.com）版权所有 | 京ICP备2000029号
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import UserProfile from "../components/UserProfile.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
export default defineComponent({
  //   name: Index,
  components: {
    UserProfile,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const userInfo = computed(() => store.state.user);
    return {
      userInfo,
    };
  },
});
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-title {
  width: 150px;
  & > a {
    color: #fff;
  }
}
</style>
