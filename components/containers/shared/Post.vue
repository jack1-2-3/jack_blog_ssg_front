<template>
  <div>
    <Post :posts="getPosts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Post from '@/components/presentationals/shared/Post.vue'

export default Vue.extend({
  components: {
    Post
  },
  computed: {
    ...mapGetters([
      'getPosts'
    ])
  },
  created() {
    (this as any).fetchPosts()
  },
  methods: {
    ...mapActions([
      'fetchPosts'
    ])
  },
})
</script>
