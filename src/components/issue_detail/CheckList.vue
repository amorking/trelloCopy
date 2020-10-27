<template>
  <div class="check-list">
    <v-row class="txt d-flex align-center justify-space-between">
      <v-icon class="ico mr-2">
        mdi-check-box-outline
      </v-icon>
      <div class="txt d-flex flex-grow-1 align-center">
        <h4>CheckList</h4>
        <v-btn
          class="px-2 ml-auto"
          height="30"
          color="rgba(9,30,66,.04)"
          depressed
        >
          Delete
        </v-btn>
      </div>
    </v-row>
    <v-row class="progress-wrapper align-center">
      <span class="progress-percent ml-1">0%</span>
      <v-progress-linear
        class="my-4 ml-8"
        value="15"
        height="10"
        rounded
        color="#bbb"
      ></v-progress-linear>
    </v-row>
    <CheckItem></CheckItem>
    <v-row class="check-item-wrapper pl-8">
      <v-btn>Add an item</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  components: {
    CheckItem: () => import('@/components/issue_detail/CheckItem.vue'),
  },
  data() {
    return {
      tasks: [
        { title: 'task', complete: false },
        { title: 'task', complete: false },
      ],
      checkbox: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.check-list {
  .txt {
    padding-top: 2px;
  }
  .progress-wrapper {
    position: relative;
    .progress-percent {
      position: absolute;
      font-size: 0.8rem;
    }
  }
}
</style>
