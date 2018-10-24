<template>
  <nav class="nav-links">
    <template v-for="route in routes">
      <dd
        class="nav-item"
        :key="route.path"
        v-if="route.hasOwnProperty('children')"
      >
        <div class="dropdown-title">{{ route.meta.name }}</div>
        <routes-map :routes="route.children"/>
      </dd>
      <dd
        class="nav-item"
        :key="route.path"
        v-else
      >
        <router-link
          class="nav-link"
          :to="{ name: route.name }"
        >
          {{ route.meta.title || route.name }}
        </router-link>
      </dd>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'RoutesMap',
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>
