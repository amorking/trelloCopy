<template>
  <div class="app-bar">
    <v-container class="pa-0" fluid>
      <v-row class="py-1" no-gutters>
        <v-col class="d-flex align-center">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <div class="gnb-search">
            <input type="text" />
          </div>
        </v-col>
        <!-- /.left-group -->

        <v-col class="d-flex justify-center align-center">
          <v-toolbar-title class="title">
            <img
              class="logo"
              src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png"
              alt="logo"
            />
          </v-toolbar-title>
          <!-- /.title -->
        </v-col>

        <v-col class="d-flex justify-end align-center">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
        <!-- /.right-group -->
      </v-row>
    </v-container>
  </div>
  <!-- /.inner -->
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style lang="scss" scoped>
.app-bar {
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.2);
  .gnb-search {
    input {
      width: 160px;
      border-radius: 6px;
      box-sizing: border-box;
      opacity: 0.6;
      padding: 2px 12px;
      background: #fff;
      transition: all 0.3s;
    }
    input:focus {
      width: 200px;
      opacity: 1;
      outline: none;
    }
  }
  .logo {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    width: 80px;
    opacity: 0.6;
    transition: opacity 0.3s;
  }
  .logo:hover {
    opacity: 1;
  }
}
</style>
