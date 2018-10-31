<template>
  <div class="sidebar" ref="sidebar" @click="onClick">
    <route-map :routes="routes"/>
    <links :markdown="markdown"/>
  </div>
</template>

<script>
import routeMap from './routesMap'
import links from './links'
export default {
  name: 'SideBar',
  components: {
    routeMap,
    links
  },
  props: {
    markdown: {
      type: Array,
      required: true
    }
  },
  computed: {
    routes: function () {
      const routes = []
      this.$router.options.routes.forEach(r => {
        if (r.hasOwnProperty('name') || r.hasOwnProperty('children')) {
          routes.push(r)
        }
      })
      return routes
    }
  },
  methods: {
    onClick ({ target }) {
      if (target.tagName === 'A') {
        const cls = this.$refs.sidebar.className.split(' ')
        const has = cls.indexOf('active')
        if (has > -1) {
          delete cls[has]
          this.$refs.sidebar.className = cls.join(' ').trim()
        }
      }
    }
  }
}
</script>
