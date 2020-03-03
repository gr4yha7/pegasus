<template>
  <v-app-bar
    app
    color="transparent"
    elevation="4"
    height="72"
  >
    <v-toolbar-title
      class="text-gray-800"
      v-text="$route.name"
    />
    <v-spacer />

    <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :href="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
// Components

// Utilities

export default {
  name: 'DashboardAppBar',

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
