import { createStore } from "vuex";

interface RootState {
  count: number;
}

export const store = createStore<RootState>({
  state: () => ({
    count: 0,
  }),

  mutations: {
    increment(state: RootState) {
      state.count += 1;
    },
  },
});