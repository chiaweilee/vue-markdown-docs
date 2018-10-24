<template>
  <ul class="sidebar-links">
    <li>
      <div class="sidebar-group first">
        <p class="sidebar-heading open">
          <span v-text="title"/>
        </p>
        <ul
          class="sidebar-group-items"
        >
          <li
            :class="'sidebar-group-' + t.tag"
            v-for="t in markdown"
            :key="t.href"
          >
            <router-link
              class="sidebar-link"
              :to="t.href"
            >{{ t.text }}</router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Links',
  props: {
    markdown: {
      type: Array,
      required: true
    }
  },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>
