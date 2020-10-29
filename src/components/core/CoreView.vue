<template>
  <transition name="component-fade" mode="out-in" class="core-view">
    <router-view :lists="lists" :issues="issues" />
  </transition>
</template>

<script>
export default {
  name: 'CoreView',
  props: ['lists', 'issues'],
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
