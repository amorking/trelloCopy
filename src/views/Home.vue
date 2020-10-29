<template>
  <div class="home">
    <AppBar></AppBar>
    <CoreView :lists="lists" :issues="issues"></CoreView>
    <IssueDetail :lists="lists" :issues="issues"></IssueDetail>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(['lists', 'issues']),
  },
  components: {
    AppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
    IssueDetail: () => import('@/components/main/IssueDetail.vue'),
  },
};
</script>
