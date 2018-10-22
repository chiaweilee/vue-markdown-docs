<template>
  <router-view @markdown="emit"/>
</template>

<script>
export default {
  methods: {
    emit (to) {
      this.$emit('markdown', to)
    }
  }
}
</script>
