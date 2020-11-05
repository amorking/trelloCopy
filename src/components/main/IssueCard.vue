<template>
  <v-row class="issue-card mb-2" no-gutters>
    <v-col cols="12">
      <v-card class="pa-2" elevation="1" @click="openDetail">
        <h4>{{ issue.title }}</h4>
        <div class="icons-wrapper"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IssueCard',
  props: ['list', 'issue'],
  data() {
    return {};
  },
  methods: {
    openDetail() {
      this.$store.commit('setCurrentList', this.list);
      this.$store.commit('setCurrentIssue', this.issue);
      this.$store.commit('toggleIsDetailShow');
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-card {
  h4 {
    font-weight: normal;
  }
  .issue-detail {
    height: 100vh;
  }
}
</style>
