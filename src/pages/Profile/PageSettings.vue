<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left to="/profile" label="Profile" />
      </template>
      <template #title> SETTINGS </template>
    </page-header>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { PageHeaderButtonBackLeft },
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageSettings",
  data() {
    return {
      NotificationsToggle: "On",
      ThemeToggle: "Dark",
    };
  },
});
</script>
