<template>
  <div class="description-module">
    <v-row class="description-header align-center">
      <v-icon class="ico">
        mdi-text-subject
      </v-icon>
      <div
        class="description-title d-flex flex-grow-1 justify-space-between align-center ml-10"
      >
        <h4>Description</h4>
        <v-btn
          class="px-2"
          height="30"
          color="rgba(9,30,66,.04)"
          depressed
          v-if="!editDesc"
          @click="editDesc = true"
        >
          Edit
        </v-btn>
        <div class="btn-edit-wrap" v-if="editDesc">
          <v-btn
            class="px-2 mr-2"
            height="30"
            color="green"
            depressed
            @click="save"
          >
            Save
          </v-btn>
          <v-btn
            class="px-2"
            width="30"
            height="30"
            icon
            depressed
            @click="(editDesc = false), (desc = initDesc)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
    </v-row>
    <v-row class="description-txt mt-4">
      <p class="ml-10" v-if="!editDesc" @click="editDesc = true">
        {{ desc }}
      </p>
      <v-textarea
        placeholder="write description"
        class="ml-10 input-desc"
        rows="2"
        background-color="rgba(9,30,66,.04)"
        hide-details
        flat
        auto-grow
        solo
        v-if="editDesc"
        v-model="desc"
      ></v-textarea>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['initDesc'],
  data() {
    return {
      editDesc: false,
      desc: this.initDesc,
    };
  },
  methods: {
    save() {
      this.$emit('change-desc', this.desc);
      this.editDesc = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.description-module {
  p {
    margin: 0;
  }
  .description-header {
    position: relative;
    .ico {
      position: absolute;
    }
    .txt {
      padding-top: 2px;
    }
  }
  .description-txt {
    p {
      width: 86%;
    }
  }
}
</style>
