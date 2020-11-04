<template>
  <div class="activity-module">
    <v-row class="activity-header align-center mb-2">
      <v-icon class="ico">
        mdi-format-list-bulleted-square
      </v-icon>
      <div class="activity-title d-flex flex-grow-1 align-center ml-10">
        <h4>Activity</h4>
        <v-btn
          class="px-2 ml-auto"
          height="30"
          color="rgba(9,30,66,.04)"
          depressed
        >
          Show Details
        </v-btn>
      </div>
    </v-row>
    <v-row class="activity-list-wrapper">
      <v-row class="comment-text-field-wrapper align-center mb-4">
        <v-col cols="2"
          ><v-avatar class="mr-2"><v-img :src="profileImg"></v-img></v-avatar
        ></v-col>
        <v-col cols="10">
          <v-text-field
            outlined
            class="comment-text-field"
            placeholder="Write a comments..."
            hide-details
            v-model="newComment"
            @keyup.enter="save"
          >
            <template v-slot:append
              ><v-btn text small color="green" height="24" @click="save"
                >Save</v-btn
              ></template
            >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row v-for="(comment, i) in orderedActivities" :key="i">
        <v-col class="profile-wrapper" cols="2">
          <v-avatar><v-img :src="comment.imgSrc"></v-img></v-avatar>
        </v-col>
        <v-col class="text-wrapper" cols="10">
          <p class="mb-1">
            <strong class="mr-2">{{ comment.name }}</strong>
            <span class="date-text">{{ formatDate(comment.createdAt) }}</span>
          </p>
          <div class="comment-input-wrapper" v-if="isEdit !== i">
            <p class="comment-txt">
              {{ comment.text }}
            </p>
          </div>
          <div class="comment-input-wrapper-editing" v-else>
            <v-textarea
              class="comment-input mb-2"
              v-model="editedComment"
              :dark="isEdit === i"
              rows="1"
              auto-grow
              solo
              hide-details
            ></v-textarea>
          </div>
          <div class="activity-actions" v-if="isEdit !== i">
            <button class="mr-2" @click="toEdit(comment.text, i)">Edit</button>
            <button @click="deleteComment(comment.id)">Delete</button>
          </div>
          <div class="btn-edit-wrapper" v-if="isEdit === i">
            <v-btn color="green" dark @click="edit(comment.id)">save</v-btn>
            <v-btn icon @click="isEdit = undefined">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';

export default {
  name: 'Activity',
  props: ['activities'],
  computed: {
    newCommentId() {
      return (
        this.activities.reduce((acc, cur) => {
          return Math.max(acc, cur.id);
        }, 0) + 1
      );
    },
    orderedActivities() {
      let clone = _.cloneDeep(this.activities);
      return clone.sort((a, b) => {
        return moment(b.createdAt).unix() - moment(a.createdAt).unix();
      });
    },
  },
  data() {
    return {
      newComment: '',
      profileImg:
        'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
      isEdit: undefined,
      editedComment: '',
    };
  },
  methods: {
    formatDate(date) {
      let created = moment(date);
      return created.format('MMMM Do ddd [at] HH:mm a');
    },
    save() {
      this.$emit('add-comment', {
        id: this.newCommentId,
        imgSrc:
          'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
        name: '나의 이름',
        text: this.newComment,
        createdAt: moment().toISOString(),
      });
      this.newComment = '';
    },
    toEdit(comment, index) {
      this.isEdit = index;
      this.editedComment = comment;
    },
    edit(id) {
      this.$emit('edit-comment', { text: this.editedComment, id: id });
      this.isEdit = undefined;
    },
    deleteComment(id) {
      this.$emit('delete-comment', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.activity-module {
  .activity-header {
    position: relative;
    .ico {
      position: absolute;
    }
    .activity-title {
      padding-top: 2px;
    }
  }
  .activity-list-wrapper {
    .text-wrapper {
      .date-text {
        font-size: 0.75rem;
        opacity: 0.8;
      }
      p {
        margin: 0;
      }
      .comment-input-wrapper {
        display: inline-block;
        background: #fff;
        padding: 12px;
        border-radius: 4px;
        margin-bottom: 8px;
      }
    }
    .activity-actions {
      button {
        text-decoration: underline;
      }
    }
  }
}
</style>
