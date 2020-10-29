<template>
  <div class="main">
    <v-container class="list-container overflow-x-auto" fluid>
      <v-row class="flex-nowrap">
        <ListBox
          class="list-box-wrap"
          v-for="(list, i) in lists"
          :list="list"
          :issues="issues"
          :key="i"
        ></ListBox>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: ['lists', 'issues'],
  computed: {},
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
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
