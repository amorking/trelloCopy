<template>
  <v-container class="check-list-module">
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
      <span class="progress-percent ml-1"
        >{{ progress ? progress : '0' }}%</span
      >
      <v-progress-linear
        class="my-2 ml-10"
        height="10"
        :value="progress"
        rounded
        color="#bbb"
      ></v-progress-linear>
    </v-row>
    <v-row class="check-item-container flex-column">
      <CheckListItem
        v-for="(task, i) in initTasks"
        :task="task"
        :cur-issue="curIssue"
        :key="i"
      ></CheckListItem>
    </v-row>
    <v-row class="btn-check-add pt-4">
      <v-btn class="ml-10" @click="editCheck = true" v-if="!editCheck">
        Add an item
      </v-btn>
    </v-row>
    <v-row class="add-check-wrapper flex-column" v-if="editCheck">
      <v-text-field
        label="Add an item"
        class="ml-10"
        rows="1"
        background-color="rgba(9,30,66,.04)"
        hide-details
        solo
        auto-grow
        v-model="newItem"
      ></v-text-field>
      <div class="btn-wrapper ml-10 mt-4">
        <v-btn id="task" class="mr-2" color="green" height="30" @click="save"
          >Save</v-btn
        >
        <v-btn width="30" height="30" icon @click="editCheck = false">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CheckList',
  props: ['init-tasks', 'cur-issue'],
  components: {
    CheckListItem: () => import('@/components/issue_detail/CheckListItem.vue'),
  },
  data() {
    return {
      editCheck: false,
      newItem: '',
    };
  },
  computed: {
    progress() {
      let completeNum = this.initTasks.filter((el) => el.complete).length;
      return Math.floor((completeNum / this.initTasks.length) * 100);
    },
    newCheckItemId() {
      return (
        this.initTasks.reduce((acc, cur) => {
          return Math.max(acc, cur.id);
        }, 0) + 1
      );
    },
  },
  methods: {
    save() {
      this.$emit('add-item', {
        id: this.newCheckItemId,
        title: this.newItem,
        complete: false,
      });
      this.newItem = '';
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
