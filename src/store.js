import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      api_url: import.meta.env.VITE_API_URL,
      title: import.meta.env.VITE_TITLE,
    }
  },
  mutations: {
    updateData(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    makeRequest({ commit, state, dispatch }, args) {
      axios['post'](`${state.api_url}${args.url}`, args.data)
        .then((res) => {
          args.callback(res.data || null);
        }).catch((err) => {
          console.error(err);
          commit('changeError', err);
          if (err.code == 'ERR_NETWORK') console.error(err);
          args.callback(false);
        });
    }
  }
})

export default store;