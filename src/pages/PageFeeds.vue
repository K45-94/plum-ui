<template>
  <page>
    <page-header>
      <template #title> PLUM </template>
    </page-header>
    <page-body></page-body>
    <router-view />
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page },
  name: "PageFeeds",
});
</script>
