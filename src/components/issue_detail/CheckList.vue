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
        >
        </v-checkbox>
      </div>
    </v-row>
    <v-row class="btn-check-add pt-4">
      <v-btn class="ml-10" @click="editCheck = true" v-if="!editCheck">
        Add an item
      </v-btn>
    </v-row>
    <v-row class="add-check-wrapper flex-column" v-if="editCheck">
      <v-textarea
        label="write description"
        class="ml-10"
        rows="1"
        background-color="rgba(9,30,66,.04)"
        hide-details
        solo
        auto-grow
        v-model="title"
      ></v-textarea>
      <div class="btn-wrapper ml-10 mt-4">
        <v-btn class="mr-2" color="green" height="30" @click="save">Save</v-btn>
        <v-btn width="30" height="30" icon @click="editCheck = false">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  props: ['tasks'],
  components: {},
  data() {
    return {
      editCheck: false,
      title: '',
    };
  },
  computed: {
    progress() {
      let completeNum = this.tasks.filter((el) => el.complete).length;
      return Math.floor((completeNum / this.tasks.length) * 100);
    },
  },
  methods: {
    save() {},
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
