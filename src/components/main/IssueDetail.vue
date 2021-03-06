<template>
  <v-overlay
    :value="isDetailShow"
    class="issue-detail-overlay"
    :class="{ active: isDetailShow }"
    opacity="0"
  >
    <v-card class="issue-detail-card my-10" color="#f4f5f7" light>
      <v-container class="py-0">
        <v-row class="header-title-wrapper align-start">
          <v-col cols="10">
            <v-icon class="header-ico">
              mdi-inbox-full
            </v-icon>
            <div class="ml-10">
              <h4 class="header-title">{{ currentIssue.title }}</h4>
              <span class="header-desc">in list {{ currentList.title }}</span>
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

      <v-container class="pt-0">
        <v-row>
          <v-col class="option-wrapper" cols="12" md="8">
            <DueDate
              class="option"
              :init-date="currentIssue.dueDate"
              @change-date="changeDate"
            ></DueDate>
            <Description
              class="option"
              :init-desc="currentIssue.description"
              @change-desc="changeDesc"
            ></Description>
            <CheckList
              class="option"
              :cur-issue="currentIssue"
              :init-tasks="currentIssue.checklist"
              @add-item="addCheckListItem"
            ></CheckList>
            <Activity
              class="option"
              @add-comment="addComment"
              @edit-comment="editComment"
              @delete-comment="deleteComment"
              :activities="currentIssue.activities"
            ></Activity>
          </v-col>
          <v-col cols="12" md="4">
            <Actions
              :issues="issues"
              :cur-issue="currentIssue"
              @move="moveToList"
              @copy="copyToList"
              @delete-issue="deleteIssue"
            >
            </Actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

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
    ...mapState(['issues', 'isDetailShow', 'currentIssue', 'currentList']),
    newIssueId() {
      return (
        this.issues.reduce((acc, cur) => {
          return Math.max(acc, cur.id);
        }, 0) + 1
      );
    },
  },
  methods: {
    closeDetail() {
      this.$store.commit('toggleIsDetailShow');
    },
    changeDate(date) {
      //DueDate.vue에서 date의 값이 변경될 때 바로 커밋
      this.$store.commit('fixDate', {
        id: this.currentIssue.id,
        dueDate: date,
      });
    },
    changeDesc(text) {
      //DueDate.vue에서 date의 값이 변경될 때 바로 커밋
      // this.$store.commit('fixDesc', {
      //   id: this.currentIssue.id,
      //   description: text,
      // });
      let clone = _.cloneDeep(this.currentIssue); //클론 생성, 원본 데이터 보존
      clone.description = text; //클론의 description을 수정
      this.$store.commit('editIssue', clone);
    },
    addCheckListItem(item) {
      let clone = _.cloneDeep(this.currentIssue); //클론 생성, 원본 데이터 보존
      clone.checklist.push(item);
      this.$store.commit('editIssue', clone);
    },
    addComment(comment) {
      let clone = _.cloneDeep(this.currentIssue); //클론 생성, 원본 데이터 보존
      clone.activities.push(comment);
      this.$store.commit('editIssue', clone);
    },
    editComment(comment) {
      let clone = _.cloneDeep(this.currentIssue); //클론 생성, 원본 데이터 보존
      let target = clone.activities.find((el) => el.id === comment.id);
      //{ text: this.editedComment, id: id } 받아온 데이터의 id와 동일한 객체를 리턴
      target.text = comment.text; //타겟의 text를 받아온 데이터의 text로 대체
      this.$store.commit('editIssue', clone); //변경된 내용을 store에 커밋
    },
    deleteComment(id) {
      let clone = _.cloneDeep(this.currentIssue); //클론 생성, 원본 데이터 보존
      let targetIndex = clone.activities.findIndex((el) => el.id === id);
      //comment.id와 동일한 객체의 index를 리턴
      clone.activities.splice(targetIndex, 1); //targetIndex로부터 하나 삭제
      this.$store.commit('editIssue', clone); //변경된 내용을 store에 커밋
    },
    moveToList(item) {
      let clone = _.cloneDeep(this.currentIssue); //클론 생성, 원본 데이터 보존
      clone.listId = item.id;
      this.$store.commit('editIssue', clone);
    },
    copyToList(item) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.id = this.newIssueId;
      clone.listId = item.id;
      clone.title = clone.title + ' copy';
      this.$store.commit('addIssue', clone);
    },
    deleteIssue() {
      this.$store.commit('deleteIssue', this.currentIssue.id);
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
  .header-title-wrapper {
    position: relative;
    .header-ico {
      position: absolute;
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
