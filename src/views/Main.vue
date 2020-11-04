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
        <v-col cols="12" md="6" lg="4" xl="2">
          <v-btn
            class="btn-add-list"
            color="hsla(0,0%,100%,.2)"
            v-if="!isEdit"
            dark
            block
            @click="addList"
          >
            <span class="btn-txt">+ Add List</span>
          </v-btn>
          <v-card class="edit-box pa-2" v-else>
            <v-text-field
              class="mb-2"
              v-model="listTitle"
              :dark="isEdit"
              solo
              flat
              hide-details
            ></v-text-field>
            <div class="btn-wrapper d-flex">
              <v-btn color="green">save</v-btn>
              <v-btn icon @click="isEdit = false">
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: ['lists', 'issues'],
  computed: {},
  data() {
    return {
      isEdit: false,
      listTitle: '',
    };
  },
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
  methods: {
    addList() {
      this.isEdit = !this.isEdit;
    },
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
