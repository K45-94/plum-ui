<template>
  <page>
    <page-header>
      <template #title> PROFILE </template>
      <template #button-right>
        <page-header-button-forward-right
          to="/profile/settings"
          label="settings"
        />
      </template>
    </page-header>
    <page-body></page-body>
  </page>
</template>

<script>
import { defineComponent } from "vue";
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonForwardRight from "src/components/PagePlumComponent/PageHeaderButtonForwardRight.vue";
import PageBody from "src/components/PagePlumComponent/PageBody.vue";

export default defineComponent({
  components: { Page, PageHeader, PageBody, PageHeaderButtonForwardRight },
  name: "PageProfile",
});
</script>
