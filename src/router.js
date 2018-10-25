import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import routerView from './views/routerView'

Vue.use(Router)

const isComponentLike = path => /([^/]+)\.md$/i.exec(path)

const index = []

const routesBuilder = function (routes, root = true) {
  const result = []
  Object.keys(routes).forEach(route => {
    const is = isComponentLike(route)
    if (is) {
      // route or children route
      const name = is[1]
      if (routes[route].default) {
        // default page
        index.unshift({
          path: '/',
          redirect: {
            name: name
          }
        })
      }
      result.push({
        path: root ? `/${name}` : name,
        name: name,
        meta: {
          title: routes[route].title
        },
        component: () => import(/* webpackChunkName: "md" */ `./components/${route}`)
      })
    } else {
      // parent route
      result.push({
        path: `/${route}`,
        meta: {
          name: route
        },
        component: routerView,
        children: routesBuilder(routes[route], false)
      })
    }
  })
  return result
}

const initRoutes = function (routes) {
  const $routes = routesBuilder(routes)
  if (index[0]) $routes.unshift(index[0])
  return $routes
}

const router = new Router({
  // base: '/vue-markdown-docs/', // for github/docs
  mode: 'history', // important
  routes: initRoutes(routes),
  scrollBehavior (to, from) {
    if (to.name !== from.name) {
      return { x: 0, y: 0 }
    }
  }
})

const title = document.title // default title

router.beforeEach(function (to, from, next) {
  next()
})

router.afterEach(function (to, from) {
  // reset title
  document.title = (to.meta.title ? `${to.meta.title}${title ? ` — ${title}` : ''}` : null) || title
})

export default router
