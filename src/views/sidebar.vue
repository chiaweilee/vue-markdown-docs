<template>
  <div class="sidebar">
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
  }
}
</script>
