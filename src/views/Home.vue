<template>
  <div class="home">
    <AppBar></AppBar>
    <CoreView></CoreView>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    AppBar:()=>import('@/components/core/AppBar.vue'),
    CoreView:()=>import('@/components/core/CoreView.vue')
  }
};
</script>
