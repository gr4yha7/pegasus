<template>
  <v-app>
    <dashboard-app-bar />

    <dashboard-drawer :items="items"/>

    <dashboard-view />

  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',

  components: {
    DashboardAppBar: () => import('./AppBar'),
    DashboardDrawer: () => import('./Drawer'),
    DashboardView: () => import('./View')
  },

  data: () => ({
    // expandOnHover: false,
    items: [
      { text: 'Dashboard', icon: 'mdi-text' },
      { text: 'Users', icon: 'mdi-account-group-outline' },
      { text: 'Courses', icon: 'mdi-school-outline' },
      { text: 'Results', icon: 'mdi-calendar-edit' },
      { text: 'Statistics', icon: 'mdi-chart-bar' }
    ]
  })
}
</script>
