<template>
  <div class="page">
    <div class="content">
      <router-view @markdown="emit"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  methods: {
    emit (to) {
      this.$emit('markdown', to)
    }
  }
}
</script>
