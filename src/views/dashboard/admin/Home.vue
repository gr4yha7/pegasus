<template>
  <v-container fluid class="px-12 py-8">
    <sort-search-toolbar />
    <v-row>
      <v-col>
        <v-card outlined to="" class="tw-py-16" color="primary">
          <div class="tw-flex tw-flex-col tw-justify-center tw-text-white">
            <v-icon
              size="64"
              color="white">mdi-account-group</v-icon>
            <div class="tw-text-lg tw-text-center">
              Students
            </div>
            <div class="tw-text-3xl tw-font-normal tw-text-center">
              200
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined to="">
          <v-list-item class="d-flex justify-center">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon
                size="64"
                color="primary">mdi-school-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="tw-text-lg tw-font-normal">Courses</v-list-item-title>
              <v-list-item-subtitle class="tw-text-right">52</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined to="">
          <v-list-item class="d-flex justify-center">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon
                size="64"
                color="primary">mdi-teach</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-lg font-normal">Lecturers</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
