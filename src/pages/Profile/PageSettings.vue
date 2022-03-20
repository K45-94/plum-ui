<template>
  <page> page </page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSettings",
  data() {
    return {
      NotificationsToggle: "On",
      ThemeToggle: "Dark",
    };
  },
});
</script>
