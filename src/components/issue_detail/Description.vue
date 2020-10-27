<template>
  <div class="description">
    <v-row>
      <v-icon class="ico mr-2">
        mdi-text-subject
      </v-icon>
      <div class="txt d-flex align-center">
        <h4 class="mr-4">Description</h4>
        <v-btn class="px-2" height="30" color="rgba(9,30,66,.04)" depressed>
          Edit
        </v-btn>
      </div>
    </v-row>
    <v-row class="pl-8">
      <p class="pt-2 ma-0">
        감자감자 왕감자
      </p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
};
</script>

<style lang="scss" scoped>
.txt {
  padding-top: 2px;
}
</style>
