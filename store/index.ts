import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  currentCategory: '',
  posts: [],
  techPosts: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  posts: state => state.posts,
  techPosts: state => state.techPosts,
  currentCategory: state => state.currentCategory
}

export const mutations: MutationTree<RootState> = {
  posts: (state, posts) => (state.posts = posts),
  techPosts: (state, posts) => (state.techPosts = posts.articles),
  updateCategory: (state, category: string) => (state.currentCategory = category)
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPosts({ commit }, id: string) {
    const posts = await this.$axios.$get(`${process.env.baseURL}/categories/${id}`)
    console.log(posts)
    commit(`${id}Posts`, posts)
  },
}