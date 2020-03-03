<template>
  <v-app>
    <dashboard-app-bar :items="appBarItems" />

    <dashboard-drawer :items="drawerItems"/>

    <dashboard-view />
  </v-app>
</template>

<script>
const routePrefix = '/dashboard/admin'
export default {
  name: 'AdminDashboardLayout',

  components: {
    DashboardAppBar: () => import('../../../components/AppBar'),
    DashboardDrawer: () => import('../../../components/Drawer'),
    DashboardView: () => import('../../../components/View')
  },

  data: () => ({
    drawerItems: [
      {
        text: 'Dashboard',
        icon: 'mdi-text',
        to: routePrefix + '/home'
      },
      {
        text: 'Users',
        icon: 'mdi-account-group-outline',
        to: routePrefix + '/users'
      },
      {
        text: 'Courses',
        icon: 'mdi-school-outline',
        to: routePrefix + '/courses'
      },
      {
        text: 'Results',
        icon: 'mdi-calendar-edit',
        to: routePrefix + '/results'
      },
      {
        text: 'Statistics',
        icon: 'mdi-chart-bar',
        to: routePrefix + '/statistics'
      }
    ],
    appBarItems: [
      {
        title: 'Profile',
        to: routePrefix + '/profile'
      },
      {
        title: 'Settings',
        to: routePrefix + '/settings'
      }
    ]
  })
}
</script>
