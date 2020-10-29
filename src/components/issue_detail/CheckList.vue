<template>
  <div class="check-list-module">
    <v-row class="check-list-header d-flex align-center justify-space-between">
      <v-icon class="ico">
        mdi-checkbox-multiple-marked-outline
      </v-icon>
      <div class="check-list-title d-flex flex-grow-1 align-center ml-10">
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
      <span class="progress-percent ml-1">{{ progress }}%</span>
      <v-progress-linear
        class="my-2 ml-10"
        height="10"
        :value="progress"
        rounded
        color="#bbb"
      ></v-progress-linear>
    </v-row>
    <v-row class="check-item-container">
      <div class="check-item-wrapper ml-9">
        <v-checkbox
          v-for="(task, i) in tasks"
          :key="i"
          v-model="task.complete"
          :label="task.title"
          hide-details
        ></v-checkbox>
      </div>
    </v-row>
    <v-row class="btn-check-add pt-4">
      <v-btn class="ml-10">Add an item</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  props: ['tasks'],
  components: {},
  data() {
    return {};
  },
  computed: {
    progress() {
      let completeNum = this.tasks.filter((el) => el.complete).length;
      return (completeNum / this.tasks.length) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.check-list-module {
  .check-list-header {
    position: relative;
    .ico {
      position: absolute;
    }
    .check-list-title {
      padding-top: 2px;
    }
  }
  .progress-wrapper {
    position: relative;
    .progress-percent {
      position: absolute;
      font-size: 0.65rem;
    }
  }
}
</style>
