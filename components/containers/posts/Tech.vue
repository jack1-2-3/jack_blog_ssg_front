<template>
  <div>
    <Post :posts="techPosts" />
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
      'techPosts'
    ])
  },
  created() {
    (this as any).fetchPosts('tech')
  },
  methods: {
    ...mapActions([
      'fetchPosts'
    ])
  },
})
</script>