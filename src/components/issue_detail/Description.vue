<template>
  <div class="description-module">
    <v-row class="description-header align-center">
      <v-icon class="ico">
        mdi-text-subject
      </v-icon>
      <div
        class="description-title d-flex flex-grow-1 justify-space-between align-center ml-10"
      >
        <h4>Description</h4>
        <v-btn class="px-2" height="30" color="rgba(9,30,66,.04)" depressed>
          Edit
        </v-btn>
      </div>
    </v-row>
    <v-row class="description-txt">
      <p class="ml-10">
        하이 헬로우 안녕
      </p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
};
</script>

<style lang="scss" scoped>
.description-module {
  p {
    margin: 0;
  }
  .description-header {
    position: relative;
    .ico {
      position: absolute;
    }
    .txt {
      padding-top: 2px;
    }
  }
}
</style>
