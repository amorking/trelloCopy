<template>
  <div class="issue-card">
    <v-card class="pa-2 mb-2" elevation="1" @click="openDetail">
      <h4>{{ title }}</h4>
      <div class="icons-wrapper"></div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'IssueCard',
  props: ['title'],
  data() {
    return {};
  },
  methods: {
    openDetail() {
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
