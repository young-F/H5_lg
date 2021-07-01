<template>
  <div class="content-container">
    <TemplateList :list="testData"></TemplateList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import TemplateList from "../components/TemplateList.vue";
import { GlobalDataProps } from "../store/index";
export default defineComponent({
  name: "Home",
  components: {
    TemplateList,
  },
  setup() {
    // 一个函数返回值想得到用户自定义结果，肯定只能是泛型
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.state.templates.data);
    return {
      testData,
    };
  },
});
</script>

<style scoped>
.content-container {
  background: #fff;
  padding: 30px 24px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
