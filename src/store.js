import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      api_url: "http://127.0.0.1:3000",
      lastError: null
    }
  },
  mutations: {
    clearStorage() {
      localStorage.clear();
    },
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    changeError(state, value) {
     state.lastError = value;
    }
  },
  actions: {
    // makeRequest({ commit, state, dispatch }, args) {
    //   axios['post'](`${state.api_url}${args.url}`, args.data)
    //     .then((res) => {
    //       args.callback(res.data || null);
    //     }).catch((err) => {
    //       console.error(err);
    //       commit('changeError', err);
    //       if (err.code == 'ERR_NETWORK') console.error(err);
    //       args.callback(false);
    //     });
    // }
  }
})

export default store;