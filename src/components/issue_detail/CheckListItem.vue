<template>
  <div
    class="check-list-item d-flex flex-grow-1 align-center justify-space-between ml-10 my-2"
  >
    <v-checkbox
      v-model="task.complete"
      :label="task.title"
      hide-details
      class="ma-0 pa-0"
    >
    </v-checkbox>
    <v-btn icon @click="delItem">
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'CheckListItem',
  props: ['cur-issue', 'task'],
  methods: {
    delItem() {
      this.$store.commit(
        'delCheckItem',
        this.curIssue.checklist.find((el) => el.id === this.task.id)
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
