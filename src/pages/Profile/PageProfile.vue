<template>
  <page>
    <page-header>
      <template #title> PROFILE </template>
    </page-header>
    <page-body></page-body>
  </page>
</template>

<script>
import { defineComponent } from "vue";
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageBody from "src/components/PagePlumComponent/PageBody.vue";

export default defineComponent({
  components: { Page, PageHeader, PageBody },
  name: "PageProfile",
});
</script>
