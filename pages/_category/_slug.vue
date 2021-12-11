<template>
  <Post :posts="posts" />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Post from '@/components/presentationals/shared/Post.vue'

export default Vue.extend({
  components: {
    Post
  },
  async asyncData({$axios, route}) {
    const posts = await $axios.$get(`http://localhost:1337/categories/${route.params.category}`)
      .then(res => res.articles)
    return {posts}
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    ;(this as any).setPosts((this as any).posts)
    ;(this as any).updateCategory((this as any).$route.params.category)
  },
  methods: {
    ...mapMutations([
      'setPosts',
      'updateCategory'
    ])
  }
})
</script>
