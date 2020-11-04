<template>
  <v-col cols="12" md="6" lg="4" xl="2">
    <v-card class="list-box pa-2" color="#ebecf0">
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
      <div class="item-list-wrapper">
        <IssueCard
          v-for="(issue, i) in filteredIssues"
          :key="i"
          :list="list"
          :issue="issue"
        ></IssueCard>
      </div>
      <!-- /.item-list-wrapper -->
      <div class="btn-wrapper">
        <v-btn class="btn-add px-2" color="#ebecf0" depressed>
          <v-icon>
            mdi-plus
          </v-icon>
          Add a card
        </v-btn>
        <v-btn class="btn-temp px-0" icon color="ebecf0">
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
      <!-- /.btn-wrapper -->
    </v-card>
    <!-- /.list-box -->
  </v-col>
</template>

<script>
export default {
  name: 'ListBox',
  props: ['list', 'issues'],
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
