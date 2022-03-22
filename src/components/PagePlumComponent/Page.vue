<template>
  <div class="page absolute-top fit">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style lang="sass">
.page
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
</style>
