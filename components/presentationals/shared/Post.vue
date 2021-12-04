<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <p v-if="!postSlug" class="latestPost">最近の記事</p>
        <v-card-title class="headline">
          <h1 class="title">{{ post.title }}</h1>
        </v-card-title>
        <v-card-text>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="content" v-html="content"></div>
          <div class="text-xs-right">
            <em
              ><small>&mdash; ジャック(鶴田翔大)</small></em
            >
          </div>
          <hr class="my-3" />
          <h3 class="writerTitle">この記事を書いた人</h3>
          <p>ジャック(鶴田翔大) &mdash; エンジニア</p>
          <p>元ニート。暇だったからプログラミング始めたら、面白すぎて仕事にしちゃいました。</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn class="white--text" color="blue" href="https://twitter.com/jack_ASDprogram" target="_blank"> Twitter </v-btn>
          <v-btn class="white--text" color="green" href="https://qiita.com/jack1-2-3" target="_blank"> Qiita </v-btn>
          <v-btn class="white--text" color="black" href="https://github.com/jack1-2-3" target="_blank"> Github </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

type post = {
  slug: string
}

export default Vue.extend({
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      postSlug: (this as any).$route.params.slug,
    }
  },
  computed: {
    post() {
      if(!(this as any).postSlug) {
        return (this as any).posts[0]
      }
      return (this as any).posts.find((post: post) => post.slug === (this as any).postSlug)
    },
    content() {
      let content = (this as any).$md.render((this as any).post.content)
      content = content.replaceAll(/<img src="/gi, '<img src="http://localhost:1337')
      return content
    },
  },
})
</script>

<style scoped>
.latestPost {
  font-size: 2rem;
  text-align: center;
  padding-top: 10px;
}
.title {
  text-decoration: underline greenyellow 5px;
}
.content >>> img {
  width: 80%;
  display: block;
  margin: auto;
}
.content >>> h1 {
  margin-bottom: 5px;
  padding-left: 10px;
  border-left: grey 5px solid;
}
.content >>> h2 {
  margin-bottom: 5px;
  padding-left: 10px;
  border-left: grey 5px solid;
}
.content >>> h3 {
  margin-bottom: 5px;
  padding-left: 10px;
  border-left: grey 5px solid;
}
.content >>> h4 {
  margin-bottom: 5px;
  padding-left: 10px;
  border-left: grey 5px solid;
}
.content >>> h5 {
  margin-bottom: 5px;
  padding-left: 10px;
  border-left: grey 5px solid;
}
.writerTitle {
  margin-bottom: 3px;
  text-decoration: underline yellowgreen 3px;
}
</style>
