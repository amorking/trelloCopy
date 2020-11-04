<template>
  <div class="actions">
    <h5 class="mb-2">ACTIONS</h5>
    <div class="actions-group-top">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="px-2 justify-start"
            v-bind="attrs"
            v-on="on"
            depressed
            block
            color="rgba(9, 30, 66, 0.04)"
          >
            <v-icon class="mr-2" size="18">
              mdi-arrow-right
            </v-icon>
            <span class="txt">Move</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in lists" :key="i" @click="move(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="px-2 justify-start"
            depressed
            block
            color="rgba(9, 30, 66, 0.04)"
            v-bind="attrs"
            v-on="on"
            @click="copy"
          >
            <v-icon class="mr-2" size="18">
              mdi-content-copy
            </v-icon>
            <span class="txt">Copy</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in lists" :key="i" @click="copy(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        class="px-2 justify-start"
        depressed
        block
        color="rgba(9, 30, 66, 0.04)"
      >
        <v-icon class="mr-2" size="18">
          mdi-text-box-outline
        </v-icon>
        <span class="txt">Make Template</span>
      </v-btn>
      <v-btn
        class="px-2 justify-start"
        depressed
        block
        color="rgba(9, 30, 66, 0.04)"
      >
        <v-icon class="mr-2" size="18">
          mdi-eye-outline
        </v-icon>
        <span class="txt">Watch</span>
      </v-btn>
    </div>
    <!-- /.actions-group-top -->
    <div class="actions-group-btm">
      <v-btn
        class="px-2 justify-start"
        depressed
        block
        color="rgba(9, 30, 66, 0.04)"
      >
        <v-icon class="mr-2" size="18">
          mdi-archive-outline
        </v-icon>
        <span class="txt">Archive</span>
      </v-btn>
      <v-btn
        class="px-2 justify-start"
        depressed
        block
        color="rgba(9, 30, 66, 0.04)"
      >
        <v-icon class="mr-2" size="18">
          mdi-share-variant
        </v-icon>
        <span class="txt">Share</span>
      </v-btn>
      <div class="btn-del-wrapper">
        <v-btn
          class="btn-del px-2 justify-start"
          color="rgba(9, 30, 66, 0.04)"
          depressed
          block
          v-if="!isDelete"
          @click="isDelete = !isDelete"
        >
          <v-icon class="mr-2" size="18">
            mdi-delete
          </v-icon>
          <span class="txt">Delete</span>
        </v-btn>
        <div class="btn-del-real d-flex" v-else>
          <v-btn
            class="px-2 justify-start flex-grow-1"
            color="red"
            depressed
            dark
            @click="delIssue"
          >
            <v-icon class="mr-2" size="18">
              mdi-delete
            </v-icon>
            <span class="txt">Are u sure?</span>
          </v-btn>
          <v-btn icon>
            <v-icon color="red" @click="isDelete = !isDelete">
              mdi-close
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Actions',
  props: ['cur-issue'],
  computed: {
    ...mapState(['lists']),
  },
  data() {
    return {
      isDelete: false,
    };
  },
  methods: {
    move(item) {
      this.$emit('move', item);
    },
    copy(item) {
      this.$emit('copy', item);
    },
    delIssue() {
      this.isDelete = !this.isDelete;
      this.$store.commit('toggleIsDetailShow');
      this.$emit('delete-issue');
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  .actions-group-top {
    border-bottom: 1px solid #ccc;
    margin-bottom: 8px;
  }
  .v-btn {
    margin-bottom: 8px;
    .txt {
      padding-top: 2px;
      text-transform: none;
    }
  }
}
</style>
