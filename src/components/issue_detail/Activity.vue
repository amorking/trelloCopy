<template>
  <v-row>
    <v-icon class="ico mr-2">
      mdi-format-list-bulleted-square
    </v-icon>
    <div class=" txt d-flex flex-grow-1 align-center">
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
</template>

<script>
export default {
  name: 'Activity',
};
</script>

<style lang="scss" scoped>
.txt {
  padding-top: 2px;
}
</style>
