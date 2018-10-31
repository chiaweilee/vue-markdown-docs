<template>
  <header class="navbar">
    <div class="sidebar-button" @touchend="showSidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="icon">
        <path
          fill="currentColor"
          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/>
      </svg>
    </div>
    <a
      href="/"
      class="home-link router-link-active"
    >
      <span
        class="site-name">{{ name }} {{ version }}
      </span>
    </a>
    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <a
            href="https://github.com/chiaweilee/vue-markdown-docs"
            target="_blank"
            class="nav-link external">Github</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { name, version } from '../../package'
export default {
  name: 'NavBar',
  data () {
    return {
      name: name,
      version: version
    }
  },
  methods: {
    showSidebar () {
      const el = document.getElementsByClassName('sidebar')[0]
      const cls = el.className.split(' ')
      const has = cls.indexOf('active')
      if (has > -1) {
        delete cls[has]
      } else {
        cls.push('active')
      }
      el.className = cls.join(' ').trim()
    }
  }
}
</script>
