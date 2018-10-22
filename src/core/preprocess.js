module.exports = function (markdownIt, source) {
  // safe mode
  // prevent extract script, style, template tag
  source = source.replace(/<script.*?>(.*?\s*?)*?<\/script>/ig, '')
  source = source.replace(/<style.*?>(.*?\s*?)*?<\/style>/ig, '')
  // add script of component
  source = `${source}
  <script>
  import { refactorHn, goHash } from '@/core/utils'
  export default {
    mounted () {
      this.$emit('markdown', refactorHn(this.$root.$el))
      goHash()
    }
  }
  </script>`
  return source
}
