<template>
  <v-footer absolute>
    <v-col>
      <strong class="text-lg">Horus</strong>
      <v-spacer></v-spacer>
      <p>&copy; {{ new Date().getFullYear()}}. All rights reserved</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'DashboardFooter'
}
</script>
