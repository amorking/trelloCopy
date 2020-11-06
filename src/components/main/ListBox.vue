<template>
  <div>
    <v-row
      class="box-header pl-2 align-center justify-space-between"
      no-gutters
    >
      <div class="header-txt flex-grow-1">
        <h4 v-if="!isEdit" @click="isEdit = true">{{ initList.title }}</h4>
        <v-text-field
          v-model="listTitle"
          class="list-title-input ml-n1 align-center"
          flat
          outlined
          hide-details
          height="32"
          append-icon="mdi-check mt-2 mr-n2"
          @click:append="changeListTitle"
          @keyup.enter="changeListTitle"
          v-else
        ></v-text-field>
      </div>
      <v-menu transition="slide-y-transition" absolute>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </template>
        <v-card class="px-2">
          <v-list class="pa-0">
            <v-list-item>
              <v-list-item-title>
                Choose action
              </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title>Change List Name</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-row>
    <!-- /.box-header -->
    <v-container class="item-list-wrapper pa-1">
      <IssueCard
        v-for="(issue, i) in filteredIssues"
        :key="i"
        :list="initList"
        :issue="issue"
      ></IssueCard>
    </v-container>
    <!-- /.item-list-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'ListBox',
  props: ['init-list', 'issues'],
  data() {
    return {
      isEdit: false,
      listTitle: this.initList.title,
    };
  },
  computed: {
    filteredIssues() {
      return this.issues.filter((el) => this.initList.id === el.listId);
    },
  },
  components: {
    IssueCard: () => import('@/components/main/IssueCard.vue'),
  },
  methods: {
    changeListTitle() {
      this.$emit('change-list-title', {
        id: this.initList.id,
        title: this.listTitle,
      });
      this.isEdit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-header {
  h4 {
    margin: 0;
    padding: 0;
  }
}
.btn-wrapper {
  display: flex;
  .btn-add {
    justify-content: flex-start;
    flex: 1 1 0;
  }
}
</style>
