<template>
  <div class="main">
    <v-container class="list-container overflow-x-auto" fluid>
      <v-row class="flex-nowrap">
        <ListBox :title="'To do'" class="list-box-wrap"></ListBox>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
    ...mapState(['list']),
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
