import firebase from 'firebase/app';
export default {
  action: {
    async login({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async register({dispatch}, {commit}, {email, password}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name: 'User',
        });
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({commit}) {
      await firebase.auth().signOut();
      commit('clearInfo');
    },
    async autoLogin({dispatch, commit}) {
      const user = firebase.auth().currentUser;
      if (user) {
        commit('setUser', user);
      }
    },
  },
};