<template>
  <div class="due-date-module">
    <v-row>
      <div class="txt flex-column ml-10">
        <h5 class="mb-2">DUE DATE</h5>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="rgba(9,30,66,.04)"
              height="30"
            >
              {{ date }}
            </v-btn>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
  props: ['date'],
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
