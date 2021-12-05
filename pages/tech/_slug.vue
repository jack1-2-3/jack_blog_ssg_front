<template>
  <div>
    <Post />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Post from '@/components/containers/shared/Post.vue'

export default Vue.extend({
  components: {
    Post
  }
})
</script>