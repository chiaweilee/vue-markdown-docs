// prepend pollyfill
(function (arr) {
  arr.forEach(function (item) {
    item.prepend = item.prepend || function () {
      const argArr = Array.prototype.slice.call(arguments)
      const docFrag = document.createDocumentFragment()

      argArr.forEach(function (argItem) {
        const isNode = argItem instanceof Node
        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
      })

      this.insertBefore(docFrag, this.firstChild)
    }
  })
})([Element.prototype, Document.prototype, DocumentFragment.prototype])

// refactor <h1> <h2> <h3> to hash-link
const refactorHn = $el => {
  const result = []
  ;['h1', 'h2', 'h3'].map(tagName => {
    $el.querySelectorAll(tagName).forEach(child => {
      const href = `#${child.innerText}`
      result.push({
        tag: tagName,
        text: child.innerText,
        href: href
      })
      const a = document.createElement('a')
      a.innerText = '#'
      a.className = 'header-anchor'
      a.href = href
      child.prepend(a)
    })
  })
  return result
}

// listen hash-link click and go
window.addEventListener('click', function ({ target }) {
  if (target.tagName === 'A' && !!target.hash) {
    goHash(target.hash)
  }
})

// check and go hash-link if hash exist
const goHash = (hash) => {
  const target = document.querySelector('.content').querySelector('a[href="' + decodeURI(hash || location.hash) + '"]')
  if (target) {
    window.scrollTo({
      top: target.parentNode.offsetTop - parseInt(target.parentNode.clientHeight) / 2 - document.querySelector('header').clientHeight,
      behavior: 'smooth'
    })
  }
}

export {
  refactorHn,
  goHash
}
