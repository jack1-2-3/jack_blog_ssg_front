<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          <p>{{ post.title }}</p>
        </v-card-title>
        <v-card-text>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="content"></div>
          <div class="text-xs-right">
            <em
              ><small>&mdash; {{ post.author }}</small></em
            >
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      postId: (this as any).$route.params.id,
    }
  },
  computed: {
    post() {
      if(!(this as any).postId) {
        return (this as any).posts[0]
      }
      return (this as any).posts[(this as any).postId]
    },
    content() {
      return (this as any).$md.render((this as any).post.content)
    },
  },
})
</script>
