<template>
  <v-content>
    <router-view />

    <dashboard-footer />
  </v-content>
</template>

<script>
export default {
  name: 'DashboardView',

  components: {
    DashboardFooter: () => import('./Footer')
  }
}
</script>
