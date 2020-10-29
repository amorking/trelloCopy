<template>
  <div class="activity-module">
    <v-row class="activity-header align-center">
      <v-icon class="ico">
        mdi-format-list-bulleted-square
      </v-icon>
      <div class="activity-title d-flex flex-grow-1 align-center ml-10">
        <h4>Activity</h4>
        <v-btn
          class="px-2 ml-auto"
          height="30"
          color="rgba(9,30,66,.04)"
          depressed
        >
          Show Details
        </v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Activity',
};
</script>

<style lang="scss" scoped>
.activity-module {
  .activity-header {
    position: relative;
    .ico {
      position: absolute;
    }
    .activity-title {
      padding-top: 2px;
    }
  }
}
</style>
