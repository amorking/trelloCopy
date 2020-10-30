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
  props: ['initDate'], //부모 컴포넌트로부터 초기값만 전달받는다.
  watch: {
    //값이 바뀌는 것을 계속해서 지켜본다.
    //바뀌면 실행된다.
    date(newValue) {
      this.$emit('change-date', newValue);
      //this.$emit('부모컴포의 이벤트명',바뀌는 값)
    },
  },
  data() {
    return {
      menu: false,
      date: this.initDate,
      //초기값만 초기화해준다.
    };
  },
};
</script>

<style lang="scss" scoped></style>
