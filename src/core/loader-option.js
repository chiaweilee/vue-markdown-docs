module.exports = {
  scriptMixin: `
  import { refactorHn, goHash } from '@/core/utils'
  export default {
    mounted () {
      this.$emit('markdown', refactorHn(this.$root.$el))
      goHash()
    }
  }
  `
}
