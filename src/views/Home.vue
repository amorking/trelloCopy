<template>
  <div class="home">
    <AppBar></AppBar>
    <CoreView></CoreView>
    <IssueDetail :title="'To do'" :list="list"></IssueDetail>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(['list']),
  },
  components: {
    AppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
    IssueDetail: () => import('@/components/main/IssueDetail.vue'),
  },
};
</script>
