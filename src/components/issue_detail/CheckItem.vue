<template>
  <v-row class="check-item-wrapper align-center mb-4">
    <v-checkbox class="check-box" v-model="checkbox"></v-checkbox>
    <span class="check-item-txt ml-8">
      hellllow
    </span>
  </v-row>
</template>

<script>
export default {
  name: 'CheckItem',
};
</script>

<style lang="scss" scoped>
.check-item-wrapper {
  position: relative;
  .check-box {
    position: absolute;
  }
}
</style>
