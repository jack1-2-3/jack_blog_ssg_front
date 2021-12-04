<template>
  <div>
    <Post :posts="motivatorPosts" />
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
      'motivatorPosts'
    ])
  },
  created() {
    (this as any).fetchPosts('motivator')
  },
  methods: {
    ...mapActions([
      'fetchPosts'
    ])
  },
})
</script>
