<template>
  <page>
    <page-header> <template #title> SEARCH </template></page-header>
    <page-body></page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page },
  name: "PageSearch",
});
</script>
