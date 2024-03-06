import {createStore} from 'vuex'
import auth from './auth'
export default createStore({
  state: {
    error: null,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {},
  getters: {
    error: (state) => state.error,
  },
  modules: {
    auth,
    // user: {
    //   namespaced: true,
    //   state: {
    //     user: null,
    //   },
    //   mutations: {
    //     setUser(state, payload) {
    //       state.user = payload;
    //     },
    //   },
    //   actions: {
    //     async getUser({commit}) {
    //       let user;
    //       const uid = await getUid();
    //       await firebase
    //         .database()
    //         .ref(`/users/${uid}/info`)
    //         .once("value")
    //         .then((snapShot) => {
    //           user = snapShot.toJSON();
    //         });
    //       commit("setUser", user);
    //     },
    //     async setUserData({commit}, userData) {
    //       const uid = await getUid();
    //       await firebase
    //         .database()
    //         .ref(`/users/${uid}/info`)
    //         .set({...userData});
    //       commit("setUser", userData);
    //     },
    //   },
    // },
  },
})