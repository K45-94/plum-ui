<template>
  <q-scroll-area class="page-body absolute-top fit text-black">
    <div class="page-body-spacer-header"></div>
    <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
      <p v-for="i in 30" :key="i">
        Building Plum with vue 3. This app is getting complex and I thought I
        could redesign and rebuild it better with Vue 3 Finally found a way for
        nesting child pages in routes.
      </p>
    </div>
    <div class="page-body-spacer-footer"></div>
  </q-scroll-area>
</template>

<script>
export default {
  name: "PageBody",
};
</script>

<style lang="sass"></style>
