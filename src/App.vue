<template>
  <div id="app">
    <navbar/>
    <sidebar :markdown="markdown"/>
    <page @markdown="getMarkdown"/>
  </div>
</template>

<script>
import navbar from './views/navbar.vue'
import sidebar from './views/sidebar.vue'
import page from './views/page.vue'

export default {
  name: 'App',
  data () {
    return {
      markdown: []
    }
  },
  methods: {
    getMarkdown (to) {
      this.markdown = to
    }
  },
  components: {
    navbar,
    sidebar,
    page
  }
}
</script>
