<template>
  <div>
    <v-row class="box-header pl-2" align="center" no-gutters>
      <h4>{{ list.title }}</h4>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>
          mdi-dots-horizontal
        </v-icon>
      </v-btn>
    </v-row>
    <!-- /.box-header -->
    <v-container class="item-list-wrapper pa-1">
      <IssueCard
        v-for="(issue, i) in filteredIssues"
        :key="i"
        :list="list"
        :issue="issue"
      ></IssueCard>
    </v-container>
    <!-- /.item-list-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'ListBox',
  props: ['list', 'issues'],
  data() {
    return {};
  },
  computed: {
    filteredIssues() {
      return this.issues.filter((el) => this.list.id === el.listId);
    },
  },
  components: {
    IssueCard: () => import('@/components/main/IssueCard.vue'),
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
