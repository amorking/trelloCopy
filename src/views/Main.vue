<template>
  <div class="main">
    <v-container class="list-container overflow-x-auto" fluid>
      <v-row class="flex-nowrap">
        <v-col
          v-for="(list, i) in lists"
          :key="i"
          cols="12"
          md="6"
          lg="4"
          xl="2"
        >
          <v-card class="list-box pa-2" color="#ebecf0">
            <ListBox
              class="list-box-wrap"
              :list="list"
              :issues="issues"
            ></ListBox>
            <v-row class="btn-add-wrapper pa-1" no-gutters>
              <v-col v-if="addingIssue !== i" class="btn-add" cols="12">
                <v-btn
                  class="btn-add px-2 justify-start"
                  height="48"
                  color="#ebecf0"
                  block
                  depressed
                  @click="addingIssue = i"
                >
                  <v-icon>
                    mdi-plus
                  </v-icon>
                  Add a card
                </v-btn>
              </v-col>
              <v-col v-if="addingIssue === i" class="btn-add-active" cols="12">
                <v-text-field
                  class="mb-2"
                  v-model="issueTitle"
                  placeholder="Enter a title for this card..."
                  :dark="addingIssue === i"
                  solo
                  flat
                  hide-details
                ></v-text-field>
                <div class="btn-wrapper d-flex">
                  <v-btn color="green" @click="addNewIssue(i)">save</v-btn>
                  <v-btn icon @click="cancleIssue">
                    <v-icon>
                      mdi-close
                    </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <!-- /.list-box -->
        </v-col>

        <v-col cols="12" md="6" lg="4" xl="2">
          <v-btn
            class="btn-add-list"
            color="hsla(0,0%,100%,.2)"
            v-if="!addingList"
            dark
            block
            @click="addingList = true"
          >
            <span class="btn-txt">+ Add List</span>
          </v-btn>
          <v-card class="edit-box pa-2" v-else>
            <v-text-field
              class="mb-2"
              v-model="listTitle"
              placeholder="Enter list title..."
              :dark="addingList"
              solo
              flat
              hide-details
            ></v-text-field>
            <div class="btn-wrapper d-flex">
              <v-btn color="green">save</v-btn>
              <v-btn icon @click="addingList = false">
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Main',
  props: ['lists', 'issues'],
  computed: {
    newIssueId() {
      return (
        this.issues.reduce((acc, cur) => {
          return Math.max(acc, cur.id);
        }, 0) + 1
      );
    },
  },
  data() {
    return {
      addingList: false,
      addingIssue: undefined,
      listTitle: '',
      issueTitle: '',
    };
  },
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
  methods: {
    addList() {
      this.isEdit = !this.isEdit;
    },
    addNewIssue(index) {
      this.$store.commit('addIssue', {
        id: this.newIssueId,
        listId: this.lists[index].id,
        title: this.issueTitle,
        description: '',
        dueDate: moment().format('YYYY-MM-DD'),
        checklist: [],
        activities: [],
      });
      this.issueTitle = '';
    },
    cancleIssue() {
      this.addingIssue = undefined;
      this.issueTitle = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 44px;
  background: rgb(131, 140, 145);
  .list-container {
    height: calc(100vh - 44px);
  }
}
</style>
