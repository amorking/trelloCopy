<template>
  <v-overlay :value="true">
    <v-card class="issue-detail-card" light color="#ebecf0">
      <v-title class="issue-detail-header">
        <v-container fluid>
          <v-row align="start" no-gutters>
            <v-col class="d-flex align-start" cols="10">
              <v-icon class="header-ico mr-2">
                mdi-inbox-full
              </v-icon>
              <div class="header-title-wrapper">
                <h4 class="header-title">{{ title }}</h4>
                <span class="header-desc">in list {{ title }}</span>
              </div>
            </v-col>
            <v-col class="d-flex justify-end" cols="2">
              <v-btn icon>
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-title>

      <v-text class="issue-detail-option">
        <v-container class="pt-0" fluid>
          <v-row>
            <v-col class="option-wrapper d-flex" cols="12" md="8">
              <v-container class="pt-0">
                <DueDate class="option"></DueDate>
                <Description class="option"></Description>
                <CheckList class="option"></CheckList>
                <Activity class="option"></Activity>
              </v-container>
            </v-col>
            <v-col cols="12" md="4">
              <Actions></Actions>
            </v-col>
          </v-row>
        </v-container>
      </v-text>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: 'IssueDetail',
  props: ['list', 'title'],
  components: {
    DueDate: () => import('@/components/issue_detail/DueDate.vue'),
    Description: () => import('@/components/issue_detail/Description.vue'),
    CheckList: () => import('@/components/issue_detail/CheckList.vue'),
    Activity: () => import('@/components/issue_detail/Activity.vue'),
    Actions: () => import('@/components/issue_detail/Actions.vue'),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.issue-detail-card {
  width: 50vw;
  min-height: 80vh;
  .issue-detail-header {
    .header-title {
      padding-top: 2px;
    }
    .header-desc {
      font-size: 0.8rem;
    }
  }
  .issue-detail-option {
    .option {
      margin-bottom: 32px;
    }
  }
}
</style>
