<template>
  <v-toolbar
    dark
    color="blue darken-3"
    class="mb-1"
  >
    <v-text-field
      v-model="search"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
    />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-select
        v-model="sortBy"
        flat
        outlined
        solo-inverted
        hide-details
        :items="keys"
        prepend-inner-icon="mdi-sort"
        label="Sort by"
      />
    </template>
  </v-toolbar>
</template>

<script>
export default {
  name: 'SortSearchToolbar',
  data: () => ({
    keys: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    sortBy: 'name',
    search: ''
  })
}
</script>
