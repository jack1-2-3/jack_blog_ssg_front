import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  currentCategory: '',
  posts: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getPosts: state => state.posts,
  currentCategory: state => state.currentCategory
}

export const mutations: MutationTree<RootState> = {
  setPosts: (state, posts) => (state.posts = posts.articles),
  updateCategory: (state, category: string) => (state.currentCategory = category)
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPosts({ commit, state }) {
    if(!state.currentCategory) {
      return
    }
    const posts = await this.$axios.$get(`${process.env.baseURL}/categories/${state.currentCategory}`)
    commit('setPosts', posts)
  },
}