<template>
  <q-layout view="lHh lpr lFf lHr lpR fFf" class="shadow-2 rounded-borders">
    <q-footer class="small-screen-only" bordered>
      <q-tabs class="text-white" active-color="secondary">
        <q-route-tab to="/feeds" icon="eva-home" />
        <q-route-tab to="/search" icon="eva-search" />
        <q-route-tab to="/camera" icon="eva-camera" />
        <q-route-tab to="/light" icon="eva-bulb" />
        <q-route-tab to="/profile" icon="eva-square" />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
    };
  },
};
</script>

<style lang="sass">
.q-header
    background: linear-gradient(145deg,#ADF6B1 70%,#ADF6B1 15%)
.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height: 77px
.q-toolbar_title
  font-size: 30px
  @media (max-width: $breakpoint-xs-max)
    text-align: center
.q-footer
  .q-tab_icon
    font-size: 24px
.q-footer
    background: linear-gradient(145deg,#ADF6B1 15%,#ADF6B1 85%)
</style>
