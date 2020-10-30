import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 0,
        title: 'todo',
      },
      {
        id: 1,
        title: 'doing',
      },
      {
        id: 2,
        title: 'done',
      },
    ],
    issues: [
      {
        id: 0,
        listId: 0, //lists의 id, 어떤 리스트에 속하는지 구분하는 Id
        //불필요한 데이터 연산을 줄이기 위해 독립적으로 관리한다.
        title: 'login page',
        description: ' make log in page',
        dueDate: '2020-10-29',
        checklist: [
          { id: 0, title: 'layout', complete: true },
          { id: 1, title: 'function', complete: false },
        ],
        activities: [
          {
            id: 0,
            imgSrc:
              'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png',
            name: 'nickname',
            text: 'hi my name is nick',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg',
            name: 'yourNickname',
            text: 'hi my name is you',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
      {
        id: 1,
        listId: 0, //lists의 id
        title: 'gallery',
        description: ' make gallery',
        dueDate: '2020-10-28',
        checklist: [
          { id: 0, title: 'layout', complete: false },
          { id: 1, title: 'function', complete: false },
          { id: 2, title: 'function', complete: true },
        ],
        activities: [
          {
            id: 0,
            imgSrc:
              'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png',
            name: '닉녬',
            text: '방가브다',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg',
            name: 'yourNickname',
            text: 'hi my name is you',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
      {
        id: 2,
        listId: 1, //lists의 id
        title: 'test 3',
        description: 'this is test 3',
        dueDate: '2020-10-26',
        checklist: [
          { id: 0, title: 'layout', complete: true },
          { id: 1, title: 'function', complete: false },
        ],
        activities: [
          {
            id: 0,
            imgSrc:
              'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png',
            name: '닉녬',
            text: '방가브다',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg',
            name: 'yourNickname',
            text: 'hi my name is you',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
    ],
    currentList: {},
    currentIssue: {},
    isDetailShow: false,
  },
  mutations: {
    toggleIsDetailShow(state) {
      state.isDetailShow = !state.isDetailShow;
    },
    setCurrentList(state, payload) {
      state.currentList = payload;
    },
    setCurrentIssue(state, payload) {
      state.currentIssue = payload;
    },
    fixDate(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      target.dueDate = payload.dueDate;
    },
    fixDesc(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      target.description = payload.description;
    },
    editIssue(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      Object.assign(target, payload);
      //Object.assign을 사용한다. Object.assign(target, ...sources)
      //issues의 객체를 통째로 변경 > 불필요한 교체를 줄이고 변화가 생긴 데이터만 변경
    },
  },
  actions: {},
  modules: {},
});
