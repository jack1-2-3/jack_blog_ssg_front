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
  initCurrentCategory: (state, category) => (state.currentCategory = category),
  setPosts: (state, posts) => (state.posts = posts),
  updateCategory: (state, category: string) => (state.currentCategory = category)
}
