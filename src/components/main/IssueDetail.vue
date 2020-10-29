<template>
  <v-overlay
    :value="isDetailShow"
    class="issue-detail-overlay"
    :class="{ active: isDetailShow }"
    opacity="0"
  >
    <div class="issue-detail-content">
      <v-card class="issue-detail-card my-10" light color="#ebecf0">
        <div class="issue-detail-header">
          <v-container fluid>
            <v-row align="start" no-gutters>
              <v-col class="d-flex" cols="10">
                <div class="header-title-wrapper">
                  <v-icon class="header-ico">
                    mdi-inbox-full
                  </v-icon>
                  <div class="ml-10">
                    <h4 class="header-title">{{ currentIssue.title }}</h4>
                    <span class="header-desc"
                      >in list {{ currentList.title }}</span
                    >
                  </div>
                </div>
              </v-col>
              <v-col class="d-flex justify-end" cols="2">
                <v-btn icon @click="closeDetail">
                  <v-icon>
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div class="issue-detail-option">
          <v-container class="pt-0" fluid>
            <v-row>
              <v-col class="option-wrapper d-flex" cols="12" md="8">
                <v-container class="pt-0">
                  <DueDate
                    class="option"
                    :date="currentIssue.dueDate"
                  ></DueDate>
                  <Description
                    class="option"
                    :desc="currentIssue.description"
                  ></Description>
                  <CheckList
                    class="option"
                    :tasks="currentIssue.checklist"
                  ></CheckList>
                  <Activity
                    class="option"
                    :activities="currentIssue.activities"
                  ></Activity>
                </v-container>
              </v-col>
              <v-col cols="12" md="4">
                <Actions></Actions>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-card>
    </div>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IssueDetail',
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
  computed: {
    ...mapState(['isDetailShow', 'currentIssue', 'currentList']),
  },
  methods: {
    closeDetail() {
      this.$store.commit('toggleIsDetailShow');
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-detail-overlay {
  align-items: flex-start;
  overflow-y: auto;
}
.active {
  background: rgba($color: #000000, $alpha: 0.6);
}
.issue-detail-card {
  width: 50vw;
  .issue-detail-header {
    .header-title-wrapper {
      position: relative;
      .header-ico {
        position: absolute;
      }
      .header-title {
        padding-top: 2px;
      }
      .header-desc {
        font-size: 0.8rem;
      }
    }
  }
  .issue-detail-option {
    .option {
      margin-bottom: 32px;
    }
    .option:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (max-width: 1264px) {
  .issue-detail-card {
    width: 70vw;
  }
}

@media only screen and (max-width: 960px) {
  .issue-detail-card {
    width: 90vw;
  }
}
</style>
